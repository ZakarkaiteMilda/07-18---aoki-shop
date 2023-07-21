import style from "./TodayData.module.css";
import style2 from "../Main.module.css";
import icon1 from "../../../img/icon/1-icon.png";
import icon2 from "../../../img/icon/2-icon.png";
import icon3 from "../../../img/icon/3-icon.png";
import icon4 from "../../../img/icon/4-icon.png";

export function TodayData() {
  return (
    <section className={style2.section}>
      <div className={style2.miniHeader}>
        <h2>Today's data</h2>
        <a className={style2.more} href="/">
          More
        </a>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.textTodayData}>
            <h4>Payment amount</h4>
            <p className={style.number}>8,992</p>
            <p className={style.description}>Yesterday 8638</p>
          </div>
          <div className={style.containerIconTodayData}>
            <img className={style.iconTodayData} src={icon1} alt="icon1" />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.textTodayData}>
            <h4>Payment order</h4>
            <p className={style.number}>793</p>
            <p className={style.description}>Yesterday 753</p>
          </div>
          <div className={style.containerIconTodayData}>
            <img className={style.iconTodayData} src={icon2} alt="icon2" />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.textTodayData}>
            <h4>Playing customer</h4>
            <p className={style.number}>280</p>
            <p className={style.description}>Yesterday 320</p>
          </div>
          <div className={style.containerIconTodayData}>
            <img className={style.iconTodayData} src={icon3} alt="icon3" />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.textTodayData}>
            <h4>Pending orders</h4>
            <p className={style.number}>480</p>
            <p className={style.description}>Yesterday 470</p>
          </div>
          <div className={style.containerIconTodayData}>
            <img className={style.iconTodayData} src={icon4} alt="icon4" />
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.textTodayData}>
            <h4>Live stream viewers</h4>
            <p className={style.number}>23,466</p>
            <p className={style.description}>Yesterday 22089</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.textTodayData}>
            <h4>New attention</h4>
            <p className={style.number}>4,890</p>
            <p className={style.description}>Yesterday 3800</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.textTodayData}>
            <h4>Cumuletive attention</h4>
            <p className={style.number}>135,743</p>
            <p className={style.description}>Yesterday 130493</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.textTodayData}>
            <h4>Number of orders</h4>
            <p className={style.number}>5,249</p>
            <p className={style.description}>Yesterday 4680</p>
          </div>
        </div>
      </div>
    </section>
  );
}
