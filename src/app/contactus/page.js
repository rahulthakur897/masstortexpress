export default function AboutUs() {
  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[350px] sm:min-h-[400px] md:min-h-[400px] bg-[url('/assets/images/faqbanner.webp')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-9xl font-bold leading-snug text-white drop-shadow-md">
            Contact us
          </h1>
        </div>
      </section>
      
       <section className="px-[8%] py-8">
        <p>Contact Us</p>
      </section>
    </main>
  );
}
