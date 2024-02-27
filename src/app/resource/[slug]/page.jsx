import Image from "next/image";
import styles from "./singleResource.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getFile } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/resource/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const file = await getFile(slug);

  return {
    fileName: file.fileName,
  };
};

const SingleResource = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  const file = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{file.fileName}</h1>
        <div className={styles.detail}>
          {file && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={file.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            {/* <span className={styles.detailValue}>
              {file.createdAt.toString().slice(4, 16)}
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleResource;
