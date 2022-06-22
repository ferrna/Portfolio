import React from "react";

function SectionTitle({ children, id }) {
  return (
    <h2
      id={id && id}
      className="text-3xl font-bold mb-5 text-indigo-500 dark:text-indigo-500 relative title-after"
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
