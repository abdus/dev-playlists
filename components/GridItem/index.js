import React from "react";

function GridItem({ children }) {
  const itemRef = React.useRef();
  const [width, setWidth] = React.useState(null);

  React.useEffect(() => {
    const width = getComputedStyle(itemRef.current).width;
    setWidth(width);

    window.addEventListener("resize", () => {
      const width = getComputedStyle(itemRef.current).width;
      setWidth(width);
    });
  }, []);

  console.log();

  return (
    <>
      <div ref={itemRef}>{children}</div>

      <style jsx>{`
        div {
          height: ${parseInt(width) + "px" || "unset"};
          cursor: pointer;
          border-radius: 0.5rem;
          padding: 1rem;
          position: relative;
          overflow: hidden;
          z-index: 100;
          font-weight: 600;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        div::after,
        div::before {
          content: " ";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -100;
        }

        div::after {
          background: #000000d6;
        }

        div::before {
          content: "";
          background-image: url(${children.props.background});
          background-size: cover;
          z-index: -200;
          filter: blur(0px);
        }
      `}</style>
    </>
  );
}

export default React.memo(GridItem);
