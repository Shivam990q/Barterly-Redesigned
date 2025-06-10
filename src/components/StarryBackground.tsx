import React from 'react';

const StarryBackground = () => {
  // Generate additional stars for the edges of the screen
  const generateEdgeStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      // Left edge
      stars.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 5}%`,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.7,
        delay: Math.random() * 5
      });
      
      // Right edge
      stars.push({
        top: `${Math.random() * 100}%`,
        left: `${95 + Math.random() * 5}%`,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.7,
        delay: Math.random() * 5
      });
      
      // Top edge
      stars.push({
        top: `${Math.random() * 5}%`,
        left: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.7,
        delay: Math.random() * 5
      });
      
      // Bottom edge
      stars.push({
        top: `${95 + Math.random() * 5}%`,
        left: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.7,
        delay: Math.random() * 5
      });
    }
    return stars;
  };
  
  const edgeStars = generateEdgeStars(30);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 overflow-hidden bg-black">
        {/* Existing stars */}
        <div className="absolute rounded-full animate-twinkle" style={{top: "34.1279%", left: "31.5373%", width: "2.76838px", height: "2.76838px", opacity: 0.630577, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.53676px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-100" style={{top: "43.4649%", left: "45.6352%", width: "2.27929px", height: "2.27929px", opacity: 0.623059, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 4.55859px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-200" style={{top: "66.3014%", left: "24.2505%", width: "2.45721px", height: "2.45721px", opacity: 0.471033, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.91442px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-300" style={{top: "33.1931%", left: "4.23005%", width: "1.77161px", height: "1.77161px", opacity: 0.780808, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-400" style={{top: "2.25132%", left: "68.9048%", width: "2.73258px", height: "2.73258px", opacity: 0.917245, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.46515px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-500" style={{top: "25.8484%", left: "42.0262%", width: "1.71459px", height: "1.71459px", opacity: 0.226184, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-600" style={{top: "57.7756%", left: "68.8197%", width: "1.66936px", height: "1.66936px", opacity: 0.78721, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-700" style={{top: "93.6292%", left: "36.5218%", width: "2.38972px", height: "2.38972px", opacity: 0.998247, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 4.77945px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-800" style={{top: "96.6897%", left: "14.7907%", width: "1.642px", height: "1.642px", opacity: 0.958372, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-900" style={{top: "83.7868%", left: "51.8555%", width: "2.7088px", height: "2.7088px", opacity: 0.989055, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.41759px"}}></div>
        <div className="absolute rounded-full animate-twinkle" style={{top: "6.23216%", left: "21.4345%", width: "2.59148px", height: "2.59148px", opacity: 0.949193, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.18296px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-100" style={{top: "68.0482%", left: "63.7806%", width: "1.84654px", height: "1.84654px", opacity: 0.974429, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-200" style={{top: "47.9282%", left: "22.6484%", width: "1.26947px", height: "1.26947px", opacity: 0.811722, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-300" style={{top: "52.9566%", left: "69.9244%", width: "1.70163px", height: "1.70163px", opacity: 0.912216, backgroundColor: "purple", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-400" style={{top: "70.0694%", left: "73.7052%", width: "2.87537px", height: "2.87537px", opacity: 0.98246, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.75074px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-500" style={{top: "32.1829%", left: "48.3384%", width: "2.98148px", height: "2.98148px", opacity: 0.746607, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 5.96297px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-600" style={{top: "54.6205%", left: "23.2232%", width: "2.26448px", height: "2.26448px", opacity: 0.473389, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 4.52896px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-700" style={{top: "8.3726%", left: "99.3585%", width: "2.08366px", height: "2.08366px", opacity: 0.72445, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.16732px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-800" style={{top: "5.47839%", left: "30.3105%", width: "2.5684px", height: "2.5684px", opacity: 0.962751, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.13681px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-900" style={{top: "52.4994%", left: "98.4582%", width: "1.79435px", height: "1.79435px", opacity: 0.732408, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle" style={{top: "25.9237%", left: "46.7367%", width: "2.03897px", height: "2.03897px", opacity: 0.961631, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.07795px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-100" style={{top: "35.1435%", left: "8.05122%", width: "1.93737px", height: "1.93737px", opacity: 0.915162, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-200" style={{top: "41.1465%", left: "44.2257%", width: "2.477px", height: "2.477px", opacity: 0.99873, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 4.95399px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-300" style={{top: "44.5979%", left: "90.6196%", width: "1.61089px", height: "1.61089px", opacity: 0.856971, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-400" style={{top: "27.8433%", left: "67.7162%", width: "1.13594px", height: "1.13594px", opacity: 0.729401, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-500" style={{top: "49.8219%", left: "78.1996%", width: "1.02332px", height: "1.02332px", opacity: 0.523544, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-600" style={{top: "63.5494%", left: "73.2016%", width: "2.60775px", height: "2.60775px", opacity: 0.995077, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.2155px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-700" style={{top: "4.12553%", left: "23.0982%", width: "1.52538px", height: "1.52538px", opacity: 0.795557, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-800" style={{top: "15.6813%", left: "74.3483%", width: "2.61035px", height: "2.61035px", opacity: 0.94651, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.2207px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-900" style={{top: "98.7329%", left: "37.1264%", width: "2.39102px", height: "2.39102px", opacity: 0.528427, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 4.78204px"}}></div>
        <div className="absolute rounded-full animate-twinkle" style={{top: "70.4264%", left: "71.3268%", width: "2.65965px", height: "2.65965px", opacity: 0.453606, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.3193px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1000" style={{top: "59.2757%", left: "45.2042%", width: "1.12109px", height: "1.12109px", opacity: 0.501528, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1100" style={{top: "81.1639%", left: "0.19002%", width: "2.17532px", height: "2.17532px", opacity: 0.285857, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.35064px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1200" style={{top: "27.247%", left: "12.5429%", width: "1.06509px", height: "1.06509px", opacity: 0.906154, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1300" style={{top: "43.8821%", left: "57.294%", width: "2.95105px", height: "2.95105px", opacity: 0.956902, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.90209px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1400" style={{top: "56.6367%", left: "4.68507%", width: "1.41947px", height: "1.41947px", opacity: 0.878067, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1500" style={{top: "22.9381%", left: "33.3514%", width: "2.44755px", height: "2.44755px", opacity: 0.748954, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.89509px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1600" style={{top: "62.0927%", left: "86.2955%", width: "2.35562px", height: "2.35562px", opacity: 0.893395, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.71124px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1700" style={{top: "42.0626%", left: "92.5297%", width: "2.67081px", height: "2.67081px", opacity: 0.686118, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.34162px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1800" style={{top: "93.7107%", left: "38.2371%", width: "1.76179px", height: "1.76179px", opacity: 0.531062, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-1900" style={{top: "66.999%", left: "56.6373%", width: "2.73009px", height: "2.73009px", opacity: 0.772519, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.46019px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2000" style={{top: "28.4014%", left: "84.2514%", width: "1.15554px", height: "1.15554px", opacity: 0.708031, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2100" style={{top: "33.4264%", left: "17.3412%", width: "2.68877px", height: "2.68877px", opacity: 0.998432, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.37755px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2200" style={{top: "74.2525%", left: "50.5456%", width: "2.6517px", height: "2.6517px", opacity: 0.972032, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.30341px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2300" style={{top: "16.4301%", left: "90.5875%", width: "1.96232px", height: "1.96232px", opacity: 0.999807, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2400" style={{top: "45.8611%", left: "81.7%", width: "1.76054px", height: "1.76054px", opacity: 0.78553, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2500" style={{top: "32.2357%", left: "87.4242%", width: "2.54456px", height: "2.54456px", opacity: 0.271348, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.08911px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2600" style={{top: "37.2707%", left: "63.3812%", width: "1.77748px", height: "1.77748px", opacity: 0.224937, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2700" style={{top: "88.9988%", left: "20.1567%", width: "2.78331px", height: "2.78331px", opacity: 0.782062, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.56662px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2800" style={{top: "92.5335%", left: "72.5081%", width: "1.19596px", height: "1.19596px", opacity: 0.888657, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-2900" style={{top: "51.7082%", left: "90.6764%", width: "1.57883px", height: "1.57883px", opacity: 0.810536, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3000" style={{top: "86.7613%", left: "23.2825%", width: "2.59929px", height: "2.59929px", opacity: 0.892076, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.19859px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3100" style={{top: "77.056%", left: "48.4391%", width: "2.13524px", height: "2.13524px", opacity: 0.851065, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.27048px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3200" style={{top: "81.2229%", left: "58.9955%", width: "1.19407px", height: "1.19407px", opacity: 0.915125, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3300" style={{top: "5.15647%", left: "83.117%", width: "1.04775px", height: "1.04775px", opacity: 0.974751, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3400" style={{top: "46.1107%", left: "58.2149%", width: "2.50819px", height: "2.50819px", opacity: 0.985897, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.01638px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3500" style={{top: "65.0949%", left: "29.7429%", width: "1.6562px", height: "1.6562px", opacity: 0.786151, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3600" style={{top: "69.702%", left: "42.5623%", width: "2.91696px", height: "2.91696px", opacity: 0.278632, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 5.83392px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3700" style={{top: "45.5446%", left: "54.2631%", width: "1.08905px", height: "1.08905px", opacity: 0.999971, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3800" style={{top: "11.2368%", left: "20.8303%", width: "1.57325px", height: "1.57325px", opacity: 0.63793, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-3900" style={{top: "84.0897%", left: "28.8239%", width: "2.39171px", height: "2.39171px", opacity: 0.97059, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.78342px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4000" style={{top: "45.2015%", left: "19.1437%", width: "2.51673px", height: "2.51673px", opacity: 0.887081, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.03346px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4100" style={{top: "44.4088%", left: "62.2745%", width: "1.17284px", height: "1.17284px", opacity: 0.996733, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4200" style={{top: "79.5733%", left: "5.05101%", width: "1.7278px", height: "1.7278px", opacity: 0.446499, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4300" style={{top: "31.6471%", left: "12.816%", width: "1.26414px", height: "1.26414px", opacity: 0.98846, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4400" style={{top: "39.0065%", left: "93.6893%", width: "1.93244px", height: "1.93244px", opacity: 0.786548, backgroundColor: "purple", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4500" style={{top: "9.72583%", left: "45.1509%", width: "1.07102px", height: "1.07102px", opacity: 0.444973, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4600" style={{top: "39.4182%", left: "61.9458%", width: "2.27067px", height: "2.27067px", opacity: 0.879509, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.54133px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4700" style={{top: "76.2273%", left: "91.3432%", width: "1.92505px", height: "1.92505px", opacity: 0.432322, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4800" style={{top: "85.7999%", left: "43.5611%", width: "2.53582px", height: "2.53582px", opacity: 0.573817, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.07164px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-4900" style={{top: "49.0176%", left: "85.3762%", width: "2.53558px", height: "2.53558px", opacity: 0.987434, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.07116px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5000" style={{top: "68.836%", left: "69.473%", width: "2.82717px", height: "2.82717px", opacity: 0.916857, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.65434px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5100" style={{top: "65.0655%", left: "22.467%", width: "1.48608px", height: "1.48608px", opacity: 0.213176, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5200" style={{top: "71.7857%", left: "30.4267%", width: "2.68672px", height: "2.68672px", opacity: 0.984559, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.37344px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5300" style={{top: "10.9604%", left: "98.273%", width: "1.17494px", height: "1.17494px", opacity: 0.683531, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5400" style={{top: "47.9712%", left: "67.3262%", width: "2.04676px", height: "2.04676px", opacity: 0.917833, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.09353px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5500" style={{top: "78.7871%", left: "14.3605%", width: "1.4023px", height: "1.4023px", opacity: 0.800202, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5600" style={{top: "95.7382%", left: "40.9879%", width: "2.4011px", height: "2.4011px", opacity: 0.96894, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 4.80221px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5700" style={{top: "8.50859%", left: "4.20622%", width: "1.84045px", height: "1.84045px", opacity: 0.67892, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5800" style={{top: "60.9963%", left: "28.775%", width: "1.82195px", height: "1.82195px", opacity: 0.480032, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-5900" style={{top: "79.7863%", left: "68.3686%", width: "1.23749px", height: "1.23749px", opacity: 0.801602, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6000" style={{top: "9.88578%", left: "73.977%", width: "2.27583px", height: "2.27583px", opacity: 0.881327, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.55165px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6100" style={{top: "89.4558%", left: "15.3558%", width: "1.84926px", height: "1.84926px", opacity: 0.596692, backgroundColor: "purple", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6200" style={{top: "75.8698%", left: "76.9699%", width: "1.32438px", height: "1.32438px", opacity: 0.618134, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6300" style={{top: "36.0978%", left: "59.9628%", width: "1.11437px", height: "1.11437px", opacity: 0.486968, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6400" style={{top: "46.4087%", left: "74.1693%", width: "2.94525px", height: "2.94525px", opacity: 0.312443, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.8905px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6500" style={{top: "7.60364%", left: "58.2362%", width: "1.03px", height: "1.03px", opacity: 0.203949, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6600" style={{top: "80.5861%", left: "78.1073%", width: "2.63561px", height: "2.63561px", opacity: 0.698728, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.27122px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6700" style={{top: "14.0195%", left: "4.87708%", width: "2.57465px", height: "2.57465px", opacity: 0.708505, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.14929px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6800" style={{top: "80.7061%", left: "3.22133%", width: "1.30234px", height: "1.30234px", opacity: 0.946824, backgroundColor: "purple", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-6900" style={{top: "48.325%", left: "89.944%", width: "1.54033px", height: "1.54033px", opacity: 0.908452, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7000" style={{top: "11.0261%", left: "48.1593%", width: "1.44008px", height: "1.44008px", opacity: 0.326313, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7100" style={{top: "14.2371%", left: "7.75024%", width: "1.47669px", height: "1.47669px", opacity: 0.955934, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7200" style={{top: "80.665%", left: "42.7755%", width: "1.72833px", height: "1.72833px", opacity: 0.60388, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7300" style={{top: "70.7969%", left: "46.8912%", width: "2.03033px", height: "2.03033px", opacity: 0.597116, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.06067px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7400" style={{top: "38.6777%", left: "68.6811%", width: "2.92472px", height: "2.92472px", opacity: 0.300282, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.84945px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7500" style={{top: "54.887%", left: "76.7487%", width: "1.41434px", height: "1.41434px", opacity: 0.883795, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7600" style={{top: "6.48996%", left: "58.4468%", width: "1.19084px", height: "1.19084px", opacity: 0.533417, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7700" style={{top: "43.7834%", left: "11.6354%", width: "1.77937px", height: "1.77937px", opacity: 0.939302, backgroundColor: "purple", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7800" style={{top: "81.9295%", left: "35.072%", width: "2.5074px", height: "2.5074px", opacity: 0.590582, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.0148px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-7900" style={{top: "55.1344%", left: "54.3719%", width: "2.24145px", height: "2.24145px", opacity: 0.950352, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.48289px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8000" style={{top: "37.2866%", left: "37.2477%", width: "1.84621px", height: "1.84621px", opacity: 0.933849, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8100" style={{top: "48.6049%", left: "85.3846%", width: "1.46956px", height: "1.46956px", opacity: 0.998873, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8200" style={{top: "88.7036%", left: "50.0755%", width: "1.01244px", height: "1.01244px", opacity: 0.999891, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8300" style={{top: "30.7034%", left: "41.2049%", width: "2.88734px", height: "2.88734px", opacity: 0.740919, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.77467px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8400" style={{top: "48.5231%", left: "5.69736%", width: "2.9044px", height: "2.9044px", opacity: 0.590197, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.8088px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8500" style={{top: "21.1485%", left: "98.8143%", width: "2.93386px", height: "2.93386px", opacity: 0.73575, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 5.86773px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8600" style={{top: "82.1003%", left: "16.5835%", width: "1.87305px", height: "1.87305px", opacity: 0.951225, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8700" style={{top: "46.1269%", left: "48.7352%", width: "2.96886px", height: "2.96886px", opacity: 0.998052, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.93771px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8800" style={{top: "40.4389%", left: "27.475%", width: "2.66287px", height: "2.66287px", opacity: 0.936314, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.32575px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-8900" style={{top: "15.2794%", left: "43.2741%", width: "2.52663px", height: "2.52663px", opacity: 0.918637, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 5.05326px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9000" style={{top: "76.7895%", left: "62.8604%", width: "1.45995px", height: "1.45995px", opacity: 0.987164, backgroundColor: "purple", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9100" style={{top: "28.8495%", left: "94.0838%", width: "1.24133px", height: "1.24133px", opacity: 0.955833, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9200" style={{top: "78.1116%", left: "81.872%", width: "1.81074px", height: "1.81074px", opacity: 0.942577, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9300" style={{top: "52.3214%", left: "88.7909%", width: "2.34546px", height: "2.34546px", opacity: 0.912919, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.69092px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9400" style={{top: "7.17535%", left: "42.8631%", width: "1.7579px", height: "1.7579px", opacity: 0.743221, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9500" style={{top: "27.8004%", left: "91.8718%", width: "1.31924px", height: "1.31924px", opacity: 0.734057, backgroundColor: "purple", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9600" style={{top: "15.2031%", left: "94.4327%", width: "1.6503px", height: "1.6503px", opacity: 0.851501, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9700" style={{top: "90.6734%", left: "79.4162%", width: "1.89915px", height: "1.89915px", opacity: 0.927541, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9800" style={{top: "71.7877%", left: "5.64911%", width: "1.98469px", height: "1.98469px", opacity: 0.966463, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-9900" style={{top: "43.4685%", left: "23.06%", width: "2.95501px", height: "2.95501px", opacity: 0.284274, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.91002px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10000" style={{top: "19.9064%", left: "62.7253%", width: "2.28854px", height: "2.28854px", opacity: 0.957107, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.57708px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10100" style={{top: "30.5891%", left: "33.5583%", width: "2.73501px", height: "2.73501px", opacity: 0.774693, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.47001px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10200" style={{top: "23.33%", left: "60.7174%", width: "1.04549px", height: "1.04549px", opacity: 0.929586, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10300" style={{top: "40.7005%", left: "76.6067%", width: "1.60188px", height: "1.60188px", opacity: 0.478274, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10400" style={{top: "0.274267%", left: "22.5673%", width: "1.4905px", height: "1.4905px", opacity: 0.608152, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10500" style={{top: "83.087%", left: "98.9074%", width: "1.2216px", height: "1.2216px", opacity: 0.471302, backgroundColor: "purple", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10600" style={{top: "29.1913%", left: "70.6459%", width: "1.18304px", height: "1.18304px", opacity: 0.404302, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10700" style={{top: "17.2088%", left: "67.323%", width: "2.97903px", height: "2.97903px", opacity: 0.872195, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.95806px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10800" style={{top: "89.4731%", left: "54.832%", width: "2.5006px", height: "2.5006px", opacity: 0.937279, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 5.00121px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-10900" style={{top: "60.9701%", left: "26.3297%", width: "1.77529px", height: "1.77529px", opacity: 0.991239, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11000" style={{top: "65.0608%", left: "60.1262%", width: "2.39311px", height: "2.39311px", opacity: 0.760601, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.78622px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11100" style={{top: "0.0391078%", left: "98.8724%", width: "2.4539px", height: "2.4539px", opacity: 0.68751, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.9078px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11200" style={{top: "63.2508%", left: "75.6882%", width: "2.22318px", height: "2.22318px", opacity: 0.555995, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.44636px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11300" style={{top: "95.7138%", left: "41.0456%", width: "1.44433px", height: "1.44433px", opacity: 0.843454, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11400" style={{top: "36.9738%", left: "22.3358%", width: "2.17487px", height: "2.17487px", opacity: 0.999802, backgroundColor: "blue", boxShadow: "rgba(59, 130, 246, 0.8) 0px 0px 4.34974px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11500" style={{top: "75.0149%", left: "55.3469%", width: "2.75351px", height: "2.75351px", opacity: 0.419658, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.50702px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11600" style={{top: "61.5827%", left: "90.4136%", width: "1.82643px", height: "1.82643px", opacity: 0.615318, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11700" style={{top: "2.33121%", left: "83.7671%", width: "1.76571px", height: "1.76571px", opacity: 0.964915, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11800" style={{top: "42.6553%", left: "62.2765%", width: "2.91087px", height: "2.91087px", opacity: 0.975707, backgroundColor: "purple", boxShadow: "rgba(149, 76, 233, 0.8) 0px 0px 5.82174px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-11900" style={{top: "50.349%", left: "34.8113%", width: "2.20796px", height: "2.20796px", opacity: 0.73471, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.41591px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-12000" style={{top: "73.9802%", left: "74.5207%", width: "1.15064px", height: "1.15064px", opacity: 0.914532, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-12100" style={{top: "88.4218%", left: "78.7637%", width: "1.11102px", height: "1.11102px", opacity: 0.997011, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-12200" style={{top: "13.0088%", left: "60.4924%", width: "1.81002px", height: "1.81002px", opacity: 0.952373, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-12300" style={{top: "27.4805%", left: "82.9123%", width: "1.00038px", height: "1.00038px", opacity: 0.708319, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-12400" style={{top: "65.2505%", left: "74.2083%", width: "2.62995px", height: "2.62995px", opacity: 0.218808, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.25991px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-12500" style={{top: "99.9579%", left: "31.6382%", width: "1.08929px", height: "1.08929px", opacity: 0.716585, backgroundColor: "blue", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-12600" style={{top: "62.8414%", left: "12.6976%", width: "1.0557px", height: "1.0557px", opacity: 0.860808, backgroundColor: "white", boxShadow: "none"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-12700" style={{top: "93.9255%", left: "65.8464%", width: "2.62238px", height: "2.62238px", opacity: 0.973198, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 5.24477px"}}></div>
        <div className="absolute rounded-full animate-twinkle animate-delay-12800" style={{top: "92.6923%", left: "62.6229%", width: "2.29105px", height: "2.29105px", opacity: 0.918925, backgroundColor: "white", boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 4.58209px"}}></div>

        {/* Add extra stars around the edges */}
        {edgeStars.map((star, index) => (
          <div 
            key={`edge-star-${index}`} 
            className={`absolute rounded-full animate-twinkle animate-delay-${Math.floor(star.delay * 1000)}`} 
            style={{
              top: star.top, 
              left: star.left, 
              width: `${star.size}px`, 
              height: `${star.size}px`, 
              opacity: star.opacity, 
              backgroundColor: Math.random() > 0.7 ? "purple" : Math.random() > 0.5 ? "blue" : "white",
              boxShadow: star.size > 1.8 ? `rgba(255, 255, 255, 0.5) 0px 0px ${star.size * 2}px` : "none"
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StarryBackground;
