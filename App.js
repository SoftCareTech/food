import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screen/SearchScreen';
import ResultsShowScreen from './src/screen/ResultsShowScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
},
  {
    initialRouterName: 'Search',
    defaultNavigationOption: {
      title: 'BusinessSearch'
    }
  })
export default createAppContainer(navigator)
