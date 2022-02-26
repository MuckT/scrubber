import React from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

const ImageDetails = () => {
  const activeImage = useSelector(state => state.pictureScrub.activeImage)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator ={false}>
        <Image source={{ uri: activeImage.sourceURL }} style={styles.image} />
        <Text styles={styles.infoContainer}>{JSON.stringify(activeImage, null, "\t")} </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    margin: 12
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20
  },
  image: {
    marginTop: 10,
    resizeMode: 'contain',
    padding: 20,
    width:300,
    height:300,
  },
  infoContainer: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  }
})

export default ImageDetails