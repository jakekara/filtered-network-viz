/**
 * Merge a list of same-length boolean arrays (by ANDing)
 * @param {*} arrs 
 */
export default function mergeBooleanArrays(){

    const arrs = Array.prototype.slice.call(arguments);
    if (arrs.length < 1){ return null}
    if (arrs.length < 2){ return arrs[0]}

    return arrs.reduce((a, b) => a.map((c, i) => {

        // coerce undefined values to true so that gaps in array
        // do not cause items to be filtered
        const coerce = val => typeof val === "boolean" ? val : true
        return coerce(b[i]) && coerce(c)
    }))
}