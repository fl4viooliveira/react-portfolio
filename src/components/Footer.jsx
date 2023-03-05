import styles from "../styles/Footer.module.css"
import {Link} from "react-router-dom"
import {FaGithubAlt, FaTwitter, FaLinkedinIn, FaStackOverflow} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="container-fluid my-5">
      <div className={`text-center text-lg-start ${styles.footerBox} mx-1 `}>
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                <h6 className={`mb-4 font-weight-bold ${styles.brand}`}>Flavio Oliveira</h6>
                <p>
                  We can help you get off scratch, projects as startups,
                  portfolio pages, prototypes ideas, or create a web application
                  for your business.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Work</h6>
                <p>
                  <a
                    className="work-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://blogproject.io/"
                  >
                    Markdown Blog
                  </a>
                </p>
                <p>
                  <a
                    className="work-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://cousdela.com/"
                  >
                    Cous De La Construction
                  </a>
                </p>
                <p>
                  <a
                    className="work-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://4devbydev.vercel.app/"
                  >
                    E-commerce Application
                  </a>
                </p>
                <p>
                  <a
                    className="work-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://fl4viooliveira.github.io/duda/"
                  >
                    Three.js - Study case
                  </a>
                </p>
                <p>
                  <a
                    className="work-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://fl4viooliveira.github.io/bkg_grid_layout/public/index.html"
                  >
                    CSS Grid - Study case
                  </a>
                </p>
                <p>
                  <a
                    className="work-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://fl4viooliveira.github.io/blogr_landing_page/"
                  >
                    Blogr landing page
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Nav Menu</h6>
                <Link className="" to="/">
                  <button type="button" className="btn btn-info m-3">
                    Home
                  </button>
                </Link>
                <Link className="" to="/projects">
                  <button type="button" className="btn btn-info m-3">
                    Projects
                  </button>
                </Link>
                <Link className="" to="/contact">
                  <button type="button" className="btn btn-info m-3">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2023 Copyright:
                  <a
                    className="text-white"
                    href="https://github.com/fl4viooliveira"
                  >
                    github.com/fl4viooliveira
                  </a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  href="https://github.com/fl4viooliveira"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-github-alt"><FaGithubAlt /></i>
                </a>

                <a
                  href="https://twitter.com/fl4viooliveira"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-twitter"><FaTwitter /></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/fl4viooliveira/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"><FaLinkedinIn /></i>
                </a>

                <a
                  href="https://stackoverflow.com/users/13045151/flavio-oliveira"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-stack-overflow"><FaStackOverflow /></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
