import PopOver from "./components/PopOver";
import "./App.css";

function App() {
  return (
    <>
      <PopOver>
        <PopOver.Action label="button1" />
        <PopOver.Content content="button222" label=""/>
      </PopOver>
    </>
  );
}

export default App;
