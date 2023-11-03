import { useState } from "react";
import Week1 from "./week1";

function App() {
  const [week, setWeek] = useState(0);
  if (week === 0) {
    return (
      <>
        <ul style={{ display: "flex", gap: "200px" }}>
          <li>
            <a
              onClick={() => {
                setWeek(1);
              }}
            >
              week1
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setWeek(2);
              }}
            >
              week2
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setWeek(3);
              }}
            >
              week3
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setWeek(4);
              }}
            >
              week4
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setWeek(0);
              }}
            >
              首頁
            </a>
          </li>
        </ul>
        <h1>我的react六角作業</h1>
      </>
    );
  } else if (week === 1) {
    return (
      <>
        <ul style={{ display: "flex", gap: "200px" }}>
          <li>
            <a
              onClick={() => {
                setWeek(1);
              }}
            >
              week1
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setWeek(2);
              }}
            >
              week2
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setWeek(3);
              }}
            >
              week3
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setWeek(4);
              }}
            >
              week4
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setWeek(0);
              }}
            >
              首頁
            </a>
          </li>
        </ul>
        <Week1 />
      </>
    );
  }
}

export default App;
