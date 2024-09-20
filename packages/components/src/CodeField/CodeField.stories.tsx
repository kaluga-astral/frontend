import { type Meta, type StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Typography } from '../Typography';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { DialogContent } from '../DialogContent';
import { DialogActions as DialogActionComponent } from '../DialogActions';

import { CodeField } from './CodeField';

/**
 * CodeField - Поле для ввода кода подтверждения, отсылаемого на телефон/email и т.п.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3211-52609&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof CodeField> = {
  title: 'Components/Inputs/CodeField',
  component: CodeField,
};

export default meta;

type Story = StoryObj<typeof CodeField>;

export const Interaction: Story = {
  args: {
    label: 'Код подтверждения отправлен на test@test.ru',
    codeLength: 6,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const TEST_VALUE = '175629';

export const Example = () => (
  <>
    <CodeField
      codeLength={6}
      label="Код подтверждения отправлен на test@test.ru"
      onResendCode={() => Promise.resolve()}
      isAllowResendCode
    />
  </>
);

export const Error = () => (
  <div>
    <Typography variant="h5" paragraph>
      Дефолтный текст ошибки
    </Typography>
    <div>
      <CodeField
        codeLength={6}
        isError={true}
        onResendCode={() => Promise.resolve()}
        initialValue={TEST_VALUE}
        isAllowResendCode
      />
    </div>

    <br />
    <br />

    <Typography variant="h5" paragraph>
      Текст ошибки можно переопределить через пропс errorText
    </Typography>
    <div>
      <CodeField
        codeLength={6}
        isError={true}
        errorText="Код подтверждения неверный"
        onResendCode={() => Promise.resolve()}
        initialValue={TEST_VALUE}
        isAllowResendCode
      />
    </div>
  </div>
);

export const Disabled = () => (
  <>
    <CodeField
      codeLength={6}
      label="Код подтверждения отправлен на test@test.ru"
      disabled={true}
      onResendCode={() => Promise.resolve()}
      initialValue={TEST_VALUE}
      isAllowResendCode
    />
  </>
);

export const Loading = () => (
  <>
    <CodeField
      codeLength={6}
      label="Код подтверждения отправлен на test@test.ru"
      loading={true}
      onResendCode={() => Promise.resolve()}
      initialValue={TEST_VALUE}
      isAllowResendCode
    />
  </>
);

/**
 * onComplete вызывается, когда поле заполнено
 */
export const OnComplete = () => (
  <>
    <CodeField
      codeLength={6}
      label="Код подтверждения отправлен на test@test.ru"
      onResendCode={() => Promise.resolve()}
      isAllowResendCode
      onComplete={(value) => alert(value)}
    />
  </>
);

export const DynamicResendTimeout = () => {
  const [timeout, setTimeout] = useState(5);

  return (
    <>
      <Button onClick={() => setTimeout(5)}>5s</Button>
      <Button onClick={() => setTimeout(15)}>15s</Button>
      <Button onClick={() => setTimeout(60)}>60s</Button>
      <Button onClick={() => setTimeout(150)}>150s</Button>

      <CodeField
        codeLength={6}
        label="Код подтверждения отправлен на test@test.ru"
        onResendCode={() => Promise.resolve()}
        isAllowResendCode
        resendTimeout={timeout}
      />
    </>
  );
};

export const WithoutRestartButton = () => (
  <>
    <CodeField codeLength={6} initialValue={TEST_VALUE} />
  </>
);

export const CodeLength = () => (
  <div>
    <div>
      <CodeField codeLength={4} />
    </div>

    <br />

    <div>
      <CodeField codeLength={5} />
    </div>

    <br />

    <div>
      <CodeField codeLength={6} />
    </div>

    <br />

    <div>
      <CodeField codeLength={7} />
    </div>

    <br />

    <div>
      <CodeField codeLength={8} />
    </div>

    <br />

    <div>
      <CodeField codeLength={9} />
    </div>
  </div>
);

export const IsAutoFocus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const [loading, setLoading] = useState(false);

  const handleComplete = () => setLoading((prevState) => !prevState);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading((prevState) => !prevState);
      }, 2000);
    }
  }, [loading]);

  return (
    <>
      <Button onClick={handleClickOpen}>Открыть CodeField</Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        title="Подтверждение личности"
      >
        <DialogContent>
          <CodeField
            label="Код подтверждения отправлен на test@test.ru"
            codeLength={6}
            isAllowResendCode
            onResendCode={() => Promise.resolve()}
            isAutoFocus
            loading={loading}
            onComplete={handleComplete}
          />
        </DialogContent>
        <DialogActionComponent>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
        </DialogActionComponent>
      </Dialog>
    </>
  );
};
