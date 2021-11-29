import React, { useState } from 'react'

import {
  ContainerHeader,
  ContainerInternoHeader,
  ContainerCorpo,
  ContainerCorpoInterno,
  TextoHeader,
  TextoBotao,
  Botao,
} from './styles'

import MenuLicao from '../../containers/MenuLicao'
import Desafio from '../../containers/Desafio'
import ModoLivre from '../../containers/ModoLivre'

interface IProps {
  isActived?: boolean
  notaArd: string[]
}

const MenuPrincipal: React.FC<IProps> = (props) => {
  const [page, setPage] = useState(0)

  return (
    <>
      {page === 0 && (
        <>
          <ContainerHeader>
            <ContainerInternoHeader>
              <TextoHeader>Bem vindo</TextoHeader>
            </ContainerInternoHeader>
          </ContainerHeader>
          <ContainerCorpo>
            <ContainerCorpoInterno />

            <Botao onClick={() => setPage(1)}>
              <TextoBotao>Modo Lição</TextoBotao>
            </Botao>

            <ContainerCorpoInterno />

            <Botao onClick={() => setPage(2)}>
              <TextoBotao>Modo Desafio</TextoBotao>
            </Botao>

            <ContainerCorpoInterno />
            <Botao onClick={() => setPage(3)}>
              <TextoBotao>Modo Livre</TextoBotao>
            </Botao>
          </ContainerCorpo>
        </>
      )}
      {page === 1 && <MenuLicao notaArd={props.notaArd} setPage={setPage} />}
      {page === 2 && <Desafio notaArd={props.notaArd} setPage={setPage} />}
      {page === 3 && <ModoLivre notaArd={props.notaArd} setPage={setPage} />}
    </>
  )
}

export default MenuPrincipal
