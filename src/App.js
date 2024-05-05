import React from 'react';
import Weather from './Weather';
import store from './redux/store';
import {Provider} from "react-redux";


function App() {

  return (
      <Provider store={store}>
      <div className="App">
        <Weather/>
      </div>
      </Provider>
  );
}

export default App;
