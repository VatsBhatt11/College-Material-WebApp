import Card from "@/components/card/Card";
import styles from "./resource.module.css";
import { getFiles } from "@/lib/data";

const ResourcePage = async () => {
  const files = await getFiles();

  return (
    <div className={styles.container}>
      {files.map((file) => (
        <div className={styles.card} key={file.id}>
          <Card file={file} />
        </div>
      ))}
    </div>
  );
};

export default ResourcePage;
