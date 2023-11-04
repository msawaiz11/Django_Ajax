import React from 'react'
import Container  from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios'
function BodyParts() {


  const [email, setemail] = useState("")
  const [extractText, setExtractText] = useState("")
  const [password , setPassword] = useState("")
  const [image, setImage] = useState(null)


  const [showDangerAlert, setshowDangerAlert] = useState(false);
  const [showSuccessAlert, setshowSuccessAlert] = useState(false);


  const addProductInfo = async (event) => {
    event.preventDefault();
    let formFields = new FormData();
    formFields.append('email' , email)
    formFields.append('extractText', extractText)
    formFields.append('password', password)
    formFields.append('image', image)

    await axios({
      method : 'post',
      url : 'http://127.0.0.1:9005/students/',
      data: formFields
    }).then((response) => {
      console.log('response,', response.data)
      setshowSuccessAlert();
    })
    .catch((error) => {
      console.error('Error occurred:', error);
      setshowDangerAlert();
    });
  }

  return (
    <Container>
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'white'}}>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" 
        value={email} onChange={ (e) => setemail(e.target.value)} />
        <Form.Text className="text-info">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicFileType">
        <Form.Label style={{color:'white'}}>Extract Text</Form.Label>
        <Form.Control type="text" name='extractText' placeholder="Extracted Text" value={extractText} 
        onChange={ (e) => setExtractText(e.target.value)} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicFileType">
        <Form.Label style={{color:'white'}}>Upload File</Form.Label>
        <Form.Control type="file" name='image' onChange={ (e) => setImage(e.target.files[0])}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:'white'}}>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" 
         value={password} onChange={ (e) => setPassword(e.target.value)}/>
      </Form.Group>
     
      <Button variant="info" className='text-white' type="submit" onClick={addProductInfo}>
        Submit
      </Button>
    </Form>
    <Alert show={showDangerAlert} variant="danger"  onClose={() => setshowDangerAlert(false)} dismissible className="w-25 mt-3 ml-3 ">Error</Alert>
    <Alert show={showSuccessAlert} variant="success" onClose={() => setshowSuccessAlert(false)} dismissible  className="w-25 mt-3 ml-3 ">Data Saved</Alert>
            </Col>
            <Col md={2}></Col>
        </Row>
    </Container>
  )
}

export default BodyParts