import React, { Dispatch, SetStateAction, useEffect } from 'react'
import PianoLivre from '../../components/PianoLivre'
import PartituraLivre from '../../components/PartituraLivre'

import {
  ContainerHeader,
  ContainerLivre,
  ContainerFooter,
  Texto,
  TextoBotao,
  Botao,
  ContainerLivreInterno1,
  ContainerLivreInterno2,
  ContainerFooterInterno3,
  ContainerFooterInterno2,
  ContainerFooterInterno1,
} from './styles'

interface INota {
  notaArd: string[]
  setPage?: Dispatch<SetStateAction<number>>
}
const ModoLivre: React.FC<INota> = (props) => {
  const NotaArd = props.notaArd

  return (
    <>
      <ContainerHeader>
        <Texto>Modo Livre</Texto>
      </ContainerHeader>

      <ContainerLivre>
        <ContainerLivreInterno1>
          <PartituraLivre tecla={NotaArd} />
        </ContainerLivreInterno1>
        <ContainerLivreInterno2>
          <PianoLivre tecla={NotaArd} />
        </ContainerLivreInterno2>
      </ContainerLivre>

      <ContainerFooter>
        <ContainerFooterInterno1></ContainerFooterInterno1>
        <ContainerFooterInterno3>
          <Botao onClick={() => props.setPage(0)}>
            <TextoBotao>Finalizar</TextoBotao>
          </Botao>
        </ContainerFooterInterno3>
        <ContainerFooterInterno2></ContainerFooterInterno2>
      </ContainerFooter>
    </>
  )
}

export default ModoLivre
