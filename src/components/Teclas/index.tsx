import React from 'react'

import { TeclasStyle, TeclaTexto, TeclaPStyle, TeclaPTexto } from './styles'

interface ITecla {
  tecla?: string[]
  nota?: string
  // notaAula: {
  //   id: number
  //   sections: string[]
  // }
}

const Teclas: React.FC<ITecla> = (props) => {
  const teclaMenor = props.nota.length > 2 ? true : false
  const teclaNota = props.nota?.toUpperCase()
  const teclaPressionada = props.tecla
  const notaAulaX = ['C0', 'DF0']

  const compararTecla = () => {
    return teclaPressionada.some((notaC) => notaC == teclaNota)
      ? notaAulaX.some((notaC) => notaC == teclaNota)
        ? 'correto'
        : 'errado'
      : 'false'
  }

  // const notaC =
  //   teclaPressionada == teclaNota
  //     ? notaAulaX == teclaNota
  //       ? 'correto'
  //       : 'errado'
  //     : 'false'

  return (
    <>
      {teclaMenor ? (
        <TeclaPStyle isActived={compararTecla()}>
          <TeclaPTexto>{teclaNota}</TeclaPTexto>
        </TeclaPStyle>
      ) : (
        <TeclasStyle isActived={compararTecla()}>
          <TeclaTexto>{teclaNota}</TeclaTexto>
        </TeclasStyle>
      )}
    </>
  )
}

export default Teclas
