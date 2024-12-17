import { StrictMode, Fragment } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'));

root.render(
  <Fragment>
    <button> Hola button </button>
    <button> Hola button </button>
  </Fragment>
 );
