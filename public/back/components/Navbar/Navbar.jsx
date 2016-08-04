require('./Navbar.scss');

import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import autoBind from 'react-autobind'

const T = React.PropTypes;

var propTypes = {};

var defaultProps = {};

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  titleClick(){
    console.log('/')
  }

  render() {
    return (
      <div id="navbar">
        <AppBar
          onTitleTouchTap={this.titleClick}
          title={<span style={styles.title}>糯米丸</span>}
          iconElementLeft={<img className="navbar-logo" src="/images/nomiwan.png" alt=""/>}
          />
      </div>
    )
  }
}
Navbar.propTypes = propTypes;

Navbar.defaultProps = defaultProps;

export default Navbar;
