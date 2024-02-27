import styles from "./card.module.css"

const Card = ({file}) => {
  return (
    <div className={styles.container}>
      <div className={styles.courses_box}>
        <div className={styles.courses_item}>
          <a href="#" className={styles.item_link}>
            <div className={styles.item_bg}></div>

            <div className={styles.item_title}>
              <h1>{file.fileName}</h1>
            </div>

            <div className={styles.item_datebox}>
              Uploaded at: 
              <span className={styles.item_date}>{file.createdAt?.toString().slice(4, 16)}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
