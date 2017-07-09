import { connect } from 'react-redux';

import ModuleEdit from '../presentational/module-edit';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  saveModule: module => dispatch({ type: 'ADD_MODULE', module }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModuleEdit);
