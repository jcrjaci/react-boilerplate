import { isNumber, numberIsPositive, numberIsZeroOrGreater } from './utils';

describe('Utils', () => {
  it('1 is valid number', () => {
    expect(isNumber(1)).toBeTruthy();
  });

  it('-1 is valid number', () => {
    expect(isNumber(-1)).toBeTruthy();
  });

  it('0 is valid number', () => {
    expect(isNumber(0)).toBeTruthy();
  });

  it('-0 is valid number', () => {
    expect(isNumber(-0)).toBeTruthy();
  });

  it('"1" is valid number', () => {
    expect(isNumber('1')).toBeTruthy();
  });

  it('"-1" is valid number', () => {
    expect(isNumber('-1')).toBeTruthy();
  });

  it('"0" is valid number', () => {
    expect(isNumber('0')).toBeTruthy();
  });

  it('"-0" is valid number', () => {
    expect(isNumber('-0')).toBeTruthy();
  });

  it('"string" is invalid number', () => {
    expect(isNumber('string')).toBeFalsy();
  });

  it('NaN is invalid number', () => {
    expect(isNumber(NaN)).toBeFalsy();
  });

  it('infinite is invalid number', () => {
    expect(isNumber(Number.POSITIVE_INFINITY)).toBeFalsy();
  });

  it('POSITIVE_INFINITY is invalid number', () => {
    expect(isNumber(Number.POSITIVE_INFINITY)).toBeFalsy();
  });

  it('NEGATIVE_INFINITY is invalid number', () => {
    expect(isNumber(Number.NEGATIVE_INFINITY)).toBeFalsy();
  });

  it('1 is a positive number', () => {
    expect(numberIsPositive(1)).toBeTruthy();
  });

  it('"1" is a positive number', () => {
    expect(numberIsPositive('1')).toBeTruthy();
  });

  it('"-1" is not a positive number', () => {
    expect(numberIsPositive('-1')).toBeFalsy();
  });

  it('0 is not a positive number', () => {
    expect(numberIsPositive(0)).toBeFalsy();
  });

  it('"0" is not a positive number', () => {
    expect(numberIsPositive('0')).toBeFalsy();
  });

  it('-0 is not a positive number', () => {
    expect(numberIsPositive(-0)).toBeFalsy();
  });

  it('-0 is not a positive number', () => {
    expect(numberIsPositive(-0)).toBeFalsy();
  });

  it('-infinity is not a positive number', () => {
    expect(numberIsPositive(Number.NEGATIVE_INFINITY)).toBeFalsy();
  });

  it('infinity is not a positive number', () => {
    expect(numberIsPositive(Number.POSITIVE_INFINITY)).toBeFalsy();
  });

  it('"string" is not a positive number', () => {
    expect(numberIsPositive('string')).toBeFalsy();
  });

  it('NaN is not a positive number', () => {
    expect(numberIsPositive(NaN)).toBeFalsy();
  });

  it('0 is a number zero or greater', () => {
    expect(numberIsZeroOrGreater(0)).toBeTruthy();
  });

  it('1 is a number zero or greater', () => {
    expect(numberIsZeroOrGreater(1)).toBeTruthy();
  });

  it('"0" is a number zero or greater', () => {
    expect(numberIsZeroOrGreater('0')).toBeTruthy();
  });

  it('"1" is a number zero or greater', () => {
    expect(numberIsZeroOrGreater('1')).toBeTruthy();
  });

  it('-0 is not a number zero or greater', () => {
    expect(numberIsZeroOrGreater(-0)).toBeTruthy();
  });

  it('"-0" is not a number zero or greater', () => {
    expect(numberIsZeroOrGreater('-0')).toBeTruthy();
  });

  it('-1 is not a number zero or greater', () => {
    expect(numberIsZeroOrGreater(-1)).toBeFalsy();
  });


  it('"-1" is not a number zero or greater', () => {
    expect(numberIsZeroOrGreater('-1')).toBeFalsy();
  });

  it('-infinity is not a number zero or greater', () => {
    expect(numberIsPositive(Number.NEGATIVE_INFINITY)).toBeFalsy();
  });

  it('infinity is not a number zero or greater', () => {
    expect(numberIsPositive(Number.POSITIVE_INFINITY)).toBeFalsy();
  });

  it('Nan is not a number zero or greater', () => {
    expect(numberIsPositive(NaN)).toBeFalsy();
  });
});
