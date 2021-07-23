import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import MenuPrincipal from '../../containers/MenuPrincipal'
import Piano from '../../components/Piano'
import Aula from '../../containers/Aulas'
import { ipcRenderer } from 'electron'
import { sleep } from '../../helper/sleep'

const Home: React.FC = () => {
  const [notas, setNotas] = useState<string[]>([])
  const [nota, setNota] = useState<string>('')
  useEffect(() => {
    ipcRenderer.on('arduinoCom', async (e, arduinoData) => {
      const novasNotas = notas
      novasNotas.push(arduinoData)
      setNotas(novasNotas)
      setNota(arduinoData)
      console.log(notas)
      await sleep(1000)
      setNota('')
    })
  }, [])

  return (
    <Container>
      <Aula notaArd={nota} />
    </Container>
  )
}

export default Home
