"use client";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  SmilePlus,
  Send,
  MoreHorizontal,
  CheckCheck,
  Check,
  Users,
} from "lucide-react";
import { cn } from "../lib/utils";

export default function ChatCard({ chatName = "User Name" }) {
  const [showPicker, setShowPicker] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedSender, setSelectedSender] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch users from API and create message data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/getUserProfile", {
          withCredentials: true,
        });

        const users = res.data.allUser || [];

        const generatedMessages = users.map((user, index) => ({
          id: user._id || index.toString(),
          content: `Welcome ${user.name}! Start chatting.`,
          sender: {
            name: user.name,
            avatar: user.profilePic,
            isOnline: true,
          },
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status: index % 2 === 0 ? "read" : "delivered",
          reactions:
            index % 2 === 0
              ? [
                  { emoji: "🙌", count: 1, reacted: true },
                  { emoji: "🔥", count: 1, reacted: false },
                ]
              : [],
        }));

        setMessages(generatedMessages);
      } catch (err) {
        setError(err.message || "Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const uniqueSenders = Array.from(
    new Map(messages.map((m) => [m.sender.name, m.sender])).values()
  );

  const filteredMessages = selectedSender
    ? messages.filter((m) => m.sender.name === selectedSender)
    : messages;

  // ✅ Handle Emoji Selection
  const handleEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  // ✅ Toggle Picker
  const handleTogglePicker = () => {
    setShowPicker((prev) => !prev);
  };

  // ✅ Send message logic
  const handleSend = () => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: text,
      sender: {
        name: "You",
        avatar: "https://via.placeholder.com/40", // Replace with actual user avatar
        isOnline: true,
      },
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "read",
      reactions: [],
    };

    setMessages((prev) => [...prev, newMessage]);
    setText("");
    setShowPicker(false);
  };

  // ✅ Handle Enter Key (Shift+Enter = newline)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative w-full max-w-[95%] h-[90vh] mx-auto p-6 bg-white dark:bg-black rounded-3xl shadow-md shadow-amber-50 flex flex-col border border-gray-300 dark:border-gray-700">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-3 mb-6">
        <div className="flex items-center gap-3">
          <Users className="w-8 h-8 text-black dark:text-white" />
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              {chatName}
            </h2>
            <p className="italic text-sm text-gray-600 dark:text-gray-400">
              Let’s trip it out!
            </p>
          </div>
        </div>
        <button
          aria-label="More options"
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <MoreHorizontal className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
      </header>

      {/* Body */}
      <main className="flex flex-1 overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
        {/* Participants List */}
        <aside className="w-56 bg-gray-50 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 p-4 overflow-y-auto">
          {loading && <p className="text-gray-500">Loading users...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading &&
            uniqueSenders.map((sender) => {
              const isSelected = selectedSender === sender.name;
              return (
                <button
                  key={sender.name}
                  onClick={() =>
                    setSelectedSender(isSelected ? null : sender.name)
                  }
                  className={cn(
                    "flex items-center gap-3 w-full p-3 mb-3 rounded-lg transition-colors",
                    isSelected
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-300"
                  )}
                >
                  <div className="relative">
                    <img
                      src={sender.avatar}
                      alt={sender.name}
                      width={40}
                      height={40}
                      className="rounded-full ring-1 ring-gray-400 dark:ring-gray-600"
                    />
                    <span
                      className={cn(
                        "absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white dark:ring-black",
                        sender.isOnline ? "bg-green-500" : "bg-gray-400"
                      )}
                    />
                  </div>
                  <span className="text-left font-medium truncate">
                    {sender.name}
                  </span>
                </button>
              );
            })}
        </aside>

        {/* Messages */}
        <section className="flex-1 p-6 overflow-y-auto bg-white dark:bg-black">
          {filteredMessages.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No messages to display.
            </p>
          ) : (
            filteredMessages.map((message) => (
              <div
                key={message.id}
                className="mb-6 last:mb-0 group border-b border-gray-200 dark:border-gray-800 pb-4"
              >
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={message.sender.avatar}
                    alt={message.sender.name}
                    width={40}
                    height={40}
                    className="rounded-full ring-1 ring-gray-400 dark:ring-gray-600"
                  />
                  <div>
                    <p className="font-semibold text-black dark:text-white">
                      {message.sender.name}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
                <p className="text-gray-800 dark:text-gray-200 text-lg mb-1">
                  {message.content}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    {message.status === "read" && (
                      <CheckCheck className="w-5 h-5 text-green-500" />
                    )}
                    {message.status === "delivered" && (
                      <Check className="w-5 h-5" />
                    )}
                    <span>{message.timestamp}</span>
                  </div>
                  <div className="flex gap-2">
                    {message.reactions?.map((reaction) => (
                      <button
                        key={reaction.emoji}
                        className={cn(
                          "px-2 py-1 rounded-md text-sm transition-colors",
                          reaction.reacted
                            ? "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400",
                          "hover:bg-gray-200 dark:hover:bg-gray-600"
                        )}
                      >
                        {reaction.emoji} {reaction.count}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-6 flex items-center gap-4 border-t border-gray-300 dark:border-gray-700 pt-4 relative">
        {/* Emoji Button */}
        <div className="relative">
          <button
            aria-label="Add emoji"
            onClick={handleTogglePicker}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <SmilePlus className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          {showPicker && (
            <div className="absolute bottom-14 left-0 z-50 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700">
              <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
            </div>
          )}
        </div>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write your message..."
          className={cn(
            "flex-1 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700",
            "bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition resize-none"
          )}
        />

        {/* Send Button */}
        <button
          aria-label="Send message"
          onClick={handleSend}
          className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:brightness-90 transition"
        >
          <Send className="w-6 h-6" />
        </button>
      </footer>
    </div>
  );
}
