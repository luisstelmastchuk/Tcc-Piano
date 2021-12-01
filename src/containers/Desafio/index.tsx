import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'

import Piano from '../../components/Piano'
import Partitura from '../../components/Partitura'
import { DESAFIO } from '../../global/constants'
import { sleep } from '../../helper/sleep'

import {
  ContainerHeader,
  ContainerDesafio,
  ContainerFooter,
  Texto,
  TextoBotao,
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
  notaArd: string[]
  setPage: Dispatch<SetStateAction<number>>
}

const Desafio: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  const [contador, setContador] = useState(0)

  const [desafio, setDesafio] = useState<
    {
      id: number
      sections: string[]
    }[]
  >(DESAFIO)

  useEffect(() => {
    const funcaoDesafio = async () => {
      if (desafio[contador].sections.toString() == NotaArd.toString()) {
        await sleep(500)
        if (contador != 6) {
          setContador(contador + 1)
        } else {
          setContador(contador)
        }
      }
      // console.log(aula[contador].sections.toString() == NotaArd.toString())
    }

    funcaoDesafio()
  }, [NotaArd])

  return (
    <>
      <ContainerHeader>
        <Texto>Desafio</Texto>
      </ContainerHeader>

      <ContainerDesafio>
        <ContainerDesafioInterno1>
          <ContainerTentativas></ContainerTentativas>
          <ContainerTimer></ContainerTimer>
          <ContainerScore></ContainerScore>
        </ContainerDesafioInterno1>
        <ContainerDesafioInterno2>
          <Partitura notaAula={desafio[contador]} />
        </ContainerDesafioInterno2>
        <ContainerDesafioInterno3>
          <Piano tecla={NotaArd} notaAula={desafio[contador]} />
        </ContainerDesafioInterno3>
      </ContainerDesafio>

      <ContainerFooter>
        <ContainerFooterInterno1>
          <Botao onClick={() => console.log('teste')}>Reiniciar</Botao>
        </ContainerFooterInterno1>
        <ContainerFooterInterno2>
          <Botao onClick={() => props.setPage(0)}>
            <TextoBotao>Finalizar</TextoBotao>
          </Botao>
        </ContainerFooterInterno2>
      </ContainerFooter>
    </>
  )
}

export default Desafio
