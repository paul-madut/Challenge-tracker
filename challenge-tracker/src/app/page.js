export default function Page() {
  return (
    <div>
      <h1 className="text-6xl text-center">Paul Tracker</h1>
      <div className="points h-full p-2">
        <div className="points_grid h-1/2 grid grid-cols-3 gap-5 border-2 border-black text-center">
          <div className="points_grid_item border-2 border-black">Point 1</div>
          <div className="points_grid_item border-2 border-black">Point 2</div>
          <div className="points_grid_item border-2 border-black">Point 3</div>
        </div>
      </div>
    </div>
  );
}
