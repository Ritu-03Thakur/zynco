import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./redux/Api.ts";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: { [Api.reducerPath]: Api.reducer },
    middleware: (getDefault) => getDefault().concat(Api.middleware),
});
setupListeners(store.dispatch);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
)
