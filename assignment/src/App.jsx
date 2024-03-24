import Navbar from "./components/navbar";
import {ImageSlider} from "./components/ImageSlider"
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <div className="main">
          <span className="headings">
            <h1>Featured Products</h1>
            <h3>Explore and discover a variety of products</h3>
          </span>
          <ImageSlider ></ImageSlider>
      </div>
    </>
  );
}

export default App;
