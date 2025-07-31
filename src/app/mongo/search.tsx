"use client";

import React, { useState } from "react";

const API_URL =
  "http://localhost:8000/api/method/report_app_frappe.report_app_frappe.api.mongo_chart.search_entity";

interface SearchResponse {
  message?: any;
}

const formatResult = (data: any) => JSON.stringify(data, null, 2);

const JsonFilterSearch: React.FC = () => {
  const [filterText, setFilterText] = useState("");
  const [result, setResult] = useState<string>("Results will appear here...");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!filterText.trim()) {
      alert("Please enter a filter JSON.");
      return;
    }

    let filters;
    try {
      filters = JSON.parse(filterText);
    } catch {
      alert("Invalid JSON format. Please check your input.");
      return;
    }

    setLoading(true);
    setResult("Loading...");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filters }),
      });

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

      const data: SearchResponse = await res.json();

      if (!data.message) {
        setResult("No response from server.");
        return;
      }

      if (Array.isArray(data.message) && data.message.length === 0) {
        setResult("No matching entities found.");
        return;
      }

      if (
        typeof data.message === "object" &&
        data.message !== null &&
        "error" in data.message
      ) {
        const errorMsg = String((data.message as any).error).slice(0, 200);
        setResult(`Error: ${errorMsg}`);
        return;
      }

      setResult(formatResult(data.message));
    } catch (err: any) {
      const errMsg = (err?.message || JSON.stringify(err)).slice(0, 200);
      setResult(`Error: ${errMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 max-w-3xl mx-auto">
      <label htmlFor="filter-input" className="block font-semibold mb-2">
        Enter Filter JSON:
      </label>
      <textarea
        id="filter-input"
        rows={6}
        className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{background: "#034078"}}
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
        id="search-results"
        style={{background: "#034078"}}
        className="mt-4 bg-gray-100 p-4 rounded-md max-h-96 overflow-y-auto whitespace-pre-wrap break-words font-mono text-sm"
      >
        {result}
      </pre>
    </div>
  );
};

export default JsonFilterSearch;
