"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { ContactForm } from "@/components";
import { campaigns, faqs, features, processSteps, stats } from "@/utils/common";
import CountUp from "react-countup";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[550px] bg-[url('/assets/images/home-bg.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white drop-shadow-md">
            Unlock Access to Right Legal Guidance
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 leading-relaxed">
            Connecting <span className="text-[#439E30] font-semibold">"YOU"</span> with North American Law Firms
            with <br className="hidden sm:block" /> High-Value Mass Tort & Class Action Campaign Experience.
          </p>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="relative text-[#fff] flex flex-col md:flex-row gap-8 py-8 w-[95%] md:w-[90%] m-auto"
      >
        <div className="w-full md:w-[60%]">
          <h2 className="text-2xl sm:text-3xl md:text-[3rem] font-bold text-[#000e30]">
            Our Mass Tort <span className="text-[#439E30]">Campaigns</span>
          </h2>
          <div className="relative grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 py-6 sm:pr-0 md:pr-6">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between shadow-lg p-4 rounded-[20px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-[220px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/assets/images/services/${campaign.image}')` }}
              >
                <div className="absolute inset-0 bg-[#000e30]/80 rounded-[20px]"></div>

                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-[#439E30]">
                    {campaign.title}
                  </h3>
                  <p className="text-sm sm:text-base mt-2 line-clamp-3 text-white">
                    {campaign.subtitle}
                  </p>
                </div>
                <Link
                  href={campaign.link}
                  className="relative z-10 self-end mt-4 text-white font-medium hover:font-bold"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="relative md:absolute md:-top-[8rem] md:right-0 w-full md:w-[40%] bg-transparent md:bg-white md:shadow-lg md:rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold">
            Get Your Free Case Review Today
          </h3>
          <ContactForm />
        </div>
      </section>

      <section className="bg-[#000e30] text-[#fff] grid grid-cols-2 md:grid-cols-4 gap-8 py-8 my-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl md:text-7xl font-extrabold mb-4">
              <CountUp
                end={stat.number}
                duration={2}
                suffix={stat.suffix}
                enableScrollSpy
                scrollSpyDelay={200}
              />
            </div>
            <div className="text-[24px] font-bold">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="w-[95%] md:w-[90%] m-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[3rem] font-bold text-[#000e30]">
          Why You <span className="text-[#439E30]"> Can Always</span> Trust Us</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 py-6 sm:pr-0 md:pr-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start shadow-lg p-4 text-[#000] bg-[#f4f4f4] rounded-[20px] 
                     transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#eafbea]"
            >
              <img
                src={`/assets/images/icons/${feature.img}`}
                alt={feature.title}
                className="w-[70px] sm:w-[80px] h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        data-aos="fade-up"
        className="bg-[#000e30] text-[#fff] w-[95%] md:w-[90%] my-6 m-auto rounded-[40px] p-6 flex flex-col md:flex-row justify-between gap-8 md:gap-20 items-center"
      >
        <img
          src="/assets/images/about.jpg"
          alt="who-we-are"
          className="w-full md:w-2/5 h-[250px] sm:h-[350px] md:h-[400px] rounded-[30px] object-cover shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        />

        <div className="w-full md:w-3/5 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold pb-4 sm:pb-6">
            About Mass Tort Express
          </h2>
          <p className="text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-[1.8]">
            Mass Tort Express is a leading digital marketing agency dedicated exclusively to generating
            high-quality, pre-qualified mass tort and class action leads for law firms across North America.
            With a deep understanding of the legal landscape and cutting-edge digital strategies, we bridge
            the gap between affected individuals and the legal representation they deserve. Our mission is
            to empower law firms to grow their practice efficiently and ethically, focusing on impactful
            campaigns that deliver real results.
          </p>
        </div>
      </section>



      <section id="work" data-aos="fade-up" className="w-[90%] my-8 m-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000e30] py-3 leading-snug">
          How We Connect <br /> Claimants <span className="text-[#439E30]">"You"</span> with Justice
        </h2>

        <div className="flex flex-wrap gap-6 justify-center mt-8 w-full">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-2xl shadow-md text-center w-[90%] sm:w-[45%] md:w-[22%] 
                   transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#f8fff9]"
            >
              <div className="absolute -top-[15px] -left-[10px] bg-[#e5f0fb] text-[#0071dc] font-extrabold 
                        text-[24px] h-[50px] w-[50px] flex justify-center items-center rounded-full 
                        shadow-md transition-transform duration-300 hover:scale-110">
                {step.id}
              </div>
              <img
                src={`/assets/images/${step.icon}`}
                alt={step.title}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#439E30]">{step.title}</h3>
                <p className="text-base text-[#000] font-medium leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#contact"
          className="bg-[#439E30] rounded-[1rem] text-base sm:text-lg md:text-xl text-[#fff] 
             py-2 sm:py-3 px-6 mt-10 inline-block font-bold cursor-pointer 
             shadow-lg transition-all duration-300 hover:bg-[#2d6e20] hover:shadow-2xl"
        >
          Ready to Connect?
        </Link>
      </section>


      <section data-aos="fade-up" className="w-[95%] md:w-[90%] my-10 m-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000e30] py-3 leading-snug text-center md:text-left">
          Frequently <span className="text-[#439E30]">Asked</span> Questions
        </h2>
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-4 mt-6"
        >
          {faqs.map((faq, index) => (
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
      </section>

      <section
        data-aos="fade-up"
        className="bg-[#000e30] text-white w-[95%] md:w-[90%] my-10 m-auto rounded-[30px] md:rounded-[40px] p-6 sm:p-10 flex flex-col md:flex-row justify-between gap-10 md:gap-20 items-center"
      >
        <div className="md:w-3/5 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 leading-snug">
            If you're unsure, start your free case review!
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Fill out a form to start a free case review now.
          </p>
          <Link
            href="#contact"
            className="bg-white rounded-[1rem] text-[#439E30] text-sm sm:text-base md:text-lg py-2 sm:py-3 px-5 sm:px-6 inline-block font-bold shadow-lg cursor-pointer 
               transition-all duration-300 hover:bg-[#439E30] hover:text-white hover:shadow-2xl"
          >
            Start My Case Review
          </Link>
        </div>
        <img
          src="/assets/images/contact.jpg"
          alt="contact"
          className="w-full md:w-2/5 rounded-[20px] md:rounded-[30px] shadow-lg object-cover transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        />
      </section>
    </main>
  );
}
