import React from "react";

const PostData = ({ posts, loading }) => {
  return (
    <div className="text-center">
      {posts.map((post) => (
        <div key={post.id} style={{ margin: "20px" }}>
          <p className="text-start">{post.item}</p>
          <p className="text-end">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostData;
