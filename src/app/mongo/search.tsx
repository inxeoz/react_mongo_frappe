"use client";

import React, { useState } from "react";

const API_URL = "http://localhost:8000/api/method/report_app_frappe.report_app_frappe.api.mongo_chart.search_entity";

const JsonFilterSearch: React.FC = () => {
  const [filterText, setFilterText] = useState("");
  const [result, setResult] = useState("Results will appear here...");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!filterText.trim()) return alert("Please enter a filter JSON.");

    try {
      const filters = JSON.parse(filterText);
      setLoading(true);
      setResult("Loading...");

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filters }),
      });

      const data = await res.json();
      const msg = data?.message;

      if (!msg) return setResult("No response from server.");
      if (Array.isArray(msg) && msg.length === 0) return setResult("No matching entities found.");
      if (typeof msg === "object" && msg.error) return setResult(`Error: ${String(msg.error).slice(0, 200)}`);

      setResult(JSON.stringify(msg, null, 2));
    } catch (err: any) {
      setResult(`Error: ${(err?.message || "Unknown error").slice(0, 200)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 max-w-3xl mx-auto p-4">
      <label htmlFor="filter-input" className="block font-semibold mb-2">
        Enter Filter JSON:
      </label>
      <textarea
        id="filter-input"
        rows={6}
        className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ background: "#034078", color: "#fff" }}
        placeholder='e.g. {"name": "Cozy Apartment", "price": "100"}'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        disabled={loading}
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className={`mt-4 px-4 py-2 rounded-md text-white ${
          loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Searching..." : "Search Data"}
      </button>

    <pre
  className="mt-4 p-4 rounded-md max-h-96 overflow-y-auto whitespace-pre-wrap break-words font-mono text-sm"
  style={{
    background: "#034078",
    color: "#fff",
    textAlign: "left",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    border: "1px solid #ccc",
  }}
>
  {result}
</pre>

    </div>
  );
};

export default JsonFilterSearch;
