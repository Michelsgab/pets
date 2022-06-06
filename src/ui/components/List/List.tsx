import { Button } from "@mui/material";
import {
  ListStyled,
  ListItem,
  Photo,
  Info,
  Name,
  Description,
} from "./List.style";
import { Pet } from "../../../data/@types/Pet";

interface ListProps {
  pets: Pet[];
}

export default function List({pets}: ListProps) {
  return (
    <ListStyled>
      <ListItem>
        <Photo
          src={
            "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
          }
        />
        <Info>
          <Name>Max</Name>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Description>
          <Button variant={"contained"} fullWidth>
            Adopt
          </Button>
        </Info>
      </ListItem>
    </ListStyled>
  );
}
