function Main({ children }) {
  return (
    <main>
      {children}
      <style jsx>{`
        main {
          min-height: 80vh;
        }
      `}</style>
    </main>
  );
}

export default Main;
