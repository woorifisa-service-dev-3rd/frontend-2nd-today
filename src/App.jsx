import "./App.css";
import Buttons from "./components/ui/Buttons";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="font-bold text-3xl">Buttons</h1>
      <div className="flex justify-around w-1/2 my-2">
        <Buttons type="filled" onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Buttons>
        <Buttons type="filled" isDisabled={true} onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Buttons>
      </div>
      <div className="flex justify-around w-1/2 my-2">
        <Buttons type="line" onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Buttons>
        <Buttons type="line" isDisabled={true} onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Buttons>
      </div>
    </div>
  );
}

export default App;
