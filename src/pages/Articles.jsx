import axios from "axios";
import { useEffect, useState } from "react";
import Article from "../components/Article";

const apiUrl = "http://localhost:3000";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/posts`).then((res) => setArticleList(res.data));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Articles</h1>
        <div className="row g-4">
          {articleList.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              imgUrl={article.image}
              link={`/articles/${article.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
