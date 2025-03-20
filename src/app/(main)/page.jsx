import Image from "next/image";
import { SidebarComponent } from "../component/SidebarComponent";
import SearchComponent from "../component/SearchComponent";
import BodyComponent from "../component/bodyComponent";

export default function Home() {
  const menu = [
    {
      id: 1,
      img: "",
      menuName: "Movie & TV Shows",
    },
    {
      id: 1,
      img: "",
      menuName: "Music",
    },
    {
      id: 1,
      img: "",
      menuName: "Photography",
    },
    {
      id: 1,
      img: "",
      menuName: "Sport & Fitness",
    },
    {
      id: 1,
      img: "",
      menuName: "Technology & Gadgets",
    },
    {
      id: 1,
      img: "",
      menuName: "Travel & Exploration",
    },
    {
      id: 1,
      img: "",
      menuName: "Writing & Journaling",
    },
  ];
  return (
    <main className="">
      <div className="flex justify-between items-center pb-2 border-b-2 border-blue-500">
        <h2 className="text-lg font-semibold text-[#087E8B] bg-[#F5F7F8] p-3 rounded-2xl">
          Home Page
        </h2>

        {/* Dropdown for filtering categories */}
        {/* <select className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="all">Home Page</option>
          <option value="books">Books</option>
          <option value="cartoons">Cartoons</option>
        </select> */}
      </div>
      <BodyComponent />
    </main>
  );
}
