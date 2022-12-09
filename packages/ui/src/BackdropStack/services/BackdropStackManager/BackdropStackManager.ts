import { CloseEventReason } from '../../../types';
/**
 * @description айдишка модалки/поппера/тултипа
 */
type PopId = string;
/**
 * @description айдишка клика по странице,
 * чтобы идентифицировать клики по странице,
 * например клик по серой зоне модалки,
 * с открытым поппером приводит к срабатыванию закрытия сразу обоих элементов,
 * и поппера, и тултипа,
 * и благодаря этой айдишке, мы можем понять,
 * что оба компонента пытаются закрыться одновременно,
 * по одному и тому же клику, и мы будем это предотвращать
 */
type PointerId = string | null;

/**
 * @description тупл отображающий комбинацию причины закрытия,
 * и айдишки клика в рамках которого происходит закрытие
 */
type PopTuple = [CloseEventReason | undefined, PointerId];

/**
 * @description расширяемый набор конфликтующих причин закрытия с кликом по бэкдропу модалки,
 * т.к. некоторые способы закрытия вызываются раньше, чем вызов backdropClick,
 * а при несоблюдении последовательности возникают конфликты
 */
const backdropConflictsReasons = new Set<CloseEventReason | undefined>([
  'blur',
  'clickAway',
]);

class BackdropStackManager {
  private stack: PopId[] = [];

  /**
   * @description сохраняем информацию о том какой был предыдущий вызов pop,
   * нужен для предотвращения синхронного закрытия при последовательности 'blur' и 'backdropClick' в рамках одного клика
   */
  private previousPopInfo: PopTuple = [null, null];

  /**
   * @description крайняя айдишка клика по странице
   */
  private currentPointerId: PointerId = null;

  constructor() {
    globalThis?.document?.addEventListener(
      'pointerdown',
      () => (this.currentPointerId = this.generateID()),
    );
  }

  /**
   * @description  метод проверки на конфликт причины закрытия с предыдущим
   */
  private checkOn = (reason?: CloseEventReason): boolean => {
    const [previousReason, previousPointerId] = this.previousPopInfo;

    return (
      reason === 'backdropClick' &&
      backdropConflictsReasons.has(previousReason) &&
      previousPointerId === this.currentPointerId
    );
  };

  /**
   * @description  метод генерации случайной айдишки
   */
  public generateID = () => {
    return String(Math.random());
  };

  /**
   * @description форс метод для удалении подписанного компонента из очереди,
   * может быть полезно при массовом анмаунте компонентов
   */
  public remove = (id: PopId) => {
    this.stack = this.stack.filter((item) => item !== id);
  };

  /**
   * @description метод добавления в стек
   */
  public push = (id: PopId) => {
    this.stack.push(id);
  };

  /**
   * @description метод для запроса на выход из очереди,
   * если все ок, то вернется true, что означает разрешение на выход и компонент будет вычеркнут из очереди,
   * соответственно возврат false означает запрет, и компонент остается в очереди
   */
  public pop = (id: PopId, reason?: CloseEventReason): boolean => {
    if (this.checkOn(reason)) {
      return false;
    }

    const lastOpenedElement = this.stack[this.stack.length - 1];

    if (lastOpenedElement === id) {
      this.previousPopInfo = [reason, this.currentPointerId];
      this.stack.pop();

      return true;
    }

    return false;
  };
}

export const backdropStackManager = new BackdropStackManager();
