import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css'; 
import Textarea from './componed/textarea';
import Button from '@mui/material/Button';

function BasicTextFields(props) {
  const { countryENG, countryRUS, countryUZB } = props.data;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label={countryUZB} variant="standard" inputProps={{ readOnly: true }} />
      <TextField id="standard-basic" label={countryRUS} variant="standard" inputProps={{ readOnly: true }} />
      <TextField id="standard-basic" label={countryENG} variant="standard" inputProps={{ readOnly: true }} />
    </Box>
  );
}

function BasicTextFieldsTwo(props) {
  const { countryENG, countryRUS, countryUZB } = props.data;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label={countryUZB} variant="standard" inputProps={{ readOnly: true }} />
      <TextField id="standard-basic" label={countryRUS} variant="standard" inputProps={{ readOnly: true }} />
      <TextField id="standard-basic" label={countryENG} variant="standard" inputProps={{ readOnly: true }} />
    </Box>
  );
}

function App() {
  const data = {
    countryUZB: 'UZB',
    countryRUS: 'RUS',
    countryENG: 'ENG',
  };

  return (
    <div className='translate-wrapper'>
      <div className="container">
        <div className="TranslateInput">
          <BasicTextFields data={data} />
          <Textarea></Textarea>  
        </div>
        <div className="TranslateOutput">
          <BasicTextFieldsTwo data={data} />
          <Textarea ></Textarea>
        </div>
      </div>
      <div className="btn-wrapper">
      <Button variant="outlined" sx={{ mt: 5, ml: 2 }}>Translate</Button>

      </div>

    </div>
  );
}

export default App;
