import { TabsSection } from "@/components";
export default function Faqs() {
  const tabs = [
    { id: "about", label: "About Mass Tort Express and Its Services" },
    { id: "journey", label: "The Claimant Journey: How It Works" },
    { id: "lawsuit", label: "Specific Lawsuit Campaigns (Mass Torts)" },
    { id: "digitalMarketing", label: "Digital Marketing and Law Firm Partnership" },
  ];

  const content = {
    about:
      "This is Profile tab’s associated content. Clicking another tab will show its content.",
    journey: "This is Dashboard tab’s associated content.",
    lawsuit: "This is Settings tab’s associated content.",
    digitalMarketing: "This is Contacts tab’s associated content.",
  };

  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[350px] sm:min-h-[400px] md:min-h-[400px] bg-[url('/assets/images/faqbanner.webp')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-9xl font-bold leading-snug text-white drop-shadow-md">
            FAQ's
          </h1>
        </div>
      </section>
      
      <section>
        <TabsSection tabs={tabs} content={content} defaultTabId={"about"} />
      </section>
    </main>
  );
}
