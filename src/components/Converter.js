import classes from "./Converter.module.css";
import { useState } from "react";
import {useQuery} from 'react-query'
import { round } from "mathjs";
import arrows from '../img/arrows.svg'

function Converter(){
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


    const { data } = useQuery("currencies", () => getCurrencies());


    function getRate(currency){
        if (currency==="UAH"){
            return 1;
        }
          return data.find((element) => {
            return element.cc === currency;
          }).rate;}


const [value1, setValue1] = useState();
const [value2, setValue2] = useState();
const [selectedCurrency1, setSelectedCurrency1] = useState("UAH");
const [selectedCurrency2, setSelectedCurrency2] = useState("USD");


 function changeSelectedCurrency1(event) {
    setSelectedCurrency1(event.target.value);
    setValue2(
      round(
        (value1 / getRate(selectedCurrency2)) * getRate(event.target.value),
        2
      )
    );
  }

  function changeSelectedCurrency2(event) {
    setSelectedCurrency2(event.target.value);
    setValue1(
      round(
        (value2 / getRate(selectedCurrency1)) * getRate(event.target.value),
        2
      )
    );
  }

  function changeValue1(event) {
    setValue1(event.target.value);
    setValue2(
      round((event.target.value / getRate(selectedCurrency1)) *
        getRate(selectedCurrency2),2)
    );
  }

   function changeValue2(event) {
     setValue2(event.target.value);
     setValue1(
       round((event.target.value / getRate(selectedCurrency1)) *
         getRate(selectedCurrency2),2)
     );
   }


    return (
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <input
            className={classes.currencyInput}
            onChange={changeValue1}
            value={value1}
            type="number"
          />
          <select
            className={classes.currencySelect}
            value={selectedCurrency1}
            onChange={changeSelectedCurrency1}
          >
            <option value="UAH">₴UAH</option>
            <option value="USD">$USD</option>
            <option value="EUR">€EUR</option>
          </select>
        </div>
        <img src={arrows} className={classes.arrows} alt="arrows"/>
        <div className={classes.box}>
          <input
            className={classes.currencyInput}
            onChange={changeValue2}
            value={value2}
            type="number"
          />
          <select
            className={classes.currencySelect}
            value={selectedCurrency2}
            onChange={changeSelectedCurrency2}
          >
            <option value="UAH">₴UAH</option>
            <option value="USD">$USD</option>
            <option value="EUR">€EUR</option>
          </select>
        </div>
      </div>
    );
}
export default Converter;
