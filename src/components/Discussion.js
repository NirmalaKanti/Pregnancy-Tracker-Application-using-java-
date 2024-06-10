// Discussion.js

import React, { useState } from 'react';
import { HeartIcon, ChatIcon, ShareIcon } from '@heroicons/react/outline'; // Assuming you have icons like these
import Navbar from './Navbar';
import Footer from './Footer';


const Discussion = () => {
  // Sample data for discussion
  const [discussion, setDiscussion] = useState([
    {
      id: 1,
      username: "Kajal Nikesh Patel",
      message: "Can i eat ripe mango?",
      likes: 0,
      comments: [],
    },
    {
        id: 1,
        username: "Unknown",
        message: "hi doctor is goat milk or goat milk powder in powder in small quantity safe in Ist trimester of pregnancy??As it is required to be consumed as per our family ritual  ",
        likes: 0,
        comments: [],
      },
      {
        id: 1,
        username: "Anonymous User",
        message: "This is a sample discussion message.",
        likes: 0,
        comments: [],
      },
      {
        id: 1,
        username: "Anonymous User",
        message: "This is a sample discussion message.",
        likes: 0,
        comments: [],
      },
      {
        id: 1,
        username: "Anonymous User",
        message: "This is a sample discussion message.",
        likes: 0,
        comments: [],
      },
      {
        id: 1,
        username: "Anonymous User",
        message: "This is a sample discussion message.",
        likes: 0,
        comments: [],
      },
      {
        id: 1,
        username: "Anonymous User",
        message: "This is a sample discussion message.",
        likes: 0,
        comments: [],
      },
      {
        id: 1,
        username: "Anonymous User",
        message: "This is a sample discussion message.",
        likes: 0,
        comments: [],
      },
      {
        id: 1,
        username: "Anonymous User",
        message: "This is a sample discussion message.",
        likes: 0,
        comments: [],
      },
      {
        id: 1,
        username: "Anonymous User",
        message: "This is a sample discussion message.",
        likes: 0,
        comments: [],
      },
      {
        id: 1,
        username: "Anonymous User",
        message: "This is a sample discussion message.",
        likes: 0,
        comments: [],
      },
      
    // Add more discussion objects as needed
  ]);

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
    <Navbar/>
    <div className="mt-20 container mx-auto py-4">
      {discussion.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-md p-4 mb-4">
          <ProfileCard username={post.username} />
          <p className="mt-2">{post.message}</p>
          <div className="flex items-center justify-between mt-4">
            <button onClick={() => handleLike(post.id)} className="flex items-center space-x-1 text-gray-500">
              <HeartIcon className="h-5 w-5" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <ChatIcon className="h-5 w-5" />
              <span>{post.comments.length}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <ShareIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
    <Footer/>

    </>
  );
};

export default Discussion;
