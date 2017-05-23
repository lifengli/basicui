import { connect } from 'react-redux';
import { homepageLayout } from '../actions/homepage';

import Homepage from '../components/Homepage';

const mapStateToProps = state => {
  return {
    homepageLayout: state.homepage.get('pageLayout'),
    homepageContent: state.homepage.get('pageContent')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHomepageLayout: params => {
      dispatch(homepageLayout(params));
    }
  };
};

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

export default HomepageContainer;
