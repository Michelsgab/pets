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

const Home: NextPage = () => {
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

      <List
        pets={[
          {
            id: 1,
            name: "Max",
            history: "djskldas",
            photo:
              "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
          },
          {
            id: 2,
            name: "Totty",
            history: "eiqwopeiqwo",
            photo:
              "https://media.istockphoto.com/photos/playful-happy-smiling-pet-dog-running-in-the-grass-picture-id1320018473?b=1&k=20&m=1320018473&s=170667a&w=0&h=Q-U9yI4JjCJYSAzXZwpnM4HuaXPzo4K-vBsgO7lanyo=",
          },
        ]}
      />

      <Dialog open={false} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label={"E-mail"} fullWidth type={"email"} />
          </Grid>
          <Grid item xs={12}>
            <TextField label={"Value"} fullWidth type={"number"} />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"}> Cancel </Button>
          <Button color={"primary"} variant={"contained"}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={false} message={"Congratulations!"} />
    </div>
  );
};

export default Home;
