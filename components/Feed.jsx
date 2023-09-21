"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, clickHandler}) => {

};

const Feed = () => {
    const [searchText, setSearchText] = useState("");

    const searchChangeHandler = (e) => {

    }

    useEffect(() => {
        
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
             data={[]}
             clickHandler={() => {}}
            />
        </section>
    )
}

export default Feed;