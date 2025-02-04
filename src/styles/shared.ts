import styled from 'styled-components'
import { theme } from './theme'

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  margin-top: 2rem;
`

export const ContentSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;
`

export const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSize.xxl};
  margin-bottom: ${theme.spacing.xl};
  width: 100%;
  text-align: left;
  font-weight: 500;
  font-family: 'IBM Plex Mono', monospace;
  color: #333;
  margin-top: 0;
  letter-spacing: -0.02em;

  &::selection {
    background: #f0f0f0;
    color: #000;
  }
`

export const PageContent = styled.div`
  font-size: 1.1em;
  line-height: 1.6;
  color: #666;
  font-family: 'IBM Plex Mono', monospace;
  margin-bottom: 3rem;
  letter-spacing: -0.01em;

  p {
    margin: 0 0 1.5rem;
    transition: color 0.2s ease;
    
    &:last-child {
      margin-bottom: 0;
    }

    &::selection {
      background: #f0f0f0;
      color: #333;
    }
  }

  a {
    color: #666;
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease;
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -1px;
      left: 0;
      background-color: #333;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease;
    }
    
    &:hover {
      color: #333;
      
      &::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }

    &::selection {
      background: #f0f0f0;
      color: #333;
    }
  }
`

export const PageFooter = styled.footer`
  margin-top: ${theme.spacing.xl};
  color: ${theme.colors.text.tertiary};
  font-size: ${theme.typography.fontSize.sm};
  width: 100%;
  text-align: left;
  border-top: 1px solid #eee;
  padding-top: 2rem;
  font-family: 'IBM Plex Mono', monospace;
`