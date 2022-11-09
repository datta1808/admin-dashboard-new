import Axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// require("dotenv").config();

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export default function Buttons() {

    const provisionInstance = () => {
        const response = Axios.post('/createInstance')
        console.log(response);
    }

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={provisionInstance}>
        Provision
      </Button>
      <Button variant="outlined" color="error">
        Cancel
      </Button>
    </Stack>
  );
}