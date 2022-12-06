import { useEffect } from "react";

export default function NewsPage() {
  useEffect(() => {
    let ignoreResults = false;

    async function fetchData() {
      // const data = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
      const data = await fetch("https://hacker-news.firebaseio.com/v0/item/33879139.json");
      const formattedData = await data.json();

      if (!ignoreResults) {
        console.log(formattedData);
      }
    }

    fetchData();

    return () => {
      ignoreResults = true;
    }
  }, []);

  return <p>News</p>
}
