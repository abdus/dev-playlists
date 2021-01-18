function Footer({ children }) {
  return (
    <>
      <footer>
        <div>{children}</div>
        &copy; DEV PLAYLIST.
      </footer>
      <style jsx>{`
        footer {
          padding: 1rem 0;
        }
      `}</style>
    </>
  );
}

export default Footer;
