import React from "react";
import GridItem from "../GridItem";

function Grid({ children, columns, gap }) {
  columns = columns || 3;
  gap = gap || "1.5rem";
  children = children || [];

  return (
    <>
      <div>
        {Array.isArray(children) &&
          children.map((c, i) => <GridItem key={i}>{c}</GridItem>)}
      </div>

      <style jsx>{`
        div {
          padding: 0.5rem;
          display: grid;
          grid-template-columns: repeat(${columns}, 1fr);
          gap: ${gap};
          margin: 2rem 0;
        }

        @media (max-width: 900px) {
          div {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}

export default React.memo(Grid);
