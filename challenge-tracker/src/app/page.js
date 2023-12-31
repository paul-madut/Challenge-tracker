import React from "react";
import checkList from "./checkList";
export default function Page() {
  return (
    <div>
      <div className="header__bar flex w-full bg-slate-600 justify-center shadow-xl">
        <h1 className="text-6xl text-center">Paul Tracker</h1>
      </div>
      <div className="points h-full p-4">
        <div className="points_grid h-1/2 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 text-center">
          <div className="points_grid_item border-2 border-black">
            Point 1
            <div className=" w-full h-full">
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
          </div>

          <div className="points_grid_item border-2 border-black">
            Point 2<checkList></checkList>
          </div>

          <div className="points_grid_item border-2 border-black">Point 3</div>
        </div>
      </div>
    </div>
  );
}
