import type { ImageMetadata } from 'astro';

import bookBirthBook from '../assets/landing/book-birth-book.jpg';
import bookCoverEditor from '../assets/landing/book-cover-editor.jpg';
import bookFamilyHistory from '../assets/landing/book-family-history.jpg';
import bookFreeNarrative from '../assets/landing/book-free-narrative.jpg';
import bookGiftCard from '../assets/landing/book-gift-card.jpg';
import bookLifeStory from '../assets/landing/book-life-story.png';
import bookTravelBook from '../assets/landing/book-travel-book.jpg';
import exampleAutobiography from '../assets/landing/example-autobiography.jpg';
import exampleFamilyStory from '../assets/landing/example-family-story.webp';
import exampleGift from '../assets/landing/example-gift.webp';
import favicon from '../assets/landing/favicon.png';
import heroFamilyBook from '../assets/landing/hero-family-book.jpg';
import impactCulturalHeritage from '../assets/impact/benefit-cultural-heritage.png';
import impactIntergenerationalUnderstanding from '../assets/impact/benefit-intergenerational-understanding.png';
import impactPsychologicalWellBeing from '../assets/impact/benefit-psychological-well-being.png';
import impactSocialConnection from '../assets/impact/benefit-social-connection.png';
import lisaBrowser from '../assets/landing/lisa-browser.png';
import logo from '../assets/landing/logo.png';
import ogCover from '../assets/landing/og-cover.jpg';
import rewriteExample from '../assets/landing/rewrite-example.png';
import roleCoauthor from '../assets/landing/role-coauthor.png';
import roleInterviewer from '../assets/landing/role-interviewer.png';
import roleMainAuthor from '../assets/landing/role-main-author.png';
import roleSubscriber from '../assets/landing/role-subscriber.png';
import stripePayment from '../assets/landing/stripe-payment.jpg';
import voiceDemo from '../assets/landing/voice-demo.mp4';
import weeklyQuestion from '../assets/landing/weekly-question.png';

export const imageManifest = {
  logo,
  favicon,
  ogCover,
  impactPsychologicalWellBeing,
  impactIntergenerationalUnderstanding,
  impactSocialConnection,
  impactCulturalHeritage,
  heroFamilyBook,
  roleMainAuthor,
  roleCoauthor,
  roleInterviewer,
  roleSubscriber,
  lisaBrowser,
  bookLifeStory,
  bookFamilyHistory,
  bookBirthBook,
  bookFreeNarrative,
  bookTravelBook,
  bookGiftCard,
  weeklyQuestion,
  rewriteExample,
  bookCoverEditor,
  stripePayment,
  exampleGift,
  exampleAutobiography,
  exampleFamilyStory,
} satisfies Record<string, ImageMetadata | string>;

export const publicImageManifest = {
  trustpilotStars: '/images/trustpilot-stars.svg',
} as const;

export const videoManifest = {
  voiceDemo,
} as const;
