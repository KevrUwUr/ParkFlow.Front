import { FaMapMarkerAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="w-full bg-white shadow-md p-4 flex items-center justify-start gap-2">
      <span className="bg-blue-600 rounded-md text-xl p-2 text-white">
        <FaMapMarkerAlt />
      </span>
      <h1 className="text-2xl font-bold text-black">ParkFlow</h1>
    </div>
  );
};
