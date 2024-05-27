/**
 * Ищет элемент по тексту внутри него
 */
export function getElementByText(
  parent: Element,
  text: string,
): Element | null {
  if (parent.innerHTML.trim() === text) {
    return parent;
  }

  for (let i = 0; i < parent.children.length; i += 1) {
    const found = getElementByText(parent.children[i], text);

    if (found) {
      return found;
    }
  }

  return null;
}
