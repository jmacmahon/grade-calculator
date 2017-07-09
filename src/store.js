import { createStore, combineReducers } from 'redux';

const initialModules = [
  {
    code: 'COM3002',
    name: 'Human-Centred Systems Design',
    credits: 20,
    mark: 65,
  },
];

function modules(state = initialModules, action) {
  switch (action.type) {
    case 'ADD_MODULE':
      return state.concat([action.module]);

    default:
      return state;
  }
}

export default createStore(combineReducers({ modules }));
