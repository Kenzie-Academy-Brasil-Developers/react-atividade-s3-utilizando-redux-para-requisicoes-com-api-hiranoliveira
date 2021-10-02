import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((res) => {
      const itemFind = res.data.find((item) => {
        return item.name.toUpperCase() === digimon.toUpperCase();
      });
      itemFind ? dispatch(addDigimon(itemFind)) : setError(true);
      console.log("thunks itemFind:", itemFind);
    })
    .catch((error) => console.log(error));

  //Aqui faça uma requisição com o axios e em seguida, no .then()
  //utilize a função dispatch() passando addDigimon(response.data[0].name)
};

export default addDigimonsThunk;
