import React from 'react'

import {
  ContainerHeader,
  ContainerInternoHeader,
  ContainerCorpo,
  ContainerCorpoInterno,
  TextoHeader,
  TextoBotao,
  Botao,
} from './styles'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

interface IProps {
  isActived?: boolean
}

const MenuPrincipal: React.FC<IProps> = (props) => {
  return (
    <>
      <ContainerHeader>
        <ContainerInternoHeader>
          <TextoHeader>Bem vindo</TextoHeader>
        </ContainerInternoHeader>
      </ContainerHeader>
      <ContainerCorpo>
        <ContainerCorpoInterno />

        <Router>
          <div>
            <nav>
              <Link to="../MenuLicao">Menu Lição</Link>
            </nav>
            <Switch>
              <Route exact path="../MenuLicao" />
            </Switch>
          </div>
        </Router>

        {/* 
        <Botao onClick={() => console.log('Modo lição')}>
          <TextoBotao>Modo Lição</TextoBotao>
          <Router>
            <Switch>
              <Route exact path="../MenuLicao"></Route>
            </Switch>
          </Router>
        </Botao> */}

        <ContainerCorpoInterno />

        <Botao onClick={() => console.log('teste')}>
          <TextoBotao>Modo Desafio</TextoBotao>
        </Botao>
        <ContainerCorpoInterno />
        <Botao onClick={() => console.log('teste')}>
          <TextoBotao>Modo Livre</TextoBotao>
        </Botao>
      </ContainerCorpo>
    </>
  )
}

export default MenuPrincipal
