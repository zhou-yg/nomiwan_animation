/**
 * Created by zyg on 15/11/6.
 */
require('../../styles/main.scss');
require('../../common/utils');

import ReactDOM from 'react-dom'
import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from '../components/Navbar'

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


