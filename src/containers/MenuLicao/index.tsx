import React, { Dispatch, SetStateAction } from 'react'

import {
  ContainerHeader,
  ContainerInternoHeader,
  ContainerCorpo,
  ContainerCorpoInterno,
  TextoHeader,
  TextoBotao,
  Botao,
} from './styles'

interface IProps {
  isActived?: boolean
  notaArd: string[]
  setPage: Dispatch<SetStateAction<number>>
}

const MenuLicao: React.FC<IProps> = (props) => {
  return (
    <>
      <ContainerHeader>
        <ContainerInternoHeader>
          <TextoHeader>Selecione o modo</TextoHeader>
        </ContainerInternoHeader>
      </ContainerHeader>
      <ContainerCorpo>
        <ContainerCorpoInterno />
        <Botao onClick={() => console.log('teste')}>
          <TextoBotao>Modo Aula</TextoBotao>
        </Botao>
        <ContainerCorpoInterno />
        <Botao onClick={() => console.log('teste')}>
          <TextoBotao>Modo Prova</TextoBotao>
        </Botao>
      </ContainerCorpo>
    </>
  )
}

export default MenuLicao
