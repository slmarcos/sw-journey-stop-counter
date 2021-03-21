import React from 'react'
import ReactDOM from 'react-dom'
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'
import { red, yellow } from '@material-ui/core/colors'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: yellow[500],
      contrastText: '#000000'
    },
    secondary: {
      main: red[500]
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
