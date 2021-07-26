import React from 'react'

// import { Container } from './styles';
import Piano from '../../components/Piano'
import Partitura from '../../components/Partitura'

import {
  ContainerHeader,
  ContainerDesafio,
  ContainerFooter,
  Texto,
  Botao,
  ContainerDesafioInterno1,
  ContainerDesafioInterno2,
  ContainerDesafioInterno3,
  ContainerFooterInterno2,
  ContainerFooterInterno1,
  ContainerTentativas,
  ContainerScore,
  ContainerTimer,
} from './styles'

interface INota {
  notaArd: string
}

const Desafio: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  return (
    <>
      <ContainerHeader>
        <Texto>Avaliação 1</Texto>
      </ContainerHeader>

      <ContainerDesafio>
        <ContainerDesafioInterno1>
          <ContainerTentativas></ContainerTentativas>
          <ContainerTimer></ContainerTimer>
          <ContainerScore></ContainerScore>
        </ContainerDesafioInterno1>
        <ContainerDesafioInterno2>
          <Partitura nota={NotaArd} />
        </ContainerDesafioInterno2>
        <ContainerDesafioInterno3>
          <Piano tecla={NotaArd} />
        </ContainerDesafioInterno3>
      </ContainerDesafio>

      <ContainerFooter>
        <ContainerFooterInterno1>
          <Botao onClick={() => console.log('teste')}>Reiniciar</Botao>
        </ContainerFooterInterno1>
        <ContainerFooterInterno2>
          <Botao onClick={() => console.log('teste')}>Finalizar</Botao>
        </ContainerFooterInterno2>
      </ContainerFooter>
    </>
  )
}

export default Desafio
