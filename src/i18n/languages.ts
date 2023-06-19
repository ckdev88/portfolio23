/* TODO: uitzoeken of deze nog nodig is, volgens mij niet */

const allLanguages = {
	en: 'English',
	nl: 'Nederlands',
	'pt-br': 'Português do Brasil'
} as const;

/**
 * Map of language codes to a written out language name.
 * Used to populate the language switcher in the navbar.
 */
export default import.meta.env?.PUBLIC_TWO_LANG ? twoLanguages : allLanguages;

export const rtlLanguages = new Set(['ar']);