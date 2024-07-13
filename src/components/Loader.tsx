import { CircleLoader } from "react-spinners";

export const Loader: React.FC = () => (
  <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black/[.3] backdrop-blur-[10px]">
    <CircleLoader />
  </div>
);
