import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux'

import { addCake } from './actions/actions'

import AddCake from './components/AddCake.js'
import CakeList from './components/CakeList.js'
import Cake from './components/Cake.js'


class App extends Component {



   render() {

      //console.log(this.props);

      const { dispatch, visibleCakes } = this.props;



      return (
         <Router>
            <div>
               
               <ul>
                  <li><Link to={'/'}>List of Cakes ******v 0.2 (Git test)********</Link></li>
                  <li><Link to={'/AddCake'}>Add a Cake</Link></li>
               </ul>

               <hr />
               
               <Switch>
                  <Route exact path="/" render={()=><CakeList cakes = {visibleCakes}/>}/>
                  <Route exact path="/AddCake" render={()=><AddCake onAddClick = {(name,comment,imageUrl,yumFactor) => dispatch(addCake(name,comment,imageUrl,yumFactor))}/>}/>
                  <Route exact path="/Cake/:id" render={()=><Cake cakes = {visibleCakes}/>}/>
               </Switch>
            </div>
         </Router>
      );
   }
}

function select(state) {
   return {
      visibleCakes: state.cakes
   }
}


export default connect(select)(App);

