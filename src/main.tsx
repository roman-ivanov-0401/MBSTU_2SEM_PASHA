import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraProvider>
          <BrowserRouter>
              <Provider store={store}>
                    <App />
              </Provider>
          </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>,
)
