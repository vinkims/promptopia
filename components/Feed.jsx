"use client";

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [ searchText, setSearchText ] = useState('');
  const [ posts, setPosts ] = useState([]);

  const handleSearchChange = (e) => {}

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
    }

    fetchPosts();
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={posts}
        hanldeTagClick={() => {}}
      />
    </section>
  )
}

export default Feed;

// TODO: 
// 1. Implement search (Feed)
// - Search by prompt
// - Search by tag
// - Search by username
// 2. Implement Click on tag (to see all tags) - Same as search by tag above (Feed)
// Implement View other profiles - See all prompts by other pserson. (Create new folder on profile. Dynamic)