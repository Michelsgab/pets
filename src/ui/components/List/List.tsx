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
import { TextService } from "../../../data/services/TextService";

interface ListProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
  const maxTextSize = 200;

  return (
    <ListStyled>
      {props.pets.map(pet => (
        <>
          <ListItem key={pet.id}>
            <Photo src={pet.photo} alt={pet.name} />
            <Info>
              <Name>Max</Name>
              <Description>
                {TextService.limitText(pet.history, maxTextSize)}
              </Description>
              <Button variant={"contained"} fullWidth onClick={() => props.onSelect(pet)} >
                Adopt {pet.name}
              </Button>
            </Info>
          </ListItem>
        </>
      ))}
    </ListStyled>
  );
}
