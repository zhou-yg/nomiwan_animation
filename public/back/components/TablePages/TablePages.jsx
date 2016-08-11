require('./TablePages.scss');

import React,{Component} from 'react'
import ReactDOM from 'react-dom'
const T = React.PropTypes;

import autoBind from 'react-autobind'
var propTypes = {
  tabNumber:T.number,
};

var defaultProps = {
  tabNumber:7,
};

class TablePages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  render() {
    return (
      <div id="tablePages">
      </div>
    )
  }
}
TablePages.propTypes = propTypes;

TablePages.defaultProps = defaultProps;

export default TablePages;
