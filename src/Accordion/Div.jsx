import { useState } from "react";
import { subData, icons } from "./data";

export default function Div({ item, id }) {
  let [drop, setDrop] = useState(true);
  const clc = () => {
    setDrop(!drop);
  };
  return (
    <>
      <div className={`mainDiv ${drop || "red"}`} onClick={clc}>
        <i className={`fa ${icons[id]} abs`}></i>
        <i class={`fa fa-chevron-down right ${drop || "down"}`}></i>
        <p>{item}</p>
      </div>
      <div className={`subDiv ${drop && "height"}`}>
        {subData[id].map((i) => (
          <p>{i}</p>
        ))}
      </div>
    </>
  );
}
