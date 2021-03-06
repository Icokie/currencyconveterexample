import { useDispatch } from 'react-redux';
import { CurrencyType } from '../../types/CurrencyType';
import { ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { setCurrency, setAmount } from '../../pages/Exchange/ExchangeActions';
import { SelectHandlerType } from '../CurrencySelect/CurrencySelect';

export const useCurrencyPromptHandler = (
  index: number
): {
  amountChangeHandler: any;
  selectCurrencyHandler: SelectHandlerType;
} => {
  const dispatch = useDispatch();

  const selectCurrencyHandler = (currency: CurrencyType): void => {
    dispatch(setCurrency(currency, index));
  };

  const amountChangeHandler = ({
    target: { value }
  }: ChangeEvent<{ value: unknown }>): void => {
    dispatch(setAmount(value as number, index));
  };

  return { amountChangeHandler, selectCurrencyHandler };
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      margin: theme.spacing(2),
      padding: theme.spacing(3)
    }
  })
);
