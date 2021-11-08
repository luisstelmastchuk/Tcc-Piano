import styled, { css } from 'styled-components'

export const PartituraStyle = styled.div`
  background-color: white;
  position: relative;
  height: 180px;
  width: 800px;
  padding: 30px 20px 30px 30px;
  border: 2px solid black;
`
export const PartituraInterno = styled.div`
  background-color: white;
  position: relative;
  height: 20px;
  width: 730px;
  border-top: 2px solid black;
`
interface INota {
  isActived?: boolean
}
export const PartituraInterno2 = styled.div`
  background-color: white;
  position: relative;
  height: 20px;
  width: 730px;
`

export const C0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 5px;
  top: 9px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const C01 = styled.div<INota>`
  position: relative;
  width: 35px;
  height: 2px;
  top: 8px;
  left: -5px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const DF0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 40px;
  top: -8.5px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const DF01 = styled.div<INota>`
  position: relative;
  width: 35px;
  height: 2px;
  top: 7px;
  left: -5px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const DFs0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -16px;
  top: -20px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`
export const D0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 70px;
  top: -37.5px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const EF0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 107px;
  top: -56px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const EFs0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -17px;
  top: -12px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`

export const E0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 135px;
  top: -82px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const F0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 165px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const GF0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 203px;
  top: -18px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const GFs0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`

export const G0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 230px;
  top: -45px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const AF0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 267px;
  top: -63px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const AFs0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -17.5px;
  top: -13px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`
export const A0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 295px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const BF0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 333px;
  top: -18px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const BFs0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`
export const B0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 360px;
  top: -45px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const C1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 385px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const DF1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 420px;
  top: -18px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const DFs1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`

export const D1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 445px;
  top: -45px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const EF1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 482px;
  top: -64px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`

export const EFs1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -10px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`
export const E1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 508px;
  top: 2px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const F1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 535px;
  top: -27px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const GF1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 570px;
  top: -70px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const GFs1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -12px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`
export const G1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 595px;
  top: 0px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const AF1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 630px;
  top: -18px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const AF11 = styled.div<INota>`
  position: relative;
  width: 35px;
  height: 2px;
  top: 18px;
  left: -5px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`

export const AFs1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -12px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`
export const A1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 655px;
  top: -45px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const A11 = styled.div<INota>`
  position: relative;
  width: 35px;
  height: 2px;
  top: 8px;
  left: -5px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const BF1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 690px;
  top: -63px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const BF11 = styled.div<INota>`
  position: relative;
  width: 35px;
  height: 2px;
  top: 8px;
  left: -5px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const BFs1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -15px;
  color: transparent;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        color: black;
      `
    }
  }};
`

export const B1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 717px;
  top: -91px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
export const B11 = styled.div<INota>`
  position: relative;
  width: 35px;
  height: 2px;
  top: 18px;
  left: -5px;
  ${(props) => {
    if (props.isActived == true) {
      return css`
        background-color: black;
      `
    }
  }};
`
