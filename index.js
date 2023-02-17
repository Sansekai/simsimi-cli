import axios from "axios";
import readlineSync from "readline-sync";

while (true) {
  const command = readlineSync.prompt();
  const res = await axios.post(
    "https://api.simsimi.vn/v1/simtalk",
    new URLSearchParams({
      text: command,
      lc: "id",
    })
  );
  const data = res.data;
  console.log(data.message);
}
