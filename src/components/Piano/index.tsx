import React from 'react'

import { PianoStyle } from './styles'
import Teclas from '../Teclas'
import { NOTAS } from '../../global/constants'

interface ITeclas {
  tecla?: string
}

const Piano: React.FC<ITeclas> = (props) => {
  return (
    <PianoStyle>
      {NOTAS.map((nota) => (
        <Teclas nota={nota.name} key={nota.key} tecla={props.tecla} />
      ))}
    </PianoStyle>
  )
}

export default Piano
