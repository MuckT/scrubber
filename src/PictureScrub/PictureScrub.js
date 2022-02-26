import React, { useEffect} from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList, Image, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import { selectImages, setActiveImage } from './reducer';
import { useDispatch, useSelector } from 'react-redux'


const PictureScrub = () => {
  const dispatch = useDispatch()
  const activeImage = useSelector(state => state.pictureScrub.activeImage)
  const selectedImages = useSelector(state => state.pictureScrub.selectedImages)

  const chooseImages = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      dispatch(selectImages(images))
    });   
  }

  const chooseImage = (id) => {
    dispatch(setActiveImage(id))
  }  

  // Just some logs to view current value of selectedImages & activeImage
  useEffect(() => console.log('Selected Images', selectedImages, selectedImages.length), [selectedImages]);
  useEffect(() => console.log('Active Images', activeImage), [activeImage]);

  return (
    <SafeAreaView style={styles.container} scrollIndicatorInsets={{ right: 1 }}>
      <TouchableOpacity onPress={() => chooseImages()}>
        <Text style={styles.title}>Select Image(s)</Text>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={selectedImages}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => chooseImage(item.localIdentifier)} >
            <Image source={{ uri: item.sourceURL }} style={styles.image} />
          </TouchableOpacity>
        )} />
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
  title: {
    fontSize: 24,
    padding: 8,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    resizeMode: 'contain',
    padding: 20,
    width:300,
    height:300,
  },
})

export default PictureScrub