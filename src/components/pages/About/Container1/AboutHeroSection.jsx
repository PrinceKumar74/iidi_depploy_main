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
            International Institute of Data Intelligence (IIDI) is a leading upskilling platform committed to shaping the future of tech education. Founded with the vision to empower students and professionals with in-demand digital skills, IIDI specializes in delivering high-quality certification courses.

            <br /><br />

            At IIDI, we believe that the future belongs to those who adapt, learn, and lead with technology. Our curriculum is designed in collaboration with industry experts to ensure learners gain practical, job-ready skills aligned with current market demands. With a focus on real-world applications, interactive learning, and mentorship, IIDI stands out as a trusted destination for tech upskilling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
