import React, { useState, useEffect } from "react";
import axios from "axios";
import PostData from "./PostData";
import  Pagination  from "./Pagination";

const PaginationPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPost();
    console.log(fetchPost());
  }, []);

  //   const PostList = posts.lenght ? (
  //     posts.map((post) => (
  //       <div key={post.id} style={{ margin: "20px" }}>
  //         <p className="text-start">{post.item}</p>
  //         <p className="text-end">{post.body}</p>
  //       </div>
  //     ))
  //   ) : (
  //     <div>
  //       <div className="spinner-border text-success"></div>
  //       <div>Loading Your Dumb Ass Data</div>
  //     </div>
  //   );


  // Get Current Post
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPage - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPage)

  // Change Post
  const paginate = (pageNumbers) => setcurrentPage(pageNumbers)

  return (
    <div>
      <div className="text-center">
        <h1 className="text-end">HELP</h1>
      </div>
      <div className="">
        <h1>Post Datas</h1>
        <PostData posts={currentPosts} {...{loading}} />
        <Pagination {...{postsPerPage}} totalPosts={posts.length} {...{paginate}} />
      </div>
    </div>
  );
};

export default PaginationPage;
