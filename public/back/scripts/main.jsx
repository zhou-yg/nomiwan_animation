/**
 * Created by zyg on 15/11/6.
 */
require('../../styles/main.scss');
require('../../common/utils');

import ReactDOM from 'react-dom'
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from '../components/Navbar'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Main extends React.Component {

  render(){
    return (
      <div>
        <MuiThemeProvider>
          <Navbar />
        </MuiThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.querySelector('#topContainer')
);


