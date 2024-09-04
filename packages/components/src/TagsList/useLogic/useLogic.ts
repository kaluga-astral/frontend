import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { getElementByText } from '../utils';
import { type TagsListProps } from '../TagsList';
import type { TagValue } from '../types';

type UseLogicParams<TData extends TagValue> = TagsListProps<TData>;

export const useLogic = <TData extends TagValue>({
  data = [],
  keyId,
  getOptionLabel,
  onChange,
}: UseLogicParams<TData>) => {
  // Сколько тегов можно отобразить в инпуте
  const [maxItems, setMaxItems] = useState(1);

  const ignoreResizeRef = useRef(false);
  const tagsContainerRef = useRef<HTMLDivElement>(null);

  /**
   * Рассчитывает сколько тегов можно добавить в контейнер
   */
  const getTagsCountToAdd = (
    containerClone: HTMLDivElement,
    availableWidth: number,
    gap: number,
  ): number => {
    // Получаем текст первого тега, чтобы по нему найти текстовый узел
    const firstTagText = getOptionLabel(data[0]) as string;

    // Маунтим клон в body, чтобы узнать ширину дочерних элементов
    document.body.appendChild(containerClone);

    // Пытаемся показать больше тегов
    let addedWidth = 0;
    let addedItems = 0;

    // Добавляем теги, пока не закончится место
    // Начинаем со второго элемента, так как первый уже есть
    for (let i = 1; i < data.length; i += 1) {
      // Клонируем последний тег
      const childClone = containerClone.firstChild!.cloneNode(
        true,
      ) as HTMLSpanElement;

      // Получаем текст следующего тега
      const newTagText = getOptionLabel(data[i]) as string;

      // Ищем текстовый узел внутри тега
      const textNode = getElementByText(childClone, firstTagText);

      if (!textNode) {
        throw new Error('Could not find text node');
      }

      // Заменяем текст в теге
      textNode.textContent = newTagText;
      // Считаем ширину с учетом добавленного тега
      containerClone.appendChild(childClone);

      const newTagWidth = childClone.getBoundingClientRect().width;

      const deltaWidth = newTagWidth + gap;
      const newAddedWidth = addedWidth + deltaWidth;

      // Переполнение, стопаемся
      if (newAddedWidth > availableWidth) {
        break;
      }

      // Место есть, добавляем еще один тег
      addedItems += 1;
      addedWidth += deltaWidth;
    }

    // Удаляем клон из body
    document.body.removeChild(containerClone);

    return addedItems;
  };

  const recomputeMaxItems = () => {
    const containerEl = tagsContainerRef.current;

    if (!containerEl) {
      throw new Error('Tags container ref is not set');
    }

    // Вычисляем отступы между тегами
    const containerStyles = window.getComputedStyle(containerEl);
    const gap = parseInt(containerStyles.columnGap);

    // Вычисляем ширину первого тега
    const firstChildWidth =
      containerEl.firstElementChild!.getBoundingClientRect().width;

    // Вычисляем доступную ширину для новых тегов
    const availableWidth =
      containerEl.getBoundingClientRect().width - firstChildWidth;

    // Клонируем контейнер для тегов
    const clone = containerEl.cloneNode(true) as HTMLDivElement;

    // Убираем все элементы кроме первого
    while (clone.children.length > 1) {
      clone.removeChild(clone.lastElementChild!);
    }

    // Маунтим невидимый клон в body, чтобы узнать ширину дочерних элементов
    clone.style.visibility = 'hidden';

    const addedItems = getTagsCountToAdd(clone, availableWidth, gap);

    setMaxItems(1 + addedItems);
  };

  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    recomputeMaxItems();
    // Не пересчитываем ширину контейнера, так как сами ее модифицировали
    ignoreResizeRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (typeof window === 'undefined' || !data || !data.length) {
      return;
    }

    if (!tagsContainerRef.current) {
      throw new Error('Tags container ref is not set');
    }

    // Пересчитываем maxItems при ресайзе контейнера
    const observer = new ResizeObserver(() => {
      if (ignoreResizeRef.current) {
        ignoreResizeRef.current = false;

        return;
      }

      recomputeMaxItems();
    });

    observer.observe(tagsContainerRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const getTagProps = (option: TData, index: number) => {
    const label = getOptionLabel(option);

    const shrinks =
      index == maxItems - 1 && maxItems <= (data as TData[]).length;

    const onDelete = () => {
      const newValue = data?.filter((value) => {
        if (typeof value === 'string') {
          return value !== option;
        }

        return value[keyId] !== option[keyId];
      });

      onChange(newValue?.length ? newValue : undefined);
    };

    return { label, shrinks, onDelete };
  };

  const visibleOptions = data?.slice(0, maxItems);

  return {
    maxItems,
    visibleOptions,
    tagsContainerRef,
    getTagProps,
  };
};
