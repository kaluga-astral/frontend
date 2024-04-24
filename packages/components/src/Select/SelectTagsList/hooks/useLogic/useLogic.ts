import {
  type MouseEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { type SelectChangeEvent } from '@mui/material';

import { type SelectTagsListProps } from '../../SelectTagsList';

export function useLogic({
  selectedOptions,
  getOptionLabel,
  onChange,
}: SelectTagsListProps) {
  // Сколько тегов можно отобразить в инпуте
  const [maxItems, setMaxItems] = useState(50);

  const tagsContainerRef = useRef<HTMLDivElement>(null);

  const recomputeMaxItems = useCallback(() => {
    const containerEl = tagsContainerRef.current;

    if (!containerEl) {
      return;
    }

    const computeOverflow = (el: HTMLDivElement) => {
      const rawContainerWidth = el.scrollWidth;
      const clampedContainerWidth = el.getBoundingClientRect().width;

      return rawContainerWidth - clampedContainerWidth;
    };

    const overflow = computeOverflow(containerEl);
    const containerStyles = window.getComputedStyle(containerEl);
    const gapWidth = parseInt(containerStyles.columnGap);

    // Слишком много тегов, скрываем лишние,
    // убирая по одному с конца, пока не уместятся
    if (overflow > 0) {
      let reducedWidth = 0;
      let removedItems = 0;
      const children = containerEl.children;

      while (reducedWidth < overflow && removedItems < children.length) {
        const child = children[children.length - 1 - removedItems];

        reducedWidth += child.getBoundingClientRect().width + gapWidth;
        removedItems += 1;
      }

      // Сохраняем как минимум один тег
      const newMaxItems = Math.max(children.length - removedItems, 1);

      setMaxItems(newMaxItems);
    }

    // Вычисляем ширину всех дочерних элементов
    const children = Array.from(containerEl.children);
    const curChildrenWidth = children
      .map((c) => c.getBoundingClientRect().width)
      .reduce((a, b) => a + b + gapWidth, 0);

    // Вычисляем доступную ширину для новых тегов
    const availableWidth =
      containerEl.getBoundingClientRect().width - curChildrenWidth;

    // Пытаемся показать больше тегов
    if (availableWidth > 0 && maxItems < selectedOptions.length) {
      let addedWidth = 0;
      let addedItems = 0;

      // Клонируем контейнер для тегов
      const clone = containerEl.cloneNode(true) as HTMLDivElement;

      // Маунтим невидимый клон в body, чтобы узнать ширину дочерних элементов
      clone.style.visibility = 'hidden';
      document.body.appendChild(clone);

      while (addedItems < selectedOptions.length - maxItems) {
        const childClone = clone.lastChild!.cloneNode(true) as HTMLSpanElement;

        // Добавляем еще один тег и записываем его ширину
        const newTagValue = getOptionLabel(selectedOptions[maxItems]);

        childClone.textContent = newTagValue as string;
        clone.appendChild(childClone);

        const newTagWidth = childClone.getBoundingClientRect().width;

        const deltaWidth = newTagWidth + gapWidth;
        const newAddedWidth = addedWidth + deltaWidth;

        if (newAddedWidth > availableWidth) {
          break;
        }

        addedItems += 1;
        addedWidth += deltaWidth;
      }

      // Удаляем клон из body
      document.body.removeChild(clone);
      setMaxItems(maxItems + addedItems);
    }
  }, [getOptionLabel, maxItems, selectedOptions]);

  useLayoutEffect(() => {
    recomputeMaxItems();
  }, [recomputeMaxItems]);

  useEffect(() => {
    if (!tagsContainerRef.current) {
      return;
    }

    const observer = new ResizeObserver(() => recomputeMaxItems());

    observer.observe(tagsContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [recomputeMaxItems]);

  const handleTagMouseDown = (
    e: MouseEvent<HTMLDivElement>,
    tagValue: string | number,
  ) => {
    const isSvg = e.target instanceof SVGElement;

    // Кликнули по телу тега
    if (!isSvg) {
      return;
    }

    // Кликнули по кнопке удаления
    e.preventDefault();
    e.stopPropagation();

    const changeEvent = {
      target: {
        ...e.target,
        value: selectedOptions.filter((opt) => opt !== tagValue),
      },
    } as SelectChangeEvent<string[]>;

    onChange(changeEvent, undefined);
  };

  const getTagProps = (option: string | number, index: number) => {
    const label = getOptionLabel(option as string);
    const shrinks = index == maxItems - 1 && maxItems < selectedOptions.length;

    const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
      handleTagMouseDown(e, option);
    };

    return { label, shrinks, onMouseDown };
  };

  return {
    maxItems,
    tagsContainerRef,
    getTagProps,
  };
}
