import React from 'react'

import { PianoStyle } from './styles'
import Teclas from '../Teclas'
import { NOTAS } from '../../global/constants'
import { keyframes } from 'styled-components'

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
          key={nota.key}
          tecla={props.tecla}
          notaAula={props.notaAula}
        />
      ))}
    </PianoStyle>
  )
}

export default Piano
