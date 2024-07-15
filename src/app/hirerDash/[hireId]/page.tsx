import ProfileCard from "@/app/Components/ProfileCard";
import Sidebar from "../../Components/HireDashSidebar";

export default function Page({ params }: { params: { hireId: string } }) {
    const username = params.hireId;

    return (
      <div><Sidebar userName={username}/>
      
        <main className="grid w-full h-full pl-[240px]">
            <div className="min-h-screen bg-gray-900 text-white">
                <main className="p-8">
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold">Top Profiles</h2>
                        <div className="w-full max-w-[800px] flex space-x-4 scrollbar-hide  overflow-x-scroll scroll-smooth snap-x snap-mandatory ">
                            <ProfileCard/><ProfileCard/><ProfileCard/><ProfileCard/><ProfileCard/><ProfileCard/>
                        </div>
                    </section>
                </main>
            </div>
        </main>
      </div>
    );
  }
