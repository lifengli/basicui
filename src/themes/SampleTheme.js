import _ from 'lodash';
import Colors from './BaseColors';

const colors = {
  page: {
    top: Colors.black,
    bottom: Colors.white
  },
  panel: {
    top: Colors.white,
    bottom: Colors.blue.normal
  },
  icon: {
    svg: Colors.blue.darker,
    secondary: Colors.grey.darker,
    legend: Colors.grey.darker
  },
  label: {
    titleI: Colors.blue.darker,
    titleII: Colors.grey.darker,
    text: Colors.grey.darker
  },
  widget: {
    normal: {
      top: Colors.blue.darker,
      bottom: Colors.white,
      border: Colors.blue.darker
    },
    preset: {
      top: Colors.white,
      bottom: Colors.blue.darker,
      border: Colors.blue.darker
    },
    hover: {
      top: Colors.white,
      bottom: Colors.blue.darkest,
      border: Colors.blue.darkest
    },
    active: {
      top: Colors.white,
      bottom: Colors.blue.normal,
      border: Colors.blue.normal
    },
    disabled: {
      top: Colors.grey.normal,
      bottom: Colors.grey.lightest,
      border: Colors.grey.lighter
    }
  }
};

const pageHeader = {
  margin: 0,
  padding: 10,
  fontWeight: 'bold',
  fontSize: 36,
  color: Colors.blue.darker
};

const subHeader = {
  padding: 10,
  fontWeight: 'bold',
  fontSize: 24,
  color: Colors.grey.darkest
};

const category = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 24,
  fontSize: 20,
  color: Colors.grey.darker
};

const iconContainer = {
  marginLeft: 10,
  marginRight: 10
};

export default {
  colors,
  pageHeader,
  subHeader,
  category,
  iconContainer
};
