import investmentImage from "../../assets/investment-calculator-logo.png";
const Header = () => {
  return (
    <header id='header'>
      <h1>Investment Calculator</h1>
        <img src={investmentImage} alt="Investment" />
    </header>
  );
};

export default Header;