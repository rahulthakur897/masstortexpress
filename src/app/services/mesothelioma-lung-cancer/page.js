import { ContactForm } from "@/components";
export default function CampLejeune() {
  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[500px] bg-[url('/assets/images/services/mesothelioma-lung-cancer.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white drop-shadow-md">
            Mesothelioma and Lung Cancer
          </h1>
        </div>
      </section>
      {/*section 2*/}
      <section
        data-aos="fade-up"
        className="relative text-[#000] flex flex-col md:flex-row gap-8 py-8 w-[95%] md:w-[90%] m-auto"
      >
        <div className="w-full md:w-[60%]">
          <h2 className="text-2xl sm:text-3xl md:text-[3rem] font-bold text-[#000e30]">
            Understanding Mesothelioma & Lung Cancer Lawsuits
            <span className="text-[#439E30]">& Lung Cancer Lawsuits</span>
          </h2>
          <div>
            <p className="p-[1em]">
              Mesothelioma and lung cancer are often linked to asbestos
              exposure, a dangerous mineral once common in many industries. For
              decades, asbestos manufacturers and employers failed to warn
              workers about the risks, leading to severe and often fatal health
              conditions. Individuals diagnosed with these diseases, or their
              families, may be entitled to significant compensation. Class
              Action North America specializes in connecting victims with legal
              experts who can help them pursue justice and financial relief.
            </p>
            <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold">
              If any of the following applies to you,
              <span className="text-[#439E30]">you may have a claim. </span>,
              Don't wait, get a free case review! File Now!
            </h3>
            <ul className="list-disc pt-[0.5rem] px-[2rem]">
              <li className="p-1">
                <strong>Exposure History:</strong> Did you work in an industry
                or for an employer known to have used asbestos (e.g.,
                construction, shipbuilding, manufacturing)?
              </li>
              <li className="p-1">
                <strong>Diagnosis:</strong> Have you or a loved one been
                diagnosed with Mesothelioma, lung cancer, or asbestosis?
              </li>
              <li className="p-1">
                <strong>Time Period:</strong> Was the diagnosis received within
                your state's statute of limitations for asbestos-related
                illnesses?
              </li>
              <li className="p-1">
                <strong>Documentation:</strong> Do you have medical records or
                work history that documents your exposure and diagnosis?
              </li>
            </ul>
          </div>
        </div>
        <div className="relative md:absolute md:-top-[8rem] md:right-0 w-full md:w-[40%] bg-transparent md:bg-white md:shadow-lg md:rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold">
            Get Your Free Case Review Today
          </h3>
          <ContactForm caseType="Car or Truck Accident" />
        </div>
      </section>
      {/*section 3*/}

      <section className="relative text-[#000] py-2 w-[95%] md:w-[90%] m-auto">
        <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] pb-3 font-bold">
          Why Partner with Class Action North America
          <span className="text-[#439E30]">for Asbestos-Related Claims</span>
        </h3>
        <ul className="list-disc pt-[0.5rem] px-[2rem]">
          <li className="p-1">
            <strong>Pre-Qualification:</strong> We ensure quick qualification
            and initial criteria for asbestos claims, saving you valuable time
            and resources.
          </li>
          <li className="p-1">
            <strong>Ethical Framework:</strong> We work with partners who are
            fully compliant with all legal and ethical guidelines, ensuring
            integrity in every case.
          </li>
          <li className="p-1">
            <strong>Data Driven Approach:</strong> We ensure your data is safe
            and you are only discussing with the right people. Our team and
            partners will provide you with what you need most.
          </li>
        </ul>
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#000e30] py-8 pb-3 font-bold">
            Common Conditions Linked
            <span className="text-[#439E30]"> to Asbestos Exposure:</span>
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
            If you or a loved one is actively seeking an asbestos-related claim,
            we are your go-to partner for efficient and effective connections.
            Our expertise allows you to focus on what you do best—getting the
            right legal help—while our team focuses on providing you what you
            need most.
          </p>
        </div>
      </section>
    </main>
  );
}
