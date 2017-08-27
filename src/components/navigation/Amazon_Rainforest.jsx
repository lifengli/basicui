import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import EditorFormatColorFill from 'material-ui/svg-icons/editor/format-color-fill';

import { getNavigationContent } from '../../actions/navigation';
import homepageStyle from '../../themes/HomepageTheme';
import navigationStyle from '../../themes/NavigationTheme';

export default class AmazonRainforest extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      authorized: true
    };
  }

  componentDidMount() {
    this.context.store.dispatch(getNavigationContent());
  }

  getStyle() {
    const styles = _.cloneDeep(homepageStyle);
    const theme = this.context.uiTheme;
    styles.colors = theme.colors;
    styles.pageHeader = navigationStyle.pageHeader;
    styles.image = navigationStyle.image;
    styles.section = navigationStyle.section;

    return styles;
  }

  render() {
    const styles = this.getStyle();
    let pageitem = 'navigation ui';

    const amazonui = this.props.navigationContent ?
    this.props.navigationContent.map((content, index) => {
      return (
        <div key={content.get('id')} style={styles.section}>
          {(() => {
            pageitem = content.get('items').map(item => {
              return (
                <div key={item}>
                  <img src={item} alt={item} style={styles.image} />
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
      <div style={_.assign({}, styles.homepage, navigationStyle.navigationBg, this.props.style)}>
        <div style={styles.header}>
          <div style={styles.pageHeader}>Amazon Rainforest</div>
        </div>
        <div style={styles.content}>{amazonui}</div>
      </div>
    );
  }
}

AmazonRainforest.propTypes = {
  style: PropTypes.object
};

AmazonRainforest.defaultProps = {
  enabled: true,
  authorized: true
};

AmazonRainforest.contextTypes = {
  store: PropTypes.object,
  uiTheme: PropTypes.object,
  location: PropTypes.object,
  router: PropTypes.object
};
