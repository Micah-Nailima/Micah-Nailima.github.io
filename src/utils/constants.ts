/**
 * Constant definitions
 */

/** Reading speed (words per minute) */
export const READING_SPEED = 200

/** Scroll threshold (pixels) */
export const SCROLL_THRESHOLD = 50

/** Responsive breakpoints */
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 968,
  wide: 1200
} as const

/** Animation durations */
export const ANIMATION_DURATION = {
  fast: '0.15s',
  normal: '0.3s',
  slow: '0.45s'
} as const

/** Easing functions */
export const EASING = {
  default: 'ease',
  smooth: 'cubic-bezier(.2,.8,.2,1)'
} as const
