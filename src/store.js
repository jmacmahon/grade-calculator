import { createStore, combineReducers } from 'redux';
import _ from 'lodash';
import uuidv4 from 'uuid';

const initialModulesState = {
  records: {},
};

function addModule(state, module) {
  const newRecords = {};
  newRecords[module.id] = module;
  return _.merge({}, state, { records: newRecords });
}

function removeModule(state, moduleKey) {
  return {
    nextKey: state.nextKey,
    records: _.omit(state.records, moduleKey),
  };
}

function editModule(state, moduleKey, module) {
  const newRecords = {};
  newRecords[moduleKey] = module;
  return _.merge({}, state, { records: newRecords });
}

function modules(state = initialModulesState, action) {
  switch (action.type) {
    case 'ADD_MODULE':
      return addModule(state, action.module);
    case 'REMOVE_MODULE':
      return removeModule(state, action.moduleKey);
    case 'EDIT_MODULE':
      return editModule(state, action.moduleKey, action.module);
    default:
      return state;
  }
}

const store = createStore(combineReducers({ modules }));
export default store;

store.dispatch({
  type: 'ADD_MODULE',
  module: ({
    id: uuidv4(),
    code: 'COM3002',
    name: 'Human-Centred Systems Design',
    credits: 20,
    mark: 65,
  }),
});
