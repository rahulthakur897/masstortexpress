import { FiCheckCircle, FiShield, FiTrendingUp, FiBarChart2 } from "react-icons/fi";


export default function CampLejeune() {
   const partnerBenefits = [
  {
    id: 1,
    title: "Pre-Qualified Leads",
    description:"We ensure every lead meets initial criteria for Camp Lejeune claims, saving your firm valuable time and resources.",
    icon: FiCheckCircle,
  },
  {
    id: 2,
    title: "Ethical Sourcing",
    description:"Our lead generation methods are fully compliant with all legal and ethical guidelines, ensuring integrity in every case.",
    icon: FiShield,
  },
  {
    id: 3,
    title: "Scalable Solutions",
    description:"Whether you need a handful of high-value leads or a consistent flow for a large campaign, we can scale to meet your demands",
    icon: FiTrendingUp,
  },
  {
    id: 4,
    title: "Data-Driven Optimization",
    description:"Our campaigns are constantly refined based on performance data to deliver the highest conversion rates.",
    icon: FiBarChart2,
  },
];


    return (
        <main>
            <section className="relative flex flex-col items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[500px] bg-[url('/assets/images/services/camp-lejeune.jpg')] bg-cover bg-no-repeat">
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white drop-shadow-md">
                        High-Quality Camp Lejeune Water Contamination Leads
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 leading-relaxed">Connect with Veterans and Families Affected by Toxic Water Exposure.</p>
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
                        The Camp Lejeune Justice Act of 2022 allows veterans, their families, and civilians who lived or worked at Marine Corps Base Camp Lejeune between 1953 and 1987 to file claims for health issues caused by exposure to contaminated water. This landmark legislation opens a crucial window for affected individuals to seek compensation and justice. Mass Tort Express is at the forefront of identifying and qualifying these potential plaintiffs, delivering them directly to law firms ready to represent them.
                    </p>
                </div>
            </section>
            <section
  id="why-partner"
  data-aos="fade-up"
  className="w-[95%] md:w-[90%] my-10 m-auto rounded-[40px] bg-[#f4f4f4] p-6 md:p-12 shadow-lg"
>
  <div className="text-center max-w-3xl mx-auto mb-10">
    <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#000e30]">
  Why Partner with Mass Tort Express for{" "}
  <span className="text-[#439E30]">Camp Lejeune Leads?</span>
</h2>

    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
      Our process is designed to deliver only the highest quality leads for your firm, with a focus on compliance, efficiency, and scalability.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {partnerBenefits.map((benefit) => (
      <div
        key={benefit.id}
        className="bg-white rounded-[30px] p-6 text-center shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
      >
        <benefit.icon className="mx-auto mb-4 w-12 h-12 text-[#439E30]" />
        <h3 className="text-xl font-semibold text-[#000e30] mb-2">
          {benefit.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {benefit.description}
        </p>
      </div>
    ))}
  </div>
</section>

        </main>

    )
}