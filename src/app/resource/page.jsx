import Card from "@/components/card/Card";
import styles from "./resource.module.css"

const ResourcePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Card />
      </div>
      <div className={styles.card}>
        <Card />
      </div>
      <div className={styles.card}>
        <Card />
      </div>
      <div className={styles.card}>
        <Card />
      </div>
    </div>
  );
};

export default ResourcePage;
