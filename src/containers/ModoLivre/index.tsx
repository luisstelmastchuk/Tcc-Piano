import React from 'react'

// import { Container } from './styles';
import Piano from '../../components/Piano'
import Partitura from '../../components/Partitura'

import {
  ContainerHeader,
  ContainerLivre,
  ContainerFooter,
  Texto,
  Botao,
  ContainerLivreInterno1,
  ContainerLivreInterno2,
  ContainerFooterInterno3,
  ContainerFooterInterno2,
  ContainerFooterInterno1,
} from './styles'

interface INota {
  notaArd: string
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
          <Partitura nota={NotaArd} />
        </ContainerLivreInterno1>
        <ContainerLivreInterno2>
          <Piano tecla={NotaArd} />
        </ContainerLivreInterno2>
      </ContainerLivre>

      <ContainerFooter>
        <ContainerFooterInterno1>
          <Botao onClick={() => console.log('teste')}>Limpar</Botao>
        </ContainerFooterInterno1>
        <ContainerFooterInterno3>
          <Botao onClick={() => console.log('teste')}>Gravar</Botao>
        </ContainerFooterInterno3>
        <ContainerFooterInterno2>
          <Botao onClick={() => console.log('teste')}>Finalizar</Botao>
        </ContainerFooterInterno2>
      </ContainerFooter>
    </>
  )
}

export default ModoLivre
