import { useLayoutEffect, useRef, useState } from 'react';

import { type SelectArrayValueProps } from '../Select';

export function useLogic({
  selectedOptions,
  getOptionLabel,
}: SelectArrayValueProps) {
  // Сколько тегов можно отобразить в инпуте
  const [maxItems, setMaxItems] = useState(50);

  const tagsContainerRef = useRef<HTMLDivElement>(null);

  const recomputeMaxItems = () => {
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
    const gapWidth = parseInt(window.getComputedStyle(containerEl).gap);

    // Слишком много тегов, скрываем лишние,
    // убирая по одному с конца, пока не уместятся
    if (overflow > 0) {
      let reducedWidth = 0;
      let removedItems = 0;
      const children = containerEl.children;

      while (reducedWidth < overflow && removedItems < children.length) {
        const child = children[children.length - 1 - removedItems];

        reducedWidth += child.getBoundingClientRect().width;
        reducedWidth += gapWidth;
        removedItems += 1;
      }

      setMaxItems(children.length - removedItems);
    }

    // Пытаемся показать больше тегов
    if (maxItems < selectedOptions.length) {
      // Вычисляем ширину всех дочерних элементов
      const children = Array.from(containerEl.children);
      const curChildrenWidth = children
        .map((c) => c.getBoundingClientRect().width)
        .reduce((a, b) => a + b, 0);

      // Вычисляем доступную ширину для новых тегов
      const availableWidth =
        containerEl.getBoundingClientRect().width - curChildrenWidth;

      let addedWidth = 0;
      let addedItems = 0;

      // Клонируем контейнер для тегов
      const clone = containerEl.cloneNode(true) as HTMLDivElement;

      // Маунтим невидимый клон в body, чтобы узнать ширину дочерних элементов
      clone.style.visibility = 'hidden';
      document.body.appendChild(clone);

      while (
        addedWidth < availableWidth &&
        addedItems < selectedOptions.length - maxItems
      ) {
        const childClone = clone.lastChild!.cloneNode(true) as HTMLSpanElement;

        // Добавляем еще один тег и записываем его ширину
        const newTagValue = getOptionLabel(selectedOptions[maxItems]);

        childClone.textContent = newTagValue as string;
        clone.appendChild(childClone);

        const newTagWidth = childClone.getBoundingClientRect().width;

        addedItems += 1;
        addedWidth += newTagWidth;
        addedWidth += gapWidth;
      }

      if (addedWidth < availableWidth) {
        setMaxItems(maxItems + addedItems);
      }

      // Удаляем клон из body
      document.body.removeChild(clone);
    }
  };

  useLayoutEffect(() => {
    recomputeMaxItems();
  });

  return {
    maxItems,
    tagsContainerRef,
    handleResize: recomputeMaxItems,
  };
}
