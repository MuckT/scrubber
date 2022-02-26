import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react'
import About from '../About/About';
import ImageDetails from '../ImageDetails/ImageDetails';
import PictureScrub from '../PictureScrub/PictureScrub';

const Drawer = createDrawerNavigator();

export default function MyNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Image Selection" component={PictureScrub} />
      <Drawer.Screen name="Image Details" component={ImageDetails} />
      <Drawer.Screen name="About" component={About} />
      
    </Drawer.Navigator>
  );
}