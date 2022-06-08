import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [petsList, setPetsList] = useState<Pet[]>([]),
    [selectPet, setSelectPet] = useState<Pet | null>(null),
    [email, setEmail] = useState(""),
    [value, setValue] = useState(""),
    [message, setMessage] = useState("");

  useEffect(() => {
    ApiService.get("/pets").then((resp) => {
      setPetsList(resp.data);
    });
  }, []);

  useEffect(() => {
    if(selectPet === null) {
      clearForm();
    }
  }, [selectPet])

  function adopt() {
    if (selectPet !== null) {
      if (validateDateAdopt()) {
        ApiService.post("/adocoes", {
          pet_id: selectPet.id,
          email,
          value,
        })
          .then(() => {
            setSelectPet(null);
            setMessage("Pet Adopt Successfully");
            // clearForm();
          })
          .catch((error) => {
            setMessage(error.response?.data.message);
          });
      } else {
        setMessage("Fill in all fields");
      }
    }
  }

  function validateDateAdopt() {
    return email.length > 0 && value.length > 0;
  }

  function clearForm() {
    setEmail("")
    setValue("")
  }

  return {
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
  };
}
