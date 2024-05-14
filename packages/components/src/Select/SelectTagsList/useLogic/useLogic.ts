import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { type SelectChangeEvent } from '@mui/material';

import { type SelectTagsListProps } from '../SelectTagsList';
import { getElementByText } from '../utils';

export function useLogic({
  resetButtonRef,
  selectedOptions,
  getOptionLabel,
  onChange,
  openMenu,
}: SelectTagsListProps) {
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
    const firstTagText = getOptionLabel(selectedOptions[0]) as string;

    // Маунтим клон в body, чтобы узнать ширину дочерних элементов
    document.body.appendChild(containerClone);

    // Пытаемся показать больше тегов
    let addedWidth = 0;
    let addedItems = 0;

    // Добавляем теги, пока не закончится место
    // Начинаем со второго элемента, так как первый уже есть
    for (let i = 1; i < selectedOptions.length; i += 1) {
      // Клонируем последний тег
      const childClone = containerClone.firstChild!.cloneNode(
        true,
      ) as HTMLSpanElement;

      // Получаем текст следующего тега
      const newTagText = getOptionLabel(selectedOptions[i]) as string;

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

    // Получаем ширину кнопки сброса, по дефолту 32px
    const resetButtonWidth =
      resetButtonRef?.current?.getBoundingClientRect().width || 32;

    // Вычисляем доступную ширину для новых тегов
    const availableWidth =
      containerEl.getBoundingClientRect().width -
      firstChildWidth -
      resetButtonWidth;

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
  }, [selectedOptions]);

  useEffect(() => {
    if (typeof window === 'undefined') {
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
  }, [selectedOptions]);

  const getTagProps = (option: string | number, index: number) => {
    const label = getOptionLabel(option as string);
    const shrinks = index == maxItems - 1 && maxItems <= selectedOptions.length;

    const onClick = () => {
      openMenu();
    };

    const onDelete = () => {
      const changeEvent = {
        target: {
          value: selectedOptions.filter((opt) => opt !== option),
        },
      } as SelectChangeEvent<string[]>;

      onChange(changeEvent, undefined);
    };

    return { label, shrinks, onClick, onDelete };
  };

  const visibleOptions = selectedOptions.slice(0, maxItems);

  return {
    maxItems,
    visibleOptions,
    tagsContainerRef,
    getTagProps,
  };
}
