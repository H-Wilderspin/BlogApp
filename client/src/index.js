import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import { ContextProvider } from './context/context';

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(
  <ContextProvider>
    <App tab="home" />
  </ContextProvider>
)
