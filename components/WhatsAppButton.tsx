import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${COMPANY.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
