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

  function adopt() {}

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
