import React, { Dispatch, SetStateAction, useState } from 'react'
import MenuSelecao from '../../containers/MenuSelecao'
import MenuSelecaoP from '../../containers/MenuSelecaoP'

import {
  ContainerHeader,
  ContainerInternoHeader,
  ContainerCorpo,
  ContainerCorpoInterno,
  TextoHeader,
  TextoBotao,
  Botao,
  BotaoVoltar,
  TextoBotaoVoltar,
} from './styles'

interface IProps {
  isActived?: boolean
  notaArd: string[]
  setPage: Dispatch<SetStateAction<number>>
}

const MenuLicao: React.FC<IProps> = (props) => {
  const [pageAula, setPageAula] = useState(0)

  return (
    <>
      {pageAula === 0 && (
        <>
          <ContainerHeader>
            <ContainerInternoHeader>
              <TextoHeader>Selecione o modo</TextoHeader>
            </ContainerInternoHeader>
          </ContainerHeader>
          <ContainerCorpo>
            <ContainerCorpoInterno />
            <Botao onClick={() => setPageAula(1)}>
              <TextoBotao>Modo Aula</TextoBotao>
            </Botao>
            <ContainerCorpoInterno />
            <Botao onClick={() => setPageAula(2)}>
              <TextoBotao>Modo Prova</TextoBotao>
            </Botao>
          </ContainerCorpo>
          <BotaoVoltar onClick={() => props.setPage(0)}>
            <TextoBotaoVoltar>Voltar</TextoBotaoVoltar>
          </BotaoVoltar>
        </>
      )}
      {pageAula === 1 && (
        <MenuSelecao notaArd={props.notaArd} setPageAula={setPageAula} />
      )}
      {pageAula === 2 && (
        <MenuSelecaoP notaArd={props.notaArd} setPageProva={setPageAula} />
      )}
    </>
  )
}

export default MenuLicao
