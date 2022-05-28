import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import RNFS from 'react-native-fs';
import { makeDirectory, saveCopyToCameraRoll  } from '../Utils/SaveUtils'
import { removeExif } from '../Utils/ExifUtils'


const ImageDetails = () => {
  const activeImage = useSelector(state => state.pictureScrub.activeImage)
  const folderPath = RNFS.DocumentDirectoryPath + "/assets";
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    makeDirectory(folderPath); //execute this function on first mount
  }, []);

  const saveFile = async () => {
    try {
      setSaving(true)
      let cleaned = await removeExif(activeImage.sourceURL)
      await saveCopyToCameraRoll(cleaned)
    } catch(error) {
      console.warn(error)
    } finally {
      setSaving(false)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator ={false}>
        <Image source={{ uri: activeImage.sourceURL }} style={styles.image} />
        <Pressable 
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'white'
            },
            styles.wrapperCustom
          ]}
          disabled={saving} 
          onPress={() => saveFile()}
        >
          <Text style={styles.button}>Save Image</Text>
        </Pressable>
        <Text styles={styles.infoContainer}>exif: {JSON.stringify(activeImage.exif, null, "\t")} </Text>
        <Text styles={styles.infoContainer}>{JSON.stringify(activeImage, ['filename'], "\t")} </Text>
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
    marginTop: 20,
    resizeMode: 'contain',
    padding: 10,
    width:300,
    height:300,
  },
  infoContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  button: {
    fontSize: 24,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  wrapperCustom: {
    borderRadius: 10,
  },
})

export default ImageDetails