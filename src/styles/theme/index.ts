import { colors } from './colors'
import { typography } from './typography'
import { media, breakpoints } from './breakpoints'

export const theme = {
  colors,
  typography,
  media,
  breakpoints,
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
  },
  transitions: {
    fast: 'all 0.2s ease',
    normal: 'all 0.3s ease',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.05)',
  }
}

export type Theme = typeof theme 