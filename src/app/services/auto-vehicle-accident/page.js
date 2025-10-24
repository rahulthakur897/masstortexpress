import { ContactForm } from "@/components";

export default function AutoVehicleAccident() {
  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[500px] bg-[url('/assets/images/services/auto-vehicle-accident.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white drop-shadow-md">
            Auto Vehicle Accident
          </h1>
        </div>
      </section>
      {/*section 2*/}
      <section
        data-aos="fade-up"
        className="relative text-[#000] flex flex-col md:flex-row gap-8 py-8 w-[95%] md:w-[90%] m-auto"
      >
        <div className="w-full md:w-[60%]">
          <h2 className="text-2xl sm:text-3xl md:text-[3rem] font-bold text-[#000e30] whitespace-pre-line">
            Understanding the{"\n"}
            <span className="text-[#439E30]"> Truck & Auto Accident Claims</span>
          </h2>
          <div>
            <p className="p-[1em]">
              Truck and auto accidents can result in devastating injuries and
              significant financial hardship. When an accident is caused by the
              negligence of another driver, a truck company, or a manufacturer,
              victims may be entitled to compensation for medical bills, lost
              wages, and pain and suffering. Class Action North America is
              dedicated to connecting victims with legal experts who can help
              them navigate the complex legal process and secure the justice
              they deserve.
            </p>
            <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold whitespace-pre-line">
              If your answer to any of the following is
              <span className="text-[#439E30]"> Yes?</span>{"\n"}
              You qualify for a conpensation review. 
              <span className="text-[#439E30]"> File Now! </span>
            </h3>
            <ul className="list-disc pt-[0.5rem] px-[2rem]">
              <li className="p-1">
                <strong>Time Period:</strong> Was the accident within your
                state's statute of limitations (typically 1-3 years)?{" "}
              </li>
              <li className="p-1">
                <strong>Injuries:</strong> Did you or a family member suffer
                injuries as a result of the accident?{" "}
              </li>
              <li className="p-1">
                <strong>Negligence:</strong> Was the accident caused by another
                party's negligence (e.g., distracted driving, speeding, drunk
                driving, unsafe truck maintenance)?
              </li>
              <li className="p-1">
                <strong>Evidence:</strong> Do you have medical records or a
                police report documenting your injuries and the incident?
              </li>
            </ul>
          </div>
        </div>
        <div className="relative md:absolute md:-top-[8rem] md:right-0 w-full md:w-[40%] bg-transparent md:bg-white md:shadow-lg md:rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
          <ContactForm formType="AutoVehicleAccident" />
        </div>
      </section>
      {/*section 3*/}

      <section className="relative text-[#000] py-2 w-[95%] md:w-[90%] m-auto">
        <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold">
          Why Partner with Class Action North America{" "}
          <span className="text-[#439E30]">
            for Truck and Auto Vehicle Accidents ?
          </span>
        </h3>
        <ul className="list-disc pt-[0.5rem] px-[2rem]">
          <li className="p-1">
            <strong>Pre-Qualification:</strong>Why Partner with Class Action
            North America for Auto Accident Claims?.
          </li>
          <li className="p-1">
            <strong>Ethical Framework:</strong> Ensure we work with partners who
            are fully compliant with all legal and ethical guidelines, ensuring
            integrity in every case.
          </li>
          <li className="p-1">
            <strong>Data Driven Approach:</strong> We ensure your data is safe
            and you only discussing with right people, Whether you need a
            handful information or running the case.
          </li>
        </ul>
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] py-8 pb-3 font-bold">
            Common Injuries from{" "}
            <span className="text-[#439E30]">Truck & Auto Accidents:</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 justify-items-center py-6">
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/accident/Trauma.webp"}
              alt="Cancer Icon"
              className="w-[180px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Trauma</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/accident/Spinal_injuries.webp"}
              alt="Parkinson Icon"
              className="w-[150px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Spinal Injuries</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/accident/Neck_injuries.webp"}
              alt="Atypical Parkinson Icon"
              className="w-[250px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Neck Injuries</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/accident/broken_bones.webp"}
              alt="Parkinson's"
              className="w-[200px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Broken Bones</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/accident/Mental_wellness.webp"}
              alt="Parkinson's"
              className="w-[200px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Mental Impact</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[grey]">
            <img
              src={"/assets/images/services/accident/wrongful_death.webp"}
              alt="Parkinson's"
              className="w-[200px] h-auto mb-2"
            />
            <p className="text-gray-700 font-medium">Wrongful Deatht</p>
          </div>
        </div>
      </section>
      {/*section 4*/}
      <section>
        <div className="relative text-[#000] py-2 w-[70%] md:w-[65%] m-auto pb-5">
          <p>
            If you or a loved one is actively seeking a truck or auto accident
            claim, we are your go-to partner for efficient and effective
            connections. Our expertise allows you to focus on what you do best
            "looking after your family": our team & partners will focus on
            providing you what you need it most.
          </p>
        </div>
      </section>
    </main>
  );
}
