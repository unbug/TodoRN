function formatMoney(num) {
  return (num).toFixed(2).replace(/./g, function (c, i, a) {
    return i && c !== "." && !((a.length - i) % 3) ? ',' + c : c;
  });
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param min
 * @param max
 * @returns {*}
 */
function randomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default {
  formatMoney: formatMoney,
  randomArbitrary: randomArbitrary
}
