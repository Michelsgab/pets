import { NextPage } from "next";
import { useRegister } from "../../data/hooks/pages/pets/useRegister";
import Title from "../../ui/components/Title/Title";
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";
import { useState } from "react";

const Register: NextPage = () => {
  const {
    name,
    history,
    photo,
    setName,
    setHistory,
    setPhoto,
    register,
    message,
    setMessage,
  } = useRegister();
  return (
    <>
      <Title
        title={"Pets Registration for Adoption"}
        subtitle={"Fill in the Data of the New Pet"}
      />
      <Paper sx={{ maxWidth: 970, mx: "auto", p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              label={"Name"}
              placeholder={"Enter Pet's name"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              rows={4}
              multiline
              fullWidth
              label={"Pet's History"}
              placeholder={"Enter Pet's name"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              fullWidth
              label={"Photo"}
              placeholder={"Enter Image's URL"}
            />
            <Button
              variant={"contained"}
              color={"secondary"}
              sx={{ mt: 2 }}
              component={"a"}
              href={"https://imgur.com/upload"}
              target={"_blank"}
            >
              Send Image
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              onClick={register}
              variant={"contained"}
              fullWidth
              sx={{ maxWidth: { md: 200 }, mt: 4 }}
            >
              Register Pet
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage("")}
        message={message}
      />
    </>
  );
};

export default Register;
