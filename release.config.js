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
          { type: 'refactor', release: 'patch' },
          { type: 'major', release: 'major' },
          { type: 'doc', release: 'patch' },
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
            {
              type: 'build',
              section: '📦 Build',
              hidden: false,
            },
            {
              type: 'doc',
              section: '📄 Docs',
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
        // добавляем в env gh actions версии пакетов
        prepareCmd:
          // eslint-disable-next-line
          "echo 'NEXT_VERSION=${nextRelease.version}' >> $GITHUB_ENV; echo 'CURRENT_VERSION=${lastRelease.version}' >> $GITHUB_ENV",
      },
    ],
  ],
};
