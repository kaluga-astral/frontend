export type PickerProps = {
  /**
   * @description опорная дата, относительно которой потребуется построить календарь
   */
  date: Date;
  /**
   * @description выбранная дата, будет подсвечена в календаре
   */
  selectedDate?: Date;
  /**
   * @description дата, относительно которой будет происходить сравнение на попадание в выбранный интервал
   */
  rangeDate?: Date;
  onChange?: (date: Date) => void;
};
