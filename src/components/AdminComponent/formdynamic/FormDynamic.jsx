import { Remove } from '@mui/icons-material';
import { Button, Container, Icon, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const FormDynamic = ({inputFields, setInputFields}) => {
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
      };
    
      const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setInputFields(newInputFields);
      }
    
      const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(),  k: '', v: '' }])
      }
    
      const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
      }
  return (
    <Container>
      <form  onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id} className="flex justify-center items-center">
            <TextField
              sx={{margin:"10px"}}
              name="k"
              label="Key"
              variant="outlined"
              value={inputField.k}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
              sx={{margin:"10px"}}
              name="v"
              label="Value"
              variant="outlined"
              value={inputField.v}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <Remove/>
            </IconButton>
          </div>
        )) }
      
        <Button
            sx={{marginTop:"20px"}}
            variant="contained" 
            onClick={handleAddFields}
            color="primary"
        >
              Add detailed
        </Button>
      </form>
    </Container>
  )
}

export default FormDynamic