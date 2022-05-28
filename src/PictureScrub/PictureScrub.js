import React, { useEffect } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, Pressable, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages, setActiveImage } from './reducer';
import { useNavigation } from '@react-navigation/native'


const PictureScrub = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const activeImage = useSelector(state => state.pictureScrub.activeImage)
  const selectedImages = useSelector(state => state.pictureScrub.selectedImages)

  const chooseImages = () => {
    ImagePicker.openPicker({
      multiple: true,
      includeExif: true,
      includeBase64: true
    }).then(images => {
      dispatch(selectImages(images))
    });   
  }

  const chooseImage = (id) => {
    dispatch(setActiveImage(id))
    navigation.navigate('Image Details')
  }  

  // Just debugging logs to view current value of selectedImages & activeImage
  // useEffect(() => console.log('Selected Images', selectedImages, selectedImages.length), [selectedImages]);
  // useEffect(() => console.log('Active Images', activeImage), [activeImage]);

  return (
    <SafeAreaView style={styles.container} scrollIndicatorInsets={{ right: 1 }}>
      <View style={{paddingTop: 10}}>
        <Pressable 
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? 'rgb(210, 230, 255)'
                  : 'white'
              },
              styles.wrapperCustom
            ]}
            onPress={() => chooseImages()}
          >
          <Text style={styles.button}>Select Image(s)</Text>
        </Pressable>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={selectedImages}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => chooseImage(item.localIdentifier)} >
              <Image source={{ uri: item.sourceURL }} style={styles.image} />
            </TouchableOpacity>
          )} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 20
  },
  button: {
    fontSize: 24,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    textAlign: 'center'
  },
  wrapperCustom: {
    borderRadius: 10,
  },
  image: {
    resizeMode: 'contain',
    padding: 20,
    width:300,
    height:300,
  },
})

export default PictureScrub