import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import pictureScrubReducer from '../PictureScrub/reducer'

const persistConfig = {
	key: "root",
	version: 1,
	storage: AsyncStorage,
}
const rootReducer = combineReducers({
  pictureScrub: pictureScrubReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
