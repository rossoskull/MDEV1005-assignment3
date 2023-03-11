import * as S from "../../../styles";

const BarrieWeather = () => {
  return (
    <S.WidgetCard>
      <S.WidgetTitle>Barrie Weather</S.WidgetTitle>
      <img style={{ display: 'block', width: '100%' }} src="http://www.7timer.info/bin/astro.php?lon=-79.690331&lat=44.389355&ac=0&lang=en&unit=metric&output=internal&tzshift=0" />
    </S.WidgetCard>
  )
}

export default BarrieWeather;