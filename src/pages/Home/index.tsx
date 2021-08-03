import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import MenuPrincipal from '../../containers/MenuPrincipal'
import Aula from '../../containers/Aulas'
import ModoLivre from '../../containers/ModoLivre'
import Prova from '../../containers/Prova'
import Desafio from '../../containers/Desafio'
import { ipcRenderer } from 'electron'
import { sleep } from '../../helper/sleep'

const Home: React.FC = () => {
  const [notas, setNotas] = useState<string[]>([])

  useEffect(() => {
    ipcRenderer.on('arduinoCom', async (e, arduinoData) => {
      setNotas(arduinoData.split('a').filter((nota) => nota != ''))
      // console.log({
      //   arduinoData: arduinoData.split('a').filter((nota) => nota != ''),
      // })
    })
  }, [])

  return (
    <Container>
      {/* <Desafio notaArd={nota}></Desafio> */}
      {/* <Prova notaArd={nota}></Prova> */}
      {/* <ModoLivre notaArd={nota}></ModoLivre> */}
      <Aula notaArd={notas} />
    </Container>
  )
}

export default Home
