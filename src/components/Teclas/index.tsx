import React, { useEffect, useState } from 'react'
import { ConnectionIsNotSetError } from 'typeorm'
import { NOTAS } from '../../global/constants'

import { TeclasStyle, TeclaTexto, TeclaPStyle, TeclaPTexto } from './styles'

interface ITecla {
  tecla?: string[]
  nota?: string
  notaNome?: string
  notaAula: {
    id: number
    sections: string[]
  }
}

const Teclas: React.FC<ITecla> = (props) => {
  const notaNome = props.notaNome.toUpperCase()
  const teclaMenor = props.nota.length > 2 ? true : false
  const teclaNota = props.nota?.toUpperCase()
  const teclaPressionada = props.tecla
  const notaAulaX = props.notaAula.sections

  const [erro, setErro] = useState(0)

  const compararTecla = () => {
    return teclaPressionada.some((notaC) => notaC == teclaNota)
      ? notaAulaX.some((notaC) => notaC == teclaNota)
        ? 'correto'
        : 'errado'
      : 'false'
  }

  useEffect(() => {
    const audios = NOTAS.filter((nota) =>
      props.tecla.some((tecla) => tecla === nota.name)
    )
    audios.forEach((audio) => audio.audio.play())
  }, [props.tecla])

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

export default Teclas
