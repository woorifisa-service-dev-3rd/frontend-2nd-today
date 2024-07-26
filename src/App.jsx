import "./App.css";
import Button from "./components/ui/Button";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="font-bold text-3xl">Button</h1>
      <div className="flex justify-around w-1/2 my-2">
        <Button type="filled" onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Button>
        <Button type="filled" isDisabled={true} onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Button>
      </div>
      <div className="flex justify-around w-1/2 my-2">
        <Button type="line" onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Button>
        <Button type="line" isDisabled={true} onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Button>
      </div>
      <div className="flex justify-around w-1/2 my-2">
        <Button type="light" onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Button>
        <Button type="light" isDisabled={true} onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Button>
      </div>
    </div>
  );
}

export default App;
