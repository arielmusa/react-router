import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "http://localhost:3000";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/posts`).then((res) => setArticleList(res.data));
  }, []);

  return (
    <>
      <div className="container">
        <h1>articles</h1>
        <div className="row">
          <ul>
            {articleList.map((article) => (
              <li>{article.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
