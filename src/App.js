import Router from "./shared/Router";
import { useSelector } from "react-redux";

//github 데스크탑으로 옮김

function App() {
  const counterstore = useSelector((state) => state);
  console.log(counterstore);
  return <Router></Router>;
}

export default App;
