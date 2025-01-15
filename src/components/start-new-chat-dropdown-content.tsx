import SearchInput from "./search-input";

const DUMMY_CONTACTS = new Array(3).fill("").map(() => ({
  name: "Test",
  isContactSavedInPhone: true,
}));

// Fix dropdown menu not closing when being clicked again
const StartNewChatDropdownContent = () => {
  return (
    <div className="px-2 pb-1">
      <p className="font-semibold text-base pt-2 py-2">Start New Chat</p>
      {/* Search Input */}
      <SearchInput />
      <div className="mt-4">
        {DUMMY_CONTACTS?.map((item, index) => (
          <div className="text-wrap" key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartNewChatDropdownContent;
