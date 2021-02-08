import React from 'react';
import { Provider } from 'react-redux' //provider provee la data del archivo strore
import store from './store';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import "./style/style.scss"

const App = () => (
  <Provider store={store}>
    <main>
      <h1>BTmanager</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
