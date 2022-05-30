import RNHeicConverter from 'react-native-heic-converter';

// Converts .HEIC to .jpg
export const convertFromHeic = async (filePath) => {
  try {
    let result = await RNHeicConverter.convert({ 
      path: filePath
    })
    return `${result.path}`
  } catch (error) {
    console.warn(error)
  }
}
