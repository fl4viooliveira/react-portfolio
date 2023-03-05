import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <div className={styles.hero}>
        <h1 className={styles.webdev}>My Portfolio</h1>
        <div className={styles.commetTrack}>
          <div className={styles.floatBox}>
            <img
              className={styles.git}
              src="./git.png"
              width={20}
              height={20}
              alt="Git logo"
            />
            <img
              className={styles.github}
              src="./github_w.png"
              width={20}
              height={20}
              alt="GitHub logo"
            />
            <img
              className={styles.html}
              src="./html.png"
              width={20}
              height={20}
              alt="HTML logo"
            />
            <img
              className={styles.css}
              src="./css.png"
              width={20}
              height={20}
              alt="CSS logo"
            />
            <img
              className={styles.javascript}
              src="./js.png"
              width={20}
              height={20}
              alt="JavaScript logo"
            />
            <img
              className={styles.typescript}
              src="./typescript.png"
              width={20}
              height={20}
              alt="TypeScript logo"
            />
            <img
              className={styles.react}
              src="./react.png"
              width={20}
              height={20}
              alt="React logo"
            />
            <img
              className={styles.nextjs}
              src="./nextjs.png"
              width={20}
              height={20}
              alt="NextJs logo"
            />
            <img
              className={styles.jquery}
              src="./jquery.png"
              width={20}
              height={20}
              alt="Jquery logo"
            />
          </div>

          <img
            className={styles.face}
            src="./flavio_face_square.png"
            width={120}
            height={120}
            alt="Flavio Avatar"
          />
        </div>
      </div>

      <section className="container-fluid skill-box" id="skills">
        <h1 className="text-center my-5">Skills</h1>
        <div className="jumbotron skills-jumbo jumbotron-fluid">
          <h3 className="mx-3">Git / GitHub</h3>
          <div className="progress m-3">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 className="mx-3">HTML / CSS</h3>
          <div className="progress m-3">
            <div
              className="progress-bar progress-bar-striped bg-success progress-bar-animated"
              role="progressbar"
              style={{ width: "95%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 className="mx-3">JavaScript</h3>
          <div className="progress m-3">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated progress-bar-animated bg-info"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 className="mx-3">Work with APIs</h3>
          <div className="progress m-3">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 className="mx-3">React</h3>
          <div className="progress m-3">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
              role="progressbar"
              style={{ width: "95%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
