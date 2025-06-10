import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, Clock, Search, Sparkles, Filter, ChevronDown, Eye, EyeOff } from 'lucide-react';
import StarryBackground from '@/components/StarryBackground';
import FloatingShapes from '@/components/FloatingShapes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('gemini');
  const [selectedModel, setSelectedModel] = useState('');

  // AI provider options
  const providers = [
    { id: 'gemini', name: 'Gemini AI' },
    { id: 'openai', name: 'OpenAI' },
    { id: 'claude', name: 'Claude' },
    { id: 'mistral', name: 'Mistral AI' },
    { id: 'cohere', name: 'Cohere' },
  ];

  // Models available for each provider
  const providerModels = {
    gemini: [
      { id: 'gemini-pro', name: 'Gemini Pro' },
      { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro' },
      { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash' },
    ],
    openai: [
      { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
      { id: 'gpt-4', name: 'GPT-4' },
      { id: 'gpt-4-turbo', name: 'GPT-4 Turbo' },
      { id: 'gpt-4o', name: 'GPT-4o' },
    ],
    claude: [
      { id: 'claude-1', name: 'Claude 1' },
      { id: 'claude-2', name: 'Claude 2' },
      { id: 'claude-2.1', name: 'Claude 2.1' },
      { id: 'claude-3-opus', name: 'Claude 3 Opus' },
      { id: 'claude-3-sonnet', name: 'Claude 3 Sonnet' },
      { id: 'claude-3-haiku', name: 'Claude 3 Haiku' },
    ],
    mistral: [
      { id: 'mistral-7b', name: 'Mistral-7B' },
      { id: 'mixtral-8x7b', name: 'Mixtral-8x7B' },
      { id: 'mixtral-8x22b', name: 'Mixtral-8x22B' },
      { id: 'mistral-small', name: 'Mistral Small' },
      { id: 'mistral-medium', name: 'Mistral Medium' },
      { id: 'mistral-large', name: 'Mistral Large' },
    ],
    cohere: [
      { id: 'command-r', name: 'Command R' },
      { id: 'command-r-plus', name: 'Command R+' },
      { id: 'command-light', name: 'Command Light' },
    ],
  };

  // Set default model when provider changes
  useEffect(() => {
    if (providerModels[selectedProvider]?.length > 0) {
      setSelectedModel(providerModels[selectedProvider][0].id);
    }
  }, [selectedProvider]);

  const skills = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Frontend development with React, Next.js, and Tailwind CSS',
      instructor: 'David Kim',
      initials: 'DK',
      rating: 4.9,
      reviews: 24,
      duration: '2 hours',
      category: 'Development',
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'Logo Design',
      description: 'Professional logo design for your brand or business',
      instructor: 'Jessica Chen',
      initials: 'JC',
      rating: 4.7,
      reviews: 18,
      duration: '3 hours',
      category: 'Design'
    },
    {
      id: 3,
      title: 'Data Analysis',
      description: 'Data analysis using Python, R, and visualization tools',
      instructor: 'Michael Brown',
      initials: 'MB',
      rating: 4.8,
      reviews: 12,
      duration: '2 hours',
      category: 'Data Science',
      badge: 'New'
    },
    {
      id: 4,
      title: 'Content Writing',
      instructor: 'Sarah Johnson',
      initials: 'SJ',
      rating: 4.6,
      reviews: 9,
      duration: '4 hours',
      description: 'SEO-optimized blog posts, articles, and website content'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      instructor: 'Alex Martinez',
      initials: 'AM',
      rating: 4.9,
      reviews: 15,
      duration: '3 hours',
      description: 'Native and cross-platform mobile app development',
      badge: 'Trending'
    },
    {
      id: 6,
      title: 'Social Media Marketing',
      instructor: 'Emma Wilson',
      initials: 'EW',
      rating: 4.7,
      reviews: 21,
      duration: '2 hours',
      description: 'Strategy and content creation for social media channels'
    }
  ];

  const aiRecommendations = [
    {
      id: 1,
      title: 'Acrylic Wall Art Painting',
      instructor: 'Elena Rodriguez',
      initials: 'ER',
      rating: 4.9,
      reviews: 22,
      duration: '3 hours',
      description: 'I specialize in creating vibrant and unique wall art using acrylics and mixed media. I\'ll help you design and paint a stunning piece that reflects your personal style and enhances your space.',
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'Custom Mural Painting',
      instructor: 'David Chen',
      initials: 'DC',
      rating: 4.7,
      reviews: 14,
      duration: '4 hours',
      description: 'Transform your walls with custom mural designs. Whether you want a nature scene, abstract art, or a geometric pattern, I\'ll work with you to create a mural that brings your vision to life.',
      badge: 'Trending'
    },
    {
      id: 3,
      title: 'Stenciled Wall Art',
      instructor: 'Sophia Miller',
      initials: 'SM',
      rating: 4.6,
      reviews: 6,
      duration: '2 hours',
      description: 'Learn the art of stenciling and create beautiful wall designs with ease. I\'ll guide you through the process of selecting the right stencils, preparing your walls, and applying paint for a professional finish.',
      badge: 'New'
    },
    {
      id: 4,
      title: 'Watercolor Wall Art',
      instructor: 'Ethan Clark',
      initials: 'EC',
      rating: 4.8,
      reviews: 18,
      duration: '3 hours',
      description: 'Explore the world of watercolor wall art. I\'ll teach you techniques for creating soft, dreamy watercolor paintings directly on your walls.',
      badge: 'Popular'
    }
  ];

  const handleFindMatches = () => {
    setShowRecommendations(true);
    // Here you would implement the actual API call using the apiKey, selectedProvider, and selectedModel
    console.log(`Making API request to ${selectedProvider} with model ${selectedModel} and key ${apiKey.substring(0, 3)}...`);
  };

  // Category tabs
  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'business', label: 'Business' },
    { id: 'other', label: 'Other' }
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
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold mb-2">Skill Marketplace</h1>
                <p className="text-muted-foreground">Find skills to trade or offer your expertise</p>
              </div>
              
              {/* Search and Filter */}
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-10"
                    placeholder="Search for skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />Filters
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-between w-[180px]"
                  >
                    <span>Most Recent</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </div>
              </div>
              
              {/* Tabs */}
              <div dir="ltr" data-orientation="horizontal" className="w-full">
                <div role="tablist" aria-orientation="horizontal" className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                        activeTab === tab.id ? 'bg-background text-foreground shadow-sm' : ''
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                {/* Tab Content */}
                <div data-state="active" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                      <div 
                        key={skill.id} 
                        className="rounded-lg border text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-md hover:shadow-purple-500/10 bg-background/50 backdrop-blur-sm border-purple-500/20"
                      >
                        <div className="flex flex-col space-y-1.5 p-6 pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                  {skill.initials}
                                </span>
                              </span>
                              <div>
                                <div className="font-semibold tracking-tight text-lg">{skill.title}</div>
                                <p className="text-sm text-muted-foreground">{skill.instructor}</p>
                              </div>
                            </div>
                            {skill.badge && (
                              <div 
                                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs ${
                                  skill.badge === 'Popular' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 
                                  skill.badge === 'New' ? 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80' : 
                                  'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                }`}
                              >
                                {skill.badge}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="p-6 pt-0 pb-2">
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                        <div className="items-center p-6 flex justify-between pt-0">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-purple-500 fill-purple-500" />
                            <span className="text-sm font-medium">{skill.rating}</span>
                            <span className="text-xs text-muted-foreground">({skill.reviews})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{skill.duration}</span>
                          </div>
                        </div>
                        <div className="pt-0 px-6 pb-6">
                          <a href="/marketplace/skill-details">
                            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full">
                              View Details
                            </Button>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* AI Skill Matching Section */}
              <div className="rounded-lg border text-card-foreground shadow-sm bg-background/50 backdrop-blur-sm border-purple-500/20 overflow-hidden">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-purple-500 animate-pulse"></span>
                    {providers.find(p => p.id === selectedProvider)?.name || 'AI'} Skill Matching
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Let our AI find the perfect skill match for you based on your needs and preferences.
                  </div>
                </div>
                
                {/* API Configuration Section */}
                <div className="p-6 pt-0 border-b border-purple-500/20">
                  <div className="flex flex-col gap-4">
                    <div className="text-sm font-medium">Configure API</div>
                    
                    {/* API Key Input with Toggle Visibility */}
                    <div className="relative w-full">
                      <Input
                        type={showApiKey ? "text" : "password"}
                        className="pr-10"
                        placeholder="Enter your API key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                      <button 
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>

                    {/* Provider and Model Selection */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                      {/* Provider Selection Dropdown */}
                      <div className="w-full sm:w-1/2">
                        <label className="text-xs text-muted-foreground mb-1 block">Provider</label>
                        <select
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={selectedProvider}
                          onChange={(e) => setSelectedProvider(e.target.value)}
                        >
                          {providers.map(provider => (
                            <option key={provider.id} value={provider.id}>
                              {provider.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      {/* Model Selection Dropdown */}
                      <div className="w-full sm:w-1/2">
                        <label className="text-xs text-muted-foreground mb-1 block">Model</label>
                        <select
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={selectedModel}
                          onChange={(e) => setSelectedModel(e.target.value)}
                        >
                          {providerModels[selectedProvider]?.map(model => (
                            <option key={model.id} value={model.id}>
                              {model.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 pt-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                          placeholder="What skill are you looking for? (e.g., 'I need help with logo design')"
                          value={aiSearchQuery}
                          onChange={(e) => setAiSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button 
                        onClick={handleFindMatches}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 purple-gradient text-white"
                        disabled={!apiKey || !aiSearchQuery || !selectedModel}
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          <span>Find Matches</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* AI Recommendations */}
                {showRecommendations && (
                  <div className="p-6 pt-0">
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-3">AI Recommendations</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {aiRecommendations.map((skill) => (
                          <div 
                            key={skill.id} 
                            className="rounded-lg border text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-md hover:shadow-purple-500/10 bg-background/50 backdrop-blur-sm border-purple-500/20"
                          >
                            <div className="flex flex-col space-y-1.5 p-4 pb-2">
                              <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                  <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                      {skill.initials}
                                    </span>
                                  </span>
                                  <div>
                                    <div className="font-semibold tracking-tight">{skill.title}</div>
                                    <p className="text-xs text-muted-foreground">{skill.instructor}</p>
                                  </div>
                                </div>
                                {skill.badge && (
                                  <div 
                                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs ${
                                      skill.badge === 'Popular' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 
                                      skill.badge === 'New' ? 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80' : 
                                      'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                                  >
                                    {skill.badge}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="p-4 pt-0 pb-2">
                              <p className="text-xs text-muted-foreground line-clamp-2">{skill.description}</p>
                            </div>
                            <div className="items-center p-4 flex justify-between pt-0">
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                                <span className="text-xs font-medium">{skill.rating}</span>
                                <span className="text-xs text-muted-foreground">({skill.reviews})</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs font-medium">{skill.duration}</span>
                              </div>
                            </div>
                            <div className="pt-0 px-4 pb-4">
                              <Button variant="secondary" className="w-full text-xs py-1 h-8">
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
