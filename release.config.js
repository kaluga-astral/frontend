// eslint-disable-next-line
module.exports = {
  branches: ['main', { name: 'dev', prerelease: 'dev' }],
  repositoryUrl: 'https://github.com/kaluga-astral/frontend',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { type: 'bug', release: 'patch' },
          { type: 'build', release: 'patch' },
          { type: 'feat', release: 'minor' },
          { refactor: 'patch', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        linkReferences: true,
        presetConfig: {
          types: [
            {
              type: 'bug',
              section: '🐞 Bugs',
              hidden: false,
            },
            {
              type: 'feat',
              section: '✨ Features',
              hidden: false,
            },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    ['@semantic-release/github'],
    [
      '@semantic-release/exec',
      {
        // добавляем в outputs gh actions следущую версию пакетов
        prepareCmd:
          'echo "::set-output name=NEXT_VERSION::${nextRelease.version}"',
      },
    ],
  ],
};
