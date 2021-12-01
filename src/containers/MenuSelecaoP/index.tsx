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
  setPageProva: Dispatch<SetStateAction<number>>
}

const MenuSelecaoP: React.FC<IProps> = (props) => {
  return (
    <>
      <ContainerHeader>
        <ContainerInternoHeader>
          <TextoHeader>Bem vindo</TextoHeader>
        </ContainerInternoHeader>
      </ContainerHeader>
      <ContainerCorpo>
        <ContainerCorpoAula>
          <TextoLicao>Prova 1 : Avaliação de conhecimento Lição 1</TextoLicao>
          <Botao>
            <TextoBotao>Iniciar</TextoBotao>
          </Botao>
        </ContainerCorpoAula>
        <ContainerCorpoAula>
          <TextoLicao>Prova 2 : Avaliação de conhecimento Lição 2</TextoLicao>
          <Botao>
            <TextoBotao>Iniciar</TextoBotao>
          </Botao>
        </ContainerCorpoAula>
        <ContainerCorpoAula>
          <TextoLicao> Prova 3 : Avaliação de conhecimento Lição 3</TextoLicao>
          <Botao>
            <TextoBotao>Iniciar</TextoBotao>
          </Botao>
        </ContainerCorpoAula>
        <ContainerCorpoAula>
          <TextoLicao>Prova 4 : Avaliação de conhecimento Lição 4</TextoLicao>
          <Botao>
            <TextoBotao>Iniciar</TextoBotao>
          </Botao>
        </ContainerCorpoAula>
        <BotaoVoltar onClick={() => props.setPageProva(0)}>
          <TextoBotaoVoltar>Voltar</TextoBotaoVoltar>
        </BotaoVoltar>
      </ContainerCorpo>
    </>
  )
}

export default MenuSelecaoP
