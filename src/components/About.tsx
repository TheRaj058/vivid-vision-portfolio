const About = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            I'm a passionate web developer and graphic designer with a keen eye for detail and a love for creating beautiful, functional digital experiences. I combine technical expertise with creative design thinking to deliver outstanding results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Web Development</h3>
              <p className="text-gray-700">
                Specialized in building responsive, performant websites and applications using modern technologies and best practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Graphic Design</h3>
              <p className="text-gray-700">
                Creating visually stunning designs that communicate effectively and leave lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;