/**
 * Contact Page Configuration
 *
 * @description
 * Contact information, methods, and FAQ data for the contact page.
 * Modify these values to customize your contact page content.
 */

import type { ContactInfo, ContactMethod, ContactFAQ } from '../lib/types';

/** Contact information used across contact page and legal pages */
export const contact: ContactInfo = {
  email: 'geekscat@geeks.cat',
  supportEmail: 'geekscat@geeks.cat',
  salesEmail: 'geekscat@geeks.cat',
  address: {
    street: 'Catalunya',
    city: 'Barcelona',
    state: 'Catalunya',
    zip: '08000',
    country: 'Spain',
  },
};

/** Contact methods displayed on the contact page */
export const contactMethods: ContactMethod[] = [
  {
    icon: 'lucide:mail',
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: 'simple-icons:mastodon',
    label: 'Mastodon',
    value: '@geekscat@mastodon.social',
    href: 'https://mastodon.social/@geekscat',
  },
  {
    icon: 'simple-icons:x',
    label: 'Twitter',
    value: '@geekscat',
    href: 'https://twitter.com/geekscat',
  },
  {
    icon: 'simple-icons:github',
    label: 'GitHub',
    value: 'geekscat',
    href: 'https://github.com/geekscat',
  },
];

/** FAQ items displayed on the contact page */
export const contactFAQs: ContactFAQ[] = [
  {
    question: "How can I join Geeks.CAT?",
    answer: "Fill out the join form on our website or come to one of our events!",
  },
  {
    question: "When and where do you hold events?",
    answer: "We hold monthly meetups in Barcelona. Check our events page for upcoming dates.",
  },
  {
    question: "How can I sponsor an event?",
    answer: "Contact us via email to discuss sponsorship opportunities.",
  },
];
