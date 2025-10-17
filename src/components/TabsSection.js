"use client";
import React, { useState } from "react";
export const TabsSection = ({tabs, content}) => {
  const [activeTab, setActiveTab] = useState("profile");

  // const tabs = [
  //   { id: "profile", label: "Profile" },
  //   { id: "dashboard", label: "Dashboard" },
  //   { id: "settings", label: "Settings" },
  //   { id: "contacts", label: "Contacts" },
  // ];

  // const content = {
  //   profile: "This is Profile tab’s associated content. Clicking another tab will show its content.",
  //   dashboard: "This is Dashboard tab’s associated content.",
  //   settings: "This is Settings tab’s associated content.",
  //   contacts: "This is Contacts tab’s associated content.",
  // };

  return (
    <section className="px-[10%] py-8">
      {/* Tab Headers */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap text-sm font-medium text-center">
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block px-4 py-2 border-b-2 rounded-t-lg transition-all ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong className="font-medium text-gray-900 dark:text-white">
            {tabs.find((t) => t.id === activeTab)?.label} tab’s associated content:
          </strong>{" "}
          {content[activeTab]}
        </p>
      </div>
    </section>
  );
};