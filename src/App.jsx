import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from  './Pages/Home/Home.jsx'
import Persona from  './Pages/Persona/Persona.jsx'
import Heroe from  './Pages/Heroe/Heroe.jsx'
import View from './Layout/View/View.jsx'
function App() {
  return (
    <BrowserRouter>
        <View>
        <Switch>
        <Route path="/prueba">
            <View/>
          </Route>
          <Route path="/persona">
            <Persona/>
          </Route>
          <Route path="/heroe">
            <Heroe/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>  
        </Switch>
        </View>
    </BrowserRouter>
  );
}

export default App;
