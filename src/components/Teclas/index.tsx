import React from 'react'

import { TeclasStyle, TeclaTexto, TeclaPStyle, TeclaPTexto } from './styles'

interface ITecla {
  tecla?: string
  nota?: string
  // notaAula: {
  //   id: number
  //   sections: string[]
  // }
}

const Teclas: React.FC<ITecla> = (props) => {
  const teclaMenor = props.nota.length > 2 ? true : false
  const teclaNota = props.nota?.toUpperCase()
  const teclaPressionada = props.tecla?.toUpperCase()
  const notaAulaX = 'C0'

  const notaC =
    teclaPressionada == teclaNota
      ? notaAulaX == teclaNota
        ? 'correto'
        : 'errado'
      : 'false'

  return (
    <>
      {teclaMenor ? (
        <TeclaPStyle isActived={notaC}>
          <TeclaPTexto>{teclaNota}</TeclaPTexto>
        </TeclaPStyle>
      ) : (
        <TeclasStyle isActived={notaC}>
          <TeclaTexto>{teclaNota}</TeclaTexto>
        </TeclasStyle>
      )}
    </>
  )
}

export default Teclas
