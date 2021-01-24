import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';


const { Navigator, Screen } = createBottomTabNavigator();

function StydyTabs(){
  return (
    <Navigator>
      <Screen name="Teacherlist" component={TeacherList}/>
      <Screen name="Favorites" component={Favorites}/>
    </Navigator>
  )
}

export default StydyTabs;