"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, clickHandler}) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((prompt) => {
                <PromptCard
                 key={prompt._id}
                 post={prompt}
                 clickTagHandler={clickHandler}
                />
            })}
        </div>
    )
};

const Feed = () => {
    const [searchText, setSearchText] = useState("");
    const [prompt, setPrompt] = useState([]);

    const searchChangeHandler = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();

            setPrompt(data);
        }

        fetchPosts();
    }, [])

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                 className="search_input peer"
                 type="text"
                 placeholde r="Search for a tag or a username"
                 value={searchText}
                 onChange={searchChangeHandler}
                 reuired/>
            </form>

            <PromptCardList
             data={prompt}
             clickHandler={() => {}}
            />
        </section>
    )
}

export default Feed;