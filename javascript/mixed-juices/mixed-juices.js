// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;

  switch (name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3.0;
      break;
    case 'All or Nothing':
      time = 5.0;
      break;
    default:
      time = 2.5;
  }

  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded < 1) return 0;
  if (limes.length < 1) return 0;

  let index = 0;
  let totalSlices = 0;
  while (index < limes.length) {
    let slices = 0;
    switch (limes[index]) {
      case 'small':
        slices = 6;
        break;
      case 'medium':
        slices = 8;
        break;
      case 'large':
        slices = 10;
        break;
    }
    totalSlices += slices;

    if (totalSlices > wedgesNeeded) break;
    if (index + 1 === limes.length) break;

    index++;
  }

  return index + 1;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    let timeToMix = timeToMixJuice(orders.shift());
    timeLeft -= timeToMix;
  }
  return orders;
}
