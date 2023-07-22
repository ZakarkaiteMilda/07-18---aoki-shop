import style from "./OperationsAssistant.module.css";
import style2 from "../Main.module.css";
import icon5 from "../../../img/icon/5-icon.png";
import icon6 from "../../../img/icon/6-icon.png";
import icon7 from "../../../img/icon/7-icon.png";
import icon8 from "../../../img/icon/8-icon.png";
import icon9 from "../../../img/icon/9-icon.png";
import icon10 from "../../../img/icon/10-icon.png";
import icon11 from "../../../img/icon/11-icon.png";
import icon12 from "../../../img/icon/12-icon.png";

export function OperationsAssistant({ title, tasks }) {
  return (
    <section className={style2.section}>
      <div className={style2.miniHeader}>
        <h2>{title} ({tasks.length})</h2>
        <a className={style2.more} href="/">
          More
        </a>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.containerIconOperation}>
            <img className={style.iconOperation} src={icon5} alt="icon5" />
          </div>
          <div className={style.textOperation}>
            <h4>Small telecast live</h4>
            <p className={style.description}>Live sales in WeChat</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.containerIconOperation}>
            <img className={style.iconOperation} src={icon6} alt="icon6" />
          </div>
          <div className={style.textOperation}>
            <h4>Mini Program Store</h4>
            <p className={style.description}>WeChat Mini Program Store</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.containerIconOperation}>
            <img className={style.iconOperation} src={icon7} alt="icon7" />
          </div>
          <div className={style.textOperation}>
            <h4>Distribution market</h4>
            <p className={style.description}>One-clikcpromotion</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.containerIconOperation}>
            <img className={style.iconOperation} src={icon8} alt="icon8" />
          </div>
          <div className={style.textOperation}>
            <h4>Coupon</h4>
            <p className={style.description}>Store marketing essentials</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.containerIconOperation}>
            <img className={style.iconOperation} src={icon9} alt="icon9" />
          </div>
          <div className={style.textOperation}>
            <h4>Store construction</h4>
            <p className={style.description}>Can be customized</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.containerIconOperation}>
            <img className={style.iconOperation} src={icon10} alt="icon10" />
          </div>
          <div className={style.textOperation}>
            <h4>Promoting ads</h4>
            <p className={style.description}>WeChat billion-level exposure</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.containerIconOperation}>
            <img className={style.iconOperation} src={icon11} alt="icon11" />
          </div>
          <div className={style.textOperation}>
            <h4>Promotion rebate</h4>
            <p className={style.description}>Help you sell goods</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.containerIconOperation}>
            <img className={style.iconOperation} src={icon12} alt="icon12" />
          </div>
          <div className={style.textOperation}>
            <h4>Asset Management</h4>
            <p className={style.description}>Income and withdrawai</p>
          </div>
        </div>
      </div>
    </section>
  );
}
