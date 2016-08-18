require('./TablePages.scss');

import React,{Component} from 'react'
import ReactDOM from 'react-dom'
const T = React.PropTypes;
import autoBind from 'react-autobind'

import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

import Paper from 'material-ui/Paper'

var propTypes = {
  tabNumber: T.number,
};

var defaultProps = {
  tabNumber: 7,
};

var styles = {
  gridList: {
    width: '100%',
    height: 500,
  },
  paper: {
    width: 150,
    height: 150,
    display: 'inline-block'
  }
}

class TablePages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        label: '日'
      },
        {
          label: '一'
        },
        {
          label: '二'
        },
        {
          label: '三'
        },
        {
          label: '四'
        },
        {
          label: '五'
        },
        {
          label: '六'
        }]
    };
    autoBind(this);
  }

  buildTab() {

    var {list} = this.state

    return list.map((tabOne, i)=> {

      var key = `day${i}`;

      var {label} = tabOne;

      return (
        <Tab label={label} key={key}>
          <div className="tab-content">

            <GridList
              cellHeight={200}
              cols={5}
              padding={10}
              style={styles.gridList}>

                <GridTile
                  title="这个美术社有大问题"
                  subtitle="一群奇怪的人"
                  >
                  <img src="/images/animation/meishushe.jpg" alt=""/>
                </GridTile>

              <GridTile
                title="这个美术社有大问题"
                subtitle={<span>一群奇怪的人</span>}
                >
                <img src="/images/animation/meishushe.jpg" alt=""/>
              </GridTile>

              <GridTile
                title="这个美术社有大问题"
                subtitle="一群奇怪的人"
                >
                <img src="/images/animation/meishushe.jpg" alt=""/>
              </GridTile>

              <GridTile
                title="这个美术社有大问题"
                subtitle="一群奇怪的人"
                >
                <img src="/images/animation/meishushe.jpg" alt=""/>
              </GridTile>

            </GridList>

          </div>
        </Tab>
      )
    });
  }

  render() {
    return (
      <div id="tablePages">
        <Tabs>
          {this.buildTab()}
        </Tabs>
      </div>
    )
  }
}
TablePages.propTypes = propTypes;

TablePages.defaultProps = defaultProps;

export default TablePages;
