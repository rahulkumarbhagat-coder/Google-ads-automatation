import {chatSession} from "../config/aiConfig.js";

export const chatResponse = async (req, res) => {
  try {
    const { message } = req.body;

    const result = await chatSession.sendMessage(message)
    const data = JSON.parse(result.response.text())
    res.json(data)
  } catch (error) {
    console.log(error);
  }
};




  


