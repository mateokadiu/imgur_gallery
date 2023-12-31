import React from "react";

interface CardDetailsCommentProps {
  comment: number | null | undefined;
}

const CardDetailsComment = ({ comment }: CardDetailsCommentProps) => {
  return (
    <div className="description comment" onClick={(e) => e.preventDefault()}>
      {comment}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="PostCommentsIcon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Comments</title>
        <path
          fill="currentColor"
          stroke="#ffffff"
          strokeWidth="0"
          d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"
        ></path>
      </svg>
    </div>
  );
};

export default CardDetailsComment;
