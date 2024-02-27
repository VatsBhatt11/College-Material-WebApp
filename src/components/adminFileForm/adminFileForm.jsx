"use client"

import { addFile } from "@/lib/action";
import styles from "./adminFileForm.module.css";
import { useFormState } from "react-dom";

const AdminFileForm = ({userId}) => {
  const [state, formAction] = useFormState(addFile, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New File</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="fileName" placeholder="fileName" />
      <input type="text" name="slug" placeholder="slug" />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminFileForm;
