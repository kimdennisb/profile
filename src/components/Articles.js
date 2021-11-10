import Article from "./Article";

const Articles = ({ posts }) => {
  return (
    <>
      {posts.map((article) => {
        return <Article key={article._id} post={article} />;
      })}
    </>
  );
};
export default Articles;
