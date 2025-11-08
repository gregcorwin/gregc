"use client";
import { useState } from "react";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async () => {
    setStatus("Submitting...");
    // Placeholder – here you could call an API to mark the address unsubscribed
    await new Promise((r) => setTimeout(r, 500));
    setStatus("You have been unsubscribed. Sorry to see you go!");
  };

  return (
    <div className="pt-24 mx-auto max-w-xl px-4">
      <h1 className="text-2xl font-semibold text-white">Unsubscribe</h1>
      <p className="mt-2 text-white/70 text-sm">Enter the email address to unsubscribe.</p>
      <div className="mt-4 flex gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-md bg-white/[0.06] border border-white/10 px-3 py-2 text-white placeholder:text-white/40"
        />
        <button onClick={onSubmit} className="rounded-md bg-white text-black px-4">Unsubscribe</button>
      </div>
      {status && <div className="mt-3 text-white/80 text-sm">{status}</div>}
    </div>
  );
}


