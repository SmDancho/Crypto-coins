
import ReactDOM from 'react-dom/client'
import './app/index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { store } from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
