let numberArray1 = [1, 2, 4, 5, 6];
let stringArray1 = ["string1", "string3"];

const fourIndex = numberArray1.findIndex((a) => a === 4);
const string3Index = stringArray1.findIndex((a) => a === "string3");

export default function FindIndex() {
  return (
  <div>
    <h4>FindIndex Function</h4>
    <br></br>{fourIndex}
    <br></br>{string3Index}</div>);
}
