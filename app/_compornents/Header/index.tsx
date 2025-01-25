import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
return (
    <header className={styles.header}>
        <a href="/" className={styles.logoLink}>
        <Image src="/logo.svg"
        alt="Simple"
        className={styles.logo}
        width={343}
        height={133}
        priority
        />
        </a>
    </header>
);
}