import type { NextPage } from "next";
import List from "../ui/components/List/List";
import Title from "../ui/components/Title/Title";
import {
  Dialog,
  DialogActions,
  TextField,
  Grid,
  Button,
  Snackbar,
} from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    petsList,
    selectPet,
    setSelectPet,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    adopt,
  } = useIndex();

  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            With a small monthly fee, you <br />
            can <strong>adopt a pet virtually</strong>
          </span>
        }
      />

      <List pets={petsList} onSelect={(pet) => setSelectPet(pet)} />

      <Dialog
        open={selectPet !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setSelectPet(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              fullWidth
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Value"}
              fullWidth
              type={"number"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"} onClick={() => setSelectPet(null)}>
            Cancel
          </Button>
          <Button color={"primary"} variant={"contained"} onClick={() => adopt()}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage("")}
      />
    </div>
  );
};

export default Home;
