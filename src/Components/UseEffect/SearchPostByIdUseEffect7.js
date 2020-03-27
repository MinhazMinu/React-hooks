import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPostByIdUseEffect7 = () => {
  const [posts, setPosts] = useState([]);
  const [searchId, setSearchId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(0);
  const handleButtonId = () => {
    setIdFromButton(searchId);
  };
  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, [idFromButton]);

  return (
    <div className="container border m-5 p-5">
      <h4>Searching Post Using useEffect</h4>
      <h5 className="mb-3 text-success">Search Post title by id</h5>
      <input
        type="text"
        value={searchId}
        onChange={e => setSearchId(e.target.value)}
      />
      <button className="btn btn-success ml-2" onClick={handleButtonId}>
        Fetch Post
      </button>
      <p className="text-info">{posts.title}</p>
    </div>
  );
};

export default SearchPostByIdUseEffect7;
