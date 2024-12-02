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
    <div className="flex flex-col gap-1 mt-3 w-full">
      {dummyChatData.map((chat) => (
        <div
          className="hover:bg-whitesmoke cursor-default p-3 rounded-md"
          key={chat.name}
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <img
                className="h-11 w-11 rounded-full object-cover"
                alt="Sample profile picture"
                src="https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc"
              />
              <p className="text-base font-semibold">{chat.name}</p>
            </div>
            <p className="text-xs">{chat.date || chat.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatCard;
