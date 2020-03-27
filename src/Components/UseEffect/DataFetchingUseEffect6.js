import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingUseEffect6 = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container border m-5 p-5">
      <h4>Fetching Data using Axios and useEffect</h4>
      <h5 className="mb-3 text-success">10 Post Title From jsonplaceholder</h5>
      <ul>
        {posts.map(post => (
          <h6 key={post.id}>{post.title}</h6>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingUseEffect6;
