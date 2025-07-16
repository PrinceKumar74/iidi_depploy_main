import aboutHeroSection from "../../../../assets/about/aboutHeroSection.png";

const AboutHeroSection = () => {
  return (
    <section
      className="relative py-24 px-4 text-white bg-center"
      style={{
        backgroundImage: `url(${aboutHeroSection})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
      }}
    >
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 md:p-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            <span className="border-b-2 border-[#b42638] pb-2">About IIDI</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-white/90">
           The International Institute of Data Intelligence (IIDI) is a leading resource for training people about life in today's era of technology.Obtaining top certifications in many programs - we provide people with the newest skills in digital media as wellThis summer, whether you want to enter the workforce with added leverage or just brush up and upgrade yourself, we welcome you to join us.
            <br /><br />

           We are convinced at IIDI that those adapt, educated with technology will lead the future.Produced in cooperation with industry experts, our curriculum ensures practical job-ready skills that follow the market and can be used anywhere.With a strong commitment to real-world applications and hands-on mentoring, IIDI has become the go-to place for tech upskilling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
