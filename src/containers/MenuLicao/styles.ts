import styled, { css } from 'styled-components'
import { Button } from 'antd'

export const ContainerHeader = styled.div`
  text-align: center;
  height: 10%;
`

export const ContainerInternoHeader = styled.div`
  position: relative;
  padding: 25px;
  width: 50%;
  height: auto;
  left: 25%;
`
export const ContainerCorpo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 70%;
  left: 25%;
`
export const ContainerCorpoInterno = styled.div`
  position: relative;
  width: 50%;
  height: 10%;
  left: 25%;
  top: 10%;
`
export const TextoHeader = styled.h1`
  color: #000066;
`
export const TextoBotao = styled.h1`
  color: #000066;
`
export const Botao = styled(Button)`
  background-color: #aaaaaa;
  position: relative;
  text-align: center;
  padding: 30px;
  width: 50%;
  height: 15%;
  left: 25%;
`
