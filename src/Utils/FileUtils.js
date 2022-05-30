import uuid from 'react-native-uuid';
import RNFS from 'react-native-fs';
import CameraRoll from "@react-native-community/cameraroll";

// Creates a file at filePath and write the content data to it
const makeTempFile = async (filePath, content, encoding = 'base64') => {
  try {
    await RNFS.writeFile(filePath, content, encoding);
  } catch (error) {
    console.warn(error);
  }
};

// Create a new folder on folderPath
export const makeDirectory = async (folderPath) => {
  await RNFS.mkdir(folderPath); 
};

export const readFile = async (filePath) => {
  try {
    return await RNFS.readFile(filePath, 'base64')
  } catch (error) {
    console.warn(error)
  }
}

// Moves a temporary file to the users Camera roll
export const saveCopyToCameraRoll = async (imageData) => {
  try {
    const toSave = /^[data:image/jpeg;base64]/gi.test(imageData) 
      ? imageData.split('data:image/jpeg;base64,')[1] 
      : imageData
    const fileLocation = `${RNFS.DocumentDirectoryPath}/assets/${uuid.v4()}.png`
    await makeTempFile(fileLocation, toSave)
    await CameraRoll.save(fileLocation, 'photo')
  } catch (error){
    console.warn(error)
  }
}

export const getFileExtension = (filePath) => {
  try {
    return filePath.substring(filePath.lastIndexOf('.')+1, filePath.length).toLowerCase() || filePath.toLowerCase();
  } catch (error) {
    console.warn(error)
  }
}