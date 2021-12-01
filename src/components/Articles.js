import Article from "./Article";

const Articles = ({ posts }) => {
  return (
    <main className="main">
      <div className="main-content responsive-wrapper">
        <section className="widget">
          {posts.map((article) => {
            return <Article key={article._id} post={article} />;
          })}
        </section>
      </div>
    </main>
  );
};
export default Articles;
