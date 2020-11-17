import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; // navigator is put into this container so it can be used for the general application -- look to 'export default' line
import MainScreen from '../screen/MainScreen';
import MoodMainScreen from '../screen/MoodMainScreen';
import NewMoodScreen from '../screen/NewMoodScreen';
import FoodMainScreen from '../screen/FoodMainScreen';

const TrackNavigator = createStackNavigator({
    // will use key value pair for referencing the screens
    
    Tracker: MainScreen,
    MoodMain: { // longer way of doing it -- if there is more than just a screen component that has to be referred to, this is what you'd use
        screen: MoodMainScreen,
    },
    NewMood: NewMoodScreen,
    FoodMain: FoodMainScreen,

});

export default createAppContainer(TrackNavigator); 