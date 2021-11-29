import React, { useState } from 'react'

// import { Container } from './styles';
import Piano from '../../components/Piano'
import Partitura from '../../components/Partitura'
import { PROVAS } from '../../global/constants'
import { sleep } from '../../helper/sleep'

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
  notaArd: string[]
  provaP: number
}

var contador = 0
var contador2 = 0
var acerto = 0
var erro = 0
var nota = 0

const Prova: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  const [prova, setProva] = useState<
    {
      id: number
      sections: string[]
    }[]
  >(PROVAS[props.provaP])

  const funcaoProva = async () => {
    if (NotaArd.toString() != '' && contador2 != 1) {
      if (prova[contador].sections.toString() == NotaArd.toString()) {
        await sleep(300)
        acerto += 1
        contador += 1
      } else {
        await sleep(300)
        erro += 1
        contador += 1
      }
      if (contador == 4) {
        contador2 += 1
        nota = (acerto - erro) * 10
        if (nota < 0) nota = 0
      }
    }
  }

  funcaoProva()
  console.log(prova[contador].sections.toString())
  console.log(NotaArd.toString())
  console.log({ contador })
  console.log({ acerto })
  console.log({ erro })
  console.log({ nota })

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
          <Partitura notaAula={prova[contador]} />
        </ContainerProvaInterno2>
        <ContainerProvaInterno3>
          <Piano tecla={NotaArd} notaAula={prova[contador]} />
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
