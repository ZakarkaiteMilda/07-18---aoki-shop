import style from './Aside.module.css';
import {GrHomeRounded} from 'react-icons/gr';
import {RiLiveLine} from 'react-icons/ri';
import {CiShop} from 'react-icons/ci';
import {LiaShoppingBagSolid} from 'react-icons/lia';
import {RiBillLine} from 'react-icons/ri';
import {BsClipboard2Data} from 'react-icons/bs';
import {TbCoinBitcoin} from 'react-icons/tb';
import {PiSquaresFourThin} from 'react-icons/pi';
import {CiSettings} from 'react-icons/ci';
import {BiChevronDown} from 'react-icons/bi';

export function Aside() {
    return (
        <aside>
            <div className={style.asideRow}> 
                <GrHomeRounded className={style.icontHome}/>  
                <a className={style.textHome} href="/">Home</a>
            </div>
            <div className={style.asideRow}> 
                <RiLiveLine className={style.iconlink}/>  
                <a className={style.textlink} href="/">Live</a>
            </div>
            <div className={style.asideRow}> 
                <CiShop className={style.iconlink}/>  
                <a className={style.textlink} href="/">Shop</a>
                <BiChevronDown className={style.downShop}/>  
            </div>
            <div className={style.asideRow}> 
                <LiaShoppingBagSolid className={style.iconlink}/>  
                <a className={style.textlink} href="/">Commodity</a>
            </div>
            <div className={style.asideRow}> 
                <RiBillLine className={style.iconlink}/>  
                <a className={style.textlink} href="/">Order</a>
            </div>
            <div className={style.asideRow}> 
                <BsClipboard2Data className={style.iconlink}/>  
                <a className={style.textlink} href="/">Data</a>
            </div>
            <div className={style.asideRow}> 
                <TbCoinBitcoin className={style.iconlink}/>  
                <a className={style.textlink} href="/">Assets</a>
            </div>
            <div className={style.asideRow}> 
                <PiSquaresFourThin className={style.iconlink}/>  
                <a className={style.textlink} href="/">Application</a>
                <BiChevronDown className={style.downApplication}/> 
            </div>
            <div className={style.asideRow}> 
                <CiSettings className={style.iconlink}/>  
                <a className={style.textlink} href="/">Set up</a>
            </div>
        </aside>
    );
}

