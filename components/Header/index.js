function Header({ children }) {
  return (
    <>
      <nav>
        <span className="logo">DEV PLAYLIST.</span>
        <ul>{/*put something in here*/}</ul>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2em;
        }

        ul li {
          list-style-type: none;
        }

        .logo {
          font-weight: 900;
          font-size: 1.5em;
        }

        @media (max-width: 900px) {
          nav {
            font-size: 1em;
          }
        }
      `}</style>

      {children}
    </>
  );
}

export default Header;
