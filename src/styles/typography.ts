import styled from 'styled-components'
import { theme } from './theme'
import { Link } from 'react-router-dom'

export type ColorVariant = 'purple' | 'green' | 'orange' | 'blue'

interface ColoredTextProps {
  variant: ColorVariant
}

export const ColoredLink = styled(Link)<ColoredTextProps>`
  display: inline-block;
  text-align: left;
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.lg};
  text-decoration: underline;
  text-decoration-color: ${theme.colors.text.secondary};
  color: ${theme.colors.text.secondary};
  position: relative;
  transition: ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.accent.orange};
    text-decoration-color: ${theme.colors.accent.orange};
  }

  &::after {
    display: none;
  }
`

export const SecondaryText = styled.span<ColoredTextProps>`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.secondary};
`

export const TextLink = styled.a<{ variant?: 'purple' | 'green' | 'orange' | 'blue' }>`
  color: ${props => theme.colors.text.secondary};
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
    background-color: ${props => theme.colors.accent[props.variant || 'purple']};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${props => theme.colors.accent[props.variant || 'purple']};
    
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  &::selection {
    background: ${props => theme.colors.background[props.variant || 'purple']};
    color: ${props => theme.colors.accent[props.variant || 'purple']};
  }
`

export const HighlightText = styled.span<{ variant?: 'purple' | 'green' | 'orange' | 'blue' }>`
  position: relative;
  transition: all 0.2s ease;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.2em;
    background-color: ${props => theme.colors.background[props.variant || 'purple']};
    z-index: -1;
    transition: height 0.2s ease;
  }
  
  &:hover::before {
    height: 100%;
  }
`

export const GradientText = styled.span<{ variant?: 'purple' | 'green' | 'orange' | 'blue' }>`
  background: linear-gradient(
    45deg,
    ${props => theme.colors.accent[props.variant || 'purple']},
    ${props => theme.colors.accent[props.variant + 'Light' as keyof typeof theme.colors.accent] || 'purpleLight'}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`

export const SubtleText = styled.span<{ variant?: 'purple' | 'green' | 'orange' | 'blue' }>`
  color: ${theme.colors.text.tertiary};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => theme.colors.accent[props.variant || 'purple']};
  }
` 