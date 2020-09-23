import { createStore } from 'redux';

const INITIAL_STATE = {
  dataItem: [],
};

function itemClicked(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CATEGORY_ITEM_DATA':
      return {data: [action.dataItem]};
    default:
      return state;
  }
}

const store = createStore(itemClicked);

export default store;