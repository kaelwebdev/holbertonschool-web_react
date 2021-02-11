export interface MajorCredits {
  credit: number;
  _majorCreditsBrand: void;
}

export interface MinorCredits {
  credit: number;
  _minorCreditsBrand: void;
}

export const sumMajorCredits = (subject1: number, subject2: number): MajorCredits =>
({
  credit: subject1 + subject2
} as MajorCredits);

export const sumMinorCredits = (subject1: number, subject2: number): MinorCredits =>
({
  credit: subject1 + subject2
} as MinorCredits);