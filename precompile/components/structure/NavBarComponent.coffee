React = require 'react'

NavUserProfile = require './NavUserProfileComponent'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes

module.exports = cf cc {

  propTypes:
    userMsg:T.object.isRequired

  getInitialState:->
    {
      title:{
        name:'茵蒂克丝',
        logo:'images/index2.jpg'
      },
    }

  render:->
    console.log 'render navbar'

    props = @props
    title = @state.title

    ce 'header',{ id:'topNavbar' },
      ce 'h1',{},
        ce 'img',{ src:title.logo,alt:'logo',height:'100%'}
        title.name
      NavUserProfile { userMsg:props.userMsg }
}
