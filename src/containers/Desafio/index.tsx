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
  ContainerErro,
} from './styles'

interface INota {
  notaArd: string[]
  setPage: Dispatch<SetStateAction<number>>
}

const Desafio: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  const [contador, setContador] = useState(0)
  const [erro, setErro] = useState(0)
  const [rand, setRand] = useState(Math.floor(Math.random() * 23))

  const [desafio, setDesafio] = useState<
    {
      id: number
      sections: string[]
    }[]
  >(DESAFIO)

  const reiniciar = () => {
    setContador(0)
    setErro(0)
    setRand(Math.floor(Math.random() * 23))
  }

  useEffect(() => {
    const funcaoDesafio = async () => {
      if (
        desafio[rand].sections.every((nota) =>
          NotaArd.some((_notaArd) => _notaArd == nota)
        ) &&
        NotaArd.length
      ) {
        await sleep(500)
        setContador(contador + 1)
        randomica()
      } else {
        if (
          !NotaArd.every((nota) =>
            desafio[contador].sections.some((_notaArd) => _notaArd === nota)
          ) &&
          NotaArd.some((_notaArd) => _notaArd != '')
        ) {
          await sleep(800)
          setErro(erro + 1)
        }
      }
    }

    const randomica = async () => {
      setRand(Math.floor(Math.random() * 23))
    }

    console.log(erro)
    funcaoDesafio()
  }, [NotaArd])

  return (
    <>
      <ContainerHeader>
        <Texto>Desafio</Texto>
      </ContainerHeader>

      <ContainerDesafio>
        <ContainerDesafioInterno1>
          <ContainerTentativas>Notas:{contador}</ContainerTentativas>
          <ContainerErro>Erros:{erro}</ContainerErro>
        </ContainerDesafioInterno1>
        <ContainerDesafioInterno2>
          <Partitura notaAula={desafio[rand]} />
        </ContainerDesafioInterno2>
        <ContainerDesafioInterno3>
          <Piano tecla={NotaArd} notaAula={desafio[rand]} />
        </ContainerDesafioInterno3>
      </ContainerDesafio>

      <ContainerFooter>
        <ContainerFooterInterno1>
          <Botao onClick={() => reiniciar()}>Reiniciar</Botao>
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
