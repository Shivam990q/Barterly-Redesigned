import React from "react";
import Header from "@/components/Header";
import StarryBackground from "@/components/StarryBackground";
import FloatingShapes from "@/components/FloatingShapes";

const Wallet = () => {
  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      <FloatingShapes />
      <Header />
      
      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Skill Wallet</h1>
              <p className="text-muted-foreground">Manage your skill tokens and transaction history</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-2">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <div className="tracking-tight text-lg font-medium">Skill Balance</div>
                    <div className="text-sm text-muted-foreground">Your current skill token balance</div>
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info h-4 w-4">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                    <span className="sr-only sm:not-sr-only sm:ml-1">How it works</span>
                  </button>
                </div>
                <div className="p-6 pt-0">
                  <div className="grid gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                      <div>
                        <div className="text-3xl font-bold">6 hours</div>
                        <div className="text-sm text-muted-foreground">Available skill tokens</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus mr-2 h-4 w-4">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add Hours
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history mr-2 h-4 w-4">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                            <path d="M3 3v5h5"></path>
                            <path d="M12 7v5l4 2"></path>
                          </svg>
                          Request Hours
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <span className="font-medium">Monthly Activity</span>
                        </div>
                        <div className="font-medium">
                          <span className="text-emerald-500">+12h</span> / <span className="text-red-500">-18h</span>
                        </div>
                      </div>
                      <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full bg-secondary h-2">
                        <div data-state="indeterminate" data-max="100" className="h-full w-full flex-1 bg-primary transition-all" style={{ transform: "translateX(-60%)" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="tracking-tight text-lg font-medium">Quick Stats</div>
                  <div className="text-sm text-muted-foreground">Your skill exchange statistics</div>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-4 w-4 text-primary">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Total Hours Given</span>
                    </div>
                    <span className="font-bold">124</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-4 w-4 text-primary">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Total Hours Received</span>
                    </div>
                    <span className="font-bold">118</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4 text-primary">
                          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                          <path d="M20 3v4"></path>
                          <path d="M22 5h-4"></path>
                          <path d="M4 17v2"></path>
                          <path d="M5 18H3"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Skill Trader Level</span>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Gold</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Transaction History</h2>
              <div dir="ltr" data-orientation="horizontal">
                <div role="tablist" aria-orientation="horizontal" className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground" tabIndex={0} data-orientation="horizontal">
                  <button type="button" role="tab" aria-selected="true" data-state="active" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">All Transactions</button>
                  <button type="button" role="tab" aria-selected="false" data-state="inactive" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">Incoming</button>
                  <button type="button" role="tab" aria-selected="false" data-state="inactive" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">Outgoing</button>
                  <button type="button" role="tab" aria-selected="false" data-state="inactive" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">Pending</button>
                </div>
                <div data-state="active" data-orientation="horizontal" role="tabpanel" className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-4" style={{ animationDuration: "0s" }}>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="p-0">
                      <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                          <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">User</th>
                              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Skill</th>
                              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Hours</th>
                              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Date</th>
                              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Status</th>
                              <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="[&_tr:last-child]:border-0">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <div className="flex items-center gap-2">
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">RS</span>
                                  </span>
                                  <div>
                                    <p className="font-medium text-sm">Rahul Sharma</p>
                                    <p className="text-xs text-muted-foreground">UI/UX Designer</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">UI/UX Design</td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <div className="flex items-center gap-1 text-red-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up h-4 w-4">
                                    <path d="m5 12 7-7 7 7"></path>
                                    <path d="M12 19V5"></path>
                                  </svg>
                                  <span>4 hours</span>
                                </div>
                              </td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Apr 15, 2023</td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Completed</div>
                              </td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info h-4 w-4">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <div className="flex items-center gap-2">
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">RG</span>
                                  </span>
                                  <div>
                                    <p className="font-medium text-sm">Rahul Gautam</p>
                                    <p className="text-xs text-muted-foreground">Data Analyst</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Data Analysis</td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <div className="flex items-center gap-1 text-emerald-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down h-4 w-4">
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
                                  </svg>
                                  <span>3 hours</span>
                                </div>
                              </td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Apr 10, 2023</td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Completed</div>
                              </td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info h-4 w-4">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <div className="flex items-center gap-2">
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">SS</span>
                                  </span>
                                  <div>
                                    <p className="font-medium text-sm">Satvik Shrivastava</p>
                                    <p className="text-xs text-muted-foreground">Web Developer</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Web Development</td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <div className="flex items-center gap-1 text-red-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up h-4 w-4">
                                    <path d="m5 12 7-7 7 7"></path>
                                    <path d="M12 19V5"></path>
                                  </svg>
                                  <span>2 hours</span>
                                </div>
                              </td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Apr 5, 2023</td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-amber-500/10 text-amber-500 border-amber-500/20">Pending</div>
                              </td>
                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info h-4 w-4">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="items-center flex justify-between p-4">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Previous</button>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">Reports</div>
                <div className="text-sm text-muted-foreground">Download your skill exchange reports</div>
              </div>
              <div className="p-6 pt-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full">
                    <div className="flex flex-col space-y-1.5 p-4">
                      <div className="font-semibold tracking-tight text-base">Monthly Summary</div>
                    </div>
                    <div className="p-4 pt-0 flex-grow">
                      <p className="text-sm text-muted-foreground">Summary of all your skill exchanges for the current month.</p>
                    </div>
                    <div className="p-4 pt-0 mt-auto">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2 h-4 w-4">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full">
                    <div className="flex flex-col space-y-1.5 p-4">
                      <div className="font-semibold tracking-tight text-base">Skill Breakdown</div>
                    </div>
                    <div className="p-4 pt-0 flex-grow">
                      <p className="text-sm text-muted-foreground">Detailed breakdown of hours by skill category.</p>
                    </div>
                    <div className="p-4 pt-0 mt-auto">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2 h-4 w-4">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full">
                    <div className="flex flex-col space-y-1.5 p-4">
                      <div className="font-semibold tracking-tight text-base">User Exchanges</div>
                    </div>
                    <div className="p-4 pt-0 flex-grow">
                      <p className="text-sm text-muted-foreground">Report showing exchanges with specific users.</p>
                    </div>
                    <div className="p-4 pt-0 mt-auto">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2 h-4 w-4">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full">
                    <div className="flex flex-col space-y-1.5 p-4">
                      <div className="font-semibold tracking-tight text-base">Tax Summary</div>
                    </div>
                    <div className="p-4 pt-0 flex-grow">
                      <p className="text-sm text-muted-foreground">Summary of skill exchanges for tax purposes.</p>
                    </div>
                    <div className="p-4 pt-0 mt-auto">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2 h-4 w-4">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet; 