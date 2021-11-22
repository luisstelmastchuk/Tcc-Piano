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

import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {
  isActived?: boolean
  notaArd: string[]
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

        <Botao onClick={() => props.history.push('/MenuLicao')}>
          <TextoBotao>Modo Lição</TextoBotao>
        </Botao>

        <ContainerCorpoInterno />

        <Botao onClick={() => props.history.push('/Desafio')}>
          <TextoBotao>Modo Desafio</TextoBotao>
        </Botao>

        <ContainerCorpoInterno />
        <Botao onClick={() => props.history.push('/ModoLivre')}>
          <TextoBotao>Modo Livre</TextoBotao>
        </Botao>
      </ContainerCorpo>
    </>
  )
}

export default withRouter(MenuPrincipal)
