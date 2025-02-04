import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ColorVariant } from '../styles/theme/colors'
import { theme } from '../styles/theme'

type TextProps = {
  variant?: ColorVariant
  type?: 'gradient' | 'highlight' | 'subtle' | 'link'
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  href?: string
  to?: string
}

const BaseText = styled.span<TextProps>`
  font-family: ${theme.typography.fontFamily.primary};
  transition: ${theme.transitions.fast};
  color: ${props => props.type === 'subtle' 
    ? theme.colors.text.tertiary 
    : theme.colors.text.secondary};
`

const gradientStyle = css<TextProps>`
  background: linear-gradient(
    45deg,
    ${props => theme.colors.accent[props.variant || 'purple']},
    ${props => theme.colors.accent[`${props.variant || 'purple'}Light`]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: ${theme.transitions.fast};
  
  &:hover {
    opacity: 0.8;
  }
`

const highlightStyle = css<TextProps>`
  position: relative;
  color: ${theme.colors.text.primary};
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.2em;
    background-color: ${props => theme.colors.background[props.variant || 'purple']};
    z-index: -1;
    transition: ${theme.transitions.fast};
  }
  
  &:hover::before {
    height: 100%;
  }
`

const linkStyle = css<TextProps>`
  color: ${theme.colors.text.secondary};
  text-decoration: none;
  position: relative;
  
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
    transition: ${theme.transitions.normal};
  }
  
  &:hover {
    color: ${props => theme.colors.accent[props.variant || 'purple']};
    
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`

const subtleStyle = css<TextProps>`
  color: ${theme.colors.text.tertiary};
  
  &:hover {
    color: ${props => theme.colors.accent[props.variant || 'purple']};
  }
`

const StyledText = styled(BaseText)<TextProps>`
  ${props => {
    switch (props.type) {
      case 'gradient':
        return gradientStyle
      case 'highlight':
        return highlightStyle
      case 'link':
        return linkStyle
      case 'subtle':
        return subtleStyle
      default:
        return ''
    }
  }}
`

export const Text: React.FC<TextProps & { children: React.ReactNode }> = ({ 
  children, 
  type,
  variant = 'purple',
  as,
  href,
  to,
  ...props 
}) => {
  if (to) {
    return (
      <StyledText as={Link} to={to} type={type} variant={variant} {...props}>
        {children}
      </StyledText>
    )
  }

  if (href) {
    return (
      <StyledText as="a" href={href} type={type} variant={variant} {...props}>
        {children}
      </StyledText>
    )
  }

  return (
    <StyledText type={type} variant={variant} as={as} {...props}>
      {children}
    </StyledText>
  )
} 