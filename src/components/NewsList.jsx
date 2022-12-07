import NewsItem from './NewsItem';

export default function NewsList({ newsResults }) {
  const testData = [];
  return newsResults.map((newsResult) => <NewsItem {...newsResult} />);
}
