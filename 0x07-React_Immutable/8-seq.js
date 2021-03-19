import { Seq } from 'immutable';


/* eslint-disable no-param-reassign */
export default function printBestStudents(grades) {
  const s = Seq(grades);

  console.log(
    s.filter((v) => v.score >= 70).map((x) => {
      x.firstName = x.firstName.charAt(0)
        .toUpperCase() + x.firstName.slice(1);
      x.lastName = x.lastName
        .charAt(0).toUpperCase() + x.lastName.slice(1);
      return x;
    }).toJS(),
  );
}
