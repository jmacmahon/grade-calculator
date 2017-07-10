import { connect } from 'react-redux';

import MLList from '../presentational/module-list';

const mapStateToProps = state => ({ modules: state.modules.records });
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MLList);
