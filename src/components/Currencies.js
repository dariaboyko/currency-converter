import {
  round
} from "mathjs";
import classes from "./Header.module.css";

function Currencies({ currencies }) {
  return (
    <ul className={classes.currenciesInfo}>
      {currencies.map((item) => {
        if (item.cc === "EUR") {
          return <li key={item.r030}>€{round(item.rate, 2)}</li>;
        }
        if (item.cc === "USD") {
          return <li key={item.r030}>${round(item.rate, 2)}</li>;
        }
        return null;
      })}
    </ul>
  );
}

export default Currencies;
