import { useState, useEffect } from "react";
import Articles from "./Articles";
import Loader from "./Loader";
import More from "./More";

const Blog = ({ sidebar }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page) => {
    const data = await fetch(`https://idealeaf.herokuapp.com/posts/${page}`);
    //const data = await fetch(`http://localhost/posts/${page}`);
    const posts = await data.json();
    return posts;
  };

  const fetchNextPage = async () => {
    setLoading((previousState) => !previousState);
    setCurrentPage((previousPage) => previousPage + 1);
    const { posts } = await fetchPosts(currentPage);
    setArticles([...articles, ...posts]);
    setLoading((previousState) => !previousState);
  };

  useEffect(() => {
    const getArticles = async () => {
      const { posts, pages } = await fetchPosts(currentPage);
      setArticles([...articles, ...posts]);
      setTotalPages(pages);
      setLoading((previousState) => !previousState);
    };
    getArticles();
  }, []);

  return (
    <div>
      {sidebar}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Articles posts={articles} />
          {currentPage < totalPages ? <More onclick={fetchNextPage} /> : null}
        </>
      )}
    </div>
  );
};
export default Blog;
