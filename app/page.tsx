import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import ButtonLink from "@/app/_compornents/ButtonLink";
import NewsList from "./_compornents/NewsList";

export default  async function Home() {

  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  })

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で日本を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードするグローバルカンパニーです
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
         <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}