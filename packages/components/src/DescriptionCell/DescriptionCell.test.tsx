import { describe, expect } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';

import { DescriptionCell } from './DescriptionCell';

describe('DescriptionCell', () => {
  it('Title отображается', () => {
    const fakeTitle = 'Заголовок';

    renderWithTheme(<DescriptionCell title={fakeTitle} />);

    const title = screen.getByText('Заголовок');

    expect(title).toBeInTheDocument();
  });

  it('SubTitle отображается', () => {
    const fakeTitle = 'Заголовок';
    const fakeSubTitle = 'Подзаголовок';

    renderWithTheme(
      <DescriptionCell title={fakeTitle} subtitle={fakeSubTitle} />,
    );

    const subtitle = screen.getByText('Подзаголовок');

    expect(subtitle).toBeInTheDocument();
  });

  it('Icon отображается', () => {
    const fakeTitle = 'Заголовок';
    const Icon = () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="svg"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
            fill="url(#paint0_linear_28532_4841)"
          />
          <path
            d="M12 17C15.3137 17 18 14.3137 18 11C18 7.6863 15.3137 5 12 5C8.6863 5 6 7.6863 6 11C6 14.3137 8.6863 17 12 17Z"
            fill="white"
          />
          <path
            d="M10.9283 10.6193C11.4041 9.7936 12.5959 9.7936 13.0717 10.6193L16.8299 17.142C17.4096 18.1482 16.4081 19.3263 15.3215 18.9164L12.4367 17.8279C12.1552 17.7217 11.8448 17.7217 11.5633 17.8279L8.6785 18.9164C7.5919 19.3263 6.5904 18.1482 7.1701 17.142L10.9283 10.6193Z"
            fill="#0082AA"
          />
          <defs>
            <linearGradient
              id="paint0_linear_28532_4841"
              x1="79.0807"
              y1="0"
              x2="79.0807"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3ACEFC" />
              <stop offset="1" stopColor="#27B9E6" />
            </linearGradient>
          </defs>
        </svg>
      );
    };

    renderWithTheme(<DescriptionCell title={fakeTitle} icon={<Icon />} />);

    const icon = screen.getByRole('svg');

    expect(icon).toBeInTheDocument();
  });
});
