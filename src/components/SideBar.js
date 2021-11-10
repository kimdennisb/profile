import { useEffect } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.addEventListener("click", function (e) {
      this.style.width = "0px";
      e.stopPropagation();
    });
  },[]);

  return (
    <div className="sidebar">
      {/*close sidebar tag */}
      <svg
        className="closenav"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
      >
        <title>close</title>
        <g fill="none" stroke="#848F91" strokeWidth="2">
          <circle
            cx="12.5"
            cy="12.5"
            r="12.5"
            strokeDasharray="0 6"
            strokeLinecap="round"
          />
          <path strokeLinecap="square" d="M8 8 L16.5 16.5 M16.5 8 L8 16.5" />
        </g>
      </svg>

      {/*Page links */}
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default SideBar;
