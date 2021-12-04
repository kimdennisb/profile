import { useState, useEffect } from "react";
import Articles from "./Articles";
import Loader from "./Loader";
import More from "./More";

const Blog = ({ sidebar }) => {
  /* const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);*/
  const [blogState, setBlogState] = useState({
    articles: [],
    isLoading: true,
    currentPage: 1,
    totalPages: 1,
  });

  const fetchPosts = async (page) => {
    const data = await fetch(`https://idealeaf.herokuapp.com/posts/${page}`);
    // const data = await fetch(`http://localhost/posts/${page}`);
    const posts = await data.json();
    return posts;
  };

  const fetchNextPage = async () => {
    setBlogState((previousState) => ({
      articles: [...previousState.articles],
      isLoading: false,
      currentPage: previousState.currentPage + 1,
      totalPages: previousState.totalPages,
    }));
  };

  const { articles, isLoading, currentPage, totalPages } = blogState;

  useEffect(() => {
    const getArticles = async () => {
      const { posts, pages } = await fetchPosts(currentPage);
      setBlogState((previousState) => ({
        articles: [...previousState.articles, ...posts],
        isLoading: false,
        currentPage: previousState.currentPage,
        totalPages: pages,
      }));
    };
    getArticles();
  }, [currentPage]);

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
