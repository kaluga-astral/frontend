import { CloseEventReason } from '../../../types';

type PopId = string;
type PointerId = string | null;

type PopTuple = [CloseEventReason | undefined, PointerId];

const backdropConflictsReasons = new Set<CloseEventReason | undefined>([
  'blur',
  'awayClick',
]);

class BackdropStackManager {
  private stack: PopId[] = [];

  // сохраняем информацию о том какой был предыдущий вызов pop,
  // нужен для предотвращения синхронного закрытия при последовательности 'blur' и 'backdropClick' в рамках одного клика
  private previousPopInfo: PopTuple = [null, null];

  private currentPointerId: PointerId = null;

  constructor() {
    globalThis?.document?.addEventListener(
      'pointerdown',
      () => (this.currentPointerId = this.generateID()),
    );
  }

  private checkOn = (reason?: CloseEventReason): boolean => {
    const [previousReason, previousPointerId] = this.previousPopInfo;

    return (
      reason === 'backdropClick' &&
      backdropConflictsReasons.has(previousReason) &&
      previousPointerId === this.currentPointerId
    );
  };

  public generateID = () => {
    return String(Math.random());
  };

  public remove = (id: PopId) => {
    this.stack = this.stack.filter((item) => item !== id);
  };

  public push = (id: PopId) => {
    this.stack.push(id);
  };

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
