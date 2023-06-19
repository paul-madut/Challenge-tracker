import React from "react";

export default function checkList() {
  return (
    <div className=" w-full h-full border-2 border-black">
      <ul>
        <li>
          <input type="checkbox" name="" id="" /> Social Media Post
        </li>
        <li>
          <input type="checkbox" name="" id="" /> 3 Github Commits
        </li>
        <li>
          <input type="checkbox" name="" id="" /> 1 Leetcode Medium
        </li>
      </ul>
    </div>
  );
}
