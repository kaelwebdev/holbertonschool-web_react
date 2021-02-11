export interface MajorCredits {
  credits: number;
  _majorCreditsBrand: void;
}

export interface MinorCredits {
  credits: number;
  _minorCreditsBrand: void;
}

export const sumMajorCredits = (subject1: number, subject2: number): MajorCredits =>
({
  credits: subject1 + subject2
} as MajorCredits);

export const sumMinorCredits = (subject1: number, subject2: number): MinorCredits =>
({
  credits: subject1 + subject2
} as MinorCredits);