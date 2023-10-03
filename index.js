const express = require("express");//runs http server
const cors = require("cors");//calls server from any orgin
const { default: axios }= require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r= await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret:username, first_name:username},
        {headers:{"private-key": "070b2fc9-f74d-4657-bcc2-bded4abc605e"}}
    );
    return res.status(r.status).json(r.data);
    }catch (e){
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);//runs the apps on this port