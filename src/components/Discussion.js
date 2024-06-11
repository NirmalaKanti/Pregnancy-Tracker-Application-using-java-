// Discussion.js

import React, { useState } from 'react';
import { HeartIcon, ChatIcon, ShareIcon, PlusIcon } from '@heroicons/react/outline';
import Navbar from './Navbar';
import Footer from './Footer';
import './Discussion.css';

const Discussion = () => {
  const [discussion, setDiscussion] = useState([
    {
      id: 1,
      username: "Kajal Nikesh Patel",
      message: "Can I eat ripe mango?",
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      username: "Unknown",
      message: "Hi doctor, is goat milk or goat milk powder in small quantity safe in the first trimester of pregnancy? As it is required to be consumed as per our family ritual.",
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      username: "Anonymous User",
      message: "Is it safe to travel by airplane during the second trimester?",
      likes: 0,
      comments: [],
    },
  ]);

  const [newQuery, setNewQuery] = useState("");
  const [username, setUsername] = useState("");
  const [commentInput, setCommentInput] = useState({});
  const [showReplyInput, setShowReplyInput] = useState(null);
  const [showNewQueryForm, setShowNewQueryForm] = useState(false);
  const [notification, setNotification] = useState("");

  const handleLike = (id) => {
    setDiscussion(prevDiscussion => {
      return prevDiscussion.map(item => {
        if (item.id === id) {
          return { ...item, likes: item.likes + 1 };
        }
        return item;
      });
    });
  };

  const handleComment = (id, comment) => {
    setDiscussion(prevDiscussion => {
      return prevDiscussion.map(item => {
        if (item.id === id) {
          return { ...item, comments: [...item.comments, comment] };
        }
        return item;
      });
    });
    setCommentInput(prev => ({ ...prev, [id]: '' }));
  };

  const handleCommentButtonClick = (id) => {
    setShowReplyInput(prev => (prev === id ? null : id));
  };

  const handleNewQuerySubmit = (e) => {
    e.preventDefault();
    if (newQuery.trim() === "" || username.trim() === "") {
      setNotification("Please fill out both fields.");
      return;
    }

    const newPost = {
      id: discussion.length + 1,
      username: username.trim() || "Anonymous",
      message: newQuery.trim(),
      likes: 0,
      comments: [],
    };

    setDiscussion(prevDiscussion => [...prevDiscussion, newPost]);
    setNewQuery("");
    setUsername("");
    setShowNewQueryForm(false);
    setNotification("Your query has been added.");

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const ProfileCard = ({ username }) => {
    return (
      <div className="flex items-center space-x-2">
        <img src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/user_account_profile-2-256.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
        <span className="text-gray-700">{username}</span>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="mt-20 container mx-auto py-4">
        <button
          onClick={() => setShowNewQueryForm(prev => !prev)}
          className="n2"
        >
          <PlusIcon className="h-4 w-5" />
          <span>Add Query</span>
        </button>

        {showNewQueryForm && (
          <form onSubmit={handleNewQuerySubmit} className="mb-8">
            <h2 className="text-xl mb-4">Add a new query</h2>
            {notification && <p className="text-green-500 mb-4">{notification}</p>}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your name"
              className="w-full border-gray-300 rounded-md mb-2 p-2"
            />
            <textarea
              value={newQuery}
              onChange={(e) => setNewQuery(e.target.value)}
              placeholder="Write your query..."
              className="w-full border-gray-300 rounded-md mb-2 p-2"
              rows="4"
            />
            <button
              type="submit"
              className="n2"
            >
              Submit Query
            </button>
          </form>
        )}

        {discussion.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-md p-4 mb-4">
            <ProfileCard username={post.username} />
            <p className="mt-2">{post.message}</p>
            <div className="flex items-center justify-between mt-4">
              <button onClick={() => handleLike(post.id)} className="flex items-center space-x-1 text-gray-500">
                <HeartIcon className="h-5 w-5" />
                <span>{post.likes}</span>
              </button>
              <button
                onClick={() => handleCommentButtonClick(post.id)}
                className="flex items-center space-x-1 text-gray-500"
              >
                <ChatIcon className="h-5 w-5" />
                <span>{post.comments.length}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500">
                <ShareIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4">
              {post.comments.map((comment, index) => (
                <div key={index} className="mt-2 pl-4 border-l-2 border-gray-200">
                  <ProfileCard username={comment.username || 'Anonymous'} />
                  <p className="mt-1">{comment.text}</p>
                </div>
              ))}
            </div>
            {showReplyInput === post.id && (
              <div className="mt-4">
                <input
                  type="text"
                  value={commentInput[post.id] || ''}
                  onChange={(e) => setCommentInput(prev => ({ ...prev, [post.id]: e.target.value }))}
                  placeholder="Write a reply..."
                  className="w-full border-gray-300 rounded-md"
                />
                <button
                  onClick={() => handleComment(post.id, { text: commentInput[post.id], username: "Current User" })}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Post Reply
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Discussion;
