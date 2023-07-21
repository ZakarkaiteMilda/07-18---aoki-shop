import style from "./MainHeader.module.css";

export function MainHeader() {
  return (
    <div className={style.header}>
      <div>
        <h1>Well begun is half done</h1>
        <p>Complete the following steps to sell</p>
      </div>
      <div className={style.steps}>
        <div className={style.stepToSell}>
          <div className={style.stepText}>
            <h4>1.certification</h4>
            <span className={style.go}>GO</span>
          </div>
          <p className={style.stepDescription}>
            Upload qualification information
          </p>
        </div>
        <div className={style.stepToSell}>
          <div className={style.stepText}>
            <h4>2.Upload a product</h4>
            <span className={style.go}>GO</span>
          </div>
          <p className={style.stepDescription}>Fill in product information</p>
        </div>
        <div className={style.stepToSell}>
          <div className={style.stepText}>
            <h4>3.Open for sale</h4>
            <span className={style.go}>GO</span>
          </div>
          <p className={style.stepDescription}>
            Choose to open any sales channel
          </p>
        </div>
      </div>
    </div>
  );
}
