import { ADD_DIGIMONS } from "./actionsTypes";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      // Escreva seu case para adicionar um novo digimon.
      console.log("reducer: action.type: ", action.digimon);
      return [...state, action.digimon];
    default:
      return state;
  }
};

export default digimonsReducer;
