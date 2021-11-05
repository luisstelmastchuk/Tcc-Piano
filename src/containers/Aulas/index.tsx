import React, { useEffect, useState } from 'react'

// import { Container } from './styles';
import Piano from '../../components/Piano'
import PianoAula from '../../components/PianoAula'
import Partitura from '../../components/Partitura'
import { AULA1 } from '../../global/constants'
import { sleep } from '../../helper/sleep'

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
  notaArd: string[]
}

const Aula: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  const [contador, setContador] = useState(0)

  const [aula, setAula] = useState<
    {
      id: number
      sections: string[]
    }[]
  >(AULA1)

  useEffect(() => {
    const funcaoAula = async () => {
      if (aula[contador].sections.toString() == NotaArd.toString()) {
        await sleep(500)

        if (contador != 6) {
          setContador(contador + 1)
        } else {
          setContador(0)
        }
      }

      // console.log(aula[contador].sections.toString() == NotaArd.toString())
    }

    funcaoAula()
  }, [NotaArd])

  // console.log(aula[contador].sections.toString())
  // console.log(NotaArd.toString())
  console.log({ contador })

  return (
    <>
      <ContainerHeader>
        <Texto>Lição 1</Texto>
      </ContainerHeader>

      <ContainerAula>
        <ContainerAulaInterno1>
          <Partitura notaAula={aula[contador]} />
        </ContainerAulaInterno1>
        <ContainerAulaInterno2>
          <PianoAula notaAula={aula[contador]} />
        </ContainerAulaInterno2>
        <ContainerAulaInterno3>
          <Piano tecla={NotaArd} notaAula={aula[contador]} />
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
