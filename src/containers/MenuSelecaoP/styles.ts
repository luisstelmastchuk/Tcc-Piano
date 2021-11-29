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
  height: 8%;
  left: 25%;
`
export const ContainerCorpoAula = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 1%;
  width: auto;
  left: 5%;
  height: 70px;
  top: 15px;
  background-color: white;
  border: 2px solid black;
`

export const TextoHeader = styled.h1`
  color: #000066;
`
export const TextoBotao = styled.h1`
  color: #000066;
`
export const TextoLicao = styled.h1`
  color: #000066;
`
export const Botao = styled(Button)`
  background-color: #aaaaaa;
  position: relative;
  text-align: center;
  padding: 5px;
  width: 30%;
  height: 50px;
  left: 50px;
`
