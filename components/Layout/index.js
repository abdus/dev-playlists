import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <>
      <main>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </main>
      <style jsx>{`
        main {
          max-width: 60rem;
          margin: auto;
          padding: 0.5rem;
        }
      `}</style>
    </>
  );
}

export default Layout;
