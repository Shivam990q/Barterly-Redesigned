import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign, Package, Flame, Star, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarryBackground from '@/components/StarryBackground';
import FloatingShapes from '@/components/FloatingShapes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  // Function to handle section change
  const handleSectionChange = (index: number) => {
    console.log("Changing to section:", index);
    setActiveSection(index);
  };
  
  // Content sections for the interface display
  const interfaceSections = [
    {
      title: "Launch",
      subtitle: "Friday",
      tasks: [
        { status: 'green', task: 'Design landing page layout', progress: '100%' },
        { status: 'yellow', task: 'Prepare marketing launch campaigns and social media posts', progress: '75%' },
        { status: 'yellow', task: 'Implement front-end registration', progress: '40%' },
        { status: 'gray', task: 'Add authentication features', progress: '0%' }
      ]
    },
    {
      title: "Development",
      subtitle: "Monday",
      tasks: [
        { status: 'green', task: 'Set up project repository', progress: '100%' },
        { status: 'green', task: 'Create component library', progress: '100%' },
        { status: 'yellow', task: 'Implement API integration', progress: '60%' },
        { status: 'yellow', task: 'Add payment processing', progress: '30%' }
      ]
    },
    {
      title: "Design",
      subtitle: "Wednesday",
      tasks: [
        { status: 'green', task: 'Create color palette', progress: '100%' },
        { status: 'green', task: 'Design UI components', progress: '90%' },
        { status: 'yellow', task: 'Finalize responsive layouts', progress: '75%' },
        { status: 'gray', task: 'Create marketing graphics', progress: '0%' }
      ]
    },
    {
      title: "Marketing",
      subtitle: "Thursday",
      tasks: [
        { status: 'green', task: 'Define target audience', progress: '100%' },
        { status: 'yellow', task: 'Prepare social media content', progress: '65%' },
        { status: 'yellow', task: 'Design email newsletter', progress: '40%' },
        { status: 'gray', task: 'Plan launch event', progress: '10%' }
      ]
    },
    {
      title: "Testing",
      subtitle: "Tuesday",
      tasks: [
        { status: 'green', task: 'Set up testing environment', progress: '100%' },
        { status: 'yellow', task: 'Write unit tests', progress: '70%' },
        { status: 'yellow', task: 'Perform integration testing', progress: '50%' },
        { status: 'gray', task: 'User acceptance testing', progress: '0%' }
      ]
    }
  ];

  return (
    <div className="pt-24">
      <main className="flex-1">
        <div className="flex flex-col min-h-[calc(100vh-4rem)] relative">
          <StarryBackground />
          <FloatingShapes />
          <Header />
          
          <div className="absolute inset-0 -z-10 overflow-hidden"></div>
          
          {/* Hero Section */}
          <section className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-soft"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse-soft" style={{animationDelay: '-1.5s'}}></div>
            </div>
            
            <div className="container relative">
              {/* Rotating 3D Element */}
              <div className="relative absolute top-12 right-12 md:right-24 opacity-80 hidden md:block animate-rotate-slow">
                <div className="absolute w-32 h-32">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                    <div
                      key={index}
                      className="absolute w-6 h-20 bg-gradient-to-b from-purple-500 to-blue-400 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center shadow-lg animate-pulse-soft"
                      style={{
                        transform: `translateX(-50%) translateY(-50%) rotate(${rotation}deg)`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  ))}
                  <div className="absolute w-12 h-12 bg-white dark:bg-gray-900 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"></div>
                </div>
              </div>

              {/* Floating Shape Bottom Left */}
              <div className="relative absolute -bottom-12 -left-12 md:left-24 opacity-60 hidden md:block animate-float" style={{animationDelay: '-2s'}}>
                <div className="absolute w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-600 rotate-45 rounded-lg shadow-lg animate-rotate-slow"></div>
                <div className="absolute w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-600 rounded-lg shadow-lg animate-rotate-slow" style={{animationDelay: '-7s'}}></div>
              </div>

              {/* Left Side Shape */}
              <div className="relative w-24 h-24 absolute top-1/2 left-0 opacity-40 hidden lg:block animate-float" style={{animationDelay: '-1s'}}>
                <div className="absolute rounded-xl w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg transform rotate-45 animate-float"></div>
              </div>

              <div className="max-w-[800px] mx-auto text-center space-y-8 relative">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter animate-slide-up text-white" style={{animationDelay: '0.2s', lineHeight: '1.2'}}>
                  Your Skill<br />
                  Your <span className="text-purple-400">Currency</span>
                </h1>
                
                <p className="text-gray-400 md:text-xl max-w-[700px] mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
                  Celebrate the joy of skill exchange with a platform designed to track your progress, motivate your efforts, and celebrate your successes.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
                  <Link to="/register" className="cursor-pointer">
                    <Button className="w-[200px] py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-purple-400 hover:opacity-90 text-white rounded-full">
                      Register
                    </Button>
                  </Link>
                  <Link to="/marketplace" className="cursor-pointer">
                    <Button variant="outline" className="w-[200px] py-6 text-lg font-medium bg-purple-900/20 border-purple-500 hover:bg-purple-900/30 text-white rounded-full">
                      See demo
                    </Button>
                  </Link>
                </div>
                
                <div className="pt-12 animate-slide-up" style={{animationDelay: '0.8s'}}></div>
              </div>
            </div>
          </section>

          {/* Intuitive Interface Section */}
          <section className="py-16 md:py-24 bg-muted/50 dark:bg-muted/20 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 opacity-50">
              <div className="relative opacity-70 animate-float" style={{animationDelay: '-3s'}}>
                <div className="absolute w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-600 rotate-45 rounded-lg shadow-lg animate-rotate-slow"></div>
                <div className="absolute w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-600 rounded-lg shadow-lg animate-rotate-slow" style={{animationDelay: '-7s'}}></div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/3 opacity-50">
              <div className="relative w-24 h-24 opacity-70 animate-float" style={{animationDelay: '-1.5s'}}>
                <div className="absolute rounded-xl w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg transform rotate-45 animate-float"></div>
              </div>
            </div>

            <div className="container">
              <div className="text-center mb-16 max-w-3xl mx-auto animate-slide-up">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 enhanced-text-gradient">Intuitive interface</h2>
                <p className="text-muted-foreground">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
              </div>
              
              <div className="relative glass-card rounded-xl shadow-xl p-2 md:p-4 max-w-5xl mx-auto transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-[1.01] neon-border">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="px-4 py-1 rounded-full glass-button text-xs">Search</div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="hidden md:block w-16 flex-shrink-0 bg-muted rounded-lg">
                      <div className="flex flex-col items-center gap-6 p-2">
                        {interfaceSections.map((section, idx) => (
                          <button 
                            key={idx}
                            className={`w-10 h-10 rounded-md transition-all duration-300 hover:bg-purple-500/70 cursor-pointer 
                              ${activeSection === idx 
                                ? 'bg-purple-500/50 border-2 border-purple-400' 
                                : 'bg-muted-foreground/20 border-0 hover:border-2 hover:border-purple-400/50'}`}
                            onClick={() => handleSectionChange(idx)}
                            aria-label={`View ${section.title} section`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-h-[400px]">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2">{interfaceSections[activeSection].title}</h3>
                        <div className="text-sm text-muted-foreground mb-4">{interfaceSections[activeSection].subtitle}</div>
                      </div>
                      
                      <div className="space-y-1">
                        {interfaceSections[activeSection].tasks.map((item, index) => (
                          <div key={index} className="border-b border-purple-500/10 py-3 flex items-center justify-between transition-all duration-300 hover:bg-purple-500/5 rounded px-2 cursor-pointer">
                            <div>
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded-full ${
                                  item.status === 'green' ? 'bg-green-500' : 
                                  item.status === 'yellow' ? 'bg-yellow-500' : 'bg-gray-300'
                                }`}></div>
                                <span className="font-medium">{item.task}</span>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">{item.progress}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="w-full py-12 md:py-16 lg:py-20 border-t border-border/40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How Barterly Works</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our platform makes it easy to trade skills and knowledge with others in your community.
                  </p>
                </div>
              </div>
              
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                {[
                  { icon: DollarSign, title: 'Skill Wallet', description: 'Track your skill hours and manage your transactions in one place.' },
                  { icon: Package, title: 'Skill Marketplace', description: 'Browse and discover skills offered by people in your community.' },
                  { icon: Flame, title: 'Live Sessions', description: 'Conduct live skill-sharing sessions with video conferencing.' }
                ].map((feature, index) => (
                  <div key={index} className="bg-background/50 backdrop-blur-sm border-purple-500/20 rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 mb-4">
                      <feature.icon className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="w-full py-2 md:py-8 lg:py-12 border-t border-border/40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear from people who have transformed their skills through our platform.
                  </p>
                </div>
              </div>
              
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 pb-24 md:grid-cols-3">
                {[
                  { name: 'Satvik Shrivastava', role: 'Web Developer', quote: "I traded my web development skills for graphic design help. Now my projects look amazing, and I've made a great connection!", avatar: '/assets/Satvik.png' },
                  { name: 'Rahul Sharma', role: 'UI/UX Designer', quote: 'Found a copywriter to help with my website content in exchange for UI design. The process was smooth and beneficial for both of us.', avatar: '/assets/Rahul.png' },
                  { name: 'Rahul Gautam', role: 'Data Analyst', quote: 'Exchanged data analysis for SEO expertise. My website traffic improved, and I got to practice my skills. Win-win!', avatar: '/assets/Rahul2.png' }
                ].map((testimonial, index) => (
                  <div key={index} className="rounded-lg border text-card-foreground shadow-sm bg-background/50 backdrop-blur-sm border-purple-500/20">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="flex items-center gap-4">
                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                          <img className="aspect-square h-full w-full" alt={testimonial.name} src={testimonial.avatar} />
                        </span>
                        <div>
                          <div className="font-semibold tracking-tight text-lg">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-muted-foreground">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center p-6 pt-0">
                      <div className="flex text-purple-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-purple-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="about" className="w-full border-t border-border/40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About The Developer</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Meet the solo developer behind Barterly, who created the entire project.
                  </p>
                </div>
              </div>
              
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pb-24">
                <div className="rounded-lg border text-card-foreground shadow-sm bg-background/50 backdrop-blur-sm border-purple-500/20 col-span-full">
                    <div className="flex flex-col space-y-1.5 p-6 text-center">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 mx-auto">
                      <img className="aspect-square h-full w-full" alt="Shivam" src="/assets/Developer.png" />
                      </span>
                    <div className="text-2xl font-semibold leading-none tracking-tight mt-4">Shivam Gupta</div>
                    <div className="text-sm text-muted-foreground">Solo Developer & Designer</div>
                    </div>
                    <div className="p-6 pt-0 text-center text-sm text-muted-foreground">
                    <p>Created the entire project from concept to completion, designing intuitive interfaces, implementing robust backend systems, and managing the complete development lifecycle.</p>
                    </div>
                    <div className="items-center p-6 pt-0 flex justify-center space-x-4">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ur-990q/">
                        <Button size="icon" variant="ghost" className="text-purple-500 hover:text-purple-400">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Shivam990q">
                        <Button size="icon" variant="ghost" className="text-purple-500 hover:text-purple-400">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ur.990q/?hl=en">
                        <Button size="icon" variant="ghost" className="text-purple-500 hover:text-purple-400">
                          <Instagram className="h-5 w-5" />
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 border-t border-border/40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Trading Skills?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join our community today and start exchanging skills with others.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/register" className="cursor-pointer">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md px-8 cta-register-button gap-1 cursor-pointer">
                      Register
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                  <Link to="/marketplace" className="cursor-pointer">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 cursor-pointer">
                      Explore Marketplace
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
