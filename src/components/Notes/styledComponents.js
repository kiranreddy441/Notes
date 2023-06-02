import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 2000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 23px;
  font-family: 'Bree Serif';
  font-weight: bold;
  color: #4c63b6;
  margin-top: 10px;
  padding-top: 30px;
`
export const FormContainer = styled.form`
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  display: flex;
  flex-direction: column;

  width: 70%;
  border-radius: 3px;
  margin-top: 10px;
  padding: 5% 2%;
`
export const TitleInput = styled.input`
  border: none;
  outline: none;
  margin-top: 10px;
  padding-bottom: 20px;
`
export const TextareaElement = styled.textarea`
  border: none;
  outline: none;
  margin-top: 10px;
`

export const ButtonElement = styled.button`
  padding: 5px 8px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  align-self: flex-end;
  background-color: #4c63b6;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 4px;
`
export const ImageElement = styled.img`
  height: 50px;
  width: 50px;
`
export const Paragraph = styled.p`
  font-size: 12px;
  color: black;
  margin-top: 5px;
  margin-top: 10px;
`
export const Head = styled.h1`
  font-size: 18px;
  color: black;
  margin-top: 10px;
`
export const EmptyViewContainer = styled.div`
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
export const UlContainer = styled.ul`
display:flex;
flex-direction;row;
flex-wrap:wrap;
width:70%;


`
