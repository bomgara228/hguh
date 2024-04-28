import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import { Provider } from 'react-redux';
import { AppRouter } from '../components/AppRouter/AppRouter';
import './App.css';
import {Header} from '../components/Header/Header';


function App() {

  React.useEffect(()=>{
    document.addEventListener<any>('off', ()=>{
      console.log()
    })
  })

  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>loading...</div>}>
        <Provider store={store}>
          <Header />
          <AppRouter />
          <footer>footer</footer>
        </Provider>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
