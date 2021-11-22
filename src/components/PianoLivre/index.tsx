import React from 'react'

import { PianoStyle } from './styles'
import TeclasLivre from '../TeclasLivre'
import { NOTAS } from '../../global/constants'
import { keyframes } from 'styled-components'

interface ITeclas {
  tecla?: string[]
}

const PianoLivre: React.FC<ITeclas> = (props) => {
  return (
    <PianoStyle>
      {NOTAS.map((nota) => (
        <TeclasLivre
          nota={nota.name}
          notaNome={nota.key}
          key={nota.key}
          tecla={props.tecla}
        />
      ))}
    </PianoStyle>
  )
}

export default PianoLivre
