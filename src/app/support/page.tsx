import { Card } from "@/components/ui/card";
export default function SupportPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <Card className="max-w-xl w-full p-8 shadow-xl ring-1 ring-emerald-100">
        <h1 className="text-2xl font-bold mb-4 text-emerald-700">Customer Support Chatbot</h1>
        <div className="bg-slate-50 rounded-lg p-4 mb-4 text-slate-600">How can we help you today?</div>
        <div className="flex flex-col gap-2">
          {/* Chatbot UI placeholder */}
          <input type="text" className="w-full px-3 py-2 rounded border border-slate-200" placeholder="Type your message..." />
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded font-semibold mt-2">Send</button>
        </div>
      </Card>
    </main>
  );
}
