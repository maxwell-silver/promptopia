"use client";

import { useState, useEffect } from "react";
import PromptCard from "@components/PromptCard";

function PromptCardList({ data, handleTagClick }) {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
}

function Feed() {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/prompt");
      const data = response.json();

      setPrompts(await data);
    })();
  }, []);

  console.log(prompts);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          className="search_input peer"
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
}

export default Feed;
