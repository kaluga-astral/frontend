import { useEffect, useState } from 'react';

import { Button } from '../Button';

/**
 * Кастомная ошибка подгрузки чанков при релизах
 */
class OutdatedReleaseError extends Error {
  constructor(message: string = '', ...args: ErrorOptions[]) {
    super(message, ...args);
    this.name = 'ChunkLoadError';
  }
}

/**
 * Кнопка для вызова ошибки type = Default
 */
export const BuggyButton = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 2) {
      throw new Error('Кнопка сломалась на 2 клике');
    }
  });

  return <Button onClick={onClick}>Сломаюсь на 2 клике</Button>;
};

/**
 * Кнопка для вызова ошибки чанков ErrorChunkError c type = OutdatedRelease
 */
export const ChunkLoadErrorButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      throw new OutdatedReleaseError('Ошибка загрузки приложения');
    }
  });

  return <Button onClick={onClick}>Вызову ошибку релиза</Button>;
};

/**
 * Кнопка для вызова ошибки чанков Failed to fetch dynamically imported module c type = OutdatedRelease
 */
export const FailedFetchModuleButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      throw new Error('Failed to fetch dynamically imported module');
    }
  });

  return <Button onClick={onClick}>Вызову ошибку релиза</Button>;
};
