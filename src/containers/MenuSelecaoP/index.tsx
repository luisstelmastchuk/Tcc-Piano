import React, { Dispatch, SetStateAction, useState } from 'react'
import Prova from '../Prova'

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
  const [provaP, setProvaP] = useState(0)

  return (
    <>
      {provaP === 0 && (
        <>
          <ContainerHeader>
            <ContainerInternoHeader>
              <TextoHeader>Bem vindo</TextoHeader>
            </ContainerInternoHeader>
          </ContainerHeader>
          <ContainerCorpo>
            <ContainerCorpoAula>
              <TextoLicao>
                Prova 1 : Avaliação de conhecimento Lição 1
              </TextoLicao>
              <Botao onClick={() => setProvaP(1)}>
                <TextoBotao>Iniciar</TextoBotao>
              </Botao>
            </ContainerCorpoAula>
            <ContainerCorpoAula>
              <TextoLicao>
                Prova 2 : Avaliação de conhecimento Lição 2
              </TextoLicao>
              <Botao onClick={() => setProvaP(2)}>
                <TextoBotao>Iniciar</TextoBotao>
              </Botao>
            </ContainerCorpoAula>
            <ContainerCorpoAula>
              <TextoLicao>
                {' '}
                Prova 3 : Avaliação de conhecimento Lição 3
              </TextoLicao>
              <Botao onClick={() => setProvaP(3)}>
                <TextoBotao>Iniciar</TextoBotao>
              </Botao>
            </ContainerCorpoAula>
            <ContainerCorpoAula>
              <TextoLicao>
                Prova 4 : Avaliação de conhecimento Lição 4
              </TextoLicao>
              <Botao onClick={() => setProvaP(4)}>
                <TextoBotao>Iniciar</TextoBotao>
              </Botao>
            </ContainerCorpoAula>
            <BotaoVoltar onClick={() => props.setPageProva(0)}>
              <TextoBotaoVoltar>Voltar</TextoBotaoVoltar>
            </BotaoVoltar>
          </ContainerCorpo>
        </>
      )}
      {provaP === 1 && (
        <Prova
          notaArd={props.notaArd}
          provaP={provaP}
          setPageProvaP={setProvaP}
        />
      )}
      {provaP === 2 && (
        <Prova
          notaArd={props.notaArd}
          provaP={provaP}
          setPageProvaP={setProvaP}
        />
      )}
      {provaP === 3 && (
        <Prova
          notaArd={props.notaArd}
          provaP={provaP}
          setPageProvaP={setProvaP}
        />
      )}
      {provaP === 4 && (
        <Prova
          notaArd={props.notaArd}
          provaP={provaP}
          setPageProvaP={setProvaP}
        />
      )}
    </>
  )
}

export default MenuSelecaoP
