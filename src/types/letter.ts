export interface Paragraph {
  en: string;
  zh: string;
}

export interface Letter {
  year: number;
  title: string;
  subtitle: string;
  paragraphs: Paragraph[];
}

export interface LetterMeta {
  year: number;
  title: string;
  subtitle: string;
  paragraphCount: number;
}

export interface LetterModule {
  default: Letter;
}
