// libraries
import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'

//components
import Header from './components/header/header.component'

//pages
import HomePage from './pages/homepage/homepage.component'
import SkillsPage from './pages/skillspage/skillspage.component'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />      
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/skills' component={SkillsPage} />
        </Switch>      
      </div>
    </BrowserRouter>
      
  );
}

export default App;
