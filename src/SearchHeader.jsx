import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <div className="form-control-lg ">
        <form onSubmit={handleFormSubmit} className="search-input">
          {/* <label className="alert alert-secondary">Ne Arıyorsunuz?</label> */}
          <input
            className="form-control mr-sm-2 "
            placeholder="Ne Arıyorsunuz?"
            value={valueInput}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchHeader;
