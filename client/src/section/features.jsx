import Earth from "../components/earth";
import Folder from "../components/folder";
import Phone from "../components/phone";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full  flex items-center justify-center bg-cover bg-center py-20 px-4 text-white"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-7xl font-[Lobster] font-bold py-20 mb-0"> All You Need. In One Place</h2>
      <div className="max-w-5xl mx-20 flex flex-col gap-25 items-center justify-items-center px-10">

        {/* Feature 1: Smart Group Chat */}
        <div className="flex flex-col lg:flex-row items-center  justify-center ">
          <div className="rounded-3xl p-4 w-full lg:w-1/2 shadow-xl">
            <Phone className="w-full h-auto" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Smart Group Chat</h2>
            <p className="text-lg leading-relaxed">
              Real-time messaging with your group — share messages, media, to-dos, and expenses in a single thread. Chat feels like home for every plan.
            </p>
          </div>
        </div>

        {/* Feature 2: Built-in Expense Splitter */}
        <div className="flex flex-col lg:flex-row-reverse justify-items-center gap-2">
          <div className="rounded-3xl p-4 w-full lg:w-1/2 shadow-xl flex justify-center items-center">
            <div className="text-9xl bg-yellow-300 text-yellow-800 border-4 border-yellow-500 w-35 h-35 rounded-full flex items-center justify-center animate-bounce">
              $
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Built-in Expense Splitter</h2>
            <p className="text-lg leading-relaxed">
              Easily split expenses with friends. Attach receipts, auto-calculate dues, and track payments effortlessly — no more awkward reminders.
            </p>
          </div>
        </div>

        {/* Feature 3: Event & Plan Manager */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className=" rounded-3xl  p-4 w-full lg:w-1/2 shadow-xl">
            <Folder className="w-full h-auto" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4"> Event & Plan Manager</h2>
            <p className="text-lg leading-relaxed">
              Plan hangouts, trips, or birthdays in one place — set reminders, track RSVPs, and collaborate on to-do lists with your group.
            </p>
          </div>
        </div>

        {/* Feature 4: Memory Timeline */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="flex items-center justify-center rounded-3xl p-4 w-full lg:w-1/2 shadow-xl">
            <Earth  />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 ">Memory Timeline</h2>
            <p className="text-lg leading-relaxed">
              Relive shared moments with a timeline of photos, voice notes, and event highlights — your memories, always together.
            </p>
          </div>
        </div>

      </div> 

      </div>
              
    </section>
  );
};

export default Features;
