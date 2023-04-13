import image from "/public/image.png";
//console.log(image)
const Header = () => {
  const openSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.width = "250px";
  };

  return (
    <header>
      <a href="/" rel="norefferer">
        <img src={image} alt="Avatar" className="avatar" />
      </a>

      <div className="opensidebar">
        <title>open</title>
        <svg
          width="15"
          height="15"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
          onClick={openSideBar}
        >
          <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
