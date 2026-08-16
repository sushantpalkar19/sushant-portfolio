const fs = require('fs');
const path = require('path');
const sharp = require(path.resolve('node_modules/sharp'));

// Output Directories
const icuDir = path.resolve('public/projects/icu-monitoring');
const examDir = path.resolve('public/projects/exam-management');
const schoolDir = path.resolve('public/projects/school-learning');

[icuDir, examDir, schoolDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Common SVG Wrapper Helper
function makeSvgHeader(bgColor1 = "#060914", bgColor2 = "#0b1226", gridColor = "#1e293b") {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor1}" />
      <stop offset="50%" stop-color="${bgColor2}" />
      <stop offset="100%" stop-color="${bgColor1}" />
    </linearGradient>

    <!-- Generic Card Gradients -->
    <linearGradient id="card-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#091020" stop-opacity="0.95" />
    </linearGradient>

    <!-- Accent Gradients -->
    <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a855f7" />
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>

    <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>

    <linearGradient id="green-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14F195" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>

    <linearGradient id="chart-purple-fill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0.0" />
    </linearGradient>

    <linearGradient id="chart-blue-fill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.0" />
    </linearGradient>

    <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <style>
    .font-sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .font-mono { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; }
  </style>

  <rect width="1600" height="1000" fill="url(#bg-grad)" />

  <g stroke="${gridColor}" stroke-width="0.75" stroke-opacity="0.3">
    ${Array.from({ length: 33 }).map((_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="1000" />`).join('')}
    ${Array.from({ length: 21 }).map((_, i) => `<line x1="0" y1="${i * 50}" x2="1600" y2="${i * 50}" />`).join('')}
  </g>
`;
}

// ===================================================================
// EXAM MANAGEMENT SYSTEM MOCKUPS
// ===================================================================

// Exam 1: Login
const svgExamLogin = `${makeSvgHeader('#080614', '#120d2b', '#2e1065')}
  <!-- Top Bar -->
  <rect x="0" y="0" width="1600" height="64" fill="#0b081a" stroke="#2e1065" stroke-width="1" />
  <g transform="translate(32, 16)">
    <rect width="32" height="32" rx="8" fill="url(#purple-grad)" />
    <!-- Shield Check Icon -->
    <path d="M16 6l10 4v8c0 7-5 11-10 13C11 29 6 25 6 18V10l10-4z" fill="none" stroke="#ffffff" stroke-width="2" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff" letter-spacing="0.5">EXAMPRO <tspan fill="#a855f7">AI PROCTOR</tspan></text>
  </g>
  <g transform="translate(1220, 24)">
    <circle cx="10" cy="10" r="4" fill="#a855f7" filter="url(#glow-purple)" />
    <text x="24" y="14" class="font-mono" font-size="12" fill="#c084fc">v3.1.0 • AI Proctoring &amp; Assessment Engine</text>
  </g>

  <circle cx="800" cy="500" r="320" fill="#8b5cf6" opacity="0.08" filter="url(#glow-purple)" />

  <g transform="translate(520, 140)">
    <rect width="560" height="680" rx="24" fill="#0f0b24" stroke="#2e1065" stroke-width="1.5" />
    <rect width="560" height="680" rx="24" fill="none" stroke="url(#purple-grad)" stroke-width="1" opacity="0.4" />

    <g transform="translate(248, 44)">
      <circle cx="32" cy="32" r="36" fill="#180e38" stroke="#a855f7" stroke-width="2" filter="url(#glow-purple)" />
      <path d="M22 32l6 6 12-14" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </g>

    <text x="280" y="142" text-anchor="middle" class="font-sans" font-size="24" font-weight="800" fill="#ffffff">Assessment Portal Login</text>
    <text x="280" y="168" text-anchor="middle" class="font-sans" font-size="14" fill="#94a3b8">Secure AI Proctoring &amp; Examination System</text>

    <!-- Role Selector Tabs -->
    <g transform="translate(48, 192)">
      <rect width="464" height="44" rx="10" fill="#090616" stroke="#2e1065" stroke-width="1" />
      <rect x="4" y="4" width="148" height="36" rx="8" fill="#a855f7" />
      <text x="78" y="26" text-anchor="middle" class="font-sans" font-size="13" font-weight="700" fill="#ffffff">Student Portal</text>
      <text x="232" y="26" text-anchor="middle" class="font-sans" font-size="13" fill="#94a3b8">Examiner / Faculty</text>
      <text x="386" y="26" text-anchor="middle" class="font-sans" font-size="13" fill="#94a3b8">Administrator</text>
    </g>

    <!-- Email Field -->
    <g transform="translate(48, 260)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">University Registration ID / Email</text>
      <rect x="0" y="12" width="464" height="52" rx="12" fill="#080514" stroke="#3b0764" stroke-width="1.5" />
      <text x="20" y="44" class="font-mono" font-size="15" fill="#f8fafc">sushant.palkar@university.edu</text>
    </g>

    <!-- Password Field -->
    <g transform="translate(48, 360)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Passcode / Key</text>
      <rect x="0" y="12" width="464" height="52" rx="12" fill="#080514" stroke="#3b0764" stroke-width="1.5" />
      <text x="20" y="44" class="font-sans" font-size="20" fill="#a855f7" letter-spacing="4">• • • • • • • • • • • •</text>
    </g>

    <!-- Exam Key Code -->
    <g transform="translate(48, 460)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Scheduled Exam Access Code (Optional)</text>
      <rect x="0" y="12" width="464" height="52" rx="12" fill="#080514" stroke="#3b0764" stroke-width="1.5" />
      <text x="20" y="44" class="font-mono" font-size="15" fill="#c084fc">EXAM-2026-CS802-FINAL</text>
    </g>

    <g transform="translate(48, 540)">
      <rect width="464" height="40" rx="8" fill="#170933" stroke="#8b5cf6" stroke-width="1" />
      <circle cx="24" cy="20" r="5" fill="#a855f7" />
      <text x="38" y="24" class="font-mono" font-size="12" fill="#e9d5ff">Webcam &amp; Mic Hardware Check: Passed (1080p WebRTC Active)</text>
    </g>

    <g transform="translate(48, 600)">
      <rect width="464" height="56" rx="14" fill="url(#purple-grad)" filter="url(#glow-purple)" />
      <text x="232" y="35" text-anchor="middle" class="font-sans" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="0.5">LAUNCH PROCTORED EXAM SESSION →</text>
    </g>
  </g>
</svg>`;

// Exam 2: Dashboard
const svgExamDashboard = `${makeSvgHeader('#080614', '#120d2b', '#2e1065')}
  <!-- Top Navigation Bar -->
  <rect x="0" y="0" width="1600" height="72" fill="#0b081a" stroke="#2e1065" stroke-width="1" />
  <g transform="translate(32, 20)">
    <rect width="32" height="32" rx="8" fill="url(#purple-grad)" />
    <path d="M16 6l10 4v8c0 7-5 11-10 13C11 29 6 25 6 18V10l10-4z" fill="none" stroke="#ffffff" stroke-width="2" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">EXAMPRO <tspan fill="#a855f7">AI PROCTOR</tspan></text>
    <text x="220" y="22" class="font-sans" font-size="14" fill="#64748b">|</text>
    <text x="240" y="22" class="font-sans" font-size="14" font-weight="600" fill="#cbd5e1">Exam Administrator Dashboard</text>
  </g>

  <!-- Top Metrics Row -->
  <g transform="translate(32, 96)">
    <rect width="360" height="110" rx="16" fill="#120c2b" stroke="#2e1065" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#c084fc">TOTAL EXAMS CONDUCTED</text>
    <text x="24" y="78" class="font-sans" font-size="32" font-weight="800" fill="#ffffff">148 <tspan font-size="16" fill="#94a3b8">This Semester</tspan></text>
  </g>

  <g transform="translate(424, 96)">
    <rect width="360" height="110" rx="16" fill="#120c2b" stroke="#8b5cf6" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#c084fc">ACTIVE LIVE EXAMS NOW</text>
    <text x="24" y="78" class="font-sans" font-size="32" font-weight="800" fill="#a855f7">03 <tspan font-size="16" fill="#c084fc">412 Students Online</tspan></text>
    <circle cx="316" cy="42" r="10" fill="#a855f7" filter="url(#glow-purple)" />
  </g>

  <g transform="translate(816, 96)">
    <rect width="360" height="110" rx="16" fill="#120c2b" stroke="#2e1065" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#c084fc">AVG SYSTEM PASS RATE</text>
    <text x="24" y="78" class="font-sans" font-size="32" font-weight="800" fill="#14F195">86.4% <tspan font-size="14" fill="#94a3b8">↑ +3.2%</tspan></text>
  </g>

  <g transform="translate(1208, 96)">
    <rect width="360" height="110" rx="16" fill="#120c2b" stroke="#2e1065" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#c084fc">AI INTEGRITY ACCURACY</text>
    <text x="24" y="78" class="font-sans" font-size="32" font-weight="800" fill="#38bdf8">99.2% <tspan font-size="14" fill="#94a3b8">Zero False Flag</tspan></text>
  </g>

  <!-- Main Active Exams Table -->
  <g transform="translate(32, 236)">
    <rect width="1136" height="730" rx="18" fill="#0e0a24" stroke="#2e1065" stroke-width="1.5" />
    <rect width="1136" height="52" rx="18" fill="#160e36" stroke="#2e1065" stroke-width="1" />
    <text x="24" y="32" class="font-sans" font-size="16" font-weight="700" fill="#ffffff">Active &amp; Scheduled Examination Roster</text>

    <g transform="translate(900, 10)">
      <rect width="210" height="32" rx="8" fill="url(#purple-grad)" />
      <text x="105" y="21" text-anchor="middle" class="font-sans" font-size="13" font-weight="700" fill="#ffffff">+ CREATE NEW EXAM</text>
    </g>

    <!-- Table Column Headers -->
    <g transform="translate(24, 80)" class="font-mono" font-size="12" fill="#c084fc">
      <text x="0" y="0">EXAM TITLE / CODE</text>
      <text x="320" y="0">SUBJECT / DEPT</text>
      <text x="540" y="0">DURATION</text>
      <text x="680" y="0">CANDIDATES</text>
      <text x="850" y="0">AI PROCTOR</text>
      <text x="1000" y="0">STATUS</text>
    </g>

    <!-- Row 1 -->
    <g transform="translate(24, 110)">
      <rect width="1088" height="80" rx="12" fill="#140c30" stroke="#3b0764" stroke-width="1" />
      <text x="20" y="34" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Advanced Database Systems (CS802)</text>
      <text x="20" y="56" class="font-mono" font-size="12" fill="#94a3b8">Final Term • 100 Marks</text>
      <text x="320" y="44" class="font-sans" font-size="14" fill="#cbd5e1">Computer Science</text>
      <text x="540" y="44" class="font-mono" font-size="14" fill="#cbd5e1">120 Mins</text>
      <text x="680" y="44" class="font-mono" font-size="14" fill="#a855f7">142 Enrolled</text>
      <rect x="850" y="24" width="100" height="26" rx="13" fill="#230d47" stroke="#a855f7" stroke-width="1" />
      <text x="900" y="41" text-anchor="middle" class="font-mono" font-size="11" fill="#c084fc">STRICT AI</text>
      <rect x="990" y="24" width="80" height="26" rx="13" fill="#062822" stroke="#14F195" stroke-width="1" />
      <text x="1030" y="41" text-anchor="middle" class="font-mono" font-size="11" fill="#14F195">LIVE NOW</text>
    </g>

    <!-- Row 2 -->
    <g transform="translate(24, 205)">
      <rect width="1088" height="80" rx="12" fill="#100a26" stroke="#2e1065" stroke-width="1" />
      <text x="20" y="34" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Operating Systems &amp; Kernels (CS604)</text>
      <text x="20" y="56" class="font-mono" font-size="12" fill="#94a3b8">Midterm Exam • 50 Marks</text>
      <text x="320" y="44" class="font-sans" font-size="14" fill="#cbd5e1">Computer Science</text>
      <text x="540" y="44" class="font-mono" font-size="14" fill="#cbd5e1">90 Mins</text>
      <text x="680" y="44" class="font-mono" font-size="14" fill="#a855f7">98 Enrolled</text>
      <rect x="850" y="24" width="100" height="26" rx="13" fill="#230d47" stroke="#a855f7" stroke-width="1" />
      <text x="900" y="41" text-anchor="middle" class="font-mono" font-size="11" fill="#c084fc">STRICT AI</text>
      <rect x="990" y="24" width="80" height="26" rx="13" fill="#071927" stroke="#38bdf8" stroke-width="1" />
      <text x="1030" y="41" text-anchor="middle" class="font-mono" font-size="11" fill="#38bdf8">SCHEDULED</text>
    </g>

    <!-- Row 3 -->
    <g transform="translate(24, 300)">
      <rect width="1088" height="80" rx="12" fill="#100a26" stroke="#2e1065" stroke-width="1" />
      <text x="20" y="34" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Web Application Architecture (CS701)</text>
      <text x="20" y="56" class="font-mono" font-size="12" fill="#94a3b8">Practical Quiz • 30 Marks</text>
      <text x="320" y="44" class="font-sans" font-size="14" fill="#cbd5e1">Information Tech</text>
      <text x="540" y="44" class="font-mono" font-size="14" fill="#cbd5e1">45 Mins</text>
      <text x="680" y="44" class="font-mono" font-size="14" fill="#a855f7">120 Enrolled</text>
      <rect x="850" y="24" width="100" height="26" rx="13" fill="#230d47" stroke="#a855f7" stroke-width="1" />
      <text x="900" y="41" text-anchor="middle" class="font-mono" font-size="11" fill="#c084fc">MODERATE</text>
      <rect x="990" y="24" width="80" height="26" rx="13" fill="#161208" stroke="#f59e0b" stroke-width="1" />
      <text x="1030" y="41" text-anchor="middle" class="font-mono" font-size="11" fill="#f59e0b">GRADING</text>
    </g>
  </g>

  <!-- Right Sidebar AI Proctor Live Feed -->
  <g transform="translate(1208, 236)">
    <rect width="360" height="730" rx="18" fill="#0e0a24" stroke="#2e1065" stroke-width="1.5" />
    <rect width="360" height="52" rx="18" fill="#160e36" stroke="#2e1065" stroke-width="1" />
    <text x="20" y="32" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">AI Proctor Live Feed</text>
    <circle cx="320" cy="26" r="6" fill="#a855f7" filter="url(#glow-purple)" />

    <g transform="translate(16, 75)">
      <rect width="328" height="90" rx="12" fill="#21081a" stroke="#ef4444" stroke-width="1" />
      <text x="16" y="26" class="font-mono" font-size="11" font-weight="700" fill="#ef4444">14:32 — TAB SWITCH FLAG</text>
      <text x="16" y="48" class="font-sans" font-size="13" font-weight="600" fill="#ffffff">Candidate #2041 (CS802 Exam)</text>
      <text x="16" y="68" class="font-sans" font-size="12" fill="#fca5a5">Browser tab lost focus for 4.2 seconds</text>
    </g>

    <g transform="translate(16, 180)">
      <rect width="328" height="90" rx="12" fill="#1c1606" stroke="#f59e0b" stroke-width="1" />
      <text x="16" y="26" class="font-mono" font-size="11" font-weight="700" fill="#f59e0b">14:15 — MULTIPLE FACES DETECTED</text>
      <text x="16" y="48" class="font-sans" font-size="13" font-weight="600" fill="#ffffff">Candidate #1092 (CS802 Exam)</text>
      <text x="16" y="68" class="font-sans" font-size="12" fill="#fde68a">Secondary person detected in webcam frame</text>
    </g>

    <g transform="translate(16, 285)">
      <rect width="328" height="90" rx="12" fill="#091c18" stroke="#14F195" stroke-width="1" />
      <text x="16" y="26" class="font-mono" font-size="11" font-weight="700" fill="#14F195">13:50 — VERIFICATION PASSED</text>
      <text x="16" y="48" class="font-sans" font-size="13" font-weight="600" fill="#ffffff">142 Candidates Biometric Verified</text>
      <text x="16" y="68" class="font-sans" font-size="12" fill="#94a3b8">Facial recognition score &gt; 98.6%</text>
    </g>
  </g>
</svg>`;

// Exam 3: Question Management
const svgExamQuestion = `${makeSvgHeader('#080614', '#120d2b', '#2e1065')}
  <!-- Top Navigation Bar -->
  <rect x="0" y="0" width="1600" height="72" fill="#0b081a" stroke="#2e1065" stroke-width="1" />
  <g transform="translate(32, 20)">
    <rect width="32" height="32" rx="8" fill="url(#purple-grad)" />
    <path d="M16 6l10 4v8c0 7-5 11-10 13C11 29 6 25 6 18V10l10-4z" fill="none" stroke="#ffffff" stroke-width="2" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">EXAMPRO <tspan fill="#a855f7">QUESTION BANK</tspan></text>
  </g>

  <!-- Left Sidebar Question Filters -->
  <g transform="translate(32, 96)">
    <rect width="320" height="870" rx="18" fill="#0e0a24" stroke="#2e1065" stroke-width="1.5" />
    <rect width="320" height="48" rx="18" fill="#160e36" stroke="#2e1065" stroke-width="1" />
    <text x="20" y="30" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Filter Question Bank</text>

    <g transform="translate(20, 70)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#c084fc">Select Subject</text>
      <rect x="0" y="10" width="280" height="40" rx="8" fill="#140c30" stroke="#3b0764" stroke-width="1" />
      <text x="16" y="35" class="font-sans" font-size="13" fill="#ffffff">Advanced Database Systems</text>
    </g>

    <g transform="translate(20, 150)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#c084fc">Question Type</text>
      <rect x="0" y="10" width="280" height="40" rx="8" fill="#140c30" stroke="#3b0764" stroke-width="1" />
      <text x="16" y="35" class="font-sans" font-size="13" fill="#ffffff">Multiple Choice (MCQ)</text>
    </g>

    <g transform="translate(20, 230)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#c084fc">Difficulty Level</text>
      <rect x="0" y="10" width="280" height="40" rx="8" fill="#140c30" stroke="#3b0764" stroke-width="1" />
      <text x="16" y="35" class="font-sans" font-size="13" fill="#ffffff">Hard / Advanced</text>
    </g>
  </g>

  <!-- Main Question Editor Area -->
  <g transform="translate(376, 96)">
    <rect width="1192" height="870" rx="18" fill="#0e0a24" stroke="#2e1065" stroke-width="1.5" />
    <rect width="1192" height="56" rx="18" fill="#160e36" stroke="#2e1065" stroke-width="1" />
    <text x="24" y="35" class="font-sans" font-size="16" font-weight="700" fill="#ffffff">Question Editor &amp; Marking Scheme</text>
    <rect x="1020" y="12" width="140" height="32" rx="8" fill="url(#purple-grad)" />
    <text x="1090" y="33" text-anchor="middle" class="font-sans" font-size="13" font-weight="700" fill="#ffffff">+ ADD QUESTION</text>

    <!-- Question Item Card 1 -->
    <g transform="translate(24, 80)">
      <rect width="1144" height="240" rx="14" fill="#140c30" stroke="#8b5cf6" stroke-width="1.5" />
      <rect width="1144" height="40" rx="14" fill="#1c1142" />
      <text x="20" y="26" class="font-mono" font-size="12" font-weight="700" fill="#a855f7">QUESTION #04 • MCQ • 4 MARKS • HARD DIFFICULTY</text>
      <text x="20" y="70" class="font-sans" font-size="16" font-weight="600" fill="#ffffff">Which of the following isolation levels in relational SQL prevents Phantom Reads during concurrent transactions?</text>

      <!-- Options -->
      <g transform="translate(20, 95)" class="font-sans" font-size="14">
        <rect x="0" y="0" width="530" height="44" rx="8" fill="#0c071d" stroke="#3b0764" stroke-width="1" />
        <text x="16" y="27" fill="#cbd5e1">A. Read Committed</text>

        <rect x="550" y="0" width="530" height="44" rx="8" fill="#062822" stroke="#14F195" stroke-width="1.5" />
        <text x="566" y="27" font-weight="700" fill="#14F195">B. Serializable (CORRECT OPTION ✓)</text>

        <rect x="0" y="54" width="530" height="44" rx="8" fill="#0c071d" stroke="#3b0764" stroke-width="1" />
        <text x="16" y="81" fill="#cbd5e1">C. Repeatable Read</text>

        <rect x="550" y="54" width="530" height="44" rx="8" fill="#0c071d" stroke="#3b0764" stroke-width="1" />
        <text x="566" y="81" fill="#cbd5e1">D. Read Uncommitted</text>
      </g>
    </g>

    <!-- Question Item Card 2 (Coding) -->
    <g transform="translate(24, 340)">
      <rect width="1144" height="240" rx="14" fill="#140c30" stroke="#3b0764" stroke-width="1" />
      <rect width="1144" height="40" rx="14" fill="#1c1142" />
      <text x="20" y="26" class="font-mono" font-size="12" font-weight="700" fill="#38bdf8">QUESTION #05 • SQL CODING • 10 MARKS • MEDIUM</text>
      <text x="20" y="70" class="font-sans" font-size="16" font-weight="600" fill="#ffffff">Write an optimized SQL query using window functions (DENSE_RANK) to find the top 3 highest scoring students per department.</text>
      <rect x="20" y="95" width="1104" height="110" rx="8" fill="#090517" stroke="#2e1065" stroke-width="1" />
      <text x="36" y="125" class="font-mono" font-size="13" fill="#a855f7">SELECT student_id, dept_id, score, DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY score DESC) as rank ...</text>
    </g>
  </g>
</svg>`;

// Exam 4: Results & Analytics
const svgExamResults = `${makeSvgHeader('#080614', '#120d2b', '#2e1065')}
  <!-- Top Navigation Bar -->
  <rect x="0" y="0" width="1600" height="72" fill="#0b081a" stroke="#2e1065" stroke-width="1" />
  <g transform="translate(32, 20)">
    <rect width="32" height="32" rx="8" fill="url(#purple-grad)" />
    <path d="M16 6l10 4v8c0 7-5 11-10 13C11 29 6 25 6 18V10l10-4z" fill="none" stroke="#ffffff" stroke-width="2" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">EXAMPRO <tspan fill="#a855f7">ANALYTICS &amp; RESULTS</tspan></text>
  </g>

  <!-- Top Stat Cards -->
  <g transform="translate(32, 96)">
    <rect width="360" height="100" rx="16" fill="#120c2b" stroke="#2e1065" stroke-width="1.5" />
    <text x="24" y="32" class="font-sans" font-size="12" font-weight="600" fill="#c084fc">TOTAL EXAM SCORE AVG</text>
    <text x="24" y="68" class="font-sans" font-size="28" font-weight="800" fill="#ffffff">82.4 / 100 <tspan font-size="14" fill="#14F195">(Pass Rate 92%)</tspan></text>
  </g>

  <g transform="translate(424, 96)">
    <rect width="360" height="100" rx="16" fill="#120c2b" stroke="#2e1065" stroke-width="1.5" />
    <text x="24" y="32" class="font-sans" font-size="12" font-weight="600" fill="#c084fc">HIGHEST PERCENTILE</text>
    <text x="24" y="68" class="font-sans" font-size="28" font-weight="800" fill="#a855f7">99.4% <tspan font-size="14" fill="#94a3b8">(Rank #1: 99/100)</tspan></text>
  </g>

  <g transform="translate(816, 96)">
    <rect width="360" height="100" rx="16" fill="#120c2b" stroke="#2e1065" stroke-width="1.5" />
    <text x="24" y="32" class="font-sans" font-size="12" font-weight="600" fill="#c084fc">PROCTORED INTEGRITY SCORE</text>
    <text x="24" y="68" class="font-sans" font-size="28" font-weight="800" fill="#38bdf8">98.8% <tspan font-size="14" fill="#14F195">High Trust</tspan></text>
  </g>

  <g transform="translate(1208, 96)">
    <rect width="360" height="100" rx="16" fill="#120c2b" stroke="#2e1065" stroke-width="1.5" />
    <text x="24" y="32" class="font-sans" font-size="12" font-weight="600" fill="#c084fc">FLAGGED SUBMISSIONS</text>
    <text x="24" y="68" class="font-sans" font-size="28" font-weight="800" fill="#ef4444">02 <tspan font-size="14" fill="#fca5a5">Requires Audit</tspan></text>
  </g>

  <!-- Grade Distribution Bar Chart -->
  <g transform="translate(32, 216)">
    <rect width="1136" height="380" rx="18" fill="#0e0a24" stroke="#2e1065" stroke-width="1.5" />
    <rect width="1136" height="48" rx="18" fill="#160e36" stroke="#2e1065" stroke-width="1" />
    <text x="24" y="30" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Cohort Grade Distribution Bell Curve (CS802 Final Exam)</text>

    <!-- Bars -->
    <g transform="translate(80, 80)">
      <!-- 90-100% -->
      <rect x="50" y="60" width="100" height="200" rx="8" fill="url(#purple-grad)" />
      <text x="100" y="50" text-anchor="middle" class="font-mono" font-size="14" font-weight="700" fill="#a855f7">38 Students</text>
      <text x="100" y="280" text-anchor="middle" class="font-sans" font-size="13" fill="#cbd5e1">90 - 100% (A+)</text>

      <!-- 80-89% -->
      <rect x="250" y="20" width="100" height="240" rx="8" fill="url(#purple-grad)" />
      <text x="300" y="10" text-anchor="middle" class="font-mono" font-size="14" font-weight="700" fill="#a855f7">54 Students</text>
      <text x="300" y="280" text-anchor="middle" class="font-sans" font-size="13" fill="#cbd5e1">80 - 89% (A)</text>

      <!-- 70-79% -->
      <rect x="450" y="90" width="100" height="170" rx="8" fill="#6366f1" />
      <text x="500" y="80" text-anchor="middle" class="font-mono" font-size="14" font-weight="700" fill="#818cf8">32 Students</text>
      <text x="500" y="280" text-anchor="middle" class="font-sans" font-size="13" fill="#cbd5e1">70 - 79% (B)</text>

      <!-- 60-69% -->
      <rect x="650" y="170" width="100" height="90" rx="8" fill="#3b0764" />
      <text x="700" y="160" text-anchor="middle" class="font-mono" font-size="14" font-weight="700" fill="#c084fc">12 Students</text>
      <text x="700" y="280" text-anchor="middle" class="font-sans" font-size="13" fill="#cbd5e1">60 - 69% (C)</text>

      <!-- <60% -->
      <rect x="850" y="220" width="100" height="40" rx="8" fill="#ef4444" opacity="0.6" />
      <text x="900" y="210" text-anchor="middle" class="font-mono" font-size="14" font-weight="700" fill="#ef4444">6 Fail</text>
      <text x="900" y="280" text-anchor="middle" class="font-sans" font-size="13" fill="#fca5a5">&lt; 60% (F)</text>
    </g>
  </g>

  <!-- Individual Student Performance Table -->
  <g transform="translate(32, 616)">
    <rect width="1536" height="350" rx="18" fill="#0e0a24" stroke="#2e1065" stroke-width="1.5" />
    <rect width="1536" height="48" rx="18" fill="#160e36" stroke="#2e1065" stroke-width="1" />
    <text x="24" y="30" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Individual Candidate Scorecards &amp; AI Integrity Audit</text>
  </g>
</svg>`;

// ===================================================================
// SCHOOL LEARNING / E-LEARNING PLATFORM MOCKUPS
// ===================================================================

// School 1: Login
const svgSchoolLogin = `${makeSvgHeader('#040b17', '#08162d', '#1e293b')}
  <!-- Top Bar -->
  <rect x="0" y="0" width="1600" height="64" fill="#061022" stroke="#1e293b" stroke-width="1" />
  <g transform="translate(32, 16)">
    <rect width="32" height="32" rx="8" fill="url(#blue-grad)" />
    <!-- Academic Cap Icon -->
    <path d="M16 8L4 14l12 6 12-6-12-6z M8 16.5v4.5c0 2 4 3.5 8 3.5s8-1.5 8-3.5V16.5" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">EDULEARN <tspan fill="#38bdf8">ACADEMIC</tspan></text>
  </g>
  <g transform="translate(1220, 24)">
    <circle cx="10" cy="10" r="4" fill="#38bdf8" filter="url(#glow-blue)" />
    <text x="24" y="14" class="font-mono" font-size="12" fill="#93c5fd">v2.8 • Academic Management &amp; Learning Portal</text>
  </g>

  <circle cx="800" cy="500" r="320" fill="#0284c7" opacity="0.08" filter="url(#glow-blue)" />

  <g transform="translate(520, 140)">
    <rect width="560" height="680" rx="24" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <rect width="560" height="680" rx="24" fill="none" stroke="url(#blue-grad)" stroke-width="1" opacity="0.3" />

    <g transform="translate(248, 44)">
      <circle cx="32" cy="32" r="36" fill="#0d2140" stroke="#38bdf8" stroke-width="2" filter="url(#glow-blue)" />
      <path d="M32 18L16 26l16 8 16-8-16-8z M21 29v6c0 3 5 5 11 5s11-2 11-5v-6" stroke="#ffffff" stroke-width="2" fill="none" />
    </g>

    <text x="280" y="142" text-anchor="middle" class="font-sans" font-size="24" font-weight="800" fill="#ffffff">School Portal Sign In</text>
    <text x="280" y="168" text-anchor="middle" class="font-sans" font-size="14" fill="#94a3b8">Connect with teachers, courses &amp; academic progress</text>

    <!-- Role Switcher -->
    <g transform="translate(48, 192)">
      <rect width="464" height="44" rx="10" fill="#050d1c" stroke="#1e293b" stroke-width="1" />
      <rect x="4" y="4" width="224" height="36" rx="8" fill="#0284c7" />
      <text x="116" y="26" text-anchor="middle" class="font-sans" font-size="13" font-weight="700" fill="#ffffff">Student Account</text>
      <text x="348" y="26" text-anchor="middle" class="font-sans" font-size="13" fill="#94a3b8">Teacher / Staff Portal</text>
    </g>

    <!-- Email -->
    <g transform="translate(48, 260)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Student Roll No / Email</text>
      <rect x="0" y="12" width="464" height="52" rx="12" fill="#050c18" stroke="#1e3a5f" stroke-width="1.5" />
      <text x="20" y="44" class="font-mono" font-size="15" fill="#f8fafc">student.sushant@school.edu</text>
    </g>

    <!-- Password -->
    <g transform="translate(48, 360)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Password</text>
      <rect x="0" y="12" width="464" height="52" rx="12" fill="#050c18" stroke="#1e3a5f" stroke-width="1.5" />
      <text x="20" y="44" class="font-sans" font-size="20" fill="#38bdf8" letter-spacing="4">• • • • • • • • • • • •</text>
    </g>

    <!-- Term -->
    <g transform="translate(48, 460)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Academic Session</text>
      <rect x="0" y="12" width="464" height="52" rx="12" fill="#050c18" stroke="#1e3a5f" stroke-width="1.5" />
      <text x="20" y="44" class="font-sans" font-size="14" font-weight="600" fill="#f8fafc">Spring Term 2026 — Batch IT-A</text>
    </g>

    <g transform="translate(48, 560)">
      <rect width="464" height="56" rx="14" fill="url(#blue-grad)" filter="url(#glow-blue)" />
      <text x="232" y="35" text-anchor="middle" class="font-sans" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="0.5">ENTER LEARNING DASHBOARD →</text>
    </g>
  </g>
</svg>`;

// School 2: Student Dashboard
const svgSchoolDashboard = `${makeSvgHeader('#040b17', '#08162d', '#1e293b')}
  <!-- Top Navigation Bar -->
  <rect x="0" y="0" width="1600" height="72" fill="#061022" stroke="#1e293b" stroke-width="1" />
  <g transform="translate(32, 20)">
    <rect width="32" height="32" rx="8" fill="url(#blue-grad)" />
    <path d="M16 8L4 14l12 6 12-6-12-6z M8 16.5v4.5c0 2 4 3.5 8 3.5s8-1.5 8-3.5V16.5" stroke="#ffffff" stroke-width="2" fill="none" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">EDULEARN <tspan fill="#38bdf8">STUDENT PORTAL</tspan></text>
  </g>

  <!-- Stat Row -->
  <g transform="translate(32, 96)">
    <rect width="360" height="110" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#93c5fd">ENROLLED COURSES</text>
    <text x="24" y="78" class="font-sans" font-size="32" font-weight="800" fill="#ffffff">06 <tspan font-size="16" fill="#94a3b8">Active Subjects</tspan></text>
  </g>

  <g transform="translate(424, 96)">
    <rect width="360" height="110" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#93c5fd">OVERALL ATTENDANCE</text>
    <text x="24" y="78" class="font-sans" font-size="32" font-weight="800" fill="#14F195">94.2% <tspan font-size="16" fill="#94a3b8">Satisfactory</tspan></text>
  </g>

  <g transform="translate(816, 96)">
    <rect width="360" height="110" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#93c5fd">PENDING ASSIGNMENTS</text>
    <text x="24" y="78" class="font-sans" font-size="32" font-weight="800" fill="#f59e0b">02 <tspan font-size="16" fill="#94a3b8">Due This Week</tspan></text>
  </g>

  <g transform="translate(1208, 96)">
    <rect width="360" height="110" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#93c5fd">CUMULATIVE CGPA</text>
    <text x="24" y="78" class="font-sans" font-size="32" font-weight="800" fill="#38bdf8">3.88 <tspan font-size="16" fill="#94a3b8">/ 4.0 Grade</tspan></text>
  </g>

  <!-- Main Enrolled Courses Cards Grid (2 rows of 2) -->
  <g transform="translate(32, 236)">
    <!-- Course 1 -->
    <g transform="translate(0, 0)">
      <rect width="550" height="340" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
      <rect width="550" height="48" rx="16" fill="#0e2242" stroke="#1e293b" stroke-width="1" />
      <text x="20" y="30" class="font-sans" font-size="16" font-weight="700" fill="#ffffff">Mathematics &amp; Calculus III</text>
      <text x="440" y="30" class="font-mono" font-size="12" fill="#38bdf8">MATH-301</text>
      <text x="20" y="80" class="font-sans" font-size="14" fill="#94a3b8">Instructor: Prof. Robert Vance • Room 402</text>
      <text x="20" y="110" class="font-sans" font-size="13" fill="#cbd5e1">Next Class: Tomorrow 10:00 AM (Fourier Series)</text>

      <!-- Progress Bar -->
      <g transform="translate(20, 160)">
        <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Course Completion: 78%</text>
        <rect x="0" y="12" width="510" height="12" rx="6" fill="#040b17" />
        <rect x="0" y="12" width="398" height="12" rx="6" fill="#38bdf8" />
      </g>
    </g>

    <!-- Course 2 -->
    <g transform="translate(586, 0)">
      <rect width="550" height="340" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
      <rect width="550" height="48" rx="16" fill="#0e2242" stroke="#1e293b" stroke-width="1" />
      <text x="20" y="30" class="font-sans" font-size="16" font-weight="700" fill="#ffffff">Computer Networks &amp; Security</text>
      <text x="440" y="30" class="font-mono" font-size="12" fill="#14F195">CS-402</text>
      <text x="20" y="80" class="font-sans" font-size="14" fill="#94a3b8">Instructor: Dr. Sushant Palkar • Lab 3</text>
      <text x="20" y="110" class="font-sans" font-size="13" fill="#cbd5e1">Next Class: Today 02:00 PM (TCP/IP Handshake)</text>

      <g transform="translate(20, 160)">
        <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Course Completion: 92%</text>
        <rect x="0" y="12" width="510" height="12" rx="6" fill="#040b17" />
        <rect x="0" y="12" width="469" height="12" rx="6" fill="#14F195" />
      </g>
    </g>
  </g>

  <!-- Right Sidebar School Announcements -->
  <g transform="translate(1208, 236)">
    <rect width="360" height="730" rx="18" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <rect width="360" height="52" rx="18" fill="#0e2242" stroke="#1e293b" stroke-width="1" />
    <text x="20" y="32" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">School Announcements</text>

    <g transform="translate(16, 75)">
      <rect width="328" height="90" rx="12" fill="#06162d" stroke="#0284c7" stroke-width="1" />
      <text x="16" y="26" class="font-mono" font-size="11" font-weight="700" fill="#38bdf8">FEB 18 — EXAM SCHEDULE</text>
      <text x="16" y="48" class="font-sans" font-size="13" font-weight="600" fill="#ffffff">Mid-Term Examination Dates</text>
      <text x="16" y="68" class="font-sans" font-size="12" fill="#94a3b8">Final timetable published on portal.</text>
    </g>
  </g>
</svg>`;

// School 3: Course Learning Page
const svgSchoolCourse = `${makeSvgHeader('#040b17', '#08162d', '#1e293b')}
  <!-- Top Navigation Bar -->
  <rect x="0" y="0" width="1600" height="72" fill="#061022" stroke="#1e293b" stroke-width="1" />
  <g transform="translate(32, 20)">
    <rect width="32" height="32" rx="8" fill="url(#blue-grad)" />
    <path d="M16 8L4 14l12 6 12-6-12-6z M8 16.5v4.5c0 2 4 3.5 8 3.5s8-1.5 8-3.5V16.5" stroke="#ffffff" stroke-width="2" fill="none" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">EDULEARN <tspan fill="#38bdf8">COURSE VIEWER</tspan></text>
    <text x="220" y="22" class="font-sans" font-size="14" fill="#64748b">← Back to My Courses</text>
  </g>

  <!-- Video Lecture Frame (Left 1120px) -->
  <g transform="translate(32, 96)">
    <rect width="1120" height="620" rx="18" fill="#02060d" stroke="#1e293b" stroke-width="2" />
    <!-- Play Icon & Canvas representation -->
    <circle cx="560" cy="310" r="48" fill="#0284c7" opacity="0.9" filter="url(#glow-blue)" />
    <polygon points="552,294 576,310 552,326" fill="#ffffff" />
    <text x="560" y="390" text-anchor="middle" class="font-sans" font-size="18" font-weight="700" fill="#ffffff">Lecture #08: TCP/IP Protocol Stack &amp; Socket Programming</text>

    <!-- Video Controls Bar -->
    <rect x="0" y="560" width="1120" height="60" rx="18" fill="#081429" stroke="#1e293b" stroke-width="1" />
    <rect x="20" y="586" width="900" height="8" rx="4" fill="#040b17" />
    <rect x="20" y="586" width="540" height="8" rx="4" fill="#38bdf8" />
    <text x="940" y="594" class="font-mono" font-size="12" fill="#93c5fd">14:20 / 32:00</text>
  </g>

  <!-- Lecture Description -->
  <g transform="translate(32, 736)">
    <rect width="1120" height="230" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="16" font-weight="700" fill="#ffffff">Lesson Overview &amp; Learning Objectives</text>
    <text x="24" y="66" class="font-sans" font-size="14" fill="#94a3b8">In this session, we analyze transport layer reliability mechanisms, sequence numbering, and handshakes.</text>

    <g transform="translate(24, 110)">
      <rect width="240" height="40" rx="8" fill="#06162d" stroke="#0284c7" stroke-width="1" />
      <text x="120" y="25" text-anchor="middle" class="font-sans" font-size="13" font-weight="700" fill="#38bdf8">📥 Download Lecture Slides PDF</text>
    </g>
  </g>

  <!-- Right Sidebar Course Syllabus Syllabus -->
  <g transform="translate(1184, 96)">
    <rect width="384" height="870" rx="18" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <rect width="384" height="52" rx="18" fill="#0e2242" stroke="#1e293b" stroke-width="1" />
    <text x="20" y="32" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Course Syllabus Modules</text>

    <g transform="translate(16, 75)">
      <rect width="352" height="70" rx="10" fill="#040b17" stroke="#14F195" stroke-width="1" />
      <text x="16" y="28" class="font-sans" font-size="14" font-weight="700" fill="#14F195">✓ Lesson 01: OSI 7-Layer Model</text>
      <text x="16" y="50" class="font-mono" font-size="11" fill="#94a3b8">Completed • Quiz Score: 100%</text>
    </g>

    <g transform="translate(16, 155)">
      <rect width="352" height="70" rx="10" fill="#06162d" stroke="#38bdf8" stroke-width="1.5" />
      <text x="16" y="28" class="font-sans" font-size="14" font-weight="700" fill="#ffffff">▶ Lesson 08: TCP/IP Sockets</text>
      <text x="16" y="50" class="font-mono" font-size="11" fill="#38bdf8">Currently Playing (14:20)</text>
    </g>
  </g>
</svg>`;

// School 4: Student Performance
const svgSchoolPerformance = `${makeSvgHeader('#040b17', '#08162d', '#1e293b')}
  <!-- Top Navigation Bar -->
  <rect x="0" y="0" width="1600" height="72" fill="#061022" stroke="#1e293b" stroke-width="1" />
  <g transform="translate(32, 20)">
    <rect width="32" height="32" rx="8" fill="url(#blue-grad)" />
    <path d="M16 8L4 14l12 6 12-6-12-6z M8 16.5v4.5c0 2 4 3.5 8 3.5s8-1.5 8-3.5V16.5" stroke="#ffffff" stroke-width="2" fill="none" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">EDULEARN <tspan fill="#38bdf8">ACADEMIC ANALYTICS</tspan></text>
  </g>

  <!-- Stat Cards -->
  <g transform="translate(32, 96)">
    <rect width="360" height="100" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="32" class="font-sans" font-size="12" font-weight="600" fill="#93c5fd">SEMESTER CGPA</text>
    <text x="24" y="68" class="font-sans" font-size="28" font-weight="800" fill="#14F195">3.88 / 4.0 <tspan font-size="14" fill="#94a3b8">(Grade A+)</tspan></text>
  </g>

  <g transform="translate(424, 96)">
    <rect width="360" height="100" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="32" class="font-sans" font-size="12" font-weight="600" fill="#93c5fd">CLASS RANK</text>
    <text x="24" y="68" class="font-sans" font-size="28" font-weight="800" fill="#38bdf8"># 03 <tspan font-size="14" fill="#94a3b8">out of 120 Students</tspan></text>
  </g>

  <g transform="translate(816, 96)">
    <rect width="360" height="100" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="32" class="font-sans" font-size="12" font-weight="600" fill="#93c5fd">TOTAL CREDIT HOURS</text>
    <text x="24" y="68" class="font-sans" font-size="28" font-weight="800" fill="#ffffff">24 / 24 <tspan font-size="14" fill="#14F195">Completed</tspan></text>
  </g>

  <g transform="translate(1208, 96)">
    <rect width="360" height="100" rx="16" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="32" class="font-sans" font-size="12" font-weight="600" fill="#93c5fd">FACULTY REMARKS</text>
    <text x="24" y="68" class="font-sans" font-size="24" font-weight="800" fill="#14F195">EXCELLENT</text>
  </g>

  <!-- Subject Performance Bar Chart -->
  <g transform="translate(32, 216)">
    <rect width="1136" height="750" rx="18" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <rect width="1136" height="48" rx="18" fill="#0e2242" stroke="#1e293b" stroke-width="1" />
    <text x="24" y="30" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Subject-wise Academic Score Breakdown</text>

    <!-- Chart Bars -->
    <g transform="translate(60, 80)">
      <!-- Subj 1 -->
      <text x="0" y="30" class="font-sans" font-size="14" font-weight="600" fill="#ffffff">Computer Networks (CS-402)</text>
      <rect x="280" y="12" width="700" height="24" rx="6" fill="#040b17" />
      <rect x="280" y="12" width="672" height="24" rx="6" fill="#14F195" />
      <text x="990" y="30" class="font-mono" font-size="14" font-weight="700" fill="#14F195">96% (A+)</text>

      <!-- Subj 2 -->
      <text x="0" y="90" class="font-sans" font-size="14" font-weight="600" fill="#ffffff">Advanced Mathematics (MATH-301)</text>
      <rect x="280" y="72" width="700" height="24" rx="6" fill="#040b17" />
      <rect x="280" y="72" width="644" height="24" rx="6" fill="#38bdf8" />
      <text x="990" y="90" class="font-mono" font-size="14" font-weight="700" fill="#38bdf8">92% (A)</text>

      <!-- Subj 3 -->
      <text x="0" y="150" class="font-sans" font-size="14" font-weight="600" fill="#ffffff">Software Engineering (SE-201)</text>
      <rect x="280" y="132" width="700" height="24" rx="6" fill="#040b17" />
      <rect x="280" y="132" width="616" height="24" rx="6" fill="#38bdf8" />
      <text x="990" y="150" class="font-mono" font-size="14" font-weight="700" fill="#38bdf8">88% (A)</text>
    </g>
  </g>

  <!-- Right Sidebar Academic Report Card -->
  <g transform="translate(1192, 216)">
    <rect width="376" height="750" rx="18" fill="#081429" stroke="#1e293b" stroke-width="1.5" />
    <rect width="376" height="48" rx="18" fill="#0e2242" stroke="#1e293b" stroke-width="1" />
    <text x="20" y="30" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Official Grade Report Transcript</text>
  </g>
</svg>`;

async function generateAll() {
  console.log("Generating Exam Management WebP images...");
  await sharp(Buffer.from(svgExamLogin)).webp({ quality: 90 }).toFile(path.join(examDir, "exam-login.webp"));
  await sharp(Buffer.from(svgExamDashboard)).webp({ quality: 90 }).toFile(path.join(examDir, "exam-dashboard.webp"));
  await sharp(Buffer.from(svgExamQuestion)).webp({ quality: 90 }).toFile(path.join(examDir, "exam-question-management.webp"));
  await sharp(Buffer.from(svgExamResults)).webp({ quality: 90 }).toFile(path.join(examDir, "exam-results.webp"));

  console.log("Generating School Learning WebP images...");
  await sharp(Buffer.from(svgSchoolLogin)).webp({ quality: 90 }).toFile(path.join(schoolDir, "school-login.webp"));
  await sharp(Buffer.from(svgSchoolDashboard)).webp({ quality: 90 }).toFile(path.join(schoolDir, "school-dashboard.webp"));
  await sharp(Buffer.from(svgSchoolCourse)).webp({ quality: 90 }).toFile(path.join(schoolDir, "school-course.webp"));
  await sharp(Buffer.from(svgSchoolPerformance)).webp({ quality: 90 }).toFile(path.join(schoolDir, "school-performance.webp"));

  console.log("Successfully generated all mockups for Exam Management and School Learning!");
}

generateAll().catch(err => {
  console.error("Error generating all mockups:", err);
  process.exit(1);
});
