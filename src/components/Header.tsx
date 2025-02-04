import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../styles/colors'
import { theme } from '../styles/theme'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  ${theme.media.md} {
    gap: 0.8rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const StyledLink = styled(Link)`
  color: ${theme.colors.accent.orange};
  text-decoration: none;
  font-family: ${theme.typography.fontFamily.primary};
  font-size: 1.2em;
  font-weight: 400;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: -0.02em;
  padding: 0.3rem 0.5rem;
  display: inline-block;
  
  ${theme.media.md} {
    font-size: 0.9rem;
    padding: 0.2rem 0.4rem;
    letter-spacing: -0.01em;
  }

  &:hover {
    color: ${theme.colors.accent.orangeLight};
    transform: none;
  }

  &::after {
    display: none;
  }

  &::selection {
    background: #f0f0f0;
    color: #000;
  }
`

const LinkWrapper = styled.span`
  position: relative;
  padding: 0.2rem 0;
  
  ${theme.media.md} {
    padding: 0.1rem 0;
    font-size: 0.9rem;
  }
  
  &:before {
    content: '[';
    color: #999;
    margin-right: 0.2rem;
    transition: all 0.2s ease;
  }
  
  &:after {
    content: ']';
    color: #999;
    margin-left: 0.2rem;
    transition: all 0.2s ease;
  }

  &:hover {
    &:before, &:after {
      color: ${theme.colors.accent.orange};
      transform: scale(1.1);
    }
  }

  &::selection {
    background: #f0f0f0;
    
    &:before, &:after {
      background: #f0f0f0;
    }
  }
`

export default function Header() {
  return (
    <Nav>
      <LinkWrapper>
        <StyledLink to="/">home</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink to="/blog">blog</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink to="/learning">learning</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink to="/highlights">highlights</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink to="/about">about</StyledLink>
      </LinkWrapper>
    </Nav>
  )
}

