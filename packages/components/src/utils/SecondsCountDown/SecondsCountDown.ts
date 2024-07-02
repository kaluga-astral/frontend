import { formatDate } from '../date';

const MSECONDS_PER_SECOND = 1000;

export type SecondsCountDownParams = {
  /**
   * метод для синхронизации устанавливаемого значения таймера с внутренним
   */
  onUpdateText?: (text: string) => void;
  /**
   * метод для синхронизации устанавливаемого значения флага активности с внутренним
   */
  onUpdateActivity?: (isActive: boolean) => void;
  /**
   * флаг изначальной активности таймера
   * @default true
   */
  isInitialTimerActive?: boolean;
  /**
   * количество секунд на которые должен запуститься таймер
   * игнорируется, если передан targetDate
   */
  seconds?: number;
  /**
   * целевая дата, до которой будет идти отсчет времени от текущего времени.
   * targetDate в приоритете при одновременном использовании с seconds
   */
  targetDate?: Date;
};

/**
 * вспомогательный класс, предоставляющий функционал с текстом убывающего времени
 */
export class SecondsCountDown {
  private timer = 0 as unknown as ReturnType<typeof setTimeout>;

  private targetDate: Date;

  /**
   * флаг активности таймера
   */
  public isTimerActive: boolean;

  /**
   * текстовое представление таймера в формате mm:ss
   */
  public textTime: string;

  constructor(private readonly params: SecondsCountDownParams) {
    this.isTimerActive = params.isInitialTimerActive ?? true;

    this.targetDate = this.params.targetDate
      ? this.params.targetDate
      : this.createTargetDateBySecond(params.seconds);

    this.textTime = this.textDifference;

    if (!this.isTimerActive) {
      return;
    }

    this.run();
  }

  private createTargetDateBySecond = (seconds = 0) =>
    new Date(Date.now() + seconds * MSECONDS_PER_SECOND);

  private setTextTime = (text: string) => {
    this.textTime = text;
    this.params.onUpdateText?.(text);
  };

  private setActivity = (isActive: boolean) => {
    this.isTimerActive = isActive;
    this.params.onUpdateActivity?.(isActive);
  };

  private get difference() {
    return Math.max(+this.targetDate - +new Date(), 0);
  }

  private get textDifference() {
    return formatDate(new Date(this.difference), 'mm:ss', ':');
  }

  private run = () => {
    if (this.difference > 0) {
      this.setTextTime(this.textDifference);

      this.timer = setTimeout(() => {
        this.run();
      }, MSECONDS_PER_SECOND);

      return this.setActivity(true);
    }

    this.setTextTime('00:00');

    return this.setActivity(false);
  };

  /**
   * метод для перезапуска таймера на новую дату
   */
  public reset = (value: Date | number) => {
    this.destroy();

    this.targetDate =
      typeof value === 'number' ? this.createTargetDateBySecond(value) : value;

    this.run();
  };

  public destroy = () => {
    clearTimeout(this.timer);
  };
}
