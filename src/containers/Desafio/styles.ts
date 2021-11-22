import styled, { css } from 'styled-components'
import { Button } from 'antd'

export const ContainerHeader = styled.div`
  text-align: center;
`
export const Texto = styled.h1`
  color: Blue;
`
export const ContainerDesafio = styled.div`
  text-align: center;
  position: relative;
  padding: 4px;
  left: 15%;
  width: 70%;
`
export const ContainerDesafioInterno1 = styled.div`
  position: relative;
  width: auto;
  height: 50px;
  width: 60%;
  left: 260px;
  padding-top: 4px;
  display: flex;
  flex-direction: row;
`
export const ContainerTentativas = styled.div`
  position: relative;
  width: 25%;
  height: 40px;
  left: 10%;
  padding-top: 10px;
  border: 2px solid black;
  background-color: white;
`
export const ContainerScore = styled.div`
  position: relative;
  width: 25%;
  height: 40px;
  left: 25%;
  padding-top: 10px;
  border: 2px solid black;
  background-color: white;
`
export const ContainerTimer = styled.div`
  position: relative;
  width: 15%;
  height: 20px;
  left: 17%;
  top: 10px;
  padding-top: 10px;
  border: 2px solid black;
  background-color: white;
`
export const ContainerDesafioInterno2 = styled.div`
  position: relative;
  width: auto;
  left: 260px;
  padding-top: 10px;
`
export const ContainerDesafioInterno3 = styled.div`
  position: relative;
  width: auto;
  left: 260px;
  padding-top: 10px;
`
export const ContainerFooter = styled.div`
  text-align: center;
  position: relative;
  height: 50px;
`
export const ContainerFooterInterno1 = styled.div`
  position: relative;
  width: 30%;
  left: 16.5%;
  top: 10px;
`
export const ContainerFooterInterno2 = styled.div`
  position: relative;
  width: 30%;
  left: 53%;
  top: -22px;
`
export const TextoBotao = styled.h1`
  color: #000066;
  font-size: 14px;
  text-align: center;
`

export const Botao = styled(Button)``
