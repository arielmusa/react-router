import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

const apiUrl = "http://localhost:3000";

export default function ArticleDetailPage() {
  const [article, setArticle] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/posts/${id}`).then((res) => setArticle(res.data));
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        <img src={article.image} alt={article.title} className="w-50 m-auto" />
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        <div className="d-flex justify-content-center gap-4">
          <NavLink
            to={`/articles/${article.id - 1}`}
            className="btn btn-primary"
          >
            Read previous article
          </NavLink>

          <NavLink
            to={`/articles/${article.id + 1}`}
            className="btn btn-primary"
          >
            Read next article
          </NavLink>
        </div>
      </div>
    </div>
  );
}
