import { nanoid } from 'nanoid';

type PopId = string;
type PointerId = string;

type PopTuple = [Reasons | undefined, PointerId];

type PopFunc = (id: PopId, reason?: Reasons) => boolean;

export type Reasons =
  | 'escapeKeyDown'
  | 'backdropClick'
  | 'toggleInput'
  | 'blur'
  | string;

class BackdropStackManager {
  private stack: PopId[] = [];

  private previousPopInfo: PopTuple = ['', ''];

  private currentPointerId: PointerId = '';

  constructor() {
    document.addEventListener(
      'pointerdown',
      () => (this.currentPointerId = nanoid()),
    );
  }

  private checkOnBackdropAndBlurCombination = (reason?: Reasons): boolean => {
    const [previousReason, previousPointerId] = this.previousPopInfo;

    return (
      reason === 'backdropClick' &&
      previousReason === 'blur' &&
      previousPointerId === this.currentPointerId
    );
  };

  public remove = (id: PopId) => {
    this.stack = this.stack.filter((item) => item !== id);
  };

  public push = (id: PopId) => {
    this.stack.push(id);
  };

  public pop: PopFunc = (id, reason) => {
    if (this.checkOnBackdropAndBlurCombination(reason)) {
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
