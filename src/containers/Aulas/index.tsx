import React, { useEffect, Dispatch, SetStateAction, useState } from 'react'

import Piano from '../../components/Piano'
import PianoAula from '../../components/PianoAula'
import Partitura from '../../components/Partitura'
import { AULAS } from '../../global/constants'
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
  aulaA: number
  setPageAulaN: Dispatch<SetStateAction<number>>
}

const Aula: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  const [contador, setContador] = useState(0)

  const [aula, setAula] = useState<
    {
      id: number
      sections: string[]
    }[]
  >(AULAS[props.aulaA])

  useEffect(() => {
    const funcaoAula = async () => {
      if (
        aula[contador].sections.every((nota) =>
          NotaArd.some((_notaArd) => _notaArd == nota)
        ) &&
        NotaArd.length
      ) {
        await sleep(500)
        if (contador != 5) {
          setContador(contador + 1)
        } else {
          setContador(0)
        }
      }
    }

    funcaoAula()
  }, [NotaArd])

  const funcaoRepetir = async () => {
    if (contador > 0) {
      setContador(contador - 1)
    } else {
      setContador(contador)
    }
  }

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
          <Botao onClick={() => props.setPageAulaN(0)}>Parar</Botao>
        </ContainerFooterInterno1>
        <ContainerFooterInterno2>
          <Botao onClick={() => funcaoRepetir()}>Repetir</Botao>
        </ContainerFooterInterno2>
      </ContainerFooter>
    </>
  )
}

export default Aula
