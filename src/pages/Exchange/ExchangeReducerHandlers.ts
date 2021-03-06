import { ExchangeType } from './exchangeTypes';
import { convertThroughCrossCourse, getExchangeRates } from '../../utils';
import { SetCurrencyType, SetAmountType } from './ExchangeActions';
import { RateType } from '../../types/FxApi';

export const setCurrencyActionHandler = (
  state: ExchangeType,
  payload: SetCurrencyType
): ExchangeType => {
  const { currency, index } = payload;
  const {
    currencies: [base, target]
  } = state;

  const { amount } = base;

  if (index === 0) {
    const [baseCurrencyRate, targetCurrencyRate] = getExchangeRates(
      currency,
      target.currency,
      state
    );

    return {
      ...state,
      currencies: [
        { ...base, currency },
        {
          ...target,
          amount: convertThroughCrossCourse(
            baseCurrencyRate,
            targetCurrencyRate,
            amount
          )
        }
      ]
    };
  }

  const [baseCurrencyRate, targetCurrencyRate] = getExchangeRates(
    currency,
    base.currency,
    state
  );

  return {
    ...state,
    currencies: [
      base,
      {
        amount: convertThroughCrossCourse(
          targetCurrencyRate,
          baseCurrencyRate,
          amount
        ),
        currency
      }
    ]
  };
};

export const flipExchangeActionHandler = (
  state: ExchangeType
): ExchangeType => {
  const { currencies, ...rest } = state;
  const reversedCurrencies = [...currencies].reverse();

  return { ...rest, currencies: reversedCurrencies };
};

export const setAmountActionHandler = (
  state: ExchangeType,
  payload: SetAmountType
): ExchangeType => {
  const { amount, index } = payload;
  const {
    currencies: [base, target]
  } = state;

  const [baseCurrencyRate, targetCurrencyRate] = getExchangeRates(
    base.currency,
    target.currency,
    state
  );

  if (index === 0) {
    return {
      ...state,
      currencies: [
        { ...base, amount },
        {
          ...target,
          amount: convertThroughCrossCourse(
            baseCurrencyRate,
            targetCurrencyRate,
            amount
          )
        }
      ]
    };
  }

  return {
    ...state,
    currencies: [
      {
        ...base,
        amount: convertThroughCrossCourse(
          targetCurrencyRate,
          baseCurrencyRate,
          amount
        )
      },
      { ...target, amount }
    ]
  };
};

export const setRatesActionHandler = (
  state: ExchangeType,
  rates: RateType
): ExchangeType => ({ ...state, rates });
