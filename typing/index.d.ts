interface enlist_option {
  small: boolean;
  big: boolean;
}

interface numlist_option {
  min: boolean;
  max: boolean;
}

interface kolist_option {
  consonant: boolean;
  vowel: boolean;
  double: boolean;
}

export function enlist(option: enlist_option): any[];
export function numlist(option: numlist_option): any[];
export function kolist(option: kolist_option): any[];
export const version: String;