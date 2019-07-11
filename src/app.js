import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/msg/index'
    ],
    usingComponents: {
      'van-button': './components/vant-weapp/button/index'
    },
    tabBar: {
      "color": "#333",
      "selectedColor": "#00C2C7",
      "backgroundColor": "#fff",
      "borderStyle": "black",
      "list": [{
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "static/images/home.png",
          "selectedIconPath": "static/images/home_active.png"
        },
        {
          "pagePath": "pages/msg/index",
          "text": "消息",
          "iconPath": "static/images/msg.png",
          "selectedIconPath": "static/images/msg_active.png"
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
