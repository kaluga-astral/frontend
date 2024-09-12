import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents, waitFor } from '@astral/tests';
import { useRef } from 'react';
import { toast } from 'react-toastify-next';

import { Button } from '../Button';

import { notify } from './NotificationNext';
import { NotificationContainerNext } from './NotificationContainerNext';
import type { Notify } from './types';

describe('NotificationNext', () => {
  afterEach(() => {
    toast.dismiss({ containerId: 'progress-notify' });
  });

  describe('Progress notify', () => {
    it('Отображается с переданным заголовком', async () => {
      const TestComponent = () => {
        const handleProgressNotify = () => {
          notify.progress('Title', {
            content: 'Content',
            containerId: 'progress-notify',
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
        const handleProgressNotify = () => {
          notify.progress('Title', {
            content: 'Content',
            containerId: 'progress-notify',
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
        const notifyRef = useRef<ReturnType<Notify['progress']>>();

        const handleProgressNotify = () => {
          const progressNotify = notify.progress('Title', {
            content: 'Content',
            containerId: 'progress-notify',
          });

          notifyRef.current = progressNotify;
        };

        const handleUpdate = () => {
          notifyRef.current?.update('Update title', {
            content: 'Update content',
            containerId: 'progress-notify',
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
        const notifyRef = useRef<ReturnType<Notify['progress']>>();

        const handleProgressNotify = () => {
          const progressNotify = notify.progress('Title', {
            content: 'Content',
            containerId: 'progress-notify',
          });

          notifyRef.current = progressNotify;
        };

        const handleUpdate = () => {
          notifyRef.current?.update('Update title', {
            content: 'Update content',
            containerId: 'progress-notify',
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
        const notifyRef = useRef<ReturnType<Notify['progress']>>();

        const handleProgressNotify = () => {
          const progressNotify = notify.progress('Title', {
            content: 'Content',
            containerId: 'progress-notify',
          });

          notifyRef.current = progressNotify;
        };

        const handleUpdate = () => {
          notifyRef.current?.update('Success title', {
            content: 'Success content',
            containerId: 'progress-notify',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleUpdate}>Success</Button>
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
        const notifyRef = useRef<ReturnType<Notify['progress']>>();

        const handleProgressNotify = () => {
          const progressNotify = notify.progress('Title', {
            content: 'Content',
            containerId: 'progress-notify',
          });

          notifyRef.current = progressNotify;
        };

        const handleUpdate = () => {
          notifyRef.current?.update('Success title', {
            content: 'Success content',
            containerId: 'progress-notify',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleUpdate}>Success</Button>
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
        const notifyRef = useRef<ReturnType<Notify['progress']>>();

        const handleProgressNotify = () => {
          const progressNotify = notify.progress('Title', {
            content: 'Content',
            containerId: 'progress-notify',
          });

          notifyRef.current = progressNotify;
        };

        const handleUpdate = () => {
          notifyRef.current?.update('Error title', {
            content: 'Error content',
            containerId: 'progress-notify',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleUpdate}>Error</Button>
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
        const notifyRef = useRef<ReturnType<Notify['progress']>>();

        const handleProgressNotify = () => {
          const progressNotify = notify.progress('Title', {
            content: 'Content',
            containerId: 'progress-notify',
          });

          notifyRef.current = progressNotify;
        };

        const handleUpdate = () => {
          notifyRef.current?.update('Error title', {
            content: 'Error content',
            containerId: 'progress-notify',
          });
        };

        return (
          <>
            <NotificationContainerNext containerId="progress-notify" />
            <Button onClick={handleProgressNotify}>Notify</Button>
            <Button onClick={handleUpdate}>Error</Button>
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
  });
});
