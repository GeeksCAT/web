/**
 * Site Configuration
 *
 * @description
 * Core site metadata and branding settings.
 * These values can be customized via environment variables or by editing the defaults below.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

/** Site name displayed in header, footer, and meta tags */
export const name = import.meta.env.SITE_NAME || 'Geeks.CAT';

/** Site description for SEO and meta tags */
export const description =
  import.meta.env.SITE_DESCRIPTION || 'Associació de tecnologia i informàtica de Catalunya';

/** Production URL of your site (used for sitemap, RSS, canonical URLs) */
export const url = import.meta.env.SITE_URL || 'https://geeks.cat';

/** Author name for meta tags and copyright */
export const author = import.meta.env.SITE_AUTHOR || 'Geeks.CAT';

/** Path to logo file (relative to /public) */
export const logo = '/images/logo/geekscat_logo_100px.png';

/** Path to Open Graph image (relative to /public) */
export const ogImage = '/images/logo/geekscat_logo.png';

/** Social media links */
export const social: SocialLinks = {
  twitter: 'https://twitter.com/geekscat',
  github: 'https://github.com/geekscat',
  mastodon: 'https://mastodon.social/@geekscat',
  bluesky: 'https://bsky.app/profile/geeks.cat',
};

/** Legal configuration for privacy policy and terms pages */
export const legal: LegalConfig = {
  privacyEmail: 'geekscat@geeks.cat',
  legalEmail: 'geekscat@geeks.cat',
  lastUpdated: 'February 20, 2026',
};
