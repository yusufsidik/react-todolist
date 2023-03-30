export default function Root() {
  const style = {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    listStyle: "none",
    textDecoration: "none",
  };
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul style={style}>
            <li>
              <a href={`/`}>Home</a>
            </li>
            <li>
              <a href={`/about`}>About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
