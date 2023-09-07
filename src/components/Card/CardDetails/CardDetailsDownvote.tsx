import React from "react";

interface CardDetailsDownvoteProps {
  downvotes: number | undefined;
}

const CardDetailsDownvote = ({ downvotes }: CardDetailsDownvoteProps) => {
  return (
    <div className="description downvote" onClick={(e) => e.preventDefault()}>
      {downvotes}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="Vote Vote-down"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Downvote</title>
        <path
          fill="currentColor"
          stroke="#ffffff"
          strokeWidth="0"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.803 13.476a1.2 1.2 0 01-1.606 0 53.03 53.03 0 01-2.364-2.243 29.613 29.613 0 01-2.422-2.722c-.339-.435-.025-1.028.526-1.028h2.397V3.336c0-.524.306-.982.823-1.064A11.874 11.874 0 018 2.15c.829 0 1.427.056 1.843.122.517.082.824.54.824 1.064v4.147h2.396c.552 0 .865.593.527 1.028-.52.669-1.32 1.62-2.423 2.722a53.038 53.038 0 01-2.364 2.243z"
        ></path>
      </svg>
    </div>
  );
};

export default CardDetailsDownvote;
