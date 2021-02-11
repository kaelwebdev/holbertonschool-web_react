export interface MajorCredits {
  credits: number;
  _majorCreditsBrand: void;
}

export interface MinorCredits {
  credits: number;
  _minorCreditsBrand: void;
}

export function sumMajorCredits (subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits
}

export function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits
}
