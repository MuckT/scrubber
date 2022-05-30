import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import MyNavigation from '../Navigator/Navigator'
import store from './store'

let persistor = persistStore(store)

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <MyNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
};

export default App;
