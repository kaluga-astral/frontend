import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { CodeField } from './CodeField';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3211-52609&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof CodeField> = {
  title: 'Components/CodeField',
  component: CodeField,
};

export default meta;

type Story = StoryObj<typeof CodeField>;

export const Interaction: Story = {
  args: {
    label: 'Код подтверждения отправлен на test@test.ru',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const TEST_VALUE = [1, 7, 5, 6, 2, 9];

export const Example = () => (
  <>
    <br />
    <CodeField
      label="Код подтверждения отправлен на test@test.ru"
      onRestart={() => {}}
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
        isError={true}
        onRestart={() => {}}
        initialValue={TEST_VALUE}
      />
    </div>

    <br />
    <br />

    <Typography variant="h5" paragraph>
      Текст ошибки можно переопределить через пропс errorText
    </Typography>
    <div>
      <CodeField
        isError={true}
        errorText="Код подтверждения неверный"
        onRestart={() => {}}
        initialValue={TEST_VALUE}
      />
    </div>
  </div>
);

export const Disabled = () => (
  <>
    <CodeField
      label="Код подтверждения отправлен на test@test.ru"
      disabled={true}
      onRestart={() => {}}
      initialValue={TEST_VALUE}
    />
  </>
);

export const Loading = () => (
  <>
    <CodeField
      label="Код подтверждения отправлен на test@test.ru"
      loading={true}
      onRestart={() => {}}
      initialValue={TEST_VALUE}
    />
  </>
);

export const CodeLength = () => (
  <div>
    <div>
      <CodeField onRestart={() => {}} codeLength={4} />
    </div>

    <br />

    <div>
      <CodeField onRestart={() => {}} codeLength={5} />
    </div>

    <br />

    <div>
      <CodeField onRestart={() => {}} codeLength={6} />
    </div>

    <br />

    <div>
      <CodeField onRestart={() => {}} codeLength={7} />
    </div>

    <br />

    <div>
      <CodeField onRestart={() => {}} codeLength={8} />
    </div>

    <br />

    <div>
      <CodeField onRestart={() => {}} codeLength={9} />
    </div>
  </div>
);
