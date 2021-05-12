import React, { useState } from "react";

export function Form({ callback }) {
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mx-sm-2"
          id="quarterInput"
          placeholder=""
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <br />
        <button id="post-btn" type="submit" className="btn btn-primary my-1">
          Calculate
        </button>
      </form>
    </div>
  );
}
