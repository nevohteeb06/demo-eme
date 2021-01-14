import { useState } from "react";
import { Segment, Menu, Header, Container, Image, Button, Message } from "semantic-ui-react";
import MyTextEditor from "../../atoms/TextEditor";
import RichTextEditor from 'react-rte';
import ImageUploaderComponent from "../../atoms/imageUploader";
import {REQUEST} from '../../../actions/http'
const PreviewPost = ({html, img}) => {
  return (
    <div>
      <Image src={img} size="medium" />
      <div dangerouslySetInnerHTML = {{__html : html}}></div>
    </div>
  );
}

const CreatePostMenu = () => {
  const [activeItem, setActiveItem] = useState('content')
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [details, setDetails] = useState({
    value:RichTextEditor.createEmptyValue(),
    img:""
  })
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const submitHandler =async (e) => {
    e.preventDefault()
    try{
      const response = await REQUEST({
        path:'/',
        method:"POST",
        data:{
          img:details.img,
          html
        },
        setLoading
      })
      setSuccess(response)
      setError(null)
    }catch(e){
      console.log(e.message)
      setSuccess(null)
      setError(e.message)
    }finally{
      return;
    }
  }
  return (
    <Container>
        <div className="user-request-menu">
          <Header attached="top" as="h3" textAlign="left">
            Create a post for discussion
          </Header>
          <Menu attached='top' tabular>
            <Menu.Item
              name='content'
              active={activeItem === 'content'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='image'
              active={activeItem === 'image'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='preview'
              active={activeItem === 'preview'}
              onClick={handleItemClick}
            />
          </Menu>
          <Segment attached='bottom'>
            { 
              activeItem ==='content' ?
              <MyTextEditor setHtml = {setHtml} details={details} setDetails={setDetails} /> :
              activeItem === "image" ?
              <ImageUploaderComponent details={details} setDetails={setDetails} />:
              <PreviewPost html={html} img={details.img} />
            }
          </Segment>
          <Button loading={loading} onClick={submitHandler}>Submit</Button>
          {
            error ? 
            <Message error>{error}</Message> : null
          }
          {
            success ? 
            <Message success>{success}</Message> : null
          }
      </div>    
    </Container>
  );
}
 
export default CreatePostMenu;