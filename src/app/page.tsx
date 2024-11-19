import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col items-center gap-2 justify-center min-h-screen">
        <FaWhatsapp className="text-gray-300" size={75} />
        <p>WhatsApp Clone for Browser</p>
        <p className="font-light text-[.9rem]">Send and receive message.</p>
      </div>
    </div>
  );
}
