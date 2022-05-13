import Currencies from "./Currencies";
import { useQuery } from "react-query";
import classes from "./Header.module.css";
function Header() {
  function getCurrencies() {
    return fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const { isLoading, data } = useQuery("currencies", () => getCurrencies());
  if (isLoading) {
    return (
      <header className={classes.header}>
        <h1 className={classes.headerTitle}>Курс валют онлайн</h1>
        <h2 className={classes.currenciesInfo}>Loading...</h2>
      </header>
    );
};
  return (
    <header className={classes.header}>
      <h1 className={classes.headerTitle}>Курс валют онлайн</h1>
      <Currencies currencies={data} />
    </header>
  );
}
export default Header;
