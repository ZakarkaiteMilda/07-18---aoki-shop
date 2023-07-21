import style from './Aside.module.css';
import {GrHomeRounded} from 'react-icons/gr';

export function Aside() {
    return (
        <aside>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.icontHome}/>  
                <a className={style.textHome} href="/">Home</a>
            </div>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.iconlink}/>  
                <a className={style.textlink} href="/">Live</a>
            </div>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.iconlink}/>  
                <a className={style.textlink} href="/">Shop</a>
            </div>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.iconlink}/>  
                <a className={style.textlink} href="/">Commodity</a>
            </div>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.iconlink}/>  
                <a className={style.textlink} href="/">Order</a>
            </div>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.iconlink}/>  
                <a className={style.textlink} href="/">Data</a>
            </div>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.iconlink}/>  
                <a className={style.textlink} href="/">Assets</a>
            </div>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.iconlink}/>  
                <a className={style.textlink} href="/">Application</a>
            </div>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.iconlink}/>  
                <a className={style.textlink} href="/">Set up</a>
            </div>
        </aside>
    );
}

