import { formatDate } from '../../utils/date';

const M_SECONDS_PER_SECOND = 1000;

export type SecondsCountdownParams = {
  /**
   * Метод для синхронизации устанавливаемого значения таймера с внутренним
   */
  onUpdateText?: (text: string) => void;
  /**
   * Метод для синхронизации устанавливаемого значения флага активности с внутренним
   */
  onUpdateActivity?: (isActive: boolean) => void;
  /**
   * Флаг изначальной активности счетчика
   * @default true
   */
  isInitialActive?: boolean;
  /**
   * Количество секунд на которые должен запуститься таймер
   * игнорируется, если передан targetDate
   */
  seconds?: number;
  /**
   * Целевая дата, до которой будет идти отсчет времени от текущего времени.
   * targetDate в приоритете при одновременном использовании с seconds
   */
  targetDate?: Date;
};

/**
 * вспомогательный класс, предоставляющий функционал с текстом убывающих секунд
 */
export class SecondsCountdown {
  private timer = 0 as unknown as ReturnType<typeof setTimeout>;

  private targetDate: Date;

  /**
   * Флаг активности счетчика
   */
  public isActive: boolean;

  /**
   * Текстовое представление таймера в формате mm:ss
   */
  public textTime: string;

  constructor(private readonly params: SecondsCountdownParams) {
    this.isActive = params.isInitialActive ?? true;

    this.targetDate = this.params.targetDate
      ? this.params.targetDate
      : this.createTargetDateBySecond(params.seconds);

    this.textTime = this.textDifference;

    if (!this.isActive) {
      return;
    }

    this.run();
  }

  private createTargetDateBySecond = (seconds = 0) =>
    new Date(Date.now() + seconds * M_SECONDS_PER_SECOND);

  private setTextTime = (text: string) => {
    this.textTime = text;
    this.params.onUpdateText?.(text);
  };

  private setActivity = (isActive: boolean) => {
    this.isActive = isActive;
    this.params.onUpdateActivity?.(isActive);
  };

  private get difference() {
    return Math.max(+this.targetDate - Date.now(), 0);
  }

  private get textDifference() {
    return formatDate(new Date(this.difference), 'mm:ss', ':');
  }

  private run = () => {
    if (this.difference > 0) {
      this.setTextTime(this.textDifference);

      this.timer = setTimeout(() => {
        this.run();
      }, M_SECONDS_PER_SECOND);

      return this.setActivity(true);
    }

    this.setTextTime('00:00');

    return this.setActivity(false);
  };

  /**
   * Метод для перезапуска таймера на новую дату
   * @enum number - количество секунд от текущего момента
   * @enum Date - дата к которой должен стартовать счетчик
   */
  public restart = (value: Date | number) => {
    this.destroy();

    if (typeof value === 'number') {
      this.targetDate = this.createTargetDateBySecond(value);
    } else if (!isNaN(Number(+value))) {
      this.targetDate = value;
    } else {
      return;
    }

    this.run();
  };

  public destroy = () => {
    clearTimeout(this.timer);
  };
}
