/**
 * Re-maps a number from one range to another.
 * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
 * @param {number} value Value to be converted.
 * @param {number} min1 Lower bound of the value's current range.
 * @param {number} max1 Upper bound of the value's current range.
 * @param {number} min2 Lower bound of the value's target range.
 * @param {number} max2 Upper bound of the value's target range.
 * @returns {number}
 */
function Map(value, min1, max1, min2, max2) {
    return ((value - min1) / (max1 - min1)) * (max2 - min2) + min2;
}