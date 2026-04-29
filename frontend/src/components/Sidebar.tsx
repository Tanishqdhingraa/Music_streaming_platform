import { useNavigate } from "react-router-dom";
import PlayListCard from "./PlayListCard";
import { useUserData } from "../context/UserContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useUserData();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      
      {/* Top Section */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          className="flex items-center gap-3 pl-8 cursor-pointer hover:text-gray-300"
          onClick={() => navigate("/")}
        >
          <img src="/home.png" alt="Home" className="w-6" />
          <p className="font-bold">Home</p>
        </div>

        <div
          className="flex items-center gap-3 pl-8 cursor-pointer hover:text-gray-300"
          onClick={() => navigate("/search")}
        >
          <img src="/search.png" alt="Search" className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/stack.png" className="w-8" alt="Library" />
            <p className="font-semibold">Your Library</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/arrow.png" className="w-8 cursor-pointer" alt="Expand" />
            <img src="/plus.png" className="w-8 cursor-pointer" alt="Add" />
          </div>
        </div>

        {/* Playlist */}
        <div
          className="cursor-pointer"
          onClick={() => navigate("/playlist")}
        >
          <PlayListCard />
        </div>

        {/* Podcast Card */}
        <div className="p-4 m-2 bg-[#1a1a1a] rounded font-semibold flex flex-col gap-1 mt-4">
          <h1>Let’s find some podcasts to follow</h1>
          <p className="font-light text-sm">
            We’ll keep you updated on new episodes
          </p>
          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4 hover:scale-105 transition">
            Browse Podcasts
          </button>
        </div>

        {/* Admin Button */}
        {user?.role === "admin" && (
          <button
            className="ml-4 px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4 cursor-pointer hover:scale-105 transition"
            onClick={() => navigate("/admin/dashboard")}
          >
            Admin Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
