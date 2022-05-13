import classes from "./Background.module.css";
function MoneyBackground(props) {
  return <div className={classes.moneyBackground}>{props.children}</div>;
}
export default MoneyBackground;
