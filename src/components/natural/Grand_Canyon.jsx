import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getNaturalContent } from '../../actions/natural';
import homepageStyle from '../../themes/HomepageTheme';
import navigationStyle from '../../themes/NavigationTheme';
import naturalStyle from '../../themes/NaturalTheme';

export default class GrandCanyon extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      authorized: true
    };
  }

  componentDidMount() {
    this.context.store.dispatch(getNaturalContent());
  }

  getStyle() {
    const styles = _.cloneDeep(homepageStyle);
    const theme = this.context.uiTheme;
    styles.colors = theme.colors;

    return styles;
  }

  render() {
    const styles = this.getStyle();
    let pageitem = 'natural ui';

    const canyonui = this.props.naturalContent ?
    this.props.naturalContent.map((content, index) => {
      return (
        <div key={content.get('id')} style={navigationStyle.section}>
          {(() => {
            pageitem = content.get('items').map(item => {
              return (
                <div key={item}>
                  <img src={item} alt={item} style={navigationStyle.image} />
                </div>
              );
            });
          })()}
          {pageitem}
        </div>
      );
    })
    : 'loading data ...';

    return (
      <div style={_.assign({}, styles.homepage, naturalStyle.naturalBg, this.props.style)}>
        <div style={_.assign({}, navigationStyle.linkList)}>
          <span style={_.assign({}, navigationStyle.link)}
            onClick={() => {
              this.context.router.history.push('/');
            }}
          >Home</span>
          <span style={_.assign({}, navigationStyle.link)}
            onClick={() => {
              this.context.router.history.push('/navigation');
            }}
          >Amazon Rainforest</span>
        </div>
        <div style={styles.header}>
          <div style={navigationStyle.pageHeader}>Grand Canyon</div>
        </div>
        <div style={styles.content}>{canyonui}</div>
      </div>
    );
  }
}

GrandCanyon.propTypes = {
  style: PropTypes.object
};

GrandCanyon.defaultProps = {
  enabled: true,
  authorized: true
};

GrandCanyon.contextTypes = {
  store: PropTypes.object,
  uiTheme: PropTypes.object,
  location: PropTypes.object,
  router: PropTypes.object
};
