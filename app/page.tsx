import Sidebar from "@/app/components/Sidebar";
import ProfilePic from "./components/ProfilePic";
import Nav from "./components/Nav";
import Introduction from "./components/Introduction";
import Detail from "./components/Detail";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import ProgressBar from "./components/ProgressBar";

export default function Home() {
  return (
    <main>
      <Nav />
      <Sidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 p-5 mt-[90px]">
          <Introduction />
          <Detail />
          <Team />
          <h2 className='mt-10 text-center items-center  justify-center font-bold text-2xl'>Roadmap soon.</h2>
          <Roadmap />
        </div>
        <div className="hidden md:block fixed right-0 w-[555px] mt-[92px]">
          <ProgressBar />
          <ProfilePic/>
        </div>
      </div>
    </main>
  );
}
