"use client";

import { useState, useEffect } from "react";

const PostList = ({ posts }) => {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    useEffect(() => {
        if (posts) {
            setLoading(false);
            setFilteredPosts(posts);
        }
    }, [posts]);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearch(query);

        const filtered = posts.filter((post) =>
            post.title.toLowerCase().includes(query)
        );

        setFilteredPosts(filtered);
        setCurrentPage(1);
    };

    // -------------- Pagination Logic ------------------
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <div className="flex flex-col items-center justify-between px-5 sm:h-screen">
            <div className="flex flex-col items-center gap-4 w-full">
                <h2 className="text-start w-full text-lg">Posts List</h2>

                <div className="flex gap-2 sm:w-1/2 w-[90%] bg-white px-2 rounded-full border hover:border-blue-500 justify-between">
                    <input
                        className="w-full p-2 outline-none"
                        type="text"
                        placeholder="Search by title"
                        value={search}
                        onChange={handleSearch}
                    />
                    <img src="search.svg" alt="search icon" />
                </div>

                {loading ? (
                    <div className="mt-3 flex justify-center">
                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 w-full">
                        {currentPosts.length > 0 ? (
                            currentPosts.map((post) => (
                                <div className="border bg-gray-100 rounded-xl p-2 hover:bg-gray-300 flex flex-col gap-1" key={post.id}>
                                    <h2 className="text-lg font-poppins">Title: {post.title}</h2>
                                    <hr className="border-gray-300" />
                                    <p className="bg-white p-1 rounded-lg">Body: {post.body}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No posts found</p>
                        )}
                    </div>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-2 mt-4 sm:bottom-10 sm:absolute bg-white border p-2 w-[90%] sm:w-80 rounded-full">
                <button
                    className="px-4 cursor-pointer py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}> Prev
                </button>

                <span className="px-3 py-1">{currentPage} / {totalPages}</span>
                <button
                    className="px-4 cursor-pointer py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}> Next
                </button>
            </div>
        </div>
    );
};

export default PostList;


