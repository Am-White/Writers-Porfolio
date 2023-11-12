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

    emailjs.sendForm('service_70cz1nl', 'template_gr78mmr', form.current, 'udQZT3fgYrIG5rGlu')
      .then((result) => {
          // console.log(result.text);
      }, (error) => {
          // console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div style={{ backgroundColor: '#4E57A4'}}>
      <Container container sx={{minHeight: '85vh', paddingTop: '35px'}}>
        <Stack className="contact-box" direction="column" >
          <Typography 
            variant="h2" 
            style={{ fontFamily: 'catshop', letterSpacing: '3px', textAlign: 'center', color: '#BEB2EE'}}>
            Contact Form
          </Typography>
          <Divider variant="fullWidth" style={{backgroundColor: 'white', opacity: '50%',height: '2px', marginBottom: '15px'}} /> 
          <Typography variant='h6' style={{ fontFamily: 'averia', textAlign: 'center', color: '#E5EBF7'}}>
          Are you interested in hiring Narrative Witchcraft for your next project? Want to learn more about how we can level up your story? Don’t be shy; drop us a line below!
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
                  sx={{ input: { color: 'black', backgroundColor: 'white', borderRadius: '5px'} }}
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register('name', { required: true, maxLength: 30 })} />

                  {errors.name && errors.name.type === "required" && (
                    <Alert severity="error">Your name is required</Alert>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                      <Alert severity="error">Exceeds max length</Alert>
                  )}

                  <TextField type='email' placeholder='Email address' name='user_email' id="email"
                     sx={{ input: { color: 'black', backgroundColor: 'white', borderRadius: '5px'} }}
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
                  sx={{ color: 'black', backgroundColor: 'white', borderRadius: '5px'}}
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
                style={{ fontFamily: 'cabin', color: 'black', fontSize: '20px', letterSpacing: '3px', width: '100%', border: '#8798ED 2px solid', boxShadow: '3px 3px #411ECC', backgroundColor: '#8798ED'}} 
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