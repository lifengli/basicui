import { connect } from 'react-redux';
import { getNavigationMap } from '../../actions/navigation';

import AmazonRainforest from '../../components/navigation/Amazon_Rainforest';

const mapStateToProps = state => {
  return {
    navigationMap: state.navigation.get('navigationMap'),
    navigationContent: state.navigation.get('navigationContent')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetNavigationMap: params => {
      dispatch(getNavigationMap(params));
    }
  };
};

const AmazonRainforestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AmazonRainforest);

export default AmazonRainforestContainer;
