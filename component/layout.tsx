export default function Layout({ children, title }) {
  return (
    <div className="container is-widescreen">
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://www.receptionhalls.com/images/logo.svg"
              width="112"
              height="28"
            />
          </a>
        </div>
        <a className="navbar-item">Venues by State</a>
        <a className="navbar-item">Venues Guides</a>
      </nav>
      <main>
        <div className="wrapper">
          <h1 className="title is-2">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
}
