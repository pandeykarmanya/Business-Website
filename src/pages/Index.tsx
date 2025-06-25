

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const certificationRef = useRef<HTMLElement>(null);
  const clientsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [heroRef.current, aboutRef.current, productsRef.current, visionRef.current, certificationRef.current, clientsRef.current, contactRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Saksham Enterprises Logo" 
                className="h-20 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection(heroRef)} className="text-gray-700 hover:text-emerald-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection(aboutRef)} className="text-gray-700 hover:text-emerald-600 transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection(productsRef)} className="text-gray-700 hover:text-emerald-600 transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection(visionRef)} className="text-gray-700 hover:text-emerald-600 transition-colors">
                Vision
              </button>
              <button onClick={() => scrollToSection(certificationRef)} className="text-gray-700 hover:text-emerald-600 transition-colors">
                Certification
              </button>
              <button onClick={() => scrollToSection(clientsRef)} className="text-gray-700 hover:text-emerald-600 transition-colors">
                Clients
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="text-gray-700 hover:text-emerald-600 transition-colors">
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-emerald-100">
              <div className="flex flex-col space-y-4 pt-4">
                <button 
                  onClick={() => scrollToSection(heroRef)} 
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection(aboutRef)} 
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection(productsRef)} 
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection(visionRef)} 
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  Vision
                </button>
                <button 
                  onClick={() => scrollToSection(certificationRef)} 
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  Certification
                </button>
                <button 
                  onClick={() => scrollToSection(clientsRef)} 
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  Clients
                </button>
                <button 
                  onClick={() => scrollToSection(contactRef)} 
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  Contact
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-emerald-800/5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 opacity-0 animate-fade-in">
            Excellence in
            <span className="text-emerald-600 block">Enterprise Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Delivering innovative products and services that drive business growth and create lasting value for our clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection(productsRef)}
            >
              Explore Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg"
              onClick={() => scrollToSection(aboutRef)}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-emerald-600" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Saksham Enterprises</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience, we are committed to delivering excellence in every project we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors">
                  <div className="w-8 h-8 bg-emerald-600 rounded group-hover:bg-white transition-colors"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Cutting-edge solutions that push the boundaries of what's possible in enterprise technology.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors">
                  <div className="w-8 h-8 bg-emerald-600 rounded group-hover:bg-white transition-colors"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
                <p className="text-gray-600">
                  Uncompromising commitment to quality ensures every product meets the highest standards.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors">
                  <div className="w-8 h-8 bg-emerald-600 rounded group-hover:bg-white transition-colors"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trust</h3>
                <p className="text-gray-600">
                  Building lasting relationships through transparency, reliability, and exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-6 py-12">
  <style>{`
    .flip-container {
      perspective: 1000px;
      width: 100%;
      height: 320px;
    }
    .flip-card {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s;
    }
    .flip-card:hover {
      transform: rotateY(180deg);
    }
    .flip-front,
    .flip-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .flip-front {
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    .flip-front img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 0.5rem;
    }
    .flip-front h3 {
      margin-top: 1rem;
      font-size: 1.2rem;
      font-weight: 700;
      color: #1f2937;
    }
    .flip-back {
      background-color: #ecfdf5;
      transform: rotateY(180deg);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #065f46;
    }
    .flip-back h3 {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.75rem;
      text-align: center;
    }
    .flip-back ul {
      padding-left: 1rem;
      color: #374151;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  `}</style>

  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Comprehensive solutions designed to meet the diverse needs of modern enterprises.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "Railway Inspection trolley",
        image: "/lovable-uploads/1.jpeg",
        details: ["Elastic Rail Clips", "Fish Plates", "Bolts & Nuts", "Rail Anchors"]
      },
      {
        title: "Drum Wheel",
        image: "/lovable-uploads/2.jpeg",
        details: ["Relays", "Track Circuits", "Axle Counters", "Controllers"]
      },
      {
        title: "Rail Dolly",
        image: "/lovable-uploads/3.png",
        details: ["Thermit Welding", "Flash Butt Welding", "Tool Kits", "Grinders"]
      },
      {
        title: "Insulated Rail Dolley wheel",
        image: "/lovable-uploads/4.png",
        details: ["Sleeper Inserters", "Torque Wrenches", "Spike Pullers", "Manual Tools"]
      }
    ].map((product, index) => (
      <div key={index} className="flip-container">
        <div className="flip-card">
          <div className="flip-front">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
          <div className="flip-back">
            <h3>{product.title}</h3>
            <ul>
              {product.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To be the leading provider of innovative enterprise solutions that transform businesses and create sustainable value for our stakeholders.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Building Tomorrow's Solutions Today</h3>
              <p className="text-lg text-gray-600">
                Our vision extends beyond just providing products and services. We aim to be catalysts of change, 
                driving digital transformation and operational excellence across industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation Leadership</h4>
                    <p className="text-gray-600">Pioneering cutting-edge solutions that set industry standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Impact</h4>
                    <p className="text-gray-600">Creating positive change across diverse markets and communities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustainable Growth</h4>
                    <p className="text-gray-600">Building solutions that drive long-term success and sustainability</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-emerald-800 mb-4">2030 Goals</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600">500+</div>
                    <div className="text-sm text-gray-600">Global Clients</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600">50+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600">100%</div>
                    <div className="text-sm text-gray-600">Carbon Neutral</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600">24/7</div>
                    <div className="text-sm text-gray-600">Global Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section ref={certificationRef} className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is validated by industry-leading certifications and adherence to international standards.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors">
                  <span className="text-2xl font-bold text-emerald-600 group-hover:text-white">ISO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ISO 9001:2015</h3>
                <p className="text-gray-600 mb-4">Quality Management Systems certification ensuring consistent quality delivery</p>
                <Badge className="bg-emerald-100 text-emerald-800">Certified Since 2018</Badge>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors">
                  <span className="text-2xl font-bold text-emerald-600 group-hover:text-white">EMS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ISO 14001:2015</h3>
                <p className="text-gray-600 mb-4">Environmental Management Systems for sustainable business practices</p>
                <Badge className="bg-emerald-100 text-emerald-800">Certified Since 2019</Badge>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors">
                  <span className="text-2xl font-bold text-emerald-600 group-hover:text-white">SOC</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">SOC 2 Type II</h3>
                <p className="text-gray-600 mb-4">Security, Availability, and Confidentiality controls verification</p>
                <Badge className="bg-emerald-100 text-emerald-800">Certified Since 2020</Badge>
              </CardContent>
            </Card>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Certifications & Partnerships</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "CE Marking", description: "European Conformity for product safety" },
                { name: "FCC Certified", description: "Federal Communications Commission compliance" },
                { name: "GDPR Compliant", description: "General Data Protection Regulation adherence" },
                { name: "Industry 4.0", description: "Smart manufacturing standards certification" }
              ].map((cert, index) => (
                <div key={index} className="text-center p-4 border border-emerald-100 rounded-lg hover:border-emerald-200 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section ref={clientsRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to work with companies that share our commitment to excellence and innovation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-75">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((client) => (
              <div key={client} className="bg-gray-100 h-24 rounded-lg flex items-center justify-center hover:bg-emerald-50 transition-colors">
                <span className="text-gray-400 font-semibold">Client {client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 opacity-0" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                Ready to start your next project? We'd love to hear from you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-emerald-100">Plot No. 6 & 10, Jagannathpuri Colony
Swarg Ashram Road, Hapur (U.P.) 245101</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-emerald-100">+91 6397930750</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-emerald-100">Sakshamenterpriseshpu@gmail.com</p>
                  </div>
                </div>
              </div>
              <div>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your Message"
                          rows={4}
                          className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-white text-emerald-600 hover:bg-emerald-50">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Saksham Enterprises</h3>
              <p className="text-gray-400">
                Excellence in enterprise solutions since 2020. Building the future, one project at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection(productsRef)} className="hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection(visionRef)} className="hover:text-white transition-colors">Vision</button></li>
                <li><button onClick={() => scrollToSection(certificationRef)} className="hover:text-white transition-colors">Certification</button></li>
                <li><button onClick={() => scrollToSection(clientsRef)} className="hover:text-white transition-colors">Clients</button></li>
                <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <div className="space-y-2">
                <Badge variant="outline" className="bg-transparent border-gray-600 text-gray-400">
                  ISO 9001:2015
                </Badge>
                <Badge variant="outline" className="bg-transparent border-gray-600 text-gray-400">
                  ISO 14001:2015
                </Badge>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Saksham Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

