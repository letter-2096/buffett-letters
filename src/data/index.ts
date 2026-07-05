import type { Letter, LetterMeta } from '../types/letter';

const letterModules = import.meta.glob<{ default: Letter }>(
  './[0-9]*.ts',
  { eager: true }
);

const letters: Map<number, Letter> = new Map();

for (const path in letterModules) {
  const letter = letterModules[path].default;
  letters.set(letter.year, letter);
}

export function getAvailableYears(): LetterMeta[] {
  return Array.from(letters.values())
    .map((l) => ({
      year: l.year,
      title: l.title,
      subtitle: l.subtitle,
      paragraphCount: l.paragraphs.length,
    }))
    .sort((a, b) => a.year - b.year);
}

export function getLetter(year: number): Letter | undefined {
  return letters.get(year);
}

export function getAllLetters(): Letter[] {
  return Array.from(letters.values()).sort((a, b) => a.year - b.year);
}
