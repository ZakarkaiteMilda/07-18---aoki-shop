import style from './Main.module.css';
import { MainHeader } from './mainHeader/MainHeader';
import { TodayData } from './todayData/TodayData';
import { OperationsAssistant } from './operationsAssistant/OperationsAssistant';

export function Main() {
    return (
      <main className={style.main}>
        <MainHeader title='Well begun is half done' tasks={[4, 5]} />
        <div className={style.background}>
          <TodayData title='Todays data' tasks={[1, 2, 3]} />
          <OperationsAssistant title='Operations Assistant' tasks={[6, 7, 8, 9]} />
        </div>
      </main>
    );
}
