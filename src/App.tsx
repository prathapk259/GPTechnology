import React, { useState } from 'react';
import { Terminal, BookOpen, Users, Award, ChevronRight, Github, Linkedin, Mail, Phone, ArrowLeft, CheckCircle } from 'lucide-react';

function App() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courseDetails = {
    "Linux Fundamentals": {
      title: "Linux Fundamentals",
      description: "Master the basics of Linux operating system",
      duration: "4 weeks",
      level: "Beginner",
      topics: [
        "Introduction to Linux Operating System",
        "Command Line Interface Basics",
        "File System Management",
        "User and Group Administration",
        "Package Management",
        "Basic Shell Scripting",
        "Process Management",
        "System Monitoring"
      ],
      outcomes: [
        "Navigate Linux file system confidently",
        "Execute essential Linux commands",
        "Manage users and permissions",
        "Write basic shell scripts",
        "Handle system processes",
        "Perform basic system administration"
      ]
    },
    "System Administration": {
      title: "System Administration",
      description: "Learn advanced system administration skills",
      duration: "8 weeks",
      level: "Intermediate",
      topics: [
        "Advanced System Configuration",
        "Network Administration",
        "Security Management",
        "Service Configuration (Web, Mail, DNS)",
        "Performance Tuning",
        "Backup and Recovery",
        "Automation with Ansible",
        "Monitoring and Logging"
      ],
      outcomes: [
        "Configure and manage enterprise Linux systems",
        "Implement security best practices",
        "Set up and manage network services",
        "Perform system optimization",
        "Implement backup strategies",
        "Handle system troubleshooting"
      ]
    }
  };

  const renderCourseDetails = (courseId: string) => {
    const course = courseDetails[courseId as keyof typeof courseDetails];
    if (!course) return null;

    return (
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => setSelectedCourse(null)}
            className="flex items-center text-green-600 hover:text-green-700 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Courses
          </button>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
              <p className="text-xl text-slate-300 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-500 px-4 py-2 rounded-full text-sm">
                  {course.duration}
                </span>
                <span className="bg-green-500 px-4 py-2 rounded-full text-sm">
                  {course.level}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Course Content</h3>
                <ul className="space-y-3">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Learning Outcomes</h3>
                <ul className="space-y-3">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center"
              >
                Enroll Now
                <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (selectedCourse) {
    return renderCourseDetails(selectedCourse);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold">GP Technologies</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('courses')} className="hover:text-green-400 transition">Courses</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-green-400 transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-green-400 transition">Contact</button>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Master Linux with Industry Experts</h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive Linux training from basics to advanced system administration. 
              Join GP Technologies to build your career in Linux and DevOps.
            </p>
            <button 
              onClick={() => scrollToSection('courses')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center group">
              Get Started
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert-Led Training</h3>
            <p className="text-slate-600">Learn from industry professionals with years of real-world experience</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Small Batch Size</h3>
            <p className="text-slate-600">Personalized attention with limited students per batch</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-slate-600">Industry-recognized certification upon course completion</p>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section id="courses" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Linux Fundamentals",
                description: "Master the basics of Linux operating system",
                duration: "4 weeks",
                level: "Beginner"
              },
              {
                title: "System Administration",
                description: "Learn advanced system administration skills",
                duration: "8 weeks",
                level: "Intermediate"
              },
              {
                title: "DevOps with Linux",
                description: "Integrate Linux with modern DevOps practices",
                duration: "12 weeks",
                level: "Advanced"
              }
            ].map((course, index) => (
              <div 
                key={index} 
                className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
                onClick={() => course.title !== "DevOps with Linux" && setSelectedCourse(course.title)}
              >
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-slate-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Our Linux Trainers</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Trainer 1 */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition">
              <h3 className="text-xl font-semibold mb-4">Prathap K</h3>
              <p className="text-slate-300 mb-4">Senior Linux Trainer with 10+ years of industry experience in system administration and DevOps practices.</p>
              <div className="flex items-center space-x-4">
                <a href="mailto:prathap@gptechnologies.com" className="flex items-center text-green-400 hover:text-green-300">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </a>
                <a href="tel:+919876543210" className="flex items-center text-green-400 hover:text-green-300">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact
                </a>
              </div>
            </div>

            {/* Trainer 2 */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition">
              <h3 className="text-xl font-semibold mb-4">Govardhan K</h3>
              <p className="text-slate-300 mb-4">Linux Expert specializing in enterprise solutions with extensive experience in cloud infrastructure and automation.</p>
              <div className="flex items-center space-x-4">
                <a href="mailto:govardhan@gptechnologies.com" className="flex items-center text-green-400 hover:text-green-300">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </a>
                <a href="tel:+919876543211" className="flex items-center text-green-400 hover:text-green-300">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="h-6 w-6 text-green-400" />
              <span className="font-bold">GP Technologies</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/gptechnologies" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/gptechnologies" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 GP Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;