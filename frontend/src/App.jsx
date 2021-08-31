import React from 'react'
import './App.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { NavBar } from '../src/components/NavBar';
import { Footer } from '../src/components/Footer';
import { Home } from '../src/pages/Home';
import { AdminBudget } from '../src/pages/AdminBudget';
import { AddBudget } from '../src/pages/AddBudget.jsx';
import { EditBudget } from '../src/pages/EditBudget';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
            <Switch> 
              <Route path="/AdminBudget">
                <AdminBudget />  
              </Route>
              <Route path="/AddBudget">
                <AddBudget />  
              </Route>
              <Route path="/EditBudget/:id" >
                <EditBudget /> 
              </Route>                    
              <Route path="/" exact={true}>
                <Home />  
              </Route>
            </Switch>     
          <Footer />   
        </React.Fragment> 
      </BrowserRouter>   
    </div>
  );
}

export default App;
