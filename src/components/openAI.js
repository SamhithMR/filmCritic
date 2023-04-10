import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useSelector } from 'react-redux'

function ChatbotApp({prompt}) {
  const count = useSelector((state) => state.home.API_KEY);
  const [response, setResponse] = useState("");
  const configuration = new Configuration({ apiKey: `${count}` });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Viewer sentiment for ${prompt}, pos & neg 5 each`,
        temperature: 0.5,
        max_tokens: 2000,
      });
      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div >
      {response ?
         <div className="GPT_response" >
          {response.split("\n").map((x, i) => {
            return(["positive","Positive","negative","Negative"].some(el => x.includes(el))) ?
             <div className="bold">{x}</div> :
             <div key={i}>{x}</div>
            })}
         </div>
       :  <form className="viewResponse" onSubmit={handleSubmit}><button type="submit">view response</button></form>}
    </div>
  );
}

export default ChatbotApp;
