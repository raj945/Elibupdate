import React from "react";
import Card from "./card";
import { Library } from "./data";

export default function Books() {
  return (
    <div>
      {Library.map((Lib, Id) => (
        <Card
          Book={Lib.book}
          link={Lib.link}
          author={Lib.author}
          id={Id}
          BookLink={Lib.BookLink}
        />
      ))}
    </div>
  );
}
