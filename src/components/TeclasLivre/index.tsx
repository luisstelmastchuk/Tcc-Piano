import React from 'react'

import { TeclasStyle, TeclaTexto, TeclaPStyle, TeclaPTexto } from './styles'

interface ITecla {
  tecla?: string[]
  nota?: string
  notaNome?: string
}

const TeclasLivre: React.FC<ITecla> = (props) => {
  const notaNome = props.notaNome.toUpperCase()
  const teclaMenor = props.nota.length > 2 ? true : false
  const teclaNota = props.nota?.toUpperCase()
  const teclaPressionada = props.tecla

  const compararTecla = () => {
    return teclaPressionada.some((notaC) => notaC == teclaNota)
      ? 'true'
      : 'false'
  }

  return (
    <>
      {teclaMenor ? (
        <TeclaPStyle isActived={compararTecla()}>
          <TeclaPTexto>{notaNome}</TeclaPTexto>
        </TeclaPStyle>
      ) : (
        <TeclasStyle isActived={compararTecla()}>
          <TeclaTexto>{notaNome}</TeclaTexto>
        </TeclasStyle>
      )}
    </>
  )
}

export default TeclasLivre
