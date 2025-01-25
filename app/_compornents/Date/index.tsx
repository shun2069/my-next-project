import Image from "next/image";
import styles from "./index.module.css"; // './' を追加して相対パスに修正

type Props = {
  date: string;
};

export default function Date({ date }: Props) { // Propsの記述と引数部分の構文を修正
  return (
    <span className={styles.date}>
      <Image
        src="/clock.svg" // 'crock.svg' を 'clock.svg' に修正
        alt="Clock Icon"
        width={16}
        height={16}
        loading="eager"
      />
      {date}
    </span>
  );
}