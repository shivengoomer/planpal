import Earth from "../components/earth";
import Folder from "../components/folder";
import Phone from "../components/phone";

const Chat = () => {
  return (
    <section
      id="chat"
      className="min-h-screen pt-24 flex items-center justify-evenly "
    >
      <div className="flex flex-row gap-20 text-white p-6 rounded-3xl max-w-6xl">

        <div className="flex flex-row items-center  rounded-3xl   h-full px-6 py-4">

          <div className="pr-6">
            <Phone />
          </div>

          {/* Feature list */}
          <div className="w-sm">
            <ul className="font-[Ubuntu] text-xl leading-relaxed space-y-4">
              <li>🗓️ Create and organize trips, events, or meetups</li>
              <li>💬 Coordinate plans right inside the chat</li>
              <li>📍 Share locations, links & to-dos</li>
              <li>📸 Capture and revisit memories with a timeline view</li>
              <li>⏰ Set reminders so nothing’s missed</li>
            </ul>
          </div>
        </div>

        {/* Right: Folder icon */}
        <div className="flex flex-col gap-30 items-center justify-center">
            <div className="rounded-2xl p-4 flex items-center justify-center">
          <Folder />
          </div>
          <div className="flex flex-row gap-10 mx-10">
            <div class="text-5xl loader  rounded-full border-yellow-500 bg-yellow-300 animate-bounce
            aspect-square w-30 h-30 flex justify-center items-center text-yellow-700">$</div>
            <div>
                <Earth />
            </div>
            </div>
            
        </div>
        
      </div>
    </section>
  );
};

export default Chat;
