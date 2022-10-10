import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import emailjs from '@emailjs/browser';

import "./contact.scss";

function Contact() {
  const [formvalue, setFormvalue] = useState({
    user_name: "",
    user_email: "",
    context: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
   

    emailjs.sendForm('service_dsq6weg', 'template_i8yilfl', form.current, 'nu0gscv7I4pR08oYk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
  };



  const validationform = (value) => {
    const errors = {};
    //eslint-disable-next-line 
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.user_name) {
      errors.name = "Bitte Name eingeben";
    }

    if (!value.user_email) {
      errors.email = "Bitte Email eingeben";
    } else if (!emailPattern.test(value.user_email)) {
      errors.email = "Bitte richtige Email eingeben";
    }

    if(!errors.name && !errors.email){
      sendEmail();
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue);
    }
  }, [formerror, formvalue, issubmit]);

  return (
    <div id="kontakt" className="contactContainer">
      <div className="inner">
        <form ref={form} onSubmit={handlesubmit}>
          <div className="row mb-4">
            <div className="input_container one_row">
              <TextField
                fullWidth
                label="Name*"
                id="fullWidth"
                type="text"
                name="user_name"
                value={formvalue.name}
                margin="dense"
                onChange={handlevalidation}
              />
              <span className="text-danger">{formerror.name} </span>
            </div>
          </div>

          <div className="row mb-4">
            <div className="input_container one_row">
              <TextField
                fullWidth
                label="Email*"
                id="fullWidth"
                name="user_email"
                margin="dense"
                value={formvalue.email}
                onChange={handlevalidation}
              />
              <span className="text-danger">{formerror.email} </span>
            </div>
          </div>

          <div className="row mb-4">
            <div className="input_container one_row">
              <TextField
                id="outlined-multiline-flexible"
                label="Womit können wir dir helfen?"
                name="message"
                multiline
                fullWidth
                rows={5}
                margin="dense"
                value={formvalue.address}
                onChange={handlevalidation}
              />
              <span className="text-danger">{formerror.address} </span>
            </div>
          </div>

          <div className="row mb-4">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button className="landing_button" name="button">
                Senden
              </button>
            </div>
          </div>
        </form>

        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
      </div>
      <div className="outer">
        <p>Kontakt</p>
        <h4>Lass uns anfangen</h4>
        <p>
          Setz dich unverbindlich mit uns in Kontakt. Wir planen gemeinsam <b>deine Zukunft.</b>
        </p>
        <div className="line"></div>
        <ul>
          <li>info@scorpmedia.de</li>
          <li>+49 176 77915838</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
