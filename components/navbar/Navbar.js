import Link from "next/link";

function Navbar() {
  return <>
  <nav>
      <div className="logo"></div>
      <div className="links">
         <Link href = "/">< a >Projects</a></Link> 
         <Link href = "/about">< a >About</a></Link> 
      </div>
      <div className="social"></div>
  </nav>
  </>;
}

export default Navbar;
