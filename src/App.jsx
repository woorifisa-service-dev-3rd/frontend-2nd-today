import { useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Button from "./components/ui/Button";
import Slider from "./components/ui/Slider";
import ToggleSwitch from "./components/ui/ToggleSwitch";



function App() {
  const [range, setRange] = useState(50);
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="font-bold text-3xl">Sliders</h1>
      <div className="flex justify-around w-1/2 my-2">
        <Slider range={range} setRange={setRange}/>
      </div>
      <h1 className="font-bold text-3xl">Toggle Switch</h1>
      <div className="flex justify-around w-1/2 my-2">
        <ToggleSwitch on='On' off='off' toggle={toggle} setToggle={setToggle}/>
      </div>
      <h1 className="font-bold text-3xl">Inputs</h1>
      <div className="flex justify-around w-1/2 my-2">
        <Inputs/>
      </div>
      <h1 className="font-bold text-3xl">Buttons</h1>
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
      <div className="flex justify-around w-1/2 my-2">
        <Button type="secondary" onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Button>
        <Button type="secondary" isDisabled={true} onClick={(e) => console.log(e.target.className)}>
          Button Label
        </Button>
      </div>
    </div>
    </>
  );
}

export default App;
