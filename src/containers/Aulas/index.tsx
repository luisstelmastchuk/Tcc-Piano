import React from 'react'

// import { Container } from './styles';
import Piano from '../../components/Piano'
import Partitura from '../../components/Partitura'

import {
  ContainerHeader,
  ContainerAula,
  ContainerFooter,
  Texto,
  Botao,
  ContainerAulaInterno1,
  ContainerAulaInterno2,
  ContainerAulaInterno3,
  ContainerFooterInterno2,
  ContainerFooterInterno1,
} from './styles'

interface INota {
  notaArd: string
}

const Aula: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  return (
    <>
      <ContainerHeader>
        <Texto>Lição 1</Texto>
      </ContainerHeader>

      <ContainerAula>
        <ContainerAulaInterno1>
          <Partitura nota={NotaArd} />
        </ContainerAulaInterno1>
        <ContainerAulaInterno2>
          <Piano />
        </ContainerAulaInterno2>
        <ContainerAulaInterno3>
          <Piano tecla={NotaArd} />
        </ContainerAulaInterno3>
      </ContainerAula>

      <ContainerFooter>
        <ContainerFooterInterno1>
          <Botao onClick={() => console.log('teste')}>Parar</Botao>
        </ContainerFooterInterno1>
        <ContainerFooterInterno2>
          <Botao onClick={() => console.log('teste')}>Repetir</Botao>
        </ContainerFooterInterno2>
      </ContainerFooter>
    </>
  )
}

export default Aula
