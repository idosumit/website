import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${theme.typography.fontFamily.primary};
    background-color: ${theme.colors.background.primary};
    color: ${theme.colors.text.primary};
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  ::selection {
    background: ${theme.colors.background.secondary};
    color: ${theme.colors.text.primary};
  }

  a {
    text-decoration: none;
    color: ${theme.colors.accent.orange};
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.accent.orangeLight};
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.accent.orange};
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
` 