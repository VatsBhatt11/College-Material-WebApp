import styles from "./card.module.css"

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.courses_box}>
        <div className={styles.courses_item}>
          <a href="#" className={styles.item_link}>
            <div className={styles.item_bg}></div>

            <div className={styles.item_title}>
              UI/Web&amp;Graph design for teenagers 11-17&#160;years old
            </div>

            <div className={styles.item_datebox}>
              Start:
              <span className={styles.item_date}>04.11.2022</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
