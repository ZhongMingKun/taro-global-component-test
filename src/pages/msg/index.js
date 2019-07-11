import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    // usingComponents: {
    //   'van-button': '../../components/vant-weapp/button/index'
    // },
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='msg'>
        <van-button>我是按钮</van-button>
      </View>
    )
  }
}
