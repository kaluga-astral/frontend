import {
  StyledActions,
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledInnerContainer,
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
      <StyledInnerContainer>
        {imgSrc && <StyledImage src={imgSrc} alt={imgAlt} />}
        {title && <StyledTitle variant="h4">{title}</StyledTitle>}
        {description && (
          <StyledDescription variant="ui">{description}</StyledDescription>
        )}
      </StyledInnerContainer>
      {Actions && <StyledActions>{Actions}</StyledActions>}
    </StyledContainer>
  );
};
