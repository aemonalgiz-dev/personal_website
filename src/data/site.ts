/**
 * Single source of truth for identity, links, and anything you'll want to
 * change without hunting through templates.
 */

export const site = {
  /** Canonical origin. Must match the domain attached in Amplify. */
  url: 'https://jeffreygordon.dev',

  name: 'Jeffrey Gordon',
  tagline: 'Machine Learning Carpenter',
  role: 'Machine Learning Leader',
  location: 'Tyler, Texas',
  description:
    'Jeffrey Gordon builds and leads machine learning systems across voice AI, ' +
    'NLP, computer vision, and spectral analysis, from first principles ' +
    'through to production.',

  email: 'jeffreyrgordon@gmail.com',

  /** GitHub handle. Drives the live repository listing on /code. */
  github: 'aemonalgiz-dev',

  linkedin: 'https://www.linkedin.com/in/jeffrey-gordon-838b0241/',

  /**
   * The teaching site. `/tutorials` describes the project; `url` is the live
   * deployment it links out to. Leave `url` empty and the page still works;
   * the outbound links are simply not rendered.
   */
  tutorials: {
    url: '',
    repo: 'machine_learning_tutorial',
    apiRepo: 'machine_learning_tutorial_api',
    libraryRepo: 'oop_ml',
  },

  youtube: {
    url: 'https://www.youtube.com/aemonalgiz',
    handle: 'aemonalgiz',
    /** Drives the video listing on /published. */
    channelId: 'UCv4fy6Cpf0aEtHwXLwFMsZA',
  },

  /** Optional: drop a PDF in public/ and set the filename to expose it. */
  resume: '',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/code', label: 'Code' },
  { href: '/published', label: 'Published Work' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/interests', label: 'Interests' },
] as const;
