import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { ipcRenderer } from 'electron'

import MenuPrincipal from '../../containers/MenuPrincipal'
import Aula from '../../containers/Aulas'
import ModoLivre from '../../containers/ModoLivre'
import Prova from '../../containers/Prova'
import Desafio from '../../containers/Desafio'
import MenuLicao from '../../containers/MenuLicao'
import MenuSelecao from '../../containers/MenuSelecao'
import { sleep } from '../../helper/sleep'

const Home: React.FC = () => {
  const [notas, setNotas] = useState<string[]>([])

  useEffect(() => {
    ipcRenderer.on('arduinoCom', (e, arduinoData) => {
      setNotas(arduinoData.split('a').filter((nota) => nota != ''))
      // console.log({
      //   arduinoData: arduinoData.split('a').filter((nota) => nota != ''),
      //   data: arduinoData,
      // })
    })
  }, [])

  return (
    <Container>
      {/* <Desafio notaArd={notas}></Desafio> */}
      {/* <Prova notaArd={notas} provaP={0}></Prova> */}
      {/* <ModoLivre notaArd={notas}></ModoLivre> */}
      {/* <Aula notaArd={notas} aulaA={0} /> */}
      <MenuPrincipal notaArd={notas} />
      {/* <MenuSelecao /> */}
    </Container>
  )
}

export default Home
