const dummyChatData = [
  {
    name: "Taylor",
    date: "10/20/2020",
    time: null,
  },
  {
    name: "Ed",
    date: null,
    time: "10:24 PM",
  },
  {
    name: "Rod",
    date: "10/22/2020",
    time: null,
  },
  {
    name: "Latina",
    date: "3/20/2021",
    time: null,
  },
];

const ChatCard = () => {
  return (
    <div className="flex flex-col gap-1 mt-5">
      {dummyChatData.map((chat) => (
        <div key={chat.name}>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">{chat.name}</p>
            <p className="text-xs">{chat.date || chat.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatCard;
