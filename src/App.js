import { MainButton } from './components/buttons/buttons';
import ArrowSVG from "./assets/arrow.svg";

function App() {
  return (
    <div className="App">
      <MainButton link_to="#" title="Hire me" />
      <br />
      <br />
      <MainButton link_to="#" title="See more" img={ArrowSVG}/>
      <br />
      <br />
    </div>
  );
}

export default App;
