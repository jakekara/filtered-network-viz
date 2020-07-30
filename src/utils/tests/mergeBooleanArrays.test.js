import mergeBooleanArrays from "../mergeBooleanArrays"

it('passing no arrays raises an error', () => {
  expect(mergeBooleanArrays()).toEqual(null)
});

it('passing empty array returns empty array', () => {
  expect(mergeBooleanArrays([])).toEqual([])
});

it('passing single array returns identical array', () => {
  expect(mergeBooleanArrays([true, true, true, false]))
    .toEqual([true, true, true, false])
});

it('passing all trues and falses turns to all falses', () => {
  expect(mergeBooleanArrays(
    [true, true, true, true],
    [false, false, false, false]))
    .toEqual([false, false, false, false])
});

it('merges three arrays', () => {
  expect(mergeBooleanArrays(
    [true, false, true, true],
    [true, true, true, true],
    [false, false, false, true]))
    .toEqual([false, false, false, true])
});

it('false always wins', () => {

    expect(mergeBooleanArrays(
      [true],
      [true],
      [true],
      [false]
    )).toEqual([false])
});

it('length mismatches default empty elements to true', () =>{

    expect(mergeBooleanArrays([true, true], []))
    .toEqual([true, true])
})

it('coerces non-boolean elements to true', () =>{
  expect(mergeBooleanArrays([true, true], ["false"]))
  .toEqual([true, true])
})

