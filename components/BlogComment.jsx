import React from "react";

import moment from "moment";

function BlogComment({ comment }) {
  return (
    <div className="bg-white shadow-md rounded-md p-5 flex flex-col mb-4">
      <p className="text-md font-medium">{comment?.name}</p>
      <p>{comment?.comment}</p>
      <div className="flex justify-end">
        <em className="text-sm">{moment(comment?.created_at).fromNow()}</em>
      </div>
    </div>
  );
}

export default BlogComment;
