import Link from "next/link";

function Navbar() {
  return <>
  <nav>
      <div className="logo"></div>
      <div className="links">
         <Link href = "/">< a >mateo</a></Link> 
         <Link href = "/about">< a >Leo</a></Link> 
      </div>
      <div className="social"></div>
  </nav>
  </>;
}

export default Navbar;
