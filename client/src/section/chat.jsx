import Card from "../components/phone";

const Chat =()=>{
    return(
        <div className=" border h-150 border-amber-100 mt-25 text-6xl text-white flex flex-row gap-5 justify-center items-center">
            <div className=" text-xl shadow shadow-amber-50 flex justify-between items-center px-0 h-full  border-1 border-amber-50">
                <div className="px-10">
                <Card />
                </div>
                <div className="px-10 line-clamp-5 max-w-2xl">
                <p className="max-w-fit line-clamp-20">This is a Chat App designed not just for conversations, but for connection.
Along with real-time messaging, it lets you manage group or personal expenses easily.
Track who paid what, split bills, and settle up without leaving the chat.
You can also attach notes, receipts, or payment links directly to messages.
Beyond expenses, the app helps you capture memories with friends and family.
Save photos, voice notes, and special moments in chat threads.
It includes a timeline view to look back at shared events and costs over time.
With built-in reminders, never forget who owes what—or when an event happened.
The interface is clean, intuitive, and optimized for both casual and travel groups.
It's your all-in-one space for chatting, sharing, and staying organized together.</p>

                </div>
            </div>
            <div className="border-1 border-amber-50">
                this is dov 2
            </div>
        </div>
    )
}
export default Chat;