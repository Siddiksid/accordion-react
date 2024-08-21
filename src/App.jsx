import "./App.css";
import { AccordionQnA } from "./components/AccordionQnA";
import { data } from "./Data";
import star from "../assets/images/icon-star.svg"
function App() {
  return (
    <div className="home1">
      <div className="accordion-body">
        <div className="header">
          <img src="../assets/images/icon-star.svg" alt="star" />
          <h1>FAQs</h1>
        </div>
        <AccordionQnA data={data}/>
      </div>
    </div>
  );
}

export default App;
