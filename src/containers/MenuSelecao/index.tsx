import React, { Dispatch, SetStateAction, useState } from 'react'
import Aula from '../Aulas'

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
  notaArd: string[]
  setPageAula: Dispatch<SetStateAction<number>>
}

const MenuSelecao: React.FC<IProps> = (props) => {
  const [aulaN, setAulaN] = useState(0)

  return (
    <>
      {aulaN === 0 && (
        <>
          <ContainerHeader>
            <ContainerInternoHeader>
              <TextoHeader>Bem vindo</TextoHeader>
            </ContainerInternoHeader>
          </ContainerHeader>
          <ContainerCorpo>
            <ContainerCorpoAula>
              <TextoLicao>Lição 1 : Conhecendo o piano parte 1</TextoLicao>
              <Botao onClick={() => setAulaN(1)}>
                <TextoBotao>Iniciar</TextoBotao>
              </Botao>
            </ContainerCorpoAula>
            <ContainerCorpoAula>
              <TextoLicao>Lição 2 : Conhecendo o piano parte 2</TextoLicao>
              <Botao onClick={() => setAulaN(2)}>
                <TextoBotao>Iniciar</TextoBotao>
              </Botao>
            </ContainerCorpoAula>
            <ContainerCorpoAula>
              <TextoLicao>Lição 3 : Conhecendo o piano parte 3</TextoLicao>
              <Botao onClick={() => setAulaN(3)}>
                <TextoBotao>Iniciar</TextoBotao>
              </Botao>
            </ContainerCorpoAula>
            <ContainerCorpoAula>
              <TextoLicao>Lição 4 : Primeira Música Do Ré Mi Fá</TextoLicao>
              <Botao onClick={() => setAulaN(4)}>
                <TextoBotao>Iniciar</TextoBotao>
              </Botao>
            </ContainerCorpoAula>
            <BotaoVoltar onClick={() => props.setPageAula(0)}>
              <TextoBotaoVoltar>Voltar</TextoBotaoVoltar>
            </BotaoVoltar>
          </ContainerCorpo>
        </>
      )}
      {aulaN === 1 && (
        <Aula notaArd={props.notaArd} aulaA={aulaN} setPageAulaN={setAulaN} />
      )}
      {aulaN === 2 && (
        <Aula notaArd={props.notaArd} aulaA={aulaN} setPageAulaN={setAulaN} />
      )}
      {aulaN === 3 && (
        <Aula notaArd={props.notaArd} aulaA={aulaN} setPageAulaN={setAulaN} />
      )}
      {aulaN === 4 && (
        <Aula notaArd={props.notaArd} aulaA={aulaN} setPageAulaN={setAulaN} />
      )}
    </>
  )
}

export default MenuSelecao
