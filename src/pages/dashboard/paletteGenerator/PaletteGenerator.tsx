import { useEffect, useState } from "react"
import * as S from "../../../styles"
import Axios from 'axios';
import { message } from 'antd'

const RandomQuoteGenerator = () => {
  const [messageApi, messageContext] = message.useMessage();
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getRandomColorNumber = () => {
    return Math.floor(Math.random() * 1000 % 256);
  }
  const fetchPalette = async () => {
    try {

      const response = await Axios.get('https://api.goprogram.ai/inspiration');
      const { quote, author } = response.data;

      setQuote(quote);
      setAuthor(author);

    } catch (error) {
      messageApi.open({
        type: 'error',
        content: 'Error occurred while fetching a quote'
      });
    }
  }

  useEffect(() => {
    fetchPalette();
  }, [])

  return (
    <S.WidgetCard>
      {messageContext}
      <S.WidgetTitle>Quote of the Day</S.WidgetTitle>
      {quote.length > 0 && (
        <>
          <S.QuoteContent>"{quote}"</S.QuoteContent>
          <S.QuoteAuthor>{author}</S.QuoteAuthor>
        </>
      )}
    </S.WidgetCard>
  )
}

export default RandomQuoteGenerator;
