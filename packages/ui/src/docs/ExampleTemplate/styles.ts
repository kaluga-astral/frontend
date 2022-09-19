import { styled } from '../../styles';

type ExampleTemplateWrapperProps = {
  matches: boolean;
};

export const ExampleTemplateWrapper = styled.section<ExampleTemplateWrapperProps>`
  width: ${({ matches }) => (matches ? '100%' : '70%')};
`;
