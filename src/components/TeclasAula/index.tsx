import React from 'react'

import { TeclasStyle, TeclaTexto, TeclaPStyle, TeclaPTexto } from './styles'

interface ITecla {
  teclaArd?: string
  notaNome?: string
  nota?: string
  notaAula?: {
    id: number
    sections: string[]
  }
}

const TeclasAula: React.FC<ITecla> = (props) => {
  const teclaMenor = props.nota.length > 2 ? true : false
  const teclaNota = props.nota?.toUpperCase()
  const notaAulaX = props.notaAula.sections
  const notaNome = props.notaNome
  const compararTecla = () => {
    return notaAulaX.some((notaC) => notaC == teclaNota) ? true : false
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

export default TeclasAula
