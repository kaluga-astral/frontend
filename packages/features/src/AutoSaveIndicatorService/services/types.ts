export type AutoSaveIndicatorErrorState = {
  onRetry: () => void;
  message: string;
};

export interface IAutoSaveIndicatorService {
  show: () => void;
  reset: () => void;
  hide: () => void;
  progress: () => void;
  success: () => void;
  setError: (error: AutoSaveIndicatorErrorState) => void;
  readonly isVisible: boolean;
  readonly values: {
    isLoading: boolean;
    errorMsg: string;
    isError: boolean;
    onRetry: () => void;
    isSuccess: boolean;
  };
}
