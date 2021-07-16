import React from "react";

const PostData = ({ posts, loading }) => {
  if (loading) {
    return (
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div className="spinner-border text-success"></div>
        <div>Loading Your Dumb Ass Data</div>
      </div>
    );
  }

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
