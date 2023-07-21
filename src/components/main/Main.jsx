import style from './Main.module.css';
import { MainHeader } from './mainHeader/MainHeader';
import { TodayData } from './todayData/TodayData';
import { OperationsAssistant } from './operationsAssistant/OperationsAssistant';

export function Main() {
    return (
        <main className={style.main}>
            <MainHeader />  
            <div className={style.background}>
            <TodayData />  
            <OperationsAssistant />  
            </div>
        </main>
    );
}