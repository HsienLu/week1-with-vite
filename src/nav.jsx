function Nav() {
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
  </ul>;
}
export default Nav;
