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
    ipcRenderer.on('arduinoCom', async (e, arduinoData) => {
      setNotas(arduinoData.split('a').filter((nota) => nota != ''))
      // console.log({
      //   arduinoData: arduinoData.split('a').filter((nota) => nota != ''),
      // })
    })
  }, [])

  return (
    <Container>
      {/* <Desafio notaArd={notas}></Desafio> */}
      {/* <Prova notaArd={notas}></Prova> */}
      {/* <ModoLivre notaArd={notas}></ModoLivre> */}
      {/* <Aula notaArd={notas} /> */}
      <MenuPrincipal />
    </Container>
  )
}

export default Home
