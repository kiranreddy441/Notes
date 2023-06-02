import {useState} from 'react'

import {v4 as uuid4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  AppContainer,
  Heading,
  FormContainer,
  TitleInput,
  TextareaElement,
  ButtonElement,
  ImageElement,
  Paragraph,
  Head,
  EmptyViewContainer,
  UlContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeText = event => {
    setText(event.target.value)
  }

  const renderEmptyView = () => (
    <EmptyViewContainer>
      <ImageElement
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <Head>No Notes Yet</Head>
      <Paragraph>Notes you add will appear here</Paragraph>
    </EmptyViewContainer>
  )

  const onSubmitForm = event => {
    event.preventDefault()
    const newObject = {
      id: uuid4(),
      title,
      text,
    }
    setList(prev => [newObject, ...prev])
    setTitle('')
    setText('')
  }

  const renderItems = () => (
    <UlContainer>
      {list.map(eachOne => (
        <NoteItem details={eachOne} key={eachOne.id} />
      ))}
    </UlContainer>
  )

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onSubmitForm}>
        <TitleInput
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
          type="name"
        />
        <TextareaElement
          value={text}
          onChange={onChangeText}
          placeholder="Take a Note..."
          col="30"
          rows="5"
        />
        <ButtonElement type="submit">Add</ButtonElement>
      </FormContainer>
      {list.length >= 1 ? renderItems() : renderEmptyView()}
    </AppContainer>
  )
}

export default Notes
