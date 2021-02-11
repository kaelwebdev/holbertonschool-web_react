type UUID = number

export interface MajorCredits {
  credits: number;
  brand: UUID;
}

export interface MinorCredits {
  credits: number;
  brand: UUID;
}

let idCount = 0;
let idCount2 = 0;


export function sumMajorCredits (subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  idCount = idCount + 1;
  return { credits: subject1.credits + subject2.credits, brand: idCount } as MajorCredits
}

export function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  idCount2 = idCount2 + 1;
  return { credits: subject1.credits + subject2.credits, brand: idCount2  } as MinorCredits
}
