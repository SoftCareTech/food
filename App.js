import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screen/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
},
  {
    initialRouterName: 'Search',
    defaultNavigationOption: {
      title: 'BusinessSearch'
    }
  })
export default createAppContainer(navigator)
