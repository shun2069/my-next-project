import type { Category } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
    category: Category;
};
export default function Categori({ category }: Props) {
    return <span className={styles.tag}>{category.name}</span>;
}