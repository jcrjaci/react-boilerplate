/**
 * validate if the parameter is a valid number.
 * @param  {any} number
 * @return {Boolean} true if the parameter is a valid number or false if not.
 */
export function isNumber(number) {
  const numberConverted = Number(number);

  return !Number.isNaN(numberConverted) && Number.isFinite(numberConverted);
}

/**
 * Validate if the parameter is a valid positive number.
 * @param  {any} number
 * @return {Boolean} true if the parameter is a valid positive number.
 */
export function numberIsPositive(number) {
  const numberConverted = Number(number);

  return isNumber(number) && numberConverted > 0;
}

/**
 * Validate if the parameter is a valid number and if is zero or greater.
 * @param  {any} number
 * @return {Boolean} true if the parameter is a valid number and if is zero or greater.
 */
export function numberIsZeroOrGreater(number) {
  const numberConverted = Number(number);

  return isNumber(number) && numberConverted >= 0;
}
