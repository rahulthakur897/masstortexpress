import {
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
  FiBarChart2,
} from "react-icons/fi";
import { TabsSection } from "@/components";

export default function Faqs() {
  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "dashboard", label: "Dashboard" },
    { id: "settings", label: "Settings" },
    { id: "contacts", label: "Contacts" },
  ];

  const content = {
    profile:
      "This is Profile tab’s associated content. Clicking another tab will show its content.",
    dashboard: "This is Dashboard tab’s associated content.",
    settings: "This is Settings tab’s associated content.",
    contacts: "This is Contacts tab’s associated content.",
  };

  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[500px] bg-[url('/assets/images/services/camp-lejeune.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white drop-shadow-md">
            FAQ's
          </h1>
        </div>
      </section>
      <section
        id="about"
        data-aos="fade-up"
        className="bg-[#000e30] text-[#fff] w-[95%] md:w-[90%] my-6 m-auto rounded-[40px] p-6 flex flex-col md:flex-row justify-between gap-8 md:gap-20 items-center"
      >
        <img
          src="/assets/images/services/camp-lejeune/image.jpg"
          alt="who-we-are"
          className="w-full md:w-2/5 h-[250px] sm:h-[350px] md:h-[400px] rounded-[30px] object-cover shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        />

        <div className="w-full md:w-3/5 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold pb-4 sm:pb-6">
            Understanding the Camp Lejeune Justice Act
          </h2>
          <p className="text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-[1.8]">
            The Camp Lejeune Justice Act of 2022 allows veterans, their
            families, and civilians who lived or worked at Marine Corps Base
            Camp Lejeune between 1953 and 1987 to file claims for health issues
            caused by exposure to contaminated water. This landmark legislation
            opens a crucial window for affected individuals to seek compensation
            and justice. Mass Tort Express is at the forefront of identifying
            and qualifying these potential plaintiffs, delivering them directly
            to law firms ready to represent them.
          </p>
        </div>
      </section>
      <section style={{ padding: "2rem 10% " }}>
        <TabsSection tabs={tabs} content={content} />
      </section>
    </main>
  );
}
