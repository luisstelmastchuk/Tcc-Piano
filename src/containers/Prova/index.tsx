import React from 'react'

// import { Container } from './styles';
import Piano from '../../components/Piano'
import Partitura from '../../components/Partitura'

import {
  ContainerHeader,
  ContainerProva,
  ContainerFooter,
  Texto,
  Botao,
  ContainerProvaInterno1,
  ContainerProvaInterno2,
  ContainerProvaInterno3,
  ContainerFooterInterno1,
  ContainerTimer,
  ContainerScore,
} from './styles'

interface INota {
  notaArd: string
}

const Prova: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  return (
    <>
      <ContainerHeader>
        <Texto>Avaliação 1</Texto>
      </ContainerHeader>

      <ContainerProva>
        <ContainerProvaInterno1>
          <ContainerTimer></ContainerTimer>
          <ContainerScore></ContainerScore>
        </ContainerProvaInterno1>
        <ContainerProvaInterno2>
          <Partitura nota={NotaArd} />
        </ContainerProvaInterno2>
        <ContainerProvaInterno3>
          <Piano tecla={NotaArd} />
        </ContainerProvaInterno3>
      </ContainerProva>

      <ContainerFooter>
        <ContainerFooterInterno1>
          <Botao onClick={() => console.log('teste')}>
            Finalizar Tentativa
          </Botao>
        </ContainerFooterInterno1>
      </ContainerFooter>
    </>
  )
}

export default Prova
