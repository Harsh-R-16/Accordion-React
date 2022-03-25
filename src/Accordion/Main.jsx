import React from "react";
import { data } from "./data";
import Div from "./Div";

export default function Main() {
  return (
    <>
      <h1>Smooth Accordion Dropdown Menu Demo</h1>
      <section>
        {data.map((i, ind) => (
          <Div item={i} id={ind} />
        ))}
      </section>
    </>
  );
}
