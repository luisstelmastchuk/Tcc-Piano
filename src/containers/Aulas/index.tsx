import React, { useState } from 'react'

// import { Container } from './styles';
import Piano from '../../components/Piano'
import PianoAula from '../../components/PianoAula'
import Partitura from '../../components/Partitura'
import { AULA1 } from '../../global/constants'

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

  const [aula, setAula] = useState<
    {
      id: number
      sections: string[]
    }[]
  >(AULA1)

  return (
    <>
      <ContainerHeader>
        <Texto>Lição 1</Texto>
      </ContainerHeader>

      <ContainerAula>
        <ContainerAulaInterno1>
          <Partitura />
        </ContainerAulaInterno1>
        <ContainerAulaInterno2>
          <PianoAula teclaArd={NotaArd} />
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
