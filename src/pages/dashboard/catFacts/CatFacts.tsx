import { useEffect, useState } from "react";
import * as S from "../../../styles";
import Axios from 'axios';
import { message } from "antd";

const CatFacts = () => {
  const [fact, setFact] = useState('');
  const [messageApi, messageContext] = message.useMessage();

  /**
   * Fetch all facts from the cat fact API
   * Select one of the facts randomly from this list
   * Set that fact into the `fact` state variable
   */
  useEffect(() => {
    Axios.get('https://cat-fact.herokuapp.com/facts')
      .then((response) => {
        const facts = response.data;
        const fact = facts[Math.floor(Math.random() * 10) % (facts.length - 1)];
        setFact(fact.text);
      })
      .catch((error) => {
        messageApi.open({
          type: 'error',
          content: 'Could not load cat facts'
        })
      });
  }, [])

  return (
    <S.WidgetCard>
      {messageContext}
      <S.WidgetTitle>Cat Facts</S.WidgetTitle>
      <S.FactTitle>Here's a random cat fact for you:</S.FactTitle>
      <S.FactContent>{fact}</S.FactContent>
    </S.WidgetCard>
  )
}

export default CatFacts;