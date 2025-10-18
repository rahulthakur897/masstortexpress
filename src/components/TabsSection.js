"use client";
import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import faqs from "@/components/faqs.json";
import { ChevronDown } from "lucide-react";

export const TabsSection = ({tabs, content, defaultTabId}) => {
  const [activeTab, setActiveTab] = useState(defaultTabId);
  
  return (
    <section className="px-[8%] py-8">
      {/* Tab Headers */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap text-sm font-medium text-center">
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`tracking-tight inline-block px-4 py-2 text-[1rem] border-b-2 rounded-t-lg transition-all ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600 "
                    : "border-transparent  hover:text-gray-800 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Tab Content */}
      <div className="p-4 rounded-lg ">
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-4 mt-6"
        >
          {faqs[activeTab].map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left font-medium text-base sm:text-lg hover:bg-gray-50 transition">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 transition-transform data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 sm:px-5 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};