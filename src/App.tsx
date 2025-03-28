import React from 'react';
import { Github, Mail, Linkedin, Code2, Database, Terminal, Brain, Award, BookOpen, Phone, MapPin, Users, Lightbulb, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center text-center">
            <img
              src="/assests/Rahul-image.jpg"
              alt="Rahul Kumar"
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rahul Kumar</h1>
            <h2 className="text-xl md:text-2xl mb-6">Software Developer</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Samastipur, Bihar, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 9525969744</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:Rahul62063157@gmail.com" className="hover:underline">
                  Rahul62063157@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/rahul-kumar-8088b4314/" 
                   className="hover:underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Rahul62063157" 
                 className="bg-white text-blue-800 p-2 rounded-full hover:bg-blue-100 transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:Rahul62063157@gmail.com" 
                 className="bg-white text-blue-800 p-2 rounded-full hover:bg-blue-100 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rahul-kumar-8088b4314/" 
                 className="bg-white text-blue-800 p-2 rounded-full hover:bg-blue-100 transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-600">Python, JavaScript</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database Technologies</h3>
              <p className="text-gray-600">SQL, MongoDB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Terminal className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">HTML, CSS, React.js, Node.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interpersonal Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Interpersonal Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
              <p className="text-gray-600">Excellent collaboration and team coordination abilities</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <Lightbulb className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Decision Making</h3>
              <p className="text-gray-600">Strong analytical and problem-solving capabilities</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <Brain className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Self-awareness</h3>
              <p className="text-gray-600">Deep understanding of personal strengths and growth areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Languages Known</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Globe className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">English</h3>
              <p className="text-gray-600">Professional working proficiency</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Globe className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Hindi</h3>
              <p className="text-gray-600">Native proficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Python 3 Programming</h3>
              <p className="text-gray-600">Coursera</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
              <p className="text-gray-600">Infosys Springboard</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Node.js</h3>
              <p className="text-gray-600">Infosys Springboard</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">React.js</h3>
              <p className="text-gray-600">Infosys Springboard</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">React Native</h3>
              <p className="text-gray-600">Infosys Springboard</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Basic C-Sharp Programming</h3>
              <p className="text-gray-600">Infosys Springboard</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Empower Lives with Technology</h3>
              <p className="text-gray-600">Infosys Springboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800"
                alt="Chatbot Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chatbot with API</h3>
                <p className="text-gray-600 mb-4">Interactive chatbot implementation using advanced APIs</p>
                <a href="https://github.com/Rahul62063157" 
                   className="text-blue-600 hover:text-blue-800 font-medium"
                   target="_blank" rel="noopener noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Calculator"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Calculator</h3>
                <p className="text-gray-600 mb-4">Advanced calculator application with multiple functionalities</p>
                <a href="https://github.com/Rahul62063157" 
                   className="text-blue-600 hover:text-blue-800 font-medium"
                   target="_blank" rel="noopener noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
                alt="Employee Management"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Employee Management System</h3>
                <p className="text-gray-600 mb-4">Complete employee management solution with database integration</p>
                <a href="https://github.com/Rahul62063157" 
                   className="text-blue-600 hover:text-blue-800 font-medium"
                   target="_blank" rel="noopener noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
                alt="Amazon Clone"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Amazon Clone</h3>
                <p className="text-gray-600 mb-4">Full-featured e-commerce platform clone with React.js</p>
                <a href="https://github.com/Rahul62063157" 
                   className="text-blue-600 hover:text-blue-800 font-medium"
                   target="_blank" rel="noopener noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
                alt="E-commerce Website"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
                <p className="text-gray-600 mb-4">Custom e-commerce solution with modern technologies</p>
                <a href="https://github.com/Rahul62063157" 
                   className="text-blue-600 hover:text-blue-800 font-medium"
                   target="_blank" rel="noopener noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:Rahul62063157@gmail.com" 
               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Send Email
            </a>
            <a href="https://www.linkedin.com/in/rahul-kumar-8088b4314/" 
               className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
               target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Rahul Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;