import { BiChevronDown } from "react-icons/bi";
import logo from "../../img/logo.png";
import user from "../../img/user.png";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <img className={style.logo} src={logo} alt="Logo" />
        <p className={style.menuName}>Aoki's shop</p>
        <BiChevronDown size="1.5rem" color="#aaa" />
        <button className={style.btn}>Basic</button>
      </div>
      <div className={style.right}>
        <a className={style.link} href="/">
          Notice
        </a>
        <a className={style.link} href="/">
          Help center
        </a>
        <img className={style.user} src={user} alt="User" />
        <BiChevronDown size="1.5rem" color="#aaa" />
      </div>
    </header>
  );
}
