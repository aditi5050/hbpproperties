import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${COMPANY.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_14px_30px_rgba(37,211,102,0.45)] hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
