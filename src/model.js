import { createStore } from 'redux';

const initialModules = [
  {
    code: 'COM3002',
    title: 'Human-Centred Systems Design',
    credits: 20,
    mark: 65,
  },
];

function modulesList(state = initialModules, action) {
  switch (action.type) {
    case 'ADD_MODULE':
      return state.concat([action.module]);

    default:
      return state;
  }
}

export const modulesListStore = createStore(modulesList);

export const test = '';
