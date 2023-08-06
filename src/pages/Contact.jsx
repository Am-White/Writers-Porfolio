import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { useForm } from "react-hook-form";

function ContactPage () {
  const { register, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });
  // const onSubmit = values => console.log(values);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_co164qa', 'template_aa9wikl', form.current, 'bx4-GAochnE7KPzmm')
      .then((result) => {
          // console.log(result.text);
      }, (error) => {
          // console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div style={{ backgroundColor: '#BCBDC0'}}>
      <Container container sx={{minHeight: '85vh', paddingTop: '35px'}}>
        <Stack className="contact-box" direction="column" >
          <Typography 
            variant="h2" 
            style={{ fontFamily: 'catshop', letterSpacing: '3px', textAlign: 'center'}}>
            Contact Form
          </Typography>
          <Divider variant="fullWidth" style={{backgroundColor: '#734B5E', opacity: '50%',height: '2px', marginBottom: '15px'}} /> 
          <Typography style={{ fontFamily: 'Bebas Neue', letterSpacing: '3px', textAlign: 'center'}}>
            Please reach out to us via this form with your name, email, and a short message explaining
            your questions, interests, or if you just want to connect.
          </Typography>
          <br/>
          <form 
            ref={form} 
            onSubmit={sendEmail} >
            <Stack direction='column' spacing={2}>
              <Stack direction='column' spacing={2}>
                <TextField
                  type='text' 
                  placeholder='Name' 
                  name='user_name'
                  id="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register('name', { required: true, maxLength: 30 })} />

                  {errors.name && errors.name.type === "required" && (
                    <Alert severity="error">Your name is required</Alert>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                      <Alert severity="error">Exceeds max length</Alert>
                  )}

                  <TextField type='email' placeholder='Email address' name='user_email' id="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })}/>

                  {errors.email && errors.email.type === "required" && (
                  <Alert severity="error">Your email is required!</Alert>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                  <Alert severity="error">Please enter a valid email address</Alert>
                  )}
                  <br/>
                <TextField 
                  name='message' 
                  type='text' 
                  placeholder='Message' 
                  multiline 
                  minRows={6} 
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message", {
                    required: true,
                  })}/>

                  {errors.message && errors.message.type === "required" && (
                  <Alert severity="error"> Please write a small message!</Alert>
                  )}
                  <br/>
              </Stack>
            </Stack>
              <Button 
                className="contact-btn" 
                type='submit' 
                value='Submit' 
                style={{ fontFamily: 'catshop', fontSize: '20px', letterSpacing: '3px', width: '100%', border: '#734B5E 1px solid', color: 'white', backgroundColor: 'rgba(115, 75, 94, .5)'}} 
                disabled={!isDirty || !isValid} 
                onClick={() => {
                  alert('Thank you! Your email was sent!');
                }}>
                  Submit
              </Button>
          </form>
        </Stack>
      </Container>
    </div>
  );
}

export default ContactPage;