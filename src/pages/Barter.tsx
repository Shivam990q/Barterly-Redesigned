
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarContent, AvatarFallback } from '@/components/ui/avatar';
import { Search, Clock, ArrowRightLeft, MessageSquare, Calendar, ShieldCheck } from 'lucide-react';
import StarryBackground from '@/components/StarryBackground';
import FloatingShapes from '@/components/FloatingShapes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Barter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const exchangeRequests = [
    {
      id: 1,
      title: 'Need website redesign, offering content marketing',
      author: 'Emma Wilson',
      initials: 'EW',
      postedDate: '2 days ago',
      lookingFor: 'Web Design',
      offering: 'Content Marketing',
      timeNeeded: '5 hours',
      timeOffered: '5 hours',
      description: 'I need help redesigning my personal website. It\'s currently on WordPress but needs a modern refresh. In exchange, I can provide content marketing strategy and execution, including SEO optimization and copywriting.',
      badges: ['Urgent']
    },
    {
      id: 2,
      title: 'Mobile app UI design for coding help',
      author: 'Alex Kim',
      initials: 'AK',
      postedDate: '2 days ago',
      lookingFor: 'Coding & Development',
      offering: 'UI/UX Design',
      timeNeeded: '8 hours',
      timeOffered: '10 hours',
      description: 'I\'m a UI designer looking for help implementing my mobile app design in React Native. In exchange, I can offer UI/UX design work for your project, including wireframes, prototypes, and final designs.',
      badges: []
    },
    {
      id: 3,
      title: 'Video editing for social media marketing',
      author: 'Sarah Johnson',
      initials: 'SJ',
      postedDate: '2 days ago',
      lookingFor: 'Social Media Marketing',
      offering: 'Video Editing',
      timeNeeded: '4 hours',
      timeOffered: '4 hours',
      description: 'I need help with marketing my YouTube channel on social media platforms. In exchange, I can offer professional video editing services for your content. I specialize in transitions, color grading, and motion graphics.',
      badges: []
    },
    {
      id: 4,
      title: 'Data analysis for graphic design',
      author: 'Michael Brown',
      initials: 'MB',
      postedDate: '2 days ago',
      lookingFor: 'Graphic Design',
      offering: 'Data Analysis',
      timeNeeded: '3 hours',
      timeOffered: '3 hours',
      description: 'I need a new logo and brand identity for my data analytics business. In exchange, I can help with data analysis, visualization, and insights for your business or project.',
      badges: ['Featured']
    }
  ];

  const skills = [
    'Web Design',
    'Content Marketing',
    'Coding & Development',
    'UI/UX Design',
    'Social Media Marketing',
    'Video Editing',
    'Graphic Design',
    'Data Analysis'
  ];

  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      <FloatingShapes />
      <Header />
      
      <div className="pt-24">
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-8">
              {/* Page Header */}
              <div>
                <h1 className="text-3xl font-bold mb-2">Barter Board</h1>
                <p className="text-muted-foreground">Post and view skill exchange requests</p>
              </div>

              {/* Create Exchange Request Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Create Exchange Request</CardTitle>
                  <CardDescription>Describe what you need and what you're offering in exchange</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="title" className="text-sm font-medium">Title</label>
                      <Input
                        id="title"
                        placeholder="E.g., Need help with website design, offering content writing"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <label htmlFor="looking-for" className="text-sm font-medium">I'm Looking For</label>
                        <Select>
                          <SelectTrigger id="looking-for">
                            <SelectValue placeholder="Select skill" />
                          </SelectTrigger>
                          <SelectContent>
                            {skills.map((skill) => (
                              <SelectItem key={skill} value={skill.toLowerCase().replace(/\s+/g, '-')}>
                                {skill}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid gap-2">
                        <label htmlFor="offering" className="text-sm font-medium">I'm Offering</label>
                        <Select>
                          <SelectTrigger id="offering">
                            <SelectValue placeholder="Select skill" />
                          </SelectTrigger>
                          <SelectContent>
                            {skills.map((skill) => (
                              <SelectItem key={skill} value={skill.toLowerCase().replace(/\s+/g, '-')}>
                                {skill}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <label htmlFor="time-needed" className="text-sm font-medium">Time Needed (hours)</label>
                        <Input
                          id="time-needed"
                          type="number"
                          min="1"
                          placeholder="2"
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <label htmlFor="time-offered" className="text-sm font-medium">Time Offered (hours)</label>
                        <Input
                          id="time-offered"
                          type="number"
                          min="1"
                          placeholder="2"
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <label htmlFor="description" className="text-sm font-medium">Description</label>
                      <Textarea
                        id="description"
                        placeholder="Describe what you need help with and what you're offering in more detail"
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full sm:w-auto justify-self-end">
                      Post Exchange Request
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Exchange Requests Section */}
              <div className="space-y-6">
                {/* Section Header with Search and Filter */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
                  <h2 className="text-2xl font-bold">Exchange Requests</h2>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search requests..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select defaultValue="recent">
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="urgent">Most Urgent</SelectItem>
                        <SelectItem value="featured">Featured</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="all">All Requests</TabsTrigger>
                    <TabsTrigger value="myskills">Matching My Skills</TabsTrigger>
                    <TabsTrigger value="mine">My Requests</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-6">
                    <div className="grid gap-6">
                      {exchangeRequests.map((request) => (
                        <Card key={request.id}>
                          <CardHeader>
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                              <div className="flex items-start gap-3">
                                <Avatar>
                                  <AvatarFallback>{request.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <CardTitle className="text-lg">{request.title}</CardTitle>
                                  <CardDescription>Posted by {request.author} • {request.postedDate}</CardDescription>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {request.badges.map((badge) => (
                                  <Badge
                                    key={badge}
                                    variant={badge === 'Urgent' ? 'destructive' : 'secondary'}
                                  >
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardContent>
                            <div className="grid gap-4">
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-4 rounded-lg border p-4">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Search className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Looking For</p>
                                    <p className="text-sm text-muted-foreground">{request.lookingFor}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-lg border p-4">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <ArrowRightLeft className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Offering</p>
                                    <p className="text-sm text-muted-foreground">{request.offering}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-4 rounded-lg border p-4">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Clock className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Time Needed</p>
                                    <p className="text-sm text-muted-foreground">{request.timeNeeded}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-lg border p-4">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Clock className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Time Offered</p>
                                    <p className="text-sm text-muted-foreground">{request.timeOffered}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="rounded-lg border p-4">
                                <p className="text-sm font-medium mb-2">Description</p>
                                <p className="text-sm text-muted-foreground">{request.description}</p>
                              </div>
                            </div>
                          </CardContent>
                          
                          <CardFooter className="flex justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <ShieldCheck className="h-4 w-4" />
                              <span>Fair Exchange Guaranteed</span>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                Contact
                              </Button>
                              <Button size="sm">
                                <Calendar className="mr-2 h-4 w-4" />
                                Propose Exchange
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="myskills" className="mt-6">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No requests matching your skills found.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="mine" className="mt-6">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">You haven't posted any requests yet.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Barter;
