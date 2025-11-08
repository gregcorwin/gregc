"use client";
import { useState } from "react";

export default function SendTestPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const onSend = async () => {
    setStatus("Sending...");
    try {
      const res = await fetch("/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email, name: "Greg" }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed");
      setStatus(`Sent: ${json.id}`);
    } catch (e: unknown) {
      setStatus((e as Error).message);
    }
  };

  return (
    <div className="pt-24 mx-auto max-w-xl px-4">
      <h1 className="text-2xl font-semibold text-white">Send test email</h1>
      <div className="mt-4 flex gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-md bg-white/[0.06] border border-white/10 px-3 py-2 text-white placeholder:text-white/40"
        />
        <button onClick={onSend} className="rounded-md bg-white text-black px-4">Send</button>
      </div>
      {status && <div className="mt-3 text-white/80 text-sm">{status}</div>}
    </div>
  );
}


