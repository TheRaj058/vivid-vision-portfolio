const Skills = () => {
  const skills = {
    development: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
    ],
    design: [
      { name: "UI/UX Design", level: 85 },
      { name: "Adobe Photoshop", level: 80 },
      { name: "Adobe Illustrator", level: 85 },
      { name: "Social Media Marketing", level: 88 },
    ],
  };

  return (
    <section id="skills" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Development</h3>
            <div className="space-y-6">
              {skills.development.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Design & Marketing</h3>
            <div className="space-y-6">
              {skills.design.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;