import ReactDOM from 'react-dom'
import App from '../src/'

/* global document */
const render = (id) => {
  ReactDOM.render(App, document.querySelector(id))
}

document.addEventListener('DOMContentLoaded', () => render('#application-mount'))
