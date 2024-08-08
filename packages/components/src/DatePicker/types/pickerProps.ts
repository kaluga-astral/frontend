export type PickerProps = {
  /**
   * @description опорная дата, относительно которой потребуется построить календарь
   */
  date: Date;
  /**
   * @description выбранная дата, будет подсвечена в календаре
   */
  selectedDate?: Date | null;
  /**
   * @description дата, относительно которой будет происходить сравнение на попадание в выбранный интервал
   */
  rangeDate?: Date | null;
  onChange?: (date: Date) => void;

  /**
   * @description Флаг для использования пикера в range состоянии
   */
  isRange?: boolean;

  /**
   * @description Колбек, вызываемый при событии hover на день календаря
   */
  onDayHover?: (date?: Date) => void;

  /**
   * @description День, который находится в состоянии hover
   */
  hoveredDayDate?: Date;
};
