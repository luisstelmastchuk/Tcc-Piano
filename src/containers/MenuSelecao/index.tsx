import React from 'react'

import {
  ContainerHeader,
  ContainerInternoHeader,
  ContainerCorpo,
  ContainerCorpoAula,
  TextoHeader,
  TextoBotao,
  TextoLicao,
  Botao,
} from './styles'

interface IProps {
  isActived?: boolean
}

const MenuSelecao: React.FC<IProps> = (props) => {
  return (
    <>
      <ContainerHeader>
        <ContainerInternoHeader>
          <TextoHeader>Bem vindo</TextoHeader>
        </ContainerInternoHeader>
      </ContainerHeader>
      <ContainerCorpo>
        <ContainerCorpoAula>
          <TextoLicao>Lição 1 : Conhecendo o piano parte 1</TextoLicao>
          <Botao>
            <TextoBotao>Iniciar</TextoBotao>
          </Botao>
        </ContainerCorpoAula>
        <ContainerCorpoAula>
          <TextoLicao>Lição 2 : Conhecendo o piano parte 2</TextoLicao>
          <Botao>
            <TextoBotao>Iniciar</TextoBotao>
          </Botao>
        </ContainerCorpoAula>
        <ContainerCorpoAula>
          <TextoLicao>Lição 3 : Conhecendo o piano parte 3</TextoLicao>
          <Botao>
            <TextoBotao>Iniciar</TextoBotao>
          </Botao>
        </ContainerCorpoAula>
        <ContainerCorpoAula>
          <TextoLicao>Lição 4 : Primeira Música Do Ré Mi Fá</TextoLicao>
          <Botao>
            <TextoBotao>Iniciar</TextoBotao>
          </Botao>
        </ContainerCorpoAula>
      </ContainerCorpo>
    </>
  )
}

export default MenuSelecao
