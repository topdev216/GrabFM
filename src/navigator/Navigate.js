import {createAppContainer, createStackNavigator} from 'react-navigation';
import CaptureButton from '../components/CaptureButton';
import PhotoTags from '../components/Tags';
import Indicators from '../components/indicators';
import Platforms from '../components/platforms';
import Themes from '../components/themes';

const Navigator = createStackNavigator({
    Home: PhotoTags,
    Tags: PhotoTags
},
{
    initialRouteName: 'Home'
});

const RootStack = createStackNavigator({
    Main: {
        screen: Navigator
    },
    Indicators: {
        screen: Indicators
    },
    Platforms: {
        screen: Platforms
    },
    Themes: {
        screen: Themes
    }
},
{
    mode: 'modal',
    headerMode: 'none'
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;