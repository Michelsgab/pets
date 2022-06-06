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
}

export default function List({ pets }: ListProps) {
  const maxTextSize = 200;

  return (
    <ListStyled>
      {pets.map((pet) => (
        <>
          <ListItem key={pet.id}>
            <Photo src={pet.photo} alt={pet.name} />
            <Info>
              <Name>Max</Name>
              <Description>
                {TextService.limitText(pet.history, maxTextSize)}
              </Description>
              <Button variant={"contained"} fullWidth>
                Adopt {pet.name}
              </Button>
            </Info>
          </ListItem>
        </>
      ))}
    </ListStyled>
  );
}
