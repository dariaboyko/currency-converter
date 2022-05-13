import classes from "./Background.module.css";
import Converter from "./Converter";
function ConverterWrapper(props) {
  return (
    <div className={classes.converterBackground}>
      {props.children}
      <Converter />
    </div>
  );
}
export default ConverterWrapper;
