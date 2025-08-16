import React from "react";
import policies from "../data/policies.json"; // adjust path if needed
import { useParams } from "react-router-dom";

export default function PolicyPage() {
  const { type } = useParams(); // 'terms' or 'privacy'
  const policy = policies[type];

  if (!policy) {
    return (
      <div className="p-10 text-center text-red-600">
        Policy not found.
      </div>
    );
  }

  return (
    <section
      className=" mx-auto pt-32 pb-12 px-6"
      style={{
        backgroundImage: "url('/background/background.jpg')", // 🔹 Replace with your image path
        backgroundRepeat: "repeat",
        backgroundSize: "auto", // keeps repeating pattern size
      }}
    >
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#ec5f00" }}>
        {policy.title}
      </h1>
      <p className="text-sm text-white-500 mb-8">
        Last Updated: {policy.lastUpdated}
      </p>

      {policy.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: "#ec5f00" }}
          >
            {section.heading}
          </h2>
          <p className="text-white leading-relaxed">{section.content}</p>
        </div>
      ))}
    </section>
  );
}
