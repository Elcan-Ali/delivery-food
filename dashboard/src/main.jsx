import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/index.js'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import { Provider } from 'react-redux'
import "./assets/styles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
