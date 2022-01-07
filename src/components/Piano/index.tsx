import React from 'react'

import { PianoStyle } from './styles'
import Teclas from '../Teclas'
import { NOTAS } from '../../global/constants'

interface ITeclas {
  tecla?: string[]
  notaAula?: {
    id: number
    sections: string[]
  }
}

const Piano: React.FC<ITeclas> = (props) => {
  return (
    <PianoStyle>
      {NOTAS.map((nota) => (
        <Teclas
          nota={nota.name}
          notaNome={nota.key}
          key={nota.key}
          tecla={props.tecla}
          notaAula={props.notaAula}
        />
      ))}
    </PianoStyle>
  )
}

export default Piano
