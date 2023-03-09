getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;

  if (average >= 90) {
    console.log("A");
  } else if (average >= 80) {
    console.log("B");
  } else if (average >= 70) {
    console.log("C");
  } else if (average >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}