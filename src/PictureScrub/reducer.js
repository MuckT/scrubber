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
    }
  }
})

// Action creators are generated for each case reducer function
export const { selectImages, setActiveImage } = pictureScrubSlice.actions

export default pictureScrubSlice.reducer