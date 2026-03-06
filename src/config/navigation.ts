/**
 * Navigation Configuration
 *
 * @description
 * Centralized navigation configuration for header and footer.
 * All navigation items are defined here for consistency and easy maintenance.
 *
 * Items with a `feature` property will only be shown if that feature is enabled
 * in the site config's feature flags.
 */

import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  /**
   * Header Navigation
   * - main: Primary navigation links
   * - cta: Call-to-action buttons on the right
   */
  header: {
    main: [
      { label: 'Events', href: '/events' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog', feature: 'blog' },
    ],
    cta: [
      { label: 'Contact', href: '/contact', variant: 'ghost' },
      { label: 'Join Us', href: '/join', variant: 'primary' },
    ],
  },

  /**
   * Footer Navigation
   * Organized into columns for Geeks.CAT
   */
  footer: {
    product: [
      { label: 'Events', href: '/events' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    solutions: [
      { label: 'Blog', href: '/blog', feature: 'blog' },
      { label: 'FAQ', href: '/faq' },
    ],
    resources: [
      { label: 'Code of Conduct', href: '/coc' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
    company: [
      { label: 'GitHub', href: 'https://github.com/geekscat' },
      { label: 'Mastodon', href: 'https://mastodon.social/@geekscat' },
      { label: 'Twitter', href: 'https://twitter.com/geekscat' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
};
