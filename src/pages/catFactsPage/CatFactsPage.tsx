import Axios from "axios";
import { useEffect, useState } from "react";
import * as S from "../../styles";
import { message } from "antd";


const CatFactsPage = () => {
  const [messageApi, messageContext] = message.useMessage();
  const [facts, setFacts] = useState<string[]>([]);

  /**
   * Fetch all facts from the cat fact API
   * Set all the facts into `facts` state variable
   */
  useEffect(() => {
    Axios.get('https://cat-fact.herokuapp.com/facts')
      .then((response) => {
        const facts = response.data.map((f: any) => f.text);
        setFacts(facts);
      })
      .catch((error) => {
        messageApi.open({
          type: 'error',
          content: 'Could not load cat facts'
        })
      });
  }, [])

  return (
    <>
      {messageContext}
      <S.PageTitle>Cat Facts!</S.PageTitle>
      <S.PageSubtitle>Because why not!!</S.PageSubtitle>
      {facts.length > 0 && (
        <>
          <p>Here are some facts:</p>
          <ul>
            {facts.map((f) => (
              <li>{f}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default CatFactsPage;
