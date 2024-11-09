
export default function TodoInput() {
  return(
    <div className="font-press flex justify-center">
      <div className="p-4 m-3">    
        <input className="
          border-green-300 border py-2 px-4 rounded-lg
        " type="text" placeholder="Enter Todo ..." />
        <button className="ml-2 border p-2 rounded-lg bg-green-300">Add</button></div>
    </div>
  )
};
