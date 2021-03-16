import axios from "axios";

export const fetchRandomNumber = ({ commit }, { min, max }) => {
  axios
    .get(
      `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`
    )
    .then((response) => {
      commit("addNumber", response.data);
    });
};
