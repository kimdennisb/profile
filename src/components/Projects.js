const Projects = ({ sidebar }) => {
  return (
    <section>
      {sidebar}
      <div className="projects">
        <h2>Projects</h2>
        <a
          href="https://visafinders.au"
          target="_blank"
          rel="noreferrer"
        >
          <button className="visafinders">Visafinders</button>
        </a>
        <p>A multilingual interactive online tool that helps visa candidates self-assess their eligibility and familiarise themselves with different options available.</p>

        <a
          href="https://paginatejs.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <button className="paginatejs">Paginatejs</button>
        </a>
        <p>Paginates data from an endpoint.</p>

        <a
          href="https://idealeaf.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <button className="idealeaf">Idealeaf</button>
        </a>
        <p>
          Blog CMS written with node js;express js at the backend and data is
          rendered at the front-end with ejs. Data is stored on MongoDB.
        </p>

        <a
          href="https://sketchquick.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <button className="sketchquick">Sketch</button>
        </a>
        <p>A sketching playground.</p>
      </div>
    </section>
  );
};

export default Projects;
