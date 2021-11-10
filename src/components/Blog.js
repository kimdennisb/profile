import { useState, useEffect } from "react";
import Articles from "./Articles";
import Loader from "./Loader";

const Blog = ({ sidebar }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const posts = await fetch(`https://idealeaf.herokuapp.com/posts`);
    const data = await posts.json();
    return data;
  };

  useEffect(() => {
    const getArticles = async () => {
      const postsFromServer = await fetchPosts();
      setArticles(postsFromServer);
      setLoading(false);
    };
    getArticles();
  }, []);

  return (
    <div>
      {sidebar}
      {isLoading ? <Loader /> : <Articles posts={articles} />}
    </div>
  );
};
export default Blog;
