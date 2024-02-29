import data from "./fetchData.js"; /* Henter hele filen */
import { renderData, renderBg } from "./renderData.js";

const app = {};

app.init = async () => {
  renderData();
  renderBg();
};

app.init();
