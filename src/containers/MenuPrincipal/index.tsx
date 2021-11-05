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
        <Botao onClick={() => (window.location.href = '../MenuLicao')}>
          <TextoBotao>Modo Lição</TextoBotao>
        </Botao>
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
