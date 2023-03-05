import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <section class="container-fluid skill-box" id="skills">
        <h1 class="text-center my-5">Skills</h1>
        <div class="jumbotron skills-jumbo jumbotron-fluid">
          <h3 class="mx-3">Git / GitHub</h3>
          <div class="progress m-3">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{width: "85%"}}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 class="mx-3">HTML / CSS</h3>
          <div class="progress m-3">
            <div
              class="progress-bar progress-bar-striped bg-success progress-bar-animated"
              role="progressbar"
              style={{width: "95%"}}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 class="mx-3">JavaScript</h3>
          <div class="progress m-3">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated progress-bar-animated bg-info"
              role="progressbar"
              style={{width: "85%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 class="mx-3">Work with APIs</h3>
          <div class="progress m-3">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              role="progressbar"
              style={{width: "80%"}}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 class="mx-3">React</h3>
          <div class="progress m-3">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
              role="progressbar"
              style={{width: "95%"}}
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
