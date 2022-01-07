import React, { useEffect, Dispatch, SetStateAction, useState } from 'react'
import { Modal } from 'antd'

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
  setPageProvaP: Dispatch<SetStateAction<number>>
}

const Prova: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  const [contador, setContador] = useState(0)
  const [erro, setErro] = useState(0)
  const [visivel, setVisivel] = useState(false)

  const [prova, setProva] = useState<
    {
      id: number
      sections: string[]
    }[]
  >(PROVAS[props.provaP])

  const repetir = () => {
    props.setPageProvaP(0)
  }

  const cancelar = () => {
    setVisivel(false)
  }

  useEffect(() => {
    const funcaoProva = async () => {
      if (
        prova[contador].sections.every((nota) =>
          NotaArd.some((_notaArd) => _notaArd == nota)
        ) &&
        NotaArd.length
      ) {
        await sleep(1500)
        if (contador != 5) {
          setContador(contador + 1)
        } else {
          setVisivel(true)
          setContador(0)
        }
      } else {
        if (
          !NotaArd.every((nota) =>
            prova[contador].sections.some((_notaArd) => _notaArd === nota)
          ) &&
          NotaArd.some((_notaArd) => _notaArd != '')
        ) {
          await sleep(1500)
          setErro(erro + 1)
        }
      }
    }

    funcaoProva()
  }, [NotaArd])

  return (
    <>
      <ContainerHeader>
        <Texto>Avaliação 1</Texto>
      </ContainerHeader>

      <ContainerProva>
        <Modal
          title={'Avaliação Finalizada'}
          visible={visivel}
          onOk={repetir}
          onCancel={cancelar}
          okText={'Finalizar'}
          cancelText={'Repetir'}
        >
          <p>Você cometeu {erro} erros</p>
          <h2>Clique em Finalizar ou Repetir</h2>
        </Modal>
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
          <Botao onClick={() => props.setPageProvaP(0)}>
            Finalizar Tentativa
          </Botao>
        </ContainerFooterInterno1>
      </ContainerFooter>
    </>
  )
}

export default Prova
