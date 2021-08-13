import * as React from "react";
import "./elements.css";

export const Search = ({ getQuery }) => {
  const searchRef = React.useRef(null);
  const [text, setText] = React.useState("");

  const onChange = (q) => {
    setText(q);
    // getQuery(q);
  };

  return (
    <div className="container" ref={searchRef}>
      <form>
        <div className="input-group">
          <label>
            <input
              type="text"
              placeholder="Enter City Name"
              value={text}
              onChange={(e) => onChange(e.target.value)}
            />
          </label>
          <button className="unit" type="button" onClick={() => getQuery(text)}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
