export default function numberIsPositive(number) {
  const numberConverted = Number(number);

  return !Number.isNaN(numberConverted) && Number.isFinite(numberConverted) && numberConverted >= 0;
}
