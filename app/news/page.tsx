import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_compornents/NewsList';
import Pagination from '@/app/_compornents/Pagenation';
import SearchField from '@/app/_compornents/SearchField';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}