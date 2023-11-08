// import React from "react";

export default function Nav({ setWeek }) {
  return (
    <>
      <ul
        style={{ display: "flex", gap: "100px" }}
        className="mt-0 py-5 bg-secondary-subtle"
      >
        <li style={{ listStyle: "none" }}>
          <a
            className="btn btn-primary"
            onClick={() => {
              setWeek(1);
            }}
          >
            week1
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            className="btn btn-primary"
            onClick={() => {
              setWeek(2);
            }}
          >
            week2
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            className="btn btn-primary"
            onClick={() => {
              setWeek(3);
            }}
          >
            week3
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            className="btn btn-primary"
            onClick={() => {
              setWeek(4);
            }}
          >
            week4
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            className="btn btn-primary"
            onClick={() => {
              setWeek(0);
            }}
          >
            首頁
          </a>
        </li>
      </ul>
    </>
  );
}
