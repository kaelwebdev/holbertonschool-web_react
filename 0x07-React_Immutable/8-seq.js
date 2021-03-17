import { Seq, List } from 'immutable';

export default function printBestStudents(grades) {
  return Seq(List(grades).filter((v) => v.score >= 70));
}
