import {ItemContainer, Heading, Paragraph} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, text} = details

  return (
    <ItemContainer>
      <Heading>{title}</Heading>
      <Paragraph>{text}</Paragraph>
    </ItemContainer>
  )
}

export default NoteItem
