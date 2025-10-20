"use client";

import React, { useState } from "react";

const BOOK = {
  title: "Mastering Digital Advertising",
  author: "Jane Doe",
  description:
    "Unlock the secrets of successful digital advertising across Meta, TikTok, and Telegram. This comprehensive guide covers strategies, tools, and real-world case studies to help you grow your business online.",
  price: 29.99,
  cover:
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
  features: [
    "Step-by-step advertising strategies",
    "Platform-specific tips for Meta, TikTok, and Telegram",
    "Real-world case studies",
    "Bonus: Free advertising checklist",
  ],
};

export default function BookSellPage() {
  const [quantity, setQuantity] = useState(1);
  const [purchased, setPurchased] = useState(false);

  const handleBuy = (e: React.FormEvent) => {
    e.preventDefault();
    setPurchased(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Book Cover */}
        <div className="md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-6">
          <img
            src={BOOK.cover}
            alt={BOOK.title}
            className="rounded-lg shadow-md w-48 h-64 object-cover"
          />
        </div>
        {/* Book Details */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {BOOK.title}
            </h1>
            <h2 className="text-md text-gray-600 dark:text-gray-300 mb-4">
              by {BOOK.author}
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              {BOOK.description}
            </p>
            <ul className="mb-6 space-y-2">
              {BOOK.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                ${BOOK.price.toFixed(2)}
              </span>
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">per copy</span>
            </div>
          </div>
          {/* Purchase Form */}
          {!purchased ? (
            <form onSubmit={handleBuy} className="flex flex-col sm:flex-row items-center gap-4">
              <label className="flex items-center">
                <span className="mr-2 text-gray-700 dark:text-gray-200">Quantity:</span>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded"
                />
              </label>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded transition-colors duration-200"
              >
                Buy Now
              </button>
            </form>
          ) : (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded text-green-800 dark:text-green-200 text-center">
              Thank you for your purchase! You will receive an email with your book download link.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
