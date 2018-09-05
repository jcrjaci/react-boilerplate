export function isNumber(number) {
  const numberConverted = Number(number);

  return !Number.isNaN(numberConverted) && Number.isFinite(numberConverted);
}

export function numberIsPositive(number) {
  const numberConverted = Number(number);

  return isNumber(number) && numberConverted > 0;
}

export function numberIsZeroOrGreater(number) {
  const numberConverted = Number(number);

  return isNumber(number) && numberConverted >= 0;
}
