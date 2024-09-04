export type PickerProps = {
  /**
   * опорная дата, относительно которой потребуется построить календарь
   */
  date: Date;
  /**
   * выбранная дата, будет подсвечена в календаре
   */
  selectedDate?: Date | null;
  /**
   * дата, относительно которой будет происходить сравнение на попадание в выбранный интервал
   */
  rangeDate?: Date | null;
  onChange?: (date: Date) => void;

  /**
   * Колбек, вызываемый при событии hover на день календаря
   */
  onDayHover?: (date?: Date) => void;

  /**
   * День, который находится в состоянии hover
   */
  hoveredDayDate?: Date;
};
