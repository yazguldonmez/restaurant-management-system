import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'

import $ from 'jquery'

window.$ = $;
window.jQuery = $;

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '~/assets/css/style.css'
import '~/admin/assets/adminlte.css'
import '~/assets/js/custom.js'
import { store, persistor } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
// import '~/assets/js/custom.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
