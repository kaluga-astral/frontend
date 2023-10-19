import { Typography } from '../Typography';
import { styled } from '../styles';

type CollapsibleTypographyWrapperProps = {
  rowsCount: number;
  isOpenCollapse: boolean;
  currentHeight: string;
};

const collapsibleTypographyWrapperProps = [
  'rowsCount',
  'isOpenCollapse',
  'currentHeight',
];

export const CollapsibleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CollapsibleTypographyWrapper = styled(Typography, {
  shouldForwardProp: (name) =>
    !collapsibleTypographyWrapperProps.includes(name),
})<CollapsibleTypographyWrapperProps>`
  /* stylelint-disable-next-line */
  overflow: hidden;
  display: ${({ isOpenCollapse }) => (isOpenCollapse ? '' : '-webkit-box')};

  max-width: 100%;
  height: ${({ currentHeight }) => currentHeight};

  text-overflow: ellipsis;
  white-space: ${({ isOpenCollapse }) => (isOpenCollapse ? 'none' : 'initial')};

  transition: all 0.5s ease-in-out;

  -webkit-box-orient: ${({ isOpenCollapse }) =>
    isOpenCollapse ? '' : 'vertical'};
  -webkit-line-clamp: ${({ rowsCount, isOpenCollapse }) =>
    isOpenCollapse ? 'none' : rowsCount || '1'};
`;
