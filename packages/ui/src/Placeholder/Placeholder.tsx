import {
  Container,
  FooterLayout,
  InnerContainer,
  StyledImage,
  StyledTypography,
} from './styled';
import { PlaceholderProps } from './types';

export const Placeholder = ({
  title,
  imgSrc,
  imgAlt,
  subtitle,
  children,
  Footer,
}: PlaceholderProps) => {
  return (
    <Container>
      <InnerContainer>
        {imgSrc && <StyledImage src={imgSrc} alt={imgAlt} />}
        {title && <StyledTypography variant="h4">{title}</StyledTypography>}
        {subtitle && (
          <StyledTypography align="center" variant="ui">
            {subtitle}
          </StyledTypography>
        )}
        {Footer && <FooterLayout>{Footer}</FooterLayout>}
        {children}
      </InnerContainer>
    </Container>
  );
};
