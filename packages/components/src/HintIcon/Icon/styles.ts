import {
  InfoFillMd,
  InfoOutlineMd,
  QuestionFillMd,
  QuestionOutlineMd,
} from '@astral/icons';

import { styled } from '../../styles';

export const InfoFill = styled(InfoFillMd, {
  shouldForwardProp: (prop) => !['$color'].includes(prop),
})<{ $color: string }>`
  fill: ${({ $color }) => $color};
`;

export const InfoOutline = styled(InfoOutlineMd, {
  shouldForwardProp: (prop) => !['$color'].includes(prop),
})<{ $color: string }>`
  fill: ${({ $color }) => $color};
`;

export const QuestionFill = styled(QuestionFillMd, {
  shouldForwardProp: (prop) => !['$color'].includes(prop),
})<{ $color: string }>`
  fill: ${({ $color }) => $color};
`;

export const QuestionOutline = styled(QuestionOutlineMd, {
  shouldForwardProp: (prop) => !['$color'].includes(prop),
})<{ $color: string }>`
  fill: ${({ $color }) => $color};
`;
