import React, { useState } from 'react'

import { PianoStyle } from './styles'
import { NOTAS } from '../../global/constants'
import TeclasAula from '../TeclasAula'

interface ITeclas {
  teclaArd?: string
  notaAula?: {
    id: number
    sections: string[]
  }
}

const PianoAula: React.FC<ITeclas> = (props) => {
  return (
    <PianoStyle>
      {NOTAS.map((nota) => (
        <TeclasAula
          nota={nota.name}
          key={nota.key}
          teclaArd={props.teclaArd}
          notaAula={props.notaAula}
        />
      ))}
    </PianoStyle>
  )
}

export default PianoAula
