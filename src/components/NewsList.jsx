import NewsItem from './NewsItem';

export default function NewsList({ newsResults }) {
  console.log(newsResults, 'newsResults');
  const testData = [];
  return (
    <div>
      {newsResults.map((newsResult) => (
        <NewsItem {...newsResult} />
      ))}
    </div>
  );
}
