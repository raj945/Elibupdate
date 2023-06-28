import React from "react";
import "./styles.css";

export default function Card(props) {
  const NewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <div className="Card">
        <div className="img">
          <img src={props.link} alt="Katherine Johnson" />
        </div>
        <div className="mainbox" key={props.id}>
          <div className="Book">{props.Book}</div>
          <div className="box">
            <div className="author">{props.author}</div>
            <div className="read" onClick={() => NewTab(props.BookLink)}>
              Read
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
