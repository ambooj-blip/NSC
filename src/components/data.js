import shark from "../assets/shark.png";
import code from "../assets/code.png";
import binary from "../assets/binary.png";
import pubg from "../assets/pubg.png"
import bollywood from "../assets/bollywood.png";
import candid from "../assets/candidpng.png";
import cinema from "../assets/cinema.png";
import volleyball from "../assets/volleyball.png";
import script from "../assets/script.png";
import dancing from "../assets/dancing.png";
import debate from "../assets/debate.png";
import bkball from "../assets/bkball.jpg";
import volleyballQR from "../assets/volleyballQR.jpg";
import rang from "../assets/rang.jpg";
import movie from "../assets/movie.jpg";
import guitar from "../assets/guitar.png";
import painting from "../assets/painting.png";
import Tractate from "../assets/Tractate.webp";
import basketballQR from '../assets/basketballQR.jpg';
import TugOfWar from '../assets/TOW.webp';

export const eventFields = {
  1: [
    // { name: "teamName", type: "text" },
    { name: "teamSize", type: "select", options: ["1", "2", "3","4"] },
    // { name: "preferredLanguage", type: "select", options: ["JavaScript", "Python", "Java"] },
  ],
  2: [
    // { name: "performanceType", type: "select", options: ["Dance", "Drama"] },
    { name: "teamSize", type: "select", options: ["1", "2", "3", "4","5"] },
    // { name: "songChoice", type: "text" },
  ],
  
  3: [
    { name: "Society Name", type: "text" },
    { name: "teamSize", type: "select", options: ["14", "15", "16","17","18","19","20","21","22"] }, // Changed from radio to select for consistency
  ],
  4: [
    { name: "teamSize", type: "select", options: ["4"] }, // Basketball: Fixed team size per standard rules
  ],
  5: [
    { name: "teamSize", type: "select", options: ["2"] },
    // { name: "industry", type: "select", options: ["Tech", "Health", "Finance"] },
  ],
  6: [
    { name: "Society Name", type: "text" },
    { name: "teamSize", type: "select", options: ["5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20"] },
    // { name: "photoTheme", type: "text" },
  ],
  7: [
    // { name: "filmTitle", type: "text" },
    // { name: "teamSize", type: "select", options: ["3", "4", "5", "6"] },
    // { name: "teamSize", type: "select", options: ["3", "4", "5", "6"] },
    // { name: "genre", type: "select", options: ["Drama", "Comedy", "Action"] },
  ],
  8: [
    { name: "Device", type: "select", options: ["Mobile", "DSLR"] },
  ],
  9: [
    // { name: "danceStyle", type: "select", options: ["Hip-Hop", "Contemporary", "Ballet"] },
    // { name: "groupSize", type: "select", options: ["1", "2", "3", "4", "5", "6"] },
  ],
  10: [
    { name: "teamSize", type: "select", options: ["6","7","8"] }, // Volleyball: Fixed team size per standard rules
  ],
  11: [{ name: "Movie Title", type: "text" }],
  
};

export const eventsData = [
  {
    id: 1,
    name: "Battle Bytes",
    image: pubg,
    shortDescription: "Compete in an intense BGMI mobile gaming showdown!",
    longDescription: "A thrilling BGMI tournament where players battle it out on mobile devices to prove their gaming prowess.",
    time: "TBH",
    venue: "10:00 AM",
    dates: ["2026-04-11"],
    rules: [
      "Fair Play: No cheating, hacking, or use of third-party software.",
      "Device Restrictions: Players must use mobile devices (some tournaments may allow tablets/emulators).",
      "Game Version: All players must use the latest version of BGMI.",
      "Player Conduct: No abusive language, toxicity, or unsportsmanlike behavior.",
      "Team Composition: Teams should have the required number of players (usually 4 per squad).",
    ],
    prize: "TBD",
    contact: ["Ishaan: 93548 55625", "Tushar: 78271 15042"],
    isRegistrationOver: false,
  },
  {
    id: 2,
    name: "Shark Tank",
    image: shark,
    shortDescription: "Pitch your innovative ideas to the sharks!",
    longDescription: "Present your startup idea to a panel of judges in a Shark Tank-inspired competition for students.",
    time: "TBD",
    venue: "10:00 AM",
    dates: ["2026-04-11"],
    rules: [
      "Open to undergraduate and postgraduate students.",
      "Teams can consist of 1 to 5 members.",
      "Each participant can only be part of one team.",
      "No changes to team composition are allowed after registration.",
      "Teams must register by the specified deadline.",
      "A team leader must be designated during registration.",
      "Registration details should include team member names, contact information, and a brief description of the idea.",
      "Teams present their ideas to a panel of judges through PPT.",
      "Time limit for presentations: 5-10 minutes.",
      "Visual aids (e.g., slides, prototypes) are allowed.",
      "Judges may ask questions and provide feedback.",
      "Visual aids such as slides or prototypes must be prepared in advance.",
      "Teams must adhere strictly to time limits; exceeding the limit will lead to penalty points.",
      "All team members must participate in the presentation.",
    ],
    prize: "TBD",
    contact: ["Hiya: 965073321", "Darshita: 9810748780"],
    isRegistrationOver: false,
  },
  {
    id: 3,
    name: "Rangmanch",
    image: rang,
    shortDescription: "Stage a powerful Nukkad Natak with a social message!",
    longDescription: "A street play competition where teams deliver impactful performances with a strong social message in Hindi.",
    time: "TBD",
    venue: "10:00 AM",
    dates: ["2026-04-11"],
    rules: [
      "Each team must have 18 to 20 members (including helpers).",
      "Minimum: 20 minutes, Maximum: 22 minutes (including setup time).",
      "Prelims Round: To qualify for the final competition, teams must clear the Prelims Round.",
      "Prelims Round: Teams must submit a 10-minute, unedited, one-take video of their Nukkad Natak.",
      "Prelims Round: No cuts, transitions, or edits are allowed in the video.",
      "Prelims Round: Last date for submission: 31st March 2026.",
      "Prelims Round: Only shortlisted teams will proceed to the final competition.",
      "Theme: The act should deliver a strong social message.",
      "Language: Performances must be in Hindi.",
      "Judging Criteria: Script & Content - Well-structured and impactful storytelling.",
      "Judging Criteria: Social Message - Clear, strong, and thought-provoking.",
      "Judging Criteria: Creativity & Execution - Unique presentation and performance quality.",
      "Judging Criteria: Time Adherence - Strictly within the given time limit.",
      "Judging Criteria: Teamwork & Coordination - Well-rehearsed and synchronized performance.",
      "Performance Guidelines: Allowed - Musical instruments (Drums, Dhol, Flute, etc.).",
      "Performance Guidelines: Not Allowed - Pre-recorded music, microphones, or any electronic devices.",
      "Performance Guidelines: Trigger Warnings - Must be provided for sensitive topics in the act.",
      "Note: Any form of offensive, defamatory, or inappropriate content will lead to disqualification.",
      "Note: Failure to adhere to the given rules and regulations will lead to disqualification.",
    ],
    prize: "TBD",
    contact: [
      "Tashmeen Kaur: 9354379839",
      "Ira Sharma: 85958 07792",
      "Khushi Kaushik: 83758 74982",
      "Kanak Bansal: 82092 92021",
    ],
    isRegistrationOver: false,
  },
//   {
//     id: 4,
//     name: "Volleyball",
//     image: bkball,
//     shortDescription: "Dominate the court in a 3x3 basketball showdown!",
//     longDescription: "A fast-paced 3x3 basketball tournament played on half a court with one basket.",
//     time: "TBD",
//     venue: "10:00 AM",
//     dates: ["2026-04-10", "2026-04-11"],
//     rules: [
// "Each team shall consist of no more than 6 players on the court and up to 6 substitute players.",
// "A coin toss shall determine which team gets the first serve. The team that wins the toss may choose to serve, receive, or select the side of the court.",
// "Each team is allowed a maximum of three touches to return the ball to the opponent’s side.",
// "A block does not count as one of the three touches.",
// "A player cannot hit the ball twice consecutively, except after a block.",
// "The ball must cross the net within the court boundaries to be considered in play.",
// "A point is awarded on every rally (Rally Point System), regardless of which team served.",
// "A match shall consist of the best of 3 sets unless otherwise specified by the organizers.",
// "The first team to reach 25 points with at least a 2-point lead wins the set.",
// "If the match reaches a deciding third set, the set shall be played to 15 points, with at least a 2-point lead required to win.",
// "Players must rotate clockwise each time their team wins the serve from the opponent.",
// "Touching the net during play or crossing the center line illegally shall result in a fault.",
// "The ball is considered out if it lands outside the boundary lines, touches the antenna, or fails to cross the net properly.",
// "Time-outs may be taken by each team as permitted by the organizers or referees.",
//     ],
//     prize: "TBD",
//     contact: ["Vijay: 72173 52469", "Harsh: 79064 27749"],
//     requiresPayment: true,
//     registrationFee: 700,
//     qrCode: basketballQR,
//     isRegistrationOver: true,
//   },
  {
    id: 5,
    name: "War of Words",
    image: debate,
    shortDescription: "Debate your way to victory!",
    longDescription: "A debate competition where participants argue with facts, fluency, and creativity in English or Hindi.",
    time: "TBD",
    venue: "10:00 AM",
    dates: ["2026-04-11"],
    rules: [
      "Topic: Topic will be announced on the spot.",
      "Time Limit: Each speaker gets 5 minutes to present.",
      "Cross-Questioning: Allowed with clear, fair, and relevant questions.",
      "Content: Facts must be accurate and well-researched.",
      "Fluency: Participants must speak coherently in either English or Hindi.",
      "Creativity: Evaluated on uniqueness, clarity, and confident delivery.",
      "Preparation Time: 15 minutes before the debate.",
      "Our esteemed judges' decisions will be final.",
    ],
    prize: "TBD",
    contact: ["Navya: 78277 76854", "Tarushi: 92117 90589"],
    isRegistrationOver: false,
  },
  {
    id: 6,
    name: "Fandango",
    image: dancing,
    shortDescription: "Dance your heart out in this vibrant competition!",
    longDescription: "A dance event where teams from colleges showcase their moves within a 10-minute limit.",
    time: "TBD",
    venue: "10:00 AM",
    dates: ["2026-04-10"],
    rules: [
      "Each college should only send one team to represent them.",
      "Stage limit is 5 to 20 members.",
      "Song limit is 3 to 10 minutes.",
      "Maximum time limit for dance will be 10 mins.",
      "All teams are requested to send their track prior 4-5 days.",
      "All participants must bring their Institute's ID cards which they will be required to present at the registration desk before the commencement of the event.",
      "Decision of the judges will be final and binding on all teams and no objections shall be entertained.",
      "For backup please bring your track in pen drive.",
      "T&C: Any kind of cheating will lead to disqualification.",
      "THERE WILL BE NO PARTICIPATION FEE.",
    ],
    prize: "TBD",
    contact: ["Gunshita Varun: 9873760414", "Sourav: 9871169532", "Rohit: 98976 83764"],
    isRegistrationOver: false,
  },
  {
    id: 7,
    name: "Tractate",
    image: Tractate,
    shortDescription: "",
    longDescription: "",
    time: "TBD",
    venue: "10:00 AM",
    dates: ["2026-04-11"],
    rules: [
      
    ],
    prize: "TBD",
    contact: ["Lakshita: 87440 47511", "Kanishka: 98100 41645"],
    isRegistrationOver: false,
  },
  {
    id: 8,
    name: "Candid Moments",
    image: candid,
    shortDescription: "Capture the essence of NSC BVICAM 2025 through photography!",
    longDescription: "Join us in capturing the emotions and highlights of NSC BVICAM 2025 through your lens in this photography competition.",
    time: "Submissions: 12 PM - 2 PM",
    venue: "10:00 AM",
    dates: ["2026-04-11"],
    Theme: "",
    rules: [
      "Eligibility: The event is open to photographers of all levels, ages, and nationalities.",
      "Registration: Participants must register online or offline by [insert date] to participate in the event.",
      "Devices: Any device, whether a mobile phone or professional camera, is allowed.",
      "Image Format: Submitted images must be in JPEG format.",
      "Image Resolution: Images must have a minimum resolution of 16:9 aspect ratio (horizontal).",
      "Image Editing: Basic editing (e.g., brightness, contrast, saturation) is allowed, but excessive manipulation or tampering with the image is not permitted.",
      "Submission Timing: Submissions will open at 12 pm and close at 2 pm.",
      "Image Submission: Participants can submit one image per category.",
      "Note: Submissions must include your name (e.g., Revant_bvicam).",
      "Judging Criteria: Images will be judged based on creativity, technical skills, and composition.",
      "Judging Panel: A panel of three judges will select the winners.",
      "Awards: Winners will receive cash prizes, and participants will receive a certificate.",
      "Note: The metadata of your image will be checked to ensure the originality of your submission.",
      "Copyright: Participants retain the copyright to their submitted images.",
      "Usage: By participating, participants grant the event organizers permission to use their images for promotional purposes.",
    ],
    prize: "Cash prizes and certificates",
    contact: ["Revant: 8557751703", "Somil: 9205337823", "Kshitiz: 9910193041"],
    isRegistrationOver: false,
  },
  {
    id: 9,
    name: "CODE AVENGERS",
    image: code,
    shortDescription: "Test your coding skills in a thrilling two-round competition!",
    longDescription: "Challenge yourself with debugging and coding problems in this epic Code Avengers showdown featuring two rounds.",
    time: "Round 1: 30 mins, Round 2: 2 hrs",
    venue: "10:00 AM",
    dates: ["2026-04-11"],
    rules: [
     
      "Round 1: Debugging Challenge (Elimination Round)",
      "1: Participants will be given 5 code snippets with bugs. They must identify the error and suggest corrections without executing the code.",
      "2: No execution of code—only logical debugging based on syntax, logic, and conceptual understanding.",
      "3: Each bug correctly identified and fixed earns points.",
      "4: Partial credit may be given for correctly identifying the error but incorrect fixes.",
      "5: Top X% of participants (or a fixed number) with the highest scores advance to Round 2.",
      "6: Time limit: 30 minutes",
      "Round 2: Final Coding Contest",
      "1: This is the main coding challenge with 3 problems of varying difficulty. Participants must solve at least 2 problems to qualify for ranking.",
      "2: Time Limit: 2 hours",
      "3: Allowed Languages: C, C++, Java, Python",
      "4: Evaluation Criteria: Correctness of solution, Efficiency (Time Complexity), Code readability and best practices.",
      "5: Participants must submit their solutions within the given time frame.",
      "6: Use of AI tools (e.g., ChatGPT, Copilot) is strictly prohibited.",
    ],
    prize: "Exciting rewards for top coders",
    contact: [
      "Pranav Pathak: 9582349597",
      "Pratham Bhatia: 7048575053",
      "Amrendram: 96258 54106",
      "Deepanshu: 85956 75015",
    ],
    isRegistrationOver: false,
  },
  {
    id: 10,
    name: "Volleyball",
    image: volleyball,
    shortDescription: "Spike your way to victory in a thrilling volleyball match!",
    longDescription: "A competitive volleyball tournament where teams showcase their skills on the court.",
    time: "TBD",
    venue: "10:00 AM",
    dates: ["2026-04-10", "2026-04-11"],
    rules: [
      "Each team shall consist of 6 players (plus up to 4 substitutes).",
      "A coin toss determines the first serve.",
      "Teams must adhere to fair play and sportsmanship guidelines.",
      "Registration fee must be paid and receipt uploaded before registration.",
      "Registration fees: ₹1000 per team. Receipt must be uploaded during registration.",
    ],
    prize: "TBD",
    contact: ["Ravi: 9876543210", "Neha: 8765432109"],
    requiresPayment: true,
    registrationFee: 1000,
    qrCode: volleyballQR,
    isRegistrationOver: false,
  },
  {
    id: 11,
    name: "Cine Blitz",
    image: cinema,
    shortDescription: "Showcase Your Vision, Craft Stories, Compete & Conquer!",
    longDescription: "Showcase your filmmaking skills by creating original, high-quality short films or documentaries that captivate audiences and impress judges with creativity and storytelling.",
    time: "TBD",
    venue: "10:00 AM",
    dates: ["2026-04-11"],
    rules: [
      "Submit your entry via Google Drive.",
      "Open to college students (must carry a valid College ID).",
      "Multiple teams from the same institution allowed (one submission per team and registration should be made separately).",
      "No theme restriction – only short films or documentaries accepted.",
      "No withdrawals after submission.",
      "Duration: 5-10 minutes.",
      "Must be original, high-quality, and watermark-free.",
      "Obscene or inappropriate content will lead to disqualification.",
      "Proper credits for cast & crew required.",
      "Non-English/Hindi films must include English subtitles.",
      "4 to 5 members should be present during the Prize Distribution Ceremony (On-Campus) to claim prizes.",
      "Films can be recorded via Mobile/Camera.",
      "File Size: Minimum 8 GB, Maximum 10 GB.",
      "Format: MP4.",
      "Synopsis of the Film/Documentary must be submitted.",
      "Script of the Film/Documentary must be submitted.",
      "Poster of the Film/Documentary must be submitted.",
      "Last date of submission: 1st April 2026.",
      "Time Limit: Each speaker gets 5 minutes to present.",
      "Cross-Questioning: Allowed with clear, fair, and relevant questions.",
      "Content: Facts must be accurate and well-researched.",
      "Fluency: Participants must speak coherently in either English or Hindi.",
      "Creativity: Evaluated on uniqueness, clarity, and confident delivery.",
      "Preparation Time: 15 minutes before the debate.",
      "Our esteemed judges' decisions will be final."
    ],
    prize: "TBD",
    contact: ["Navya: 78277 76854", "Tarushi: 92117 90589"],
    isRegistrationOver: false,
  },
  {
    id: 12,
    name: "Tug of War",
    image: TugOfWar,
    shortDescription: "Showcase Your Strength, Teamwork, and Strategy in an Epic Tug of War Battle!",
    longDescription: "A thrilling Tug of War competition where teams test their strength, teamwork, and strategy to pull the rope to victory.",
    venue: "10:00 AM",
    dates: ["2026-04-11"],
    rules: [
      "Each team shall consist of 10 members (plus up to 5 substitutes).",
      "A coin toss determines the first pull.",
      "Teams must adhere to fair play and sportsmanship guidelines.",
    ],
    prize: "TBD",
    contact: ["Navya: 78277 76854", "Tarushi: 92117 90589"],
    isRegistrationOver: false,
  },
];

export const events = [
  { 
    name: "Code Avengers", 
    time: "10:00 AM ", 
    dates: ["2026-04-11"],
    heads: [
      { name: "Deepanshu", mobile: "+91 8595675015" },
      { name: "Pranav", mobile: "+91 9582349597" },
    ] 
  },
  { 
    name: "Battle Bytes", 
    time: "10:00 AM ", 
    dates: ["2026-04-11"],
    heads: [
      { name: "Tushar", mobile: "+91 7827115042" },
      { name: "Prashant", mobile: "+91 9311314126" },
    ] 
  },
  { 
    name: "Shark Tank", 
    time: "10:00 AM ", 
    dates: ["2026-04-11"],
    heads: [
      { name: "Hiya", mobile: "+91 9650733212" },
      { name: "Darshita", mobile: "+91 9810748780" },
    ] 
  },
  { 
    name: "Volley Ball",
    time: "10:00 AM ", 
    dates: ["2026-04-10", "2026-04-11"],
    heads: [
      { name: "Ujjwal", mobile: "+91 7303782547" },
    ] 
  },
    // { 
    //   name: "BasketBall", 
    //   time: "9:00 AM ", 
    //   dates: ["2026-04-10", "2026-04-11"],
    //   heads: [
    //     { name: "Vijay", mobile: "+91 7217352469" },
    //     { name: "Harsh", mobile: "+91 7906427749" },
    //   ] 
    // },
  { 
    name: "Rangmanch", 
    time: "10:00 AM ", 
    dates: ["2026-04-11"],
    heads: [
      { name: "Tashmeen", mobile: "+91 9354379839" },
      { name: "Ira", mobile: "+91 8595807792" },
    ] 
  },
  { 
    name: "Candid Moments", 
    time: "10:00 AM ", 
    dates: ["2026-04-11"],
    heads: [
      { name: "Revant", mobile: "+91 8447751703" },
      { name: "Somil", mobile: "+91 9205337823" },
    ] 
  },
  { 
    name: "TRACTATE", 
    time: "10:00 AM ", 
    dates: ["2026-04-11"],
    heads: [
      { name: "Lakshita", mobile: "+91 8744047511" },
      { name: "Kanishka", mobile: "+91 9810041645" },
    ] 
  },
  { 
    name: "War Of Words", 
    time: "10:00 AM ", 
    dates: ["2026-04-11"],
    heads: [
      { name: "Navya", mobile: "+91 7827776854" },
      { name: "Tarushi", mobile: "+91 9211790589" },
    ] 
  },
  { 
    name: "Fandango", 
    time: "10:00 AM ", 
    dates: ["2026-04-10"],
    heads: [
      { name: "Gunshita", mobile: "+91 9873760414"},
      { name: "Sourav", mobile: "+91 9871169532" },
    ] 
  },
  { 
    name: "Cine Blitz", 
    time: "10:00 AM ", 
    dates: ["2026-04-11"],
    heads: [
      { name: "Vanshika", mobile: "+91 9990354522"},
    ] 
  },
   { 
    name: "Tug Of War", 
    time: "10:00 AM ", 
    dates: ["2026-04-11"],
    heads: [
      { name: "Lakshita", mobile: "+91 8744047511" },
      { name: "Kanishka", mobile: "+91 9810041645" },
    ] 
  },
];


//dummy commit
