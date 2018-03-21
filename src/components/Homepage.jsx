import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import EditorFormatColorFill from 'material-ui/svg-icons/editor/format-color-fill';

import { getHomepageContent } from '../actions/homepage';
import homepageStyle from '../themes/HomepageTheme';

export default class Homepage extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      authorized: true
    };
  }

  componentDidMount() {
    this.context.store.dispatch(getHomepageContent());
  }

  getStyle() {
    const styles = _.cloneDeep(homepageStyle);
    const theme = this.context.uiTheme;
    styles.colors = theme.colors;
    styles.pageHeader = theme.pageHeader;
    styles.subHeader = theme.subHeader;
    styles.category = theme.category;
    styles.iconContainer = theme.iconContainer;
    styles.activatedLink = theme.activatedLink;
    styles.inactivatedLink = theme.inactivatedLink;

    return styles;
  }

  render() {
    const styles = this.getStyle();
    let pageitem = 'basic ui component';

    const basicui = this.props.homepageContent ?
      this.props.homepageContent.map((content, index) => {
        return (
          <div key={content.get('id')} style={styles.section}>
            <div style={styles.subHeader}>{content.get('name')}</div>
            {(() => {
              // temporarily activate first link
              const navactive = new RegExp(/rainforest/i);
              const natactive = new RegExp(/canyon/i);
              pageitem = content.get('items').map(item => {
                if (navactive.test(item)) {
                  return (
                    <div
                      key={item}
                      style={_.assign(styles.activatedLink, styles.category)}
                      onClick={() => {
                        this.context.router.history.push('/navigation');
                      }}
                    >
                      {item}
                    </div>
                  );
                }
                else if (natactive.test(item)) {
                  return (
                    <div
                      key={item}
                      style={_.assign(styles.activatedLink, styles.category)}
                      onClick={() => {
                        this.context.router.history.push('/natural');
                      }}
                    >
                      {item}
                    </div>
                  );
                }

                return (
                  <div key={item} style={_.assign(styles.inactivatedLink, styles.category)}>{item}</div>
                );
              });
            })()}
            {pageitem}
          </div>
        );
      })
      : 'loading data ...';

    const titleIcon = React.cloneElement(<EditorFormatColorFill />, {color: '#FF7300', width: 24, height: 24});

    return (
      <div style={_.assign({}, styles.homepage, styles.homepageBg, this.props.style)}>
        <div style={styles.header}>
          <div style={styles.pageHeader}><span style={styles.iconContainer}>{titleIcon}</span>Basic UI</div>
        </div>
        <div style={styles.content}>{basicui}</div>
      </div>
    );
  }
}

Homepage.propTypes = {
  style: PropTypes.object,
  homepageContent: PropTypes.object
};

Homepage.defaultProps = {
  enabled: true,
  authorized: true
};

Homepage.contextTypes = {
  store: PropTypes.object,
  uiTheme: PropTypes.object,
  location: PropTypes.object,
  router: PropTypes.object,
  applicationId: PropTypes.string
};
