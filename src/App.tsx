import { Provider as ReduxProvider } from "react-redux";
import { persistedStore, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore} />
    </ReduxProvider>
  )
}

export default App
