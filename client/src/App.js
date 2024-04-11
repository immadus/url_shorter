import { Switch, BrowserRouter, Route } from "react-router-dom";
import Hero from './components/Hero'
import Main from './components/Main'
import Redirect from './components/Redirect'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <>
          <Hero />
          <Main />
          </>}
        />
        <Route path="/:shortUrl" exact render={() => <Redirect />} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
