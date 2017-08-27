import _ from 'lodash';
import Colors from './BaseColors';

const colors = {
  page: {
    header: Colors.blue.normal,
    top: Colors.black,
    middle: Colors.grey.normal,
    bottom: Colors.white
  },
  panel: {
    top: Colors.white,
    bottom: Colors.blue.normal
  },
  link: {
    top: Colors.green.lightest,
    middle: Colors.green.normal,
    bottom: Colors.blue.darker,
    disabled: Colors.grey.darker
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
  color: colors.page.header
};

const subHeader = {
  padding: 10,
  fontWeight: 'bold',
  fontSize: 24,
  color: colors.page.middle
};

const category = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 24,
  fontSize: 20
};

const activatedLink = {
  cursor: 'pointer',
  color: colors.link.middle
};

const inactivatedLink = {
  color: colors.link.disabled
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
  iconContainer,
  activatedLink,
  inactivatedLink
};
