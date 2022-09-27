export type PickerProps = {
  /**
   * @description опорная дата, относительно которой потребуется построить календарь
   */
  date: Date;
  /**
   * @description выбранная дата, будет подсвечена в календаре
   */
  selectedDate?: Date;
  onChange?: (date: Date) => void;
};
