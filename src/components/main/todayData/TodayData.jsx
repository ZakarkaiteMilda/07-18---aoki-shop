import style from './TodayData.module.css';
import style2 from '../Main.module.css';

export function TodayData() {
    return (
        <section className={style2.section}>
            <div className={style2.miniHeader}>
                <h2>Today's data</h2>
                <a className={style2.more} href="/">More</a>
            </div>
            <div className={style.cards}>
            <div className={style.card}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
            </div>         
        </section>
    );
}