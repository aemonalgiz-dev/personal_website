/**
 * Curation for the live GitHub listing on /code.
 *
 * `featured` repos are pulled to the top in this order and use the `blurb` you
 * write rather than the GitHub description. A name that matches no public repo
 * is skipped silently, so a stale entry degrades rather than breaks. `hidden`
 * repos never appear, and forks are dropped before any of this runs.
 */

export const featured: { name: string; blurb?: string }[] = [
  {
    name: 'fragile_tokens',
    blurb:
      'Finds the tokens a language model cannot copy inside ordinary text, ' +
      'including the ones that pass every single-token glitch probe. Scans a ' +
      'stratified sample against a bank of contexts, classifies each token by ' +
      'how often the copy fails and how it fails, and ranks the rest of the ' +
      'vocabulary by embedding proximity to the glitch class. The tool behind ' +
      'the Fragile Tokens paper.',
  },
  {
    name: 'oop_ml',
    blurb:
      'An object-oriented machine learning library written from scratch on ' +
      'numpy alone: regression through ensembles, kernels, PCA, tokenization ' +
      'and embeddings. Columns carry their own names, metrics live on an ' +
      'evaluation object, every failure is a typed error, and every model with ' +
      'intermediates worth seeing has a second method that keeps the working. ' +
      'It is also what computes the playgrounds on the teaching site.',
  },
  {
    name: 'DatesetExtraction',
    blurb:
      'Pulling question-and-answer datasets out of a language model, written as ' +
      'the worked example for the video it accompanies. The most-starred thing ' +
      'here, which is a fair reflection of where the difficulty in fine-tuning ' +
      'actually sits: not in the training loop, in the data.',
  },
];

/** Never listed. */
export const hidden: string[] = ['rust_ml'];

/** Repos with fewer than this many stars are dropped from the unfeatured list. */
export const minStars = 0;

/** Cap on the unfeatured list, so the page stays readable. */
export const maxOther = 12;
