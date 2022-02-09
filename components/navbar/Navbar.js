import Link from "next/link";
import css from 'styled-jsx/css'

function Navbar() {
  return <>
  <style jsx> {styles} </style>
  <nav>
      <div className="logo">
        {/* <Link href = "/"> <img src = "https://www.pngkey.com/png/full/182-1827361_tag-texture-dirt-nova-minecraft-grass-block.png"/></Link> */}
      </div>
      <div className="links">
         <Link href = "/">< a >Home</a></Link> 
         <Link href = "/about">< a >Other</a></Link> 
      </div>
      <div className="social"></div>
  </nav>
  </>;
}
const styles = css`
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 20px;
  background-color: rgb(28, 28, 28);
}
.logo {
  margin-right: auto;
}
.links {
  display: flex;
  margin-right: 40px;
}
a {
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
  transition: all 0.2s;
  vertical-align: middle;
  color: rgba(255, 255, 255, 0.8);
}
a:hover {
  color: rgba(255, 255, 255, 1);
  transform: scale(1.04);
}
.social a {
  font-size: 28px;
}
`
export default Navbar;
