import { remove } from 'piexifjs';
import RNFS from 'react-native-fs';

// Removes as much Exif as we can
export const removeExif = async (imageSource) => {
  try {
    const b64 = await RNFS.readFile(imageSource, 'base64')
    const removed = remove("data:image/jpg;base64," + b64)
    return removed
  } catch (error) {
    console.warn(error);
  }
}