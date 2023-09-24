import { TextInput } from "@mantine/core";
import styles from "./Input.module.css";

export default function Input() {
  return (
    <div className={styles.container}>
      <TextInput
        classNames={{
          input: styles.input,
        }}
      />
    </div>
  );
}
