import React from 'react'

import { TeclasStyle, TeclaTexto, TeclaPStyle, TeclaPTexto } from './styles'

interface ITecla {
  teclaArd?: string
  nota?: string
  notaAula?: {
    id: number
    sections: string[]
  }
}

const TeclasAula: React.FC<ITecla> = (props) => {
  const teclaMenor = props.nota.length > 2 ? true : false
  const teclaNota = props.nota?.toUpperCase()
  const notaAulaX = ['C0', 'D1', 'A0']

  const compararTecla = () => {
    return notaAulaX.some((notaC) => notaC == teclaNota) ? true : false
  }

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

export default TeclasAula
