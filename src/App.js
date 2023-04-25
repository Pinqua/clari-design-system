import { Button, RadioGroup, RadioItem } from "@clari/iris-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello Learning!!
        <Button type="button" tone="positive" variant="ghost" size="lg">
          Hello
        </Button>
        <RadioGroup label="Field Title" >
          <RadioItem value="left" label="Align left" />
          <RadioItem value="center" label="Align center" />
          <RadioItem value="right" label="Align right" />
        </RadioGroup>
      </header>
    </div>
  );
}

export default App;
