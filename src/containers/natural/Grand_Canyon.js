import { connect } from 'react-redux';
import { getNaturalMap } from '../../actions/natural';

import GrandCanyon from '../../components/natural/Grand_Canyon';

const mapStateToProps = state => {
  return {
    naturalMap: state.natural.get('naturalMap'),
    naturalContent: state.natural.get('naturalContent')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetNaturalMap: params => {
      dispatch(getNaturalMap(params));
    }
  };
};

const GrandCanyonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GrandCanyon);

export default GrandCanyonContainer;
