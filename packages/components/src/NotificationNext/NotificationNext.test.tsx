import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents, waitFor } from '@astral/tests';
import { toast } from 'react-toastify-next';

import { Button } from '../Button';

import { notify } from './NotificationNext';
import { NotificationContainerNext } from './NotificationContainerNext';

describe('NotificationNext', () => {
  describe('Progress notify', () => {
    afterEach(() => {
      toast.dismiss({ containerId: 'progress-notify' });
    });

    it('Отображается с переданным заголовком', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const button = screen.getByText('Notify');

      await userEvents.click(button);
      expect(screen.getByText('Title')).toBeVisible();
    });

    it('Отображается с переданным содержимым', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const button = screen.getByText('Notify');

      await userEvents.click(button);
      expect(screen.getByText('Content')).toBeVisible();
    });

    it('Устанавливается новый заголовок, указанный в методе update', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        const handleUpdate = () => {
          progressNotify.update('Update title', {
            content: 'Update content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleUpdate}>Update</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const startButton = screen.getByText('Notify');
      const updateButton = screen.getByText('Update');

      await userEvents.click(startButton);
      expect(screen.getByText('Title')).toBeVisible();
      await userEvents.click(updateButton);

      await waitFor(() => {
        expect(screen.getByText('Update title')).toBeVisible();
      });
    });

    it('Устанавливается новое содержимое, указанное в методе update', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        const handleUpdate = () => {
          progressNotify.update('Update title', {
            content: 'Update content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleUpdate}>Update</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const startButton = screen.getByText('Notify');
      const updateButton = screen.getByText('Update');

      await userEvents.click(startButton);
      expect(screen.getByText('Content')).toBeVisible();
      await userEvents.click(updateButton);

      await waitFor(() => {
        expect(screen.getByText('Update content')).toBeVisible();
      });
    });

    it('Устанавливается новый заголовок, указанный в методе success', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        const handleSuccess = () => {
          progressNotify.update('Success title', {
            content: 'Success content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleSuccess}>Success</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const startButton = screen.getByText('Notify');
      const successButton = screen.getByText('Success');

      await userEvents.click(startButton);
      expect(screen.getByText('Title')).toBeVisible();
      await userEvents.click(successButton);

      await waitFor(() => {
        expect(screen.getByText('Success title')).toBeVisible();
      });
    });

    it('Устанавливается новое содержимое, указанное в методе success', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        const handleSuccess = () => {
          progressNotify.update('Success title', {
            content: 'Success content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleSuccess}>Success</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const startButton = screen.getByText('Notify');
      const successButton = screen.getByText('Success');

      await userEvents.click(startButton);
      expect(screen.getByText('Content')).toBeVisible();
      await userEvents.click(successButton);

      await waitFor(() => {
        expect(screen.getByText('Success content')).toBeVisible();
      });
    });

    it('Устанавливается новый заголовок, указанный в методе error', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        const handleError = () => {
          progressNotify.update('Error title', {
            content: 'Error content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleError}>Error</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const startButton = screen.getByText('Notify');
      const errorButton = screen.getByText('Error');

      await userEvents.click(startButton);
      expect(screen.getByText('Title')).toBeVisible();
      await userEvents.click(errorButton);

      await waitFor(() => {
        expect(screen.getByText('Error title')).toBeVisible();
      });
    });

    it('Устанавливается новое содержимое, указанное в методе error', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        const handleError = () => {
          progressNotify.update('Error title', {
            content: 'Error content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleError}>Error</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const startButton = screen.getByText('Notify');
      const errorButton = screen.getByText('Error');

      await userEvents.click(startButton);
      expect(screen.getByText('Content')).toBeVisible();
      await userEvents.click(errorButton);

      await waitFor(() => {
        expect(screen.getByText('Error content')).toBeVisible();
      });
    });

    it('Кнопка закрытия уведомления не отображается, если оно в состоянии progress', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const startButton = screen.getByText('Notify');

      await userEvents.click(startButton);

      const closeButton = screen.queryByRole('button', {
        name: 'Закрыть уведомление',
      });

      expect(closeButton).not.toBeInTheDocument();
    });

    it('Кнопка закрытия уведомления отображается, если оно в состоянии success', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        const handleSuccess = () => {
          progressNotify.success('Success title', {
            content: 'Success content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleSuccess}>Success</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const startButton = screen.getByText('Notify');
      const successButton = screen.getByText('Success');

      await userEvents.click(startButton);
      await userEvents.click(successButton);

      await waitFor(() => {
        const closeButton = screen.queryByRole('button', {
          name: 'Закрыть уведомление',
        });

        expect(closeButton).toBeInTheDocument();
      });
    });

    it('Кнопка закрытия уведомления отображается, если оно в состоянии error', async () => {
      const TestComponent = () => {
        const progressNotify = notify.initProgress({
          containerId: 'progress-notify',
        });

        const handleProgressNotify = () => {
          progressNotify.start('Title', {
            content: 'Content',
          });
        };

        const handleError = () => {
          progressNotify.error('Error title', {
            content: 'Error content',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleError}>Error</Button>
          </>
        );
      };

      renderWithTheme(<TestComponent />);

      const startButton = screen.getByText('Notify');
      const errorButton = screen.getByText('Error');

      await userEvents.click(startButton);
      await userEvents.click(errorButton);

      await waitFor(() => {
        const closeButton = screen.queryByRole('button', {
          name: 'Закрыть уведомление',
        });

        expect(closeButton).toBeInTheDocument();
      });
    });
  });
});
