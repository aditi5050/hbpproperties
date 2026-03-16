"use client";

import { FormEvent, useState } from "react";

type InquiryFormProps = {
  compact?: boolean;
};

type InquiryPayload = {
  name: string;
  phone: string;
  email: string;
  interestedIn: string;
  budget: string;
  message: string;
};

const INITIAL_FORM: InquiryPayload = {
  name: "",
  phone: "",
  email: "",
  interestedIn: "Buy",
  budget: "",
  message: "",
};

export default function InquiryForm({ compact = false }: InquiryFormProps) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setStatus({ type: "success", message: "Thanks. Your inquiry has been submitted successfully." });
      setForm(INITIAL_FORM);
    } catch {
      setStatus({ type: "error", message: "Could not submit inquiry right now. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-2xl p-6 md:p-9 space-y-5 border border-slate-200">
      <div className={compact ? "grid md:grid-cols-2 gap-4" : "grid md:grid-cols-2 gap-5"}>
        <input
          required
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
        <input
          required
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
        <select
          required
          value={form.interestedIn}
          onChange={(event) => setForm((prev) => ({ ...prev, interestedIn: event.target.value }))}
          className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-white text-base focus:outline-none focus:ring-2 focus:ring-gold/40"
        >
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
          <option value="Rent">Rent</option>
          <option value="Invest">Invest</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Budget"
        value={form.budget}
        onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))}
        className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-gold/40"
      />

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
        className="w-full border border-slate-200 rounded-xl px-4 py-3.5 h-36 resize-none text-base focus:outline-none focus:ring-2 focus:ring-gold/40"
      />

      <button type="submit" className="btn-primary w-full md:w-auto md:min-w-[220px] py-3.5" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit Inquiry"}
      </button>

      {status ? (
        <p className={status.type === "success" ? "text-green-700 text-sm" : "text-red-600 text-sm"}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
