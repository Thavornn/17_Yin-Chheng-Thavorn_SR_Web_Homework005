import { Geist, Geist_Mono } from "next/font/google";
import { SidebarComponent } from "../component/SidebarComponent";
import SearchComponent from "../component/SearchComponent";
import { House, Video } from "lucide-react";

export default function RootLayout({ children }) {
  const menu = [
    {
      id: 4,
      img: Video,
      menuName: "Movie & TV Shows",
    },
    {
      id: 5,
      img: House,
      menuName: "Music",
    },
    {
      id: 6,
      img: "",
      menuName: "Photography",
    },
    {
      id: 7,
      img: "",
      menuName: "Sport & Fitness",
    },
    {
      id: 8,
      img: "",
      menuName: "Technology & Gadgets",
    },
    {
      id: 9,
      img: "",
      menuName: "Travel & Exploration",
    },
    {
      id: 10,
      img: "",
      menuName: "Writing & Journaling",
    },
  ];
  return (
    <div className="flex gap-16 bg-gray-300">
      <div>
        <SidebarComponent menu={menu} />
      </div>
      <div className="mt-10">
        <SearchComponent />
        <div className="bg-white overflow-y-auto h-screen  rounded-t-2xl p-6 mt-5 mb-5 shadow-md  flex flex-col">
          {/* <div className="flex justify-between items-center pb-2 border-b-2 border-blue-500"> */}
          {/* <h2 className="text-lg bg-gray-200 p-2 text-blue-400 font-semibold">
            HomePage
          </h2> */}

          {/* Dropdown for filtering categories */}
          {/* </div> */}
          {children}
        </div>
      </div>
    </div>
  );
}
