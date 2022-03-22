import {
  InnerContainer,
  StyledActions,
  StyledContainer,
  StyledImage,
  StyledTitle,
} from './styled';
import { PlaceholderProps } from './types';

export const Placeholder = ({
  title,
  imgSrc,
  imgAlt,
  description,
  Actions,
}: PlaceholderProps) => {
  return (
    <StyledContainer>
      <InnerContainer>
        {imgSrc && <StyledImage src={imgSrc} alt={imgAlt} />}
        {title && <StyledTitle variant="h4">{title}</StyledTitle>}
        {description && <StyledTitle variant="ui">{description}</StyledTitle>}
        {Actions && <StyledActions container>{Actions}</StyledActions>}
      </InnerContainer>
    </StyledContainer>
  );
};
