
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Award, Code, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-portfolio-green-50 to-portfolio-green-100">
      {/* Header Section */}
      <header className="bg-white shadow-lg border-b-4 border-portfolio-green-500">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
              RANJANI SUGASHINI D
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-portfolio-green-600" />
                <span>+91-8148532317</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-portfolio-green-600" />
                <a href="mailto:ranjanisugashini@gmail.com" className="hover:text-portfolio-green-600 transition-colors">
                  ranjanisugashini@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-portfolio-green-600" />
                <a href="https://www.linkedin.com/in/ranjani-sugashini-d" className="hover:text-portfolio-green-600 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-portfolio-green-600" />
                <span>Cuddalore</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Education Section */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="border-b-4 border-portfolio-green-500 pb-2">Education</span>
          </h2>
          <div className="grid gap-6">
            <Card className="border-l-4 border-portfolio-green-500 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-green-700">Bachelor of Engineering (ECE)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700">Institution</p>
                    <p className="text-gray-600">SNS College of Engineering, Coimbatore</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">CGPA</p>
                    <p className="text-gray-600">8.79 (Current)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Year</p>
                    <p className="text-gray-600">2022-2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-portfolio-green-400">
                <CardHeader>
                  <CardTitle className="text-lg text-portfolio-green-700">Higher Secondary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Dhava Amudham Matric Hr. Sec. School, Srimushnam</p>
                  <p className="font-semibold text-portfolio-green-600">84.5% (2022)</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-portfolio-green-400">
                <CardHeader>
                  <CardTitle className="text-lg text-portfolio-green-700">Secondary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Dhava Amudham Matric Hr. Sec. School, Srimushnam</p>
                  <p className="font-semibold text-portfolio-green-600">75% (2020)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="border-b-4 border-portfolio-green-500 pb-2">Internship Experience</span>
          </h2>
          <Card className="border-l-4 border-portfolio-green-600 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-portfolio-green-700 flex items-center gap-2">
                <Code className="w-5 h-5" />
                WEBRONIC (IOT ARCHITECTURE)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Contributed to the design and implementation of IoT architecture for various projects in real life. 
                Gained extensive knowledge on microprocessor, sensor technologies, and IoT system integration.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="border-b-4 border-portfolio-green-500 pb-2">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-portfolio-green-500 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-portfolio-green-700">Accident Detection and Alert System</CardTitle>
                <Badge variant="secondary" className="w-fit bg-portfolio-green-100 text-portfolio-green-800">
                  Arduino UNO
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Developed a system to detect accidents and promptly alert emergency services to reduce response time and potentially save lives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-portfolio-green-500 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-portfolio-green-700">U-Turn Accident Prevention System</CardTitle>
                <Badge variant="secondary" className="w-fit bg-portfolio-green-100 text-portfolio-green-800">
                  IoT Based
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Created an IoT-based system to prevent U-turn accidents by alerting drivers in real-time using Arduino UNO microcontroller, 
                  ultrasonic sensors, and LED indicators.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="border-b-4 border-portfolio-green-500 pb-2">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Code className="w-8 h-8 text-portfolio-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-portfolio-green-700">Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'JAVA', 'C', 'CSS'].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-portfolio-green-300 text-portfolio-green-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <ExternalLink className="w-8 h-8 text-portfolio-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-portfolio-green-700">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Canva', 'Ms-Office'].map((tool) => (
                    <Badge key={tool} variant="outline" className="border-portfolio-green-300 text-portfolio-green-700">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="w-8 h-8 text-portfolio-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-portfolio-green-700">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Team Work', 'Time Management'].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-portfolio-green-300 text-portfolio-green-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Globe className="w-8 h-8 text-portfolio-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-portfolio-green-700">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Tamil', 'Japanese'].map((lang) => (
                    <Badge key={lang} variant="outline" className="border-portfolio-green-300 text-portfolio-green-700">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="border-b-4 border-portfolio-green-500 pb-2">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'AI Specialist', issuer: 'Sales Force', date: 'Oct 2024' },
              { name: 'AI Associate', issuer: 'Sales Force', date: 'Oct 2024' },
              { name: 'Enterprise Design Thinking Practitioner', issuer: 'IBM', date: 'FEB 2024' },
              { name: 'Cloud Computing', issuer: 'NPTEL', date: 'NOV 2023' },
              { name: 'Fundamentals Of AI', issuer: 'NPTEL', date: 'NOV 2024' },
              { name: 'Fundamentals Of Generative AI', issuer: 'Microsoft', date: 'Sep 2024' },
              { name: 'AI Foundation Associate', issuer: 'Oracle', date: 'Feb 2025' },
              { name: 'AI Vector', issuer: 'Oracle', date: 'March 2025' },
              { name: 'Certified Appsec Practitioner (CAP)', issuer: 'Secops', date: 'March 2025' },
            ].map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-portfolio-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{cert.name}</h3>
                      <p className="text-portfolio-green-600 text-sm">{cert.issuer}</p>
                      <p className="text-gray-500 text-xs">{cert.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="border-b-4 border-portfolio-green-500 pb-2">Activities & Interests</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-portfolio-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-portfolio-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Travelling</h3>
                <p className="text-gray-600 text-sm">Exploring new places and cultures</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-portfolio-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-portfolio-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Drawing</h3>
                <p className="text-gray-600 text-sm">Creative expression through art</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-portfolio-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-portfolio-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Singing</h3>
                <p className="text-gray-600 text-sm">Musical expression and performance</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-portfolio-green-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-portfolio-green-100 mb-4">
            I'm always interested in new opportunities and collaborations in IoT, AI, and technology innovation.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:ranjanisugashini@gmail.com" className="hover:text-portfolio-green-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ranjani-sugashini-d" className="hover:text-portfolio-green-300 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
