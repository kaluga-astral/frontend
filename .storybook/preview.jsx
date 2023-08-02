import { ThemeProvider, styled } from '../packages/components/src'
import { getTheme, themes } from './themes'

const StoryWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
  
  ${({theme}) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export default {
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={getTheme(context.globals.theme)}>
        <StoryWrapper>
          <Story {...context} />
        </StoryWrapper>
      </ThemeProvider>
    )
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: themes[0].name,
      toolbar: {
        icon: 'circlehollow',
        items: themes.map((theme) => theme.name),
        showName: true
      }
    }
  },
};
