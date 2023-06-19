export default function Page() {
  return (
    <div>
      <h1 className="text-6xl text-center">Paul Tracker</h1>
      <div className="points h-full p-4">
        <div className="points_grid h-1/2 grid grid-cols-3 gap-5 text-center">
          <div className="points_grid_item border-2 border-black">
            Point 1
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
          </div>

          <div className="points_grid_item border-2 border-black">Point 2</div>
          <div className="points_grid_item border-2 border-black">Point 3</div>
        </div>
      </div>
    </div>
  );
}
