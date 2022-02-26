import React from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native'

const EditImage = () => {
  return (
    <SafeAreaView style={styles.container} scrollIndicatorInsets={{ right: 1 }}>
      <Text style={styles.title}>Image Details</Text>
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
    marginTop: 20
  }
})

export default EditImage