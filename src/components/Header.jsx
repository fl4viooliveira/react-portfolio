export default function Header() {
  return (
    <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-transparent">
      <a class="navbar-brand pl-3" href="#hero">
        Flavio Oliveira
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav p-3">
          <li className="nav-item">
            <a className="nav-link link-custom" href="#hero">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-custom" href="#work">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-custom" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-custom" href="#about-contact">
              About & Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
