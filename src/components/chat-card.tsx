import { routePaths } from "@/constants/routePaths";
import { truncateString } from "@/lib/truncateString";
import Link from "next/link";

const dummyChatData = [
  {
    id: 1,
    name: "Taylor",
    date: "10/20/2020",
    time: null,
    message: "Nice bro!",
  },
  {
    id: 2,
    name: "Ed",
    date: null,
    time: "10:24 PM",
    message: "Testing long message again last test",
  },
  {
    id: 3,
    name: "Rod",
    date: "10/22/2020",
    time: null,
    message: "Good afternoon",
  },
  {
    id: 4,
    name: "Latina",
    date: "3/20/2021",
    time: null,
    message: "Have a blessed sunday test!",
  },
];

// Display chats from api
const ChatCard = () => {
  return (
    <div className="flex flex-col gap-1 mt-3 w-full">
      {dummyChatData.map((chat) => (
        <Link
          className="hover:bg-whitesmoke cursor-default p-3 rounded-md"
          key={chat.name}
          href={`${routePaths.Chats}/${chat.id}`}
        >
          <div className="flex items-start justify-between">
            <div className="inline-flex items-start gap-2">
              <img
                className="h-11 w-11 rounded-full object-cover"
                alt="Sample profile picture"
                src="https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc"
              />
              <div className="flex flex-col">
                <p className="text-base font-semibold">{chat.name}</p>
                <p className="text-[.8rem] text-gray-500">
                  {truncateString(chat.message)}
                </p>
              </div>
            </div>
            <p className="text-xs">{chat.date || chat.time}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatCard;
