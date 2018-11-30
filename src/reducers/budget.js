import { budgetConstants } from '../constants';

const baseState = {
  isLoading: false,
  view: 'analysis',
};

const budget = (state = baseState, action) => {
  switch (action.type) {
    case budgetConstants.CHANGE_VIEW:
      return Object.assign({}, state, {
        view: action.view,
      });
    default:
      return state;
  }
};

export default budget;
