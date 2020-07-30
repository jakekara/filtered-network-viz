import filterAgainstBooleanArray from "../filterAgainstBooleanMask"

it('passing no args returns an empty array', () => {
    expect(
        filterAgainstBooleanArray()
    ).toEqual([])

})

it('length mismatch uses undefined as true', () => {
    expect(
        filterAgainstBooleanArray([1, 2, 3], [false])
    ).toEqual([2, 3])
});

it('passing no second mask array returns the original array', () => {
    expect(
        filterAgainstBooleanArray([1, 2, 3])
    ).toEqual([1, 2, 3])
})

it('all true mask returns original array', () => {
    expect(
        filterAgainstBooleanArray(
            [1, 2, 3],
            [true, true, true]
        ))
        .toEqual([1, 2, 3])

})

it('falsey values are not treated as false', () => {
    expect(
        filterAgainstBooleanArray(
            [1, 2, 3],
            [0, 0, 0]
        ))
        .toEqual([1, 2, 3])

})


it('all false returns empty array', () => {
    expect(
        filterAgainstBooleanArray(
            [1, 2, 3],
            [false, false, false]
        ))
        .toEqual([])

})

it('basic masks work as expected', () => {
    expect(
        filterAgainstBooleanArray(
            [1, 2, 3],
            [false, true, false]
        ))
        .toEqual([2])

    expect(
        filterAgainstBooleanArray(
            [2, 2, 2],
            [false, true, false]
        ))
        .toEqual([2])

    expect(
        filterAgainstBooleanArray(
            [2, 2, 2],
            [false, true, true]
        ))
        .toEqual([2,2])

})
