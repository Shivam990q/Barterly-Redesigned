import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import StarryBackground from '@/components/StarryBackground';
import FloatingShapes from '@/components/FloatingShapes';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error message
    setErrorMessage('');
    
    // Basic form validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle registration logic here
      console.log('Registration attempt with:', { name, email, password });
    }, 1500);
  };

  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      <FloatingShapes />
      
      <div className="relative z-10 flex justify-center items-center min-h-screen px-6 py-10">
        <div className="container mx-auto max-w-md">
          <div className="mb-3 text-center">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2 group">
                <div className="relative overflow-hidden rounded-full p-1 transition-all duration-300 group-hover:scale-110 neon-border">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 334 334"
                    className="h-8 w-8 rounded-full transition-transform duration-300 group-hover:rotate-12"
                    style={{ color: 'transparent' }}
                  >
                    <path d="M0 0 C110.22 0 220.44 0 334 0 C334 110.22 334 220.44 334 334 C223.78 334 113.56 334 0 334 C0 223.78 0 113.56 0 0 Z " fill="#000000" transform="translate(0,0)"/>
                    <path d="M0 0 C0.71095762 -0.0069029 1.42191525 -0.01380581 2.15441704 -0.02091789 C5.9205733 -0.05657544 9.6865836 -0.08020233 13.45288086 -0.09399414 C16.53229412 -0.10720807 19.61025587 -0.14190582 22.68920898 -0.1965332 C55.50512407 -0.76697081 55.50512407 -0.76697081 68.02734375 7.44140625 C68.83977539 7.9607373 69.65220703 8.48006836 70.48925781 9.01513672 C72.48097359 10.36988979 74.22918816 11.83927601 76.02734375 13.44140625 C76.85878906 14.14394531 77.69023437 14.84648438 78.546875 15.5703125 C83.44453132 19.80825524 87.73129685 23.83812652 91.02734375 29.44140625 C91.02734375 30.76140625 91.02734375 32.08140625 91.02734375 33.44140625 C91.68734375 33.44140625 92.34734375 33.44140625 93.02734375 33.44140625 C99.93304633 49.71913375 100.17666661 65.86019639 94.02734375 82.44140625 C92.70734375 82.77140625 91.38734375 83.10140625 90.02734375 83.44140625 C89.24488281 82.58675781 88.46242187 81.73210937 87.65625 80.8515625 C86.63412648 79.73566618 85.61199042 78.61978136 84.58984375 77.50390625 C84.07357422 76.93994141 83.55730469 76.37597656 83.02539062 75.79492188 C80.56509708 73.08142299 80.56509708 73.08142299 78.02734375 70.44140625 C77.93194034 68.49941693 77.84305088 66.55686289 77.7890625 64.61328125 C77.39312085 51.69308013 75.86202485 41.12325952 66.3828125 31.59765625 C65.60550781 30.88609375 64.82820313 30.17453125 64.02734375 29.44140625 C63.36347656 28.83296875 62.69960937 28.22453125 62.015625 27.59765625 C53.2636738 20.35466215 43.29918238 19.99551918 32.35546875 20.078125 C31.07428162 20.0776265 29.79309448 20.07712799 28.4730835 20.07661438 C25.78027324 20.07670341 23.08776668 20.0869956 20.39501953 20.10522461 C16.95653328 20.12800145 13.51848573 20.12843199 10.07994461 20.12170696 C6.77590317 20.11755225 3.47199512 20.12954107 0.16796875 20.140625 C-1.06024597 20.13971359 -2.28846069 20.13880219 -3.55389404 20.13786316 C-4.70238831 20.14739517 -5.85088257 20.15692719 -7.03417969 20.16674805 C-8.03882263 20.17135544 -9.04346558 20.17596283 -10.07855225 20.18070984 C-13.34147875 20.47462921 -15.96768714 21.13469276 -18.97265625 22.44140625 C-20.05794951 25.69728603 -20.10658105 28.0809514 -20.11982727 31.50779724 C-20.12698257 32.77667786 -20.13413788 34.04555847 -20.14151001 35.35289001 C-20.1443502 36.76187109 -20.14706194 38.17085244 -20.1496582 39.57983398 C-20.15592356 41.06145385 -20.16257043 42.54307215 -20.16957092 44.02468872 C-20.1905986 48.89144804 -20.20096953 53.75820764 -20.2109375 58.625 C-20.21498501 60.29992248 -20.21910193 61.97484479 -20.22328758 63.64976692 C-20.24233346 71.51570662 -20.25656786 79.38163693 -20.26489955 87.24759525 C-20.27468145 96.33284632 -20.30102818 105.41785436 -20.34140044 114.50301975 C-20.37152773 121.52304432 -20.38636505 128.54299907 -20.38968056 135.56308705 C-20.39203422 139.75736687 -20.40103585 143.95138687 -20.42614174 148.14559746 C-20.44936957 152.08960464 -20.45367733 156.03317993 -20.44338036 159.9772377 C-20.44288365 161.42526369 -20.44924386 162.87331056 -20.4629364 164.3212719 C-20.48057381 166.29677992 -20.4711905 168.27247431 -20.46040344 170.24803162 C-20.4627918 171.35397391 -20.46518015 172.45991621 -20.46764088 173.59937191 C-19.86019247 177.08713523 -18.57431092 178.14568855 -15.97265625 180.44140625 C-15.97265625 181.10140625 -15.97265625 181.76140625 -15.97265625 182.44140625 C-5.56683202 182.38004339 4.83874455 182.30282836 15.24429989 182.20569134 C20.0766678 182.16107199 24.90895304 182.12179746 29.74145508 182.0949707 C34.41004482 182.06885334 39.078315 182.02839182 43.74670601 181.97821999 C45.52273122 181.96160812 47.29881164 181.95005862 49.07490349 181.94379234 C63.01357941 181.88966414 74.97005855 180.5289607 85.8515625 170.8125 C93.11906324 162.92259365 95.40824841 153.60401975 95.30078125 143.13671875 C94.2312281 128.6824719 84.71320999 116.32789592 74.89746094 106.34667969 C73.50227876 104.92526954 72.11638118 103.49473488 70.73535156 102.05957031 C68.15817781 99.38223435 65.56392769 96.72246761 62.96484375 94.06640625 C62.13831299 93.20982422 61.31178223 92.35324219 60.46020508 91.47070312 C54.48290704 85.43959817 48.21753974 79.57714325 39.70703125 77.71484375 C32.33369721 77.9818447 26.72189447 78.88705054 21.27734375 84.125 C16.46208215 89.50744386 14.75462307 93.1361911 14.83984375 100.50390625 C14.84951172 102.34662109 14.84951172 102.34662109 14.859375 104.2265625 C15.12412084 109.29367469 16.50585328 111.0205298 20.02734375 114.44140625 C20.62546875 115.28703125 21.22359375 116.13265625 21.83984375 117.00390625 C25.47661587 121.05630947 28.81596936 122.15606762 34.0546875 122.83203125 C41.01168887 123.18921685 45.65305777 122.46008778 51.22265625 118.17578125 C53.68106419 115.81315544 55.28784 113.36377254 57.02734375 110.44140625 C57.68734375 110.44140625 58.34734375 110.44140625 59.02734375 110.44140625 C59.35734375 108.46140625 59.68734375 106.48140625 60.02734375 104.44140625 C64.37814125 104.89720408 66.84154177 107.74019323 69.77734375 110.69140625 C70.28394531 111.16964844 70.79054688 111.64789063 71.3125 112.140625 C73.51007236 114.32635061 74.9166789 115.92889455 75.578125 118.9921875 C73.93265931 126.30925833 66.06287054 133.25589963 60.02734375 137.44140625 C52.70285555 141.6597689 46.85207772 142.671083 38.46484375 142.75390625 C37.51287109 142.78291016 36.56089844 142.81191406 35.58007812 142.84179688 C24.40713498 142.94067248 16.18923402 138.89968529 8.02734375 131.44140625 C-1.21144419 121.98072602 -5.23992717 111.75260191 -5.21923828 98.65209961 C-5.02491383 86.87683632 -0.6508708 78.20427916 7.40234375 69.69140625 C17.39871568 60.32387333 29.78507849 57.45999687 43.3984375 57.85546875 C62.49210716 60.93840788 76.89231842 77.68961644 89.02734375 91.44140625 C89.87941406 92.3334375 90.73148438 93.22546875 91.609375 94.14453125 C108.23021638 111.60790375 116.16998363 130.50821006 115.59765625 154.6484375 C115.04807196 163.08414215 111.73394972 169.56645076 107.02734375 176.44140625 C106.36863281 177.4159375 105.70992187 178.39046875 105.03125 179.39453125 C97.31233482 189.76925025 87.90811782 194.94259028 76.02734375 199.44140625 C75.14411438 199.79143707 74.26088501 200.1414679 73.35089111 200.50210571 C69.36604026 201.62830376 65.62297076 201.73672614 61.51855469 201.73193359 C60.68518082 201.73865082 59.85180695 201.74536804 58.99317932 201.75228882 C56.24929776 201.77122204 53.5056615 201.77519089 50.76171875 201.77734375 C48.84368796 201.78377579 46.92565815 201.79050446 45.00762939 201.79751587 C40.98960091 201.80947758 36.97165831 201.81319792 32.95361328 201.81201172 C27.82483272 201.8118088 22.69660791 201.83908845 17.56795883 201.87355614 C13.60605378 201.89588282 9.64428114 201.89984746 5.68231964 201.89879227 C3.79262633 201.9011404 1.90292893 201.9099192 0.01329803 201.925457 C-11.14104642 202.0085761 -19.88347171 201.72788992 -29.66015625 195.81640625 C-40.15914332 185.03366277 -41.27490075 175.22707001 -41.26318359 160.72290039 C-41.26917585 159.23880172 -41.27598299 157.75470616 -41.28353882 156.27061462 C-41.30113175 152.25819849 -41.30589126 148.24586778 -41.30717039 144.2334168 C-41.30859597 141.72265892 -41.31287316 139.21192249 -41.31816483 136.70116997 C-41.33664048 127.93105576 -41.34483823 119.16100217 -41.34326172 110.39086914 C-41.34205988 102.23262015 -41.36317682 94.07463552 -41.39474905 85.91645342 C-41.42094344 78.89623943 -41.43162774 71.87611166 -41.4303509 64.85584921 C-41.42984235 60.66988302 -41.4354668 56.48415217 -41.456707 52.29823494 C-41.47614386 48.36069188 -41.47617709 44.42360746 -41.46167374 40.48604774 C-41.4595915 39.04657568 -41.46425149 37.60707448 -41.47639465 36.16765213 C-41.5681281 24.5344608 -39.78565899 16.72332442 -31.75390625 8.1640625 C-22.82112774 -0.47487461 -11.70402233 0.08902897 0 0 Z" fill="#6C63C5" transform="translate(139.97265625,51.55859375)"/>
                  </svg>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text transition-all duration-300">
                  Barterly
                </span>
              </div>
            </Link>
          </div>
          
          <div className="mb-3">
            <Link to="/" className="inline-flex items-center text-sm text-purple-500 hover:text-purple-500 transition-colors group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="rounded-lg border text-card-foreground shadow-sm overflow-hidden transition-all bg-background/50 backdrop-blur-sm border-purple-500/20">
            <div className="flex flex-col space-y-1.5 p-6">
              <h1 className="text-2xl font-bold text-center mb-2">Create an Account</h1>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Join the skill exchange community
              </p>
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  {errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-600 px-4 py-2 rounded-md text-sm">
                      {errorMessage}
                    </div>
                  )}
                  <div className="grid gap-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      type="text" 
                      placeholder="John Doe" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background/80"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="you@example.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background/80"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password"
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-background/80"
                      />
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Input 
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="bg-background/80"
                      />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    By registering, you agree to our <Link to="/terms" className="text-purple-500 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-purple-500 hover:underline">Privacy Policy</Link>.
                  </div>
                  <Button 
                    type="submit"
                    disabled={isLoading} 
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                  >
                    {isLoading ? "Creating Account..." : "Register"}
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-purple-500 hover:underline">
                      Sign In
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 