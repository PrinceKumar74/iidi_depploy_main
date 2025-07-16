import Container3Pic1 from "../../../../assets/about/Container3Pic1.jpg";
import Container3Pic2 from "../../../../assets/about/Container3Pic2.jpg";
import Container3Pic3 from "../../../../assets/about/Container3Pic3.png";

const AcknowledgementOfCountry = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
              <span className="border-b-2 border-[#b42638] pb-2">
                Acknowledgement of Country
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              The International Institute of Data Intelligence (IIDI)
              recognizes the traditional custodians of this land and pays
              its respect to aboriginal Torres Strait Islander people We acknowledge
              and appreciate that their spiritual bond with land, sea and culture past
              unbroken for thousands upon thousands of years.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              We acknowledge gratefully the knowledge systems and input of indigenous
              peoples in helping to shape our perspective on these issues, but that
              means integrating it into education. To this end IIDI works diligently to
              promote an inclusive environment in which diversity, cultural awareness
              and reconciliation  is always paramount.
            </p>
          </div>

          {/* Right side - Images */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* Main artwork image */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={Container3Pic1}
                alt="Sentient artwork by Hollie Johnson"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="text-sm">
                  INTERNATIONAL INSTITUTE OF DATA INTELLIGENCE
                </p>
              </div>
            </div>

            {/* Flags row */}
            <div className="flex gap-4">
              <div className="w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <img
                  src={Container3Pic2}
                  alt="Australian flag"
                  className="h-full object-cover"
                />
              </div>

              <div className="w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <img
                  src={Container3Pic3}
                  alt="Indian flag"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcknowledgementOfCountry;
