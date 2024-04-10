const formatTitle = (title) => {
  if (!title) {
    return undefined;
  }

  // Удаляем все содержимое и скобки (...)
  return title.replace(/\([^)]*\)/g, '').trim();
};

const parseVersion = (tag) => {
  const versionMatch = tag.match(/tag: (v[\d.]+)/);

  return versionMatch ? versionMatch[1] : '';
};

const parseMeta = (meta) => {
  const [, type, info] = meta.match(/([^(\s]+)\(([^)]+)\)/);

  const [us, pack, component] = info.split(',');

  return {
    type,
    us,
    component: component || pack,
  };
};

const parseCommit = ({ tag, subject }) => {
  const [meta, description] = subject.split(':');

  if (!meta || !description) {
    return undefined;
  }

  const version = parseVersion(tag);

  const { type, us, component } = parseMeta(meta);

  const title = formatTitle(description);

  return {
    version,
    type,
    us,
    component,
    title,
  };
};

module.exports = { parseCommit };
