import { ContactForm } from "@/components";

export default function CampLejeune() {
  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[500px] bg-[url('/assets/images/services/paraquat.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white drop-shadow-md">
            Camp Lejeune Water Contamination
          </h1>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="relative text-[#000] flex flex-col md:flex-row gap-8 py-8 w-[95%] md:w-[90%] m-auto"
      >
        <div className="w-full md:w-[60%]">
          <h2 className="text-2xl sm:text-3xl md:text-[3rem] font-bold text-[#000e30] whitespace-pre-line">
            Understanding the{"\n"}
            <span className="text-[#439E30]"> Camp Lejeune Justice Act</span>
          </h2>
          <div>
            <p className="p-[1em]">
              The Camp Lejeune Justice Act of 2022 allows veterans, their families, and civilians who lived or worked at Marine Corps Base Camp Lejeune between 1953 and 1987 to file claims for health issues caused by exposure to contaminated water. This landmark legislation opens a crucial window for affected individuals to seek compensation and justice. Class Action North America is at the forefront of identifying and qualifying these potential plaintiffs, delivering them directly to law firms ready to represent them.{" "}
            </p>
            <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold whitespace-pre-line">
              If answer to any of the following is
              <span className="text-[#439E30]"> Yes?{"\n"}</span>
              Don't wait you qualify for compensation review. 
              <span className="text-[#439E30]"> File Now!</span>
            </h3>
            <ul className="list-disc pt-[0.5rem] px-[2rem]">
              <li className="p-1">
                <strong>Time Period: </strong>Were you, or a family member, stationed at Camp Lejeune or the Marine Corps Air Station New River between August 1, 1953, and December 31, 1987?{" "}
              </li>
              <li className="p-1">
                <strong>Exposure Period: </strong>Did you spend at least 30 cumulative days on the base during this period?{" "}
              </li>
              <li><strong>Current Condition: </strong>Do you have a cancer, such as bladder, breast, esophageal, kidney, or lung cancer?</li>
              <li className="p-1">
                <strong>Medical Records:</strong> Are there medical records, doctor's statements, or other documentation that support the link between your exposure and your illness?{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="relative md:absolute md:-top-[8rem] md:right-0 w-full md:w-[40%] bg-transparent md:bg-white md:shadow-lg md:rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
          <ContactForm formType="CampLejeune" />
        </div>
      </section>
      {/*section 3*/}

      <section className="relative text-[#000] py-2 w-[95%] md:w-[90%] m-auto">
        <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold">
          Why Partner with Class Action North America for{" "}
          <span className="text-[#439E30]">Camp Lejeune ?</span>
        </h3>
        <ul className="list-disc pt-[0.5rem] px-[2rem]">
          <li className="p-1">
            <strong>Pre-Qualification:</strong> We ensure quick qualification and initial criteria for Camp Lejeune claims, saving you valuable time and resources.
          </li>
          <li className="p-1">
            <strong>Ethical Framework:</strong> Ensure we work with partners who are fully compliant with all legal and ethical guidelines, ensuring integrity in every case.
          </li>
          <li className="p-1">
            <strong>Data Driven Approach:</strong> We ensure your data is safe and you only discussing with right people, Whether you need a handful information or running the case.
          </li>
        </ul>
        <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] py-8 pb-3 font-bold">
          Common Conditions Linked to{" "}
          <span className="text-[#439E30]">
            Camp Lejeune Water Contamination:
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center py-6">
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/paraquat/kidney.webp"}
              alt="Cancer Icon"
              className="w-[180px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Kidney Impact</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/paraquat/parkinson.webp"}
              alt="Parkinson Icon"
              className="w-[150px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Brain Disease</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/paraquat/parkinson2.webp"}
              alt="Atypical Parkinson Icon"
              className="w-[250px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Atypical Parkinson</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/paraquat/parkinson1.webp"}
              alt="Parkinson's"
              className="w-[200px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Parkinson's</p>
          </div>
        </div>
      </section>
      {/*section 4*/}
      <section>
        <div className="relative text-[#000] py-2 w-[70%] md:w-[65%] m-auto pb-5">
          <p>
            If you and any loved one is actively seeking Camp Lejeune water contamination claim, We are your go-to partner for efficient and effective connects. Our expertise allows you to focus on what you do best "looking after your family": our team & partners will focus on providing you what you need it most.
          </p>
        </div>
      </section>
    </main>
  )
}