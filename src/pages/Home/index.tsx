import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { ipcRenderer } from 'electron'

import MenuPrincipal from '../../containers/MenuPrincipal'

const Home: React.FC = () => {
  const [notas, setNotas] = useState<string[]>([])

  useEffect(() => {
    ipcRenderer.on('arduinoCom', (e, arduinoData) => {
      setNotas(arduinoData.split('a').filter((nota) => nota != ''))
    })
  }, [])

  return (
    <Container>
      <MenuPrincipal notaArd={notas} />
    </Container>
  )
}

export default Home
