import { connect } from 'react-redux';

import MLList from '../presentational/module-list';

const mapStateToProps = state => ({ modules: state.modules });
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MLList);
