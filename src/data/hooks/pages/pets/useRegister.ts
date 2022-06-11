import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiService";

export function useRegister() {
  const [name, setName] = useState(""),
    [history, setHistory] = useState(""),
    [photo, setPhoto] = useState(""),
    [message, setMessage] = useState("");

  function register() {
    if(formValidate()) {
        ApiService.post("/pets", {
            name,
            history,
            photo
        })
        .then(() => {
            clear();
            setMessage("Pet Registered Successfully")
        })
        .catch((error: AxiosError) => {
            setMessage(error.message);
        })
    } else {
        setMessage("Fill In All Fields")
    }
  }

  function formValidate() {
    return name.length > 2 && history.length > 20 && photo.length > 5;
  }

  function clear() {
    setName(""),
    setPhoto("")
    setHistory("");
  }

  return {
    name,
    history,
    photo,
    setName,
    setHistory,
    setPhoto,
    register,
    message,
    setMessage,
  };
}
