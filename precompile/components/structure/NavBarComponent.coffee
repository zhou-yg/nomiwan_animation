React = require 'react'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes

UserGuide = cc {
  getInitialState:->
    {
      liArr:[{
        name:'消息'
        type:'message'
      },{
        name:'历史'
        type:'history'
      }]
      username:'zhouyg'
    }

  clickOnGuide:(type)->
    console.log type

  render: ->
    ce 'div',{ className:'user-msg' },
      ce 'span',{ className:'username' },@state.username
      ce 'ul',{ className:'user-guide' },
          @state.liArr.map (guideObj,i)=>
            ce 'li',{
              onClick: =>
                @clickOnGuide(guideObj.type)

              key:'guideLi'+i
            },guideObj.name

}


module.exports = cf cc {

  getInitialState:->
    {
      title:{
        name:'茵蒂克丝',
        logo:'images/index2.jpg'
      },
    }

  render:->
    title = @state.title

    ce 'header',{ id:'topNavbar' },
      ce 'h1',{},
        ce 'img',{ src:title.logo,alt:'logo',height:'100%'}
        title.name

      ce 'div',{ className:'user-profile' },
        ce UserGuide
        ce 'div',{ className:'avatar' }
}
