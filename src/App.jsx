import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./Api";
import { useState } from "react";
import ImageList from "./components/ImageList";
import { Button, Form } from "react-bootstrap";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
