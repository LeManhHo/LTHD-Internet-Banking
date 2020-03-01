import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the iBanking state domain
 */

const selectIBankingDomain = state => state.iBanking || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by IBanking
 */

const makeSelectIBanking = () =>
  createSelector(
    selectIBankingDomain,
    substate => substate,
  );

export default makeSelectIBanking;
export { selectIBankingDomain };
