import React from 'react'
import {
  PartituraStyle,
  PartituraInterno,
  PartituraInterno2,
  C0,
  C01,
  DF0,
  DF01,
  DFs0,
  D0,
  EF0,
  EFs0,
  E0,
  F0,
  GF0,
  GFs0,
  G0,
  AF0,
  AFs0,
  A0,
  BF0,
  BFs0,
  B0,
  C1,
  DF1,
  DFs1,
  D1,
  EF1,
  EFs1,
  E1,
  F1,
  GF1,
  GFs1,
  G1,
  AF1,
  AF11,
  AFs1,
  A1,
  A11,
  BF1,
  BF11,
  BFs1,
  B1,
  B11,
} from './styles'

interface INota {
  notaAula?: {
    id: number
    sections: string[]
  }
}

var contadorP = 0
var contadorPNota = 0

const Partitura: React.FC<INota> = (props) => {
  const notaAulaX = props.notaAula.sections
  var notaA = [false]

  // console.log(notaAulaX)

  const funcaoAula = async () => {
    while (contadorPNota < 24) {
      contadorPNota += 1
      notaA[contadorPNota] = false
    }
    while (contadorP != 24) {
      notaA[0] = notaAulaX[contadorP] == 'C0' ? true : notaA[0]
      notaA[1] = notaAulaX[contadorP] == 'DF0' ? true : notaA[1]
      notaA[2] = notaAulaX[contadorP] == 'D0' ? true : notaA[2]
      notaA[3] = notaAulaX[contadorP] == 'EF0' ? true : notaA[3]
      notaA[4] = notaAulaX[contadorP] == 'E0' ? true : notaA[4]
      notaA[5] = notaAulaX[contadorP] == 'F0' ? true : notaA[5]
      notaA[6] = notaAulaX[contadorP] == 'GF0' ? true : notaA[6]
      notaA[7] = notaAulaX[contadorP] == 'G0' ? true : notaA[7]
      notaA[8] = notaAulaX[contadorP] == 'AF0' ? true : notaA[8]
      notaA[9] = notaAulaX[contadorP] == 'A0' ? true : notaA[9]
      notaA[10] = notaAulaX[contadorP] == 'BF0' ? true : notaA[10]
      notaA[11] = notaAulaX[contadorP] == 'B0' ? true : notaA[11]
      notaA[12] = notaAulaX[contadorP] == 'C1' ? true : notaA[12]
      notaA[13] = notaAulaX[contadorP] == 'DF1' ? true : notaA[13]
      notaA[14] = notaAulaX[contadorP] == 'D1' ? true : notaA[14]
      notaA[15] = notaAulaX[contadorP] == 'EF1' ? true : notaA[15]
      notaA[16] = notaAulaX[contadorP] == 'E1' ? true : notaA[16]
      notaA[17] = notaAulaX[contadorP] == 'F1' ? true : notaA[17]
      notaA[18] = notaAulaX[contadorP] == 'GF1' ? true : notaA[18]
      notaA[19] = notaAulaX[contadorP] == 'G1' ? true : notaA[19]
      notaA[20] = notaAulaX[contadorP] == 'AF1' ? true : notaA[20]
      notaA[21] = notaAulaX[contadorP] == 'A1' ? true : notaA[21]
      notaA[22] = notaAulaX[contadorP] == 'BF1' ? true : notaA[22]
      notaA[23] = notaAulaX[contadorP] == 'B1' ? true : notaA[23]
      contadorP += 1
    }
    contadorPNota = 0
    if (contadorP == 24) contadorP = 0
  }

  funcaoAula()

  return (
    <PartituraStyle>
      <PartituraInterno2>
        <G1 isActived={notaA[19]}>
          <AF11 isActived={notaA[19]}></AF11>
        </G1>
        <AF1 isActived={notaA[20]}>
          <AF11 isActived={notaA[20]}></AF11>
          <AFs1 isActived={notaA[20]}>#</AFs1>
        </AF1>
        <A1 isActived={notaA[21]}>
          <A11 isActived={notaA[21]}></A11>
        </A1>
        <BF1 isActived={notaA[22]}>
          <BF11 isActived={notaA[22]}></BF11>
          <BFs1 isActived={notaA[22]}>#</BFs1>
        </BF1>
        <B1 isActived={notaA[23]}>
          <B11 isActived={notaA[23]}></B11>
        </B1>
      </PartituraInterno2>
      <PartituraInterno2>
        <E1 isActived={notaA[16]}></E1>
        <F1 isActived={notaA[17]}>
          <DF01 isActived={notaA[17]}></DF01>
        </F1>
        ]
        <GF1 isActived={notaA[18]}>
          <DF01 isActived={notaA[18]}></DF01>
          <GFs1 isActived={notaA[18]}>#</GFs1>
        </GF1>
      </PartituraInterno2>
      <PartituraInterno>
        <C1 isActived={notaA[12]}></C1>
        <DF1 isActived={notaA[13]}>
          <DFs1 isActived={notaA[13]}>#</DFs1>
        </DF1>
        <D1 isActived={notaA[14]}></D1>
        <EF1 isActived={notaA[15]}>
          <EFs1 isActived={notaA[15]}>#</EFs1>
        </EF1>
      </PartituraInterno>
      <PartituraInterno>
        <A0 isActived={notaA[9]}></A0>
        <BF0 isActived={notaA[10]}>
          <BFs0 isActived={notaA[10]}>#</BFs0>
        </BF0>
        <B0 isActived={notaA[11]}></B0>
      </PartituraInterno>
      <PartituraInterno>
        <F0 isActived={notaA[5]}></F0>
        <GF0 isActived={notaA[6]}>
          <GFs0 isActived={notaA[6]}>#</GFs0>
        </GF0>
        <G0 isActived={notaA[7]}></G0>
        <AF0 isActived={notaA[8]}>
          <AFs0 isActived={notaA[8]}>#</AFs0>
        </AF0>
      </PartituraInterno>
      <PartituraInterno>
        <C0 isActived={notaA[0]}>
          <C01 isActived={notaA[0]}></C01>
        </C0>
        <DF0 isActived={notaA[1]}>
          <DF01 isActived={notaA[1]}></DF01>
          <DFs0 isActived={notaA[1]}>#</DFs0>
        </DF0>
        <D0 isActived={notaA[2]}></D0>
        <EF0 isActived={notaA[3]}>
          <EFs0 isActived={notaA[3]}>#</EFs0>
        </EF0>
        <E0 isActived={notaA[4]}></E0>
      </PartituraInterno>
    </PartituraStyle>
  )
}

export default Partitura
