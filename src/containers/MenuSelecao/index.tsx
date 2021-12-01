import React, { Dispatch, SetStateAction } from 'react'

import {
  ContainerHeader,
  ContainerInternoHeader,
  ContainerCorpo,
  ContainerCorpoAula,
  TextoHeader,
  TextoBotao,
  TextoLicao,
  Botao,
  BotaoVoltar,
  TextoBotaoVoltar,
} from './styles'

interface IProps {
  isActived?: boolean
  notaArd: string[]
  setPageAula: Dispatch<SetStateAction<number>>
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
        <BotaoVoltar onClick={() => props.setPageAula(0)}>
          <TextoBotaoVoltar>Voltar</TextoBotaoVoltar>
        </BotaoVoltar>
      </ContainerCorpo>
    </>
  )
}

export default MenuSelecao
