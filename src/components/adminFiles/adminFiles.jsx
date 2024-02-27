import { getFiles } from "@/lib/data";
import styles from "./adminFiles.module.css";
import Image from "next/image";
import { deleteFile } from "@/lib/action";

const AdminFiles = async () => {
  const posts = await getFiles();

  return (
    <div className={styles.container}>
      <h1>Files</h1>
      {posts.map((file) => (
        <div className={styles.post} key={file.id}>
          <div className={styles.detail}>
            <span className={styles.postTitle}>{file.fileName}</span>
          </div>
          <form action={deleteFile}>
            <input type="hidden" name="id" value={file.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminFiles;
