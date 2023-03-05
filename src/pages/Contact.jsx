import Layout from "../components/Layout";
import {AiOutlineMail, AiOutlineFilePdf } from "react-icons/ai";
import Pdf from "../data/Flavio_cv.pdf";

export default function Contact() {
  return (
    <Layout>
      <section className="container-fluid" id="about-contact">
        <h1 className="text-center my-5">Contact</h1>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card bg-transparent border-0">
              <div className="card-body">
                <h5 className="card-title text-center">About Me</h5>
                <p className="justify-text">
                  I'm Flavio, a Web developer that focuses on listening and
                  understanding the client's needs. My job is to transform the
                  project's and ideas into real web applications. I'm
                  continuously improving my web development skills on HTML, CSS
                  and JavaScript.
                </p>
                <p className="justify-text">
                  I speak Portuguese, English, and Spanish at the lower level.
                </p>
                <p className="justify-text">
                  I consider the most substantial skill of mine "fast
                  adaptation." I could confirm it in the last years, moving
                  country, changing the job, and adapting well in diverse
                  environments.
                </p>
              </div>

              <div className="row">
                <a
                  href="mailto:fl4viooliveira@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i>Email: <AiOutlineMail /></i>
                </a>
                <a
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i>CV: <AiOutlineFilePdf /></i>
                </a>


              </div>
              
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <div className="card bg-transparent border-0">
              <h5 className="card-title text-center my-3">Contact</h5>
              <form
                action="https://getform.io/f/04feb2e1-24e2-4e73-98b3-837225c11041"
                method="POST"
              >
                <div className="row ">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      rows="6"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="btn btn-custom btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
