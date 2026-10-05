export interface Involvement {
  name: string;
  role?: string;
  url?: string;
  body: string;
}

/**
 * Code contributions. These belong on /code, alongside the repositories.
 * Anything that is not shipped software lives in `volunteering` below.
 */
export const openSource: Involvement[] = [
  {
    name: 'Rustformers',
    role: 'Former developer',
    url: 'https://github.com/rustformers',
    body:
      'Implemented GPTQ 4-bit NormalFloat quantization, pruning, and model ' +
      'portability work, making it practical to run open-source models on ' +
      'consumer hardware.',
  },
  {
    name: 'Open source LLMs',
    role: 'Maintainer',
    body:
      'Publishing quantized models and answering the question that follows them: ' +
      'why the model that fits in memory is not the model that gives the right ' +
      'answer.',
  },
];

/**
 * Teaching and volunteer work. Personal rather than professional, so this
 * renders on the landing page next to the interests and not on /code.
 */
export const volunteering: Involvement[] = [
  {
    name: 'YouTube and Discord',
    role: 'Creator',
    body:
      'A YouTube channel teaching machine learning and AI from the fundamentals, ' +
      'with about six thousand subscribers, and a Discord community of 75,000 ' +
      'members where I answer questions and help developers get models running ' +
      'on their own hardware.',
  },
  {
    name: 'The Programmers Hangout',
    role: 'Contributor',
    body:
      'Presentations and lectures on machine learning topics for developers ' +
      'learning the field. Awarded the title of Solid Contributor.',
  },
  {
    name: 'Pathful',
    role: 'Volunteer',
    body:
      'Working with K-12 students to build interest in engineering, software ' +
      'development, machine learning, and natural language processing.',
  },
];

export interface Interest {
  title: string;
  body: string;
}

export const interests: Interest[] = [
  {
    title: 'Natural language processing',
    body:
      'Where I started my career and what I still find most interesting. ' +
      'Translating language into a form that computers can use for automation. ' +
      'From rules engines, taxonomies, ontologies, tokenization and embeddings ' +
      'to modern transformers.',
  },
  {
    title: 'Large language models',
    body:
      'How we are consistently improving the capacity of language models. ' +
      'Lately looped attention and recurrent transformers, where learned ' +
      'behaviors are allowed to be more progressive than simply emergent.',
  },
  {
    title: 'Agentic AI safety',
    body:
      'While powerful, the research is consistent that long-lived agents are ' +
      'potentially dangerous. What are the appropriate guardrails, control ' +
      'plane, and evaluation and observability for measuring the failure mode ' +
      'rather than the happy path?',
  },
  {
    title: 'Model optimization',
    body:
      'Quantization, pruning and distillation, prompt engineering for token ' +
      'optimization, and fine-tuning behaviors. The cost per inference ' +
      'determines whether a model becomes a product or stays a demo.',
  },
  {
    title: 'Leading engineering teams',
    body:
      'A people-first approach, inspiring teams through collaboration and ' +
      'software engineering mentorship. Close collaboration, regular feedback, ' +
      'and honest communication with the rest of leadership are what let a team ' +
      'consistently meet objectives and exceed KPIs.',
  },
  {
    title: 'Computational physics',
    body:
      'Aerodynamics came first, out of a mechanical engineering start and the ' +
      'goal of building race cars. Lately it is plasma dynamics, which I study ' +
      'for no professional reason at all.',
  },
  {
    title: 'Racing',
    body:
      'An SCCA license and most weekends at the track or prepping a car. ' +
      'Currently building a Type-65 Coupe-R with an LSX and a dual-clutch ' +
      'paddle-shift transmission. In simulation, top 100 in Gran Turismo 7 and ' +
      'Assetto Corsa Competizione.',
  },
];
