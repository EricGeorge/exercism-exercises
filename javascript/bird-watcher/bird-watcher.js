// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;

  for (let day = 0; day < birdsPerDay.length; day++) {
    totalBirds += birdsPerDay[day];
  }

  return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0;

  for (let day = 0; day < birdsPerDay.length; day++) {
    if (Math.floor(day / 7) + 1 === week) {
      totalBirds += birdsPerDay[day];
    }
  }

  return totalBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {

  for (let day = 0; day < birdsPerDay.length; day++) {
    if (day % 2 === 0) {
      birdsPerDay[day] = birdsPerDay[day] + 1;
    }
  }

  return birdsPerDay;
}
