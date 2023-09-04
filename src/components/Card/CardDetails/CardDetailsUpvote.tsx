import React from "react";

interface CardDetailsUpvoteProps {
  upvotes: number | undefined;
}

const CardDetailsUpvote = ({ upvotes }: CardDetailsUpvoteProps) => {
  return (
    <div className="description upvote">
      {upvotes}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Upvote</title>
        <path
          fill="currentColor"
          stroke="#ffffff"
          stroke-width="0"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"
        ></path>
      </svg>
    </div>
  );
};

export default CardDetailsUpvote;
