import * as S from "../../styles";
import CompoundInterestCalculator from "../dashboard/compoundInterestCalculator/CompoundInterestCalculator";

const CompoundInterestCalculatorPage = () => {
  return (
    <>
      <S.PageTitle>Compound Interest Calculator</S.PageTitle>
      <S.PageSubtitle>Saving money is a cure of a lean purse!</S.PageSubtitle>
      <CompoundInterestCalculator />
    </>
  );
}

export default CompoundInterestCalculatorPage;
