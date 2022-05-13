import Header from "./components/Header";
import "./App.css";
import MoneyBackground from "./components/MoneyBackground";
import ConverterWrapper from "./components/ConverterWrapper";

function App() {
  return (
    <>
      <Header />
      <MoneyBackground>
        <ConverterWrapper>
        </ConverterWrapper>
      </MoneyBackground>
    </>
  );
}

export default App;
