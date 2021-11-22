import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MenuLicao from '../containers/MenuLicao'
import Desafio from '../containers/Desafio'
import ModoLivre from '../containers/ModoLivre'

import Home from '../pages/Home'

const Routes = () => (
  <Switch>
    <Route exact path="/MenuLicao" component={MenuLicao} />

    <Route
      exact
      path="/Desafio"
      render={(props) => <Desafio {...props} notaArd={[]} />}
    />

    <Route
      exact
      path="/ModoLivre"
      render={(props) => <ModoLivre {...props} notaArd={[]} />}
    />

    <Route exact path="*" component={Home} />
  </Switch>
)

export default Routes
