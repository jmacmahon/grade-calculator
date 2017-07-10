import { connect } from 'react-redux';
import uuidv4 from 'uuid';

import ModuleEdit from '../presentational/module-edit';

const mapStateToProps = state => ({ modules: state.modules.records });

const mapDispatchToProps = dispatch => ({
  saveModule: ({ module, id }) => {
    if (id === '') {
      const moduleWithId = Object.assign({}, module, { id: uuidv4() });
      dispatch({ type: 'ADD_MODULE', module: moduleWithId });
    } else {
      dispatch({ type: 'EDIT_MODULE', moduleKey: id, module });
    }
  },
  deleteModule: moduleKey => dispatch({ type: 'DELETE_MODULE', moduleKey }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModuleEdit);
