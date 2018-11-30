import { budgetConstants } from '../constants';

export const changeView = (view) => ({
  type: budgetConstants.CHANGE_VIEW,
  view,
});
