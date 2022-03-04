import "./styles.scss";
import * as React from "react";

export default function App() {
  const [value, setValue] = React.useState(0);
  const onChange = (target: any) => {
    setValue(target.value);
  };
  const onIncrement = () => setValue(value + 1);
  const onDecrement = () => setValue(value - 1);

  return (
    <div className="App">
      <div>Value: {value}</div>
      <div className="input-group-container">
        <button
          className="nomicon nomicon-plus btn"
          onClick={onIncrement}
        ></button>
        <input type="number" onChange={onChange} value={value} />
        <button
          className="nomicon nomicon-minus btn"
          onClick={onDecrement}
        ></button>
      </div>
      <div className="input-group-container">
        <button
          className="nomicon nomicon-minus btn"
          onClick={onDecrement}
        ></button>

        <input
          type="number"
          onChange={onChange}
          value={value}
          disabled={true}
        />
      </div>

      {/* <div>
        erify nomicon font is loaded:
        <div className="nomicon nomicon-plus" />
      </div> */}
    </div>
  );
}
