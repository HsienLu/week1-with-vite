import { useState } from "react";
import Week1 from "./week1";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./nav";
import Week2 from "./Week2";
function App() {
  const [week, setWeek] = useState(0);
  if (week === 0) {
    return (
      <>
        <Week2 />
        {/* <Nav setWeek={setWeek} /> */}
        {/* <h1 style={{ textAlign: "left" }}>我的react六角作業</h1>
         */}
      </>
    );
  } else if (week === 1) {
    return (
      <>
        <Nav setWeek={setWeek} />
        <Week1 />
      </>
    );
  }
}

export default App;
