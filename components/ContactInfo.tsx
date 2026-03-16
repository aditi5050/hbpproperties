import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Office Address</h3>
        <p className="text-gray-700 whitespace-pre-line">{COMPANY.addressLines.join("\n")}</p>
      </div>

      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-center gap-2"><Mail size={18} className="text-gold" /> {COMPANY.email}</p>
          {COMPANY.contacts.map((item) => (
            <p className="flex items-center gap-2" key={item.phone}>
              <Phone size={18} className="text-gold" /> {item.name}: {item.phone}
            </p>
          ))}
          <p className="flex items-center gap-2"><MapPin size={18} className="text-gold" /> RERA: {COMPANY.rera}</p>
        </div>
      </div>
    </div>
  );
}
