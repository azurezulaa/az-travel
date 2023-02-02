import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAlert, setAlert] = useState("");
  const [status, setStatus] = useState("error");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeRePassword = (e) => {
    setRePassword(e.target.value);
  };
  const signup = async () => {
    if (!email || !name || !password || !rePassword) {
      setMessage("Мэдээллийг бүрэн бөглөнө үү");
      setAlert(true);
      return;
    }
    if (password !== rePassword) {
      setMessage("Нууц үг хоорондоо таарахгүй байна!!!");
      setAlert(true);
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
      });
      setStatus("succes");
      setMessage(res.data.message);
      setAlert(true);
      props.setSignIn(true);
    } catch (error) {
      setStatus("error");
      setAlert(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar
        open={isAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={() => {
          setAlert(false);
        }}
      >
        <Alert severity={status}>{message}</Alert>
      </Snackbar>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "30px 50px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          БҮРТГҮҮЛЭХ
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Username"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={changeName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changePassword}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Re-Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changeRePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={signup}
          >
            БҮРТГҮҮЛЭХ
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                onClick={() => {
                  props.setSignIn(true);
                }}
              >
                НЭВТРЭХ
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
