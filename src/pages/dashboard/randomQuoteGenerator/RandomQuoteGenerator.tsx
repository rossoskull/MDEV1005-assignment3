import { useEffect, useState } from "react"
import * as S from "../../../styles"
import Axios from 'axios';
import { message } from 'antd'

const RandomQuoteGenerator = () => {
  const [messageApi, messageContext] = message.useMessage();
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  /**
   * function to fetch a random quote from inspiration API
   * this random quote is saved inside `quote` state variable
   * the author name is saved inside `author` state variable
   */
  const fetchQuote = async () => {
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

  /**
   * This effect calls the method to fetch a quote on this widget's first render
   */
  useEffect(() => {
    fetchQuote();
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
