import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeImage: {},
  selectedImages: []
}

export const pictureScrubSlice = createSlice({
  name: 'pictureScrub',
  initialState,
  reducers: {
    selectImages: (state, action) => {
      state.selectedImages = action.payload
    },
    setActiveImage: (state, action) => {
      state.activeImage = state.selectedImages.find(img => img.localIdentifier === action.payload)
    },
    cleanActiveImage: (state) => {
      if(state.activeImage && state.activeImage.exif) {
        state.activeImage.exif = null
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { selectImages, setActiveImage, cleanActiveImage } = pictureScrubSlice.actions

export default pictureScrubSlice.reducer