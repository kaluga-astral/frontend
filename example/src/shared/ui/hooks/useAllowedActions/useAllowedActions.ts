type Params<T> = {
  allowedActions: Array<keyof T>;
  possibleActions: T;
};

export const useAllowedActions = <T extends Record<keyof T, T[keyof T]>>({
  allowedActions,
  possibleActions,
}: Params<T>) => {
  const actions = allowedActions
    // костыль для модифицирования типизации, на выходе хука onClick required
    .map(
      (el) =>
        possibleActions[el] as T[keyof T] & {
          onClick: () => void;
          href: string;
        },
    )
    // добавляем действие только если оно есть в possibleActions и был передан onClick callback
    .filter((el) => Boolean(el?.onClick || el?.href));

  return actions;
};
