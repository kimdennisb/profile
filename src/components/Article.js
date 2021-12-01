const Article = ({ post }) => {
  const buildDate = (isodate) => {
    const date = new Date(isodate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${dt} ${monthNames[month]} ${year}`;
  };

  return (
    <>
      {!post.feature_image ? (
        <div class="article_title onlytext">
          <a
            href={`https://idealeaf.herokuapp.com/article/${post._id}`}
            target="_self"
            rel="norefferer"
          >
            <h3>{post.title}</h3>
            <div class="date-published">{buildDate(post.createdAt)}</div>
          </a>
        </div>
      ) : (
        <div class="article_title">
          <a
            href={`https://idealeaf.herokuapp.com/article/${post._id}`}
            target="_self"
            rel="norefferer"
          >
            <img
              class="image"
              src={post.feature_image}
              alt={post.feature_image_alt}
            />
            <h3>{post.title}</h3>
            <div class="date-published">{buildDate(post.createdAt)}</div>
          </a>
        </div>
      )}
    </>
  );
};

export default Article;
