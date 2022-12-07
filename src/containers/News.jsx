import Layout from '$components/Layout';
import NewsList from '$components/NewsList';
import { useEffect, useState } from 'react';

export default function NewsPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const URL = 'https://hacker-news.firebaseio.com/v0';
    const NO_OF_POSTS = 10;
    let ignoreResults = false;

    async function fetchIdData() {
      const newsIds = await fetch(`${URL}/topstories.json`);
      const formattedNewsIds = await newsIds.json();
      const firstTenIds = formattedNewsIds.splice(0, NO_OF_POSTS);
      let responses = [];

      for (const newsId of firstTenIds) {
        let response = fetch(`${URL}/item/${newsId}.json`).then((data) => data.json());
        responses.push(response);
      }

      return Promise.all(responses).then((data) => setResults(data));
    }

    if (!ignoreResults) {
      fetchIdData();
    }

    return () => {
      ignoreResults = true;
    };
  });

  return (
    <Layout>
      <NewsList newsResults={changeDataKeys(results)} />
    </Layout>
  );
}

function changeDataKeys(results) {
  results.map(result => ({
    author: result.by,
    title: result.title,
    url: result.url,
    totalComments: result.kids.length(),
    time: formatTime(result.time),
  }));
}

function formatTime(time) {
  const date = new Date(time * 1000);
  return date;
}