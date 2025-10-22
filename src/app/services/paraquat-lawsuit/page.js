import { ContactForm } from "@/components";
import Link from "next/link";

export default function AutoVehicleAccident() {
  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[500px] bg-[url('/assets/images/services/paraquat.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white drop-shadow-md">
            Paraquat Lawsuit
          </h1>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="relative text-[#000] flex flex-col md:flex-row gap-8 py-8 w-[95%] md:w-[90%] m-auto"
      >
        <div className="w-full md:w-[60%]">
          <h2 className="text-2xl sm:text-3xl md:text-[3rem] font-bold text-[#000e30]">
            Understanding the{" "}
            <span className="text-[#439E30]"> Paraquat Lawsuit</span>
          </h2>
          <div>
            <p className="p-[1em]">
            Have you been diagnosed with Parkinson's disease? In 2011, The
            researchers performing the agricultural health study found Paraquat
            was assosciated with Parkinson's disease. People who came into
            contact with Paraquat were twice as likely to get the disease as
            someone with no exposure to it.{" "}
          </p>
          <p className="p-[1em]">
            Paraquat is a highly toxic herbicide used extensively in the United
            States since the 1960s. Scientific evidence has established a strong
            link between long-term exposure to Paraquat and the development of
            Parkinson's disease, a devastating neurological condition. As a
            result, numerous lawsuits have been filed against the manufacturers
            of this chemical, alleging that they failed to warn consumers about
            the risks. Paraquat posioning has caused two to three deaths per
            years, handling it calls for special training. Even when handlded as
            instructed, there are claims of it being dangerous.
          </p>
          <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold">
            If answer to any of the following is
            <span className="text-[#439E30]">Yes?</span>
            Don't
            wait you qualify for compensation review. File Now!{" "}
          </h3>
          <ul className="list-disc pt-[0.5rem] px-[2rem]">
            <li className="p-1">
              <strong>Time Period:</strong> When did the exposure occur? Was it
              after 1964 and before developing the medical condition?{" "}
            </li>
            <li className="p-1">
              <strong>Exposure Period :</strong> Did you apply, mix, or handle
              paraquat? Was there any physical (skin) contact with paraquat?{" "}
            </li>
            <li className="p-1">
              <strong>Medical Records:</strong> Are there medical records,
              doctor's statements, or other documentation that support the link
              between your exposure and your illness?{" "}
            </li>
          </ul>
    </div>
    </div>
        <div className="relative md:absolute md:-top-[8rem] md:right-0 w-full md:w-[40%] bg-transparent md:bg-white md:shadow-lg md:rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold">
            Get Your Free Case Review Today
          </h3>
          <ContactForm caseType='Paraquat Lawsuit' />
        </div>
      </section>
      {/*section 3*/}
    
      <section className="relative text-[#000] py-2 w-[95%] md:w-[90%] m-auto">
          <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold">
            Why Partner with Class Action North America for <span className="text-[#439E30]">Paraquat class
            action ?</span>
          </h3>
          <ul className="list-disc pt-[0.5rem] px-[2rem]">
            <li className="p-1">
              <strong>Pre-Qualification:</strong> We ensure quick qualification
              and initial criteria for Paraquat claims, saving you valuable time
              and resources.
            </li>
            <li className="p-1">
              <strong>Ethical Framework:</strong> Ensure we work with partners
              who are fully compliant with all legal and ethical guidelines,
              ensuring integrity in every case.
            </li>
            <li className="p-1">
              <strong>Data Driven Approach:</strong> We ensure your data is safe
              and you only discussing with right people, Whether you need a
              handful information or running the case.
            </li>
          </ul>
          <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] py-8 pb-3 font-bold">
             Common Conditions Linked to Paraquat and <span className="text-[#439E30]">Parkinson disease Class
            Action:</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center py-6">
            <div class="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={"/assets/images/services/paraquat/kidney.webp"}
                alt="Cancer Icon"
                class="w-[180px] h-auto mb-2"
              />
              <p class="text-gray-700 font-medium">Kidney Impact</p>
            </div>

            <div class="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={"/assets/images/services/paraquat/parkinson.webp"}
                alt="Parkinson Icon"
                class="w-[150px] h-auto mb-2"
              />
              <p class="text-gray-700 font-medium">Brain Disease</p>
            </div>

            <div class="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={"/assets/images/services/paraquat/parkinson2.webp"}
                alt="Atypical Parkinson Icon"
                class="w-[250px] h-auto mb-2"
              />
              <p class="text-gray-700 font-medium">Atypical Parkinson</p>
            </div>

            <div class="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={"/assets/images/services/paraquat/parkinson1.webp"}
                alt="Parkinson's"
                class="w-[200px] h-auto mb-2"
              />
              <p class="text-gray-700 font-medium">Parkinson's</p>
            </div>          
        </div>
        </section>
        {/*section 4*/}
        <section>
        <div className="relative text-[#000] py-2 w-[70%] md:w-[65%] m-auto pb-5">
            <p>
                If you and any loved one is actively seeking Paraquat claim, We are
                your go-to partner for efficient and effective connects. Our
                expertise allows you to focus on what you do best "looking after
                your family": our team &amp; partners will focus on providing you
                what you need it most.
            </p>
          </div>
        </section>
    </main>
  );
}
