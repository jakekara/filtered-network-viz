
/**
 * Filter an array arr against a boolean array MaskArr.
 * 
 * Undefined or non-boolean values in maskArr are treated as true, to err
 * on the side of not masking values unintentionally.
 * 
 * @param arr 
 * @param maskArr 
 */
export default function filterAgainstBooleanMask(arr: Array<any>, maskArr: Array<boolean>) {
    // if (arr.length != maskArr.length) {
    //     throw new TypeError("Length mismatch");
    // }

    return (arr || []).filter((_, i) => (maskArr || [])[i] === false ? false : true)

}