export default function ProjectFocus() {
  const projects = [
    {
      title: "Full-Stack Web Applications",
      description: "Build complete web applications using modern frameworks like React, Vue, or Angular with robust backend systems.",
      icon: "🌐",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      title: "Mobile Applications",
      description: "Create cross-platform mobile apps using React Native or Flutter that solve real-world problems.",
      icon: "📱",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "AI & Machine Learning",
      description: "Develop intelligent systems and ML models that can process data and make predictions.",
      icon: "🤖",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      title: "E-commerce Platforms",
      description: "Build complete online stores with payment processing, inventory management, and customer analytics.",
      icon: "🛒",
      technologies: ["Shopify", "Stripe", "Next.js", "Prisma"]
    },
    {
      title: "DevOps & Infrastructure",
      description: "Set up CI/CD pipelines, containerization, and cloud infrastructure for scalable applications.",
      icon: "⚙️",
      technologies: ["Docker", "AWS", "Kubernetes", "GitHub Actions"]
    },
    {
      title: "Blockchain & Web3",
      description: "Create decentralized applications (dApps) and smart contracts on various blockchain platforms.",
      icon: "⛓️",
      technologies: ["Solidity", "Ethereum", "Web3.js", "IPFS"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">09</span>
          <span className="text-sm text-gray-400 font-light ml-4">/project focus</span>
        </div>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What You&apos;ll Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Work on production-ready projects across diverse technology stacks. 
            Each project is designed to challenge you and prepare you for real-world development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 group hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#38BDF8] transition-colors duration-300">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-[#38BDF8]/10 group-hover:text-[#38BDF8] transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full px-8 py-4">
            <span className="text-2xl">🚀</span>
            <p className="text-lg text-gray-800 font-medium">
              Turn your ideas into production-ready solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}