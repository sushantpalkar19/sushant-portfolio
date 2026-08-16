const fs = require('fs');
const path = require('path');
const sharp = require(path.resolve('node_modules/sharp'));

const outputDir = path.resolve('public/projects/icu-monitoring');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Common styles & fonts
const SVG_HEADER = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <!-- Dark Gradients -->
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050914" />
      <stop offset="50%" stop-color="#0a1226" />
      <stop offset="100%" stop-color="#040711" />
    </linearGradient>

    <linearGradient id="card-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f192e" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#091020" stop-opacity="0.95" />
    </linearGradient>

    <linearGradient id="btn-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14F195" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>

    <linearGradient id="alert-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#991b1b" stop-opacity="0.1" />
    </linearGradient>

    <linearGradient id="chart-cyan-fill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.0" />
    </linearGradient>

    <linearGradient id="chart-green-fill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#14F195" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#14F195" stop-opacity="0.0" />
    </linearGradient>

    <!-- Subtle Glow Filters -->
    <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <style>
    .font-sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .font-mono { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; }
    .text-title { font-size: 28px; font-weight: 700; fill: #ffffff; }
    .text-subtitle { font-size: 14px; font-weight: 500; fill: #94a3b8; }
    .text-dim { font-size: 13px; fill: #64748b; }
    .text-val { font-size: 32px; font-weight: 800; fill: #ffffff; }
  </style>

  <!-- Background Base -->
  <rect width="1600" height="1000" fill="url(#bg-grad)" />

  <!-- Background Grid Pattern -->
  <g stroke="#1e293b" stroke-width="0.75" stroke-opacity="0.4">
    ${Array.from({ length: 33 }).map((_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="1000" />`).join('')}
    ${Array.from({ length: 21 }).map((_, i) => `<line x1="0" y1="${i * 50}" x2="1600" y2="${i * 50}" />`).join('')}
  </g>
`;

// -------------------------------------------------------------------
// 1. ICU LOGIN SCREEN
// -------------------------------------------------------------------
const svgLogin = `${SVG_HEADER}
  <!-- Top Bar -->
  <rect x="0" y="0" width="1600" height="64" fill="#080e1e" stroke="#1e293b" stroke-width="1" />
  <g transform="translate(32, 16)">
    <!-- Brand Icon -->
    <rect width="32" height="32" rx="8" fill="url(#btn-grad)" />
    <path d="M16 8v16M8 16h16" stroke="#040711" stroke-width="3" stroke-linecap="round" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff" letter-spacing="1">MEDISENSE <tspan fill="#14F195">ICU</tspan></text>
  </g>

  <g transform="translate(1150, 24)">
    <circle cx="10" cy="10" r="4" fill="#14F195" filter="url(#glow-green)" />
    <text x="24" y="14" class="font-mono" font-size="12" fill="#94a3b8">v2.4.0 • Enterprise HL7/FHIR Secure Portal</text>
  </g>

  <!-- Ambient Glow behind Login Box -->
  <circle cx="800" cy="500" r="320" fill="#06b6d4" opacity="0.08" filter="url(#glow-cyan)" />

  <!-- Center Login Card Container -->
  <g transform="translate(520, 140)">
    <!-- Card Frame -->
    <rect width="560" height="680" rx="24" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <rect width="560" height="680" rx="24" fill="none" stroke="url(#btn-grad)" stroke-width="1" opacity="0.3" />

    <!-- Top Badge Icon -->
    <g transform="translate(248, 44)">
      <circle cx="32" cy="32" r="36" fill="#0b172a" stroke="#14F195" stroke-width="2" filter="url(#glow-green)" />
      <path d="M32 18v28M20 32h24M24 26l6 12 4-8 4 4" stroke="#14F195" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </g>

    <text x="280" y="142" text-anchor="middle" class="font-sans text-title" font-size="24">ICU Staff Authentication</text>
    <text x="280" y="168" text-anchor="middle" class="font-sans text-subtitle">Enter clinical credentials to access patient telemetry console</text>

    <!-- Field 1: Medical ID / Email -->
    <g transform="translate(48, 208)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Medical ID / Email Address</text>
      <rect x="0" y="12" width="464" height="52" rx="12" fill="#060b17" stroke="#334155" stroke-width="1.5" />
      <text x="44" y="44" class="font-mono" font-size="15" fill="#f8fafc">dr.sushant@cityhospital.org</text>
      <circle cx="24" cy="38" r="7" stroke="#06b6d4" stroke-width="2" fill="none" />
      <path d="M14 48c0-4 4-6 10-6s10 2 10 6" stroke="#06b6d4" stroke-width="2" fill="none" />
    </g>

    <!-- Field 2: Password -->
    <g transform="translate(48, 308)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Password</text>
      <rect x="0" y="12" width="464" height="52" rx="12" fill="#060b17" stroke="#334155" stroke-width="1.5" />
      <text x="44" y="44" class="font-sans" font-size="20" fill="#14F195" letter-spacing="4">• • • • • • • • • • • •</text>
      <rect x="18" y="34" width="12" height="10" rx="2" fill="none" stroke="#06b6d4" stroke-width="2" />
      <path d="M21 34v-4a3 3 0 0 1 6 0v4" stroke="#06b6d4" stroke-width="2" fill="none" />
    </g>

    <!-- Field 3: Unit / Department Selection -->
    <g transform="translate(48, 408)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="600" fill="#cbd5e1">Assigned Unit &amp; Role</text>
      <rect x="0" y="12" width="464" height="52" rx="12" fill="#060b17" stroke="#334155" stroke-width="1.5" />
      <text x="20" y="43" class="font-sans" font-size="14" font-weight="600" fill="#f8fafc">ICU Unit 3 — Senior Critical Care Specialist</text>
      <path d="M430 34l8 8 8-8" stroke="#64748b" stroke-width="2" stroke-linecap="round" fill="none" />
    </g>

    <!-- 2FA Badge -->
    <g transform="translate(48, 496)">
      <rect width="464" height="40" rx="8" fill="#061b2e" stroke="#0284c7" stroke-width="1" opacity="0.8" />
      <circle cx="24" cy="20" r="5" fill="#14F195" />
      <text x="38" y="24" class="font-mono" font-size="12" fill="#38bdf8">2FA Hardware Token Verified • Session Encryption AES-256</text>
    </g>

    <!-- Submit Button -->
    <g transform="translate(48, 564)">
      <rect width="464" height="56" rx="14" fill="url(#btn-grad)" filter="url(#glow-green)" />
      <text x="232" y="35" text-anchor="middle" class="font-sans" font-size="16" font-weight="800" fill="#040711" letter-spacing="0.5">AUTHENTICATE &amp; ACCESS CONSOLE →</text>
    </g>
  </g>

  <!-- Bottom System Status Bar -->
  <g transform="translate(520, 856)">
    <rect width="560" height="44" rx="10" fill="#080e1e" stroke="#1e293b" stroke-width="1" />
    <circle cx="24" cy="22" r="4" fill="#14F195" />
    <text x="36" y="26" class="font-mono" font-size="12" fill="#94a3b8">PACS/EMR Sync: <tspan fill="#14F195">ONLINE</tspan> | 12 Active ICU Beds Monitored</text>
    <text x="440" y="26" class="font-mono" font-size="12" fill="#64748b">HIPAA Compliant</text>
  </g>
</svg>`;

// -------------------------------------------------------------------
// 2. ICU DASHBOARD SCREEN
// -------------------------------------------------------------------
const svgDashboard = `${SVG_HEADER}
  <!-- Top Navigation Bar -->
  <rect x="0" y="0" width="1600" height="72" fill="#080e1e" stroke="#1e293b" stroke-width="1" />
  
  <g transform="translate(32, 20)">
    <rect width="32" height="32" rx="8" fill="url(#btn-grad)" />
    <path d="M16 8v16M8 16h16" stroke="#040711" stroke-width="3" stroke-linecap="round" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">MEDISENSE <tspan fill="#14F195">ICU</tspan></text>
    <text x="200" y="22" class="font-sans" font-size="14" fill="#64748b">|</text>
    <text x="220" y="22" class="font-sans" font-size="14" font-weight="600" fill="#cbd5e1">Unit 3 — Central Monitoring Command</text>
  </g>

  <!-- Search & Doctor Profile Header -->
  <g transform="translate(920, 18)">
    <rect width="320" height="36" rx="18" fill="#0e172a" stroke="#1e293b" stroke-width="1" />
    <text x="16" y="23" class="font-sans" font-size="13" fill="#64748b">🔍 Search patient, MRN, or bed #...</text>
  </g>
  <g transform="translate(1260, 18)">
    <rect width="300" height="36" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
    <circle cx="20" cy="18" r="10" fill="#0284c7" />
    <text x="16" y="22" class="font-sans" font-size="11" font-weight="700" fill="#ffffff">SP</text>
    <text x="40" y="23" class="font-sans" font-size="13" font-weight="600" fill="#f8fafc">Dr. Sushant Palkar</text>
    <text x="175" y="23" class="font-mono" font-size="11" fill="#14F195">• ON DUTY</text>
  </g>

  <!-- Key Metrics Row (4 Cards) -->
  <!-- Card 1: Active ICU Beds -->
  <g transform="translate(32, 96)">
    <rect width="360" height="110" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#94a3b8">TOTAL OCCUPIED BEDS</text>
    <text x="24" y="78" class="font-sans text-val">18 <tspan font-size="20" fill="#64748b">/ 24</tspan></text>
    <rect x="250" y="28" width="86" height="28" rx="14" fill="#062822" stroke="#14F195" stroke-width="1" />
    <text x="293" y="46" text-anchor="middle" class="font-mono" font-size="12" fill="#14F195">75% Cap</text>
  </g>

  <!-- Card 2: Critical Patients -->
  <g transform="translate(424, 96)">
    <rect width="360" height="110" rx="16" fill="url(#card-grad)" stroke="#991b1b" stroke-width="1.5" />
    <rect width="360" height="110" rx="16" fill="url(#alert-grad)" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#fca5a5">CRITICAL ALERTS ACTIVE</text>
    <text x="24" y="78" class="font-sans text-val" fill="#ef4444">04 <tspan font-size="16" fill="#fca5a5" font-weight="500">Beds Requiring Action</tspan></text>
    <circle cx="316" cy="42" r="12" fill="#ef4444" filter="url(#glow-red)" />
    <text x="316" y="46" text-anchor="middle" class="font-sans" font-size="14" font-weight="800" fill="#ffffff">!</text>
  </g>

  <!-- Card 3: Avg Ward SpO2 -->
  <g transform="translate(816, 96)">
    <rect width="360" height="110" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#94a3b8">AVERAGE WARD SpO2</text>
    <text x="24" y="78" class="font-sans text-val" fill="#38bdf8">97.4% <tspan font-size="14" fill="#14F195" font-weight="500">↑ Normal</tspan></text>
  </g>

  <!-- Card 4: System Telemetry Rate -->
  <g transform="translate(1208, 96)">
    <rect width="360" height="110" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="36" class="font-sans" font-size="13" font-weight="600" fill="#94a3b8">TELEMETRY STREAM RATE</text>
    <text x="24" y="78" class="font-sans text-val" fill="#14F195">1.2 kHz <tspan font-size="14" fill="#94a3b8" font-weight="500">Live HL7</tspan></text>
  </g>

  <!-- Main Patient Beds Grid Header -->
  <g transform="translate(32, 230)">
    <text x="0" y="0" class="font-sans" font-size="18" font-weight="700" fill="#ffffff">Live Patient Telemetry Grid</text>
    <text x="260" y="0" class="font-mono" font-size="12" fill="#14F195">• Live Synchronized Updates Every 500ms</text>
  </g>

  <!-- 6 Patient Bed Cards (2 rows of 3) -->

  <!-- Bed 1: John Miller -->
  <g transform="translate(32, 250)">
    <rect width="360" height="340" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <rect width="360" height="44" rx="16" fill="#0b172a" stroke="#1e293b" stroke-width="1" />
    <text x="16" y="27" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">BED 01 — John Miller</text>
    <rect x="260" y="10" width="84" height="24" rx="12" fill="#062822" stroke="#14F195" stroke-width="1" />
    <text x="302" y="26" text-anchor="middle" class="font-mono" font-size="11" fill="#14F195">STABLE</text>
    <text x="16" y="66" class="font-mono" font-size="12" fill="#64748b">MRN: #8492-ICU | Age: 62 | Male</text>

    <!-- ECG Wave Mini Preview -->
    <rect x="16" y="80" width="328" height="60" rx="8" fill="#050914" stroke="#1e293b" stroke-width="1" />
    <path d="M20 110 h40 l5 -15 l8 35 l8 -45 l8 25 l5 -5 h40 l5 -15 l8 35 l8 -45 l8 25 l5 -5 h40 l5 -15 l8 35 l8 -45 l8 25 l5 -5 h40" stroke="#14F195" stroke-width="2" fill="none" filter="url(#glow-green)" />

    <!-- Vitals grid -->
    <g transform="translate(16, 160)">
      <rect width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">HEART RATE</text>
      <text x="12" y="56" class="font-sans" font-size="26" font-weight="800" fill="#14F195">78 <tspan font-size="12" fill="#64748b">bpm</tspan></text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">SpO2</text>
      <text x="186" y="56" class="font-sans" font-size="26" font-weight="800" fill="#38bdf8">98% <tspan font-size="12" fill="#64748b">O2</tspan></text>
    </g>

    <g transform="translate(16, 244)">
      <rect width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">BP (NIBP)</text>
      <text x="12" y="56" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">122/81</text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">TEMP</text>
      <text x="186" y="56" class="font-sans" font-size="22" font-weight="800" fill="#fbbf24">37.1 °C</text>
    </g>
  </g>

  <!-- Bed 2: Elena Rostova (CRITICAL ALERT) -->
  <g transform="translate(424, 250)">
    <rect width="360" height="340" rx="16" fill="url(#card-grad)" stroke="#ef4444" stroke-width="2" />
    <rect width="360" height="340" rx="16" fill="url(#alert-grad)" />
    <rect width="360" height="44" rx="16" fill="#1c0a0f" stroke="#ef4444" stroke-width="1" />
    <text x="16" y="27" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">BED 02 — Elena Rostova</text>
    <rect x="230" y="10" width="114" height="24" rx="12" fill="#ef4444" filter="url(#glow-red)" />
    <text x="287" y="26" text-anchor="middle" class="font-mono" font-size="11" font-weight="800" fill="#ffffff">! TACHYCARDIA</text>
    <text x="16" y="66" class="font-mono" font-size="12" fill="#fca5a5">MRN: #9104-ICU | Age: 58 | Female</text>

    <!-- Rapid ECG Wave -->
    <rect x="16" y="80" width="328" height="60" rx="8" fill="#0d0407" stroke="#ef4444" stroke-width="1" />
    <path d="M20 110 h20 l4 -18 l6 40 l6 -50 l6 28 l4 -6 h20 l4 -18 l6 40 l6 -50 l6 28 l4 -6 h20 l4 -18 l6 40 l6 -50 l6 28 l4 -6 h20" stroke="#ef4444" stroke-width="2" fill="none" filter="url(#glow-red)" />

    <g transform="translate(16, 160)">
      <rect width="154" height="74" rx="10" fill="#2a080c" stroke="#ef4444" stroke-width="1.5" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="700" fill="#fca5a5">HR ↑ HIGH</text>
      <text x="12" y="56" class="font-sans" font-size="26" font-weight="800" fill="#ef4444">114 <tspan font-size="12" fill="#fca5a5">bpm</tspan></text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#2a080c" stroke="#ef4444" stroke-width="1.5" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="700" fill="#fca5a5">SpO2 ↓ LOW</text>
      <text x="186" y="56" class="font-sans" font-size="26" font-weight="800" fill="#ef4444">92% <tspan font-size="12" fill="#fca5a5">O2</tspan></text>
    </g>

    <g transform="translate(16, 244)">
      <rect width="154" height="74" rx="10" fill="#180b11" stroke="#334155" stroke-width="1" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">BP (NIBP)</text>
      <text x="12" y="56" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">145/95</text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#180b11" stroke="#334155" stroke-width="1" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">TEMP</text>
      <text x="186" y="56" class="font-sans" font-size="22" font-weight="800" fill="#ef4444">38.4 °C</text>
    </g>
  </g>

  <!-- Bed 3: Marcus Vance -->
  <g transform="translate(816, 250)">
    <rect width="360" height="340" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <rect width="360" height="44" rx="16" fill="#0b172a" stroke="#1e293b" stroke-width="1" />
    <text x="16" y="27" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">BED 03 — Marcus Vance</text>
    <rect x="250" y="10" width="94" height="24" rx="12" fill="#032b45" stroke="#38bdf8" stroke-width="1" />
    <text x="297" y="26" text-anchor="middle" class="font-mono" font-size="11" fill="#38bdf8">POST-OP</text>
    <text x="16" y="66" class="font-mono" font-size="12" fill="#64748b">MRN: #7731-ICU | Age: 45 | Male</text>

    <rect x="16" y="80" width="328" height="60" rx="8" fill="#050914" stroke="#1e293b" stroke-width="1" />
    <path d="M20 110 h45 l5 -15 l8 35 l8 -45 l8 25 l5 -5 h45 l5 -15 l8 35 l8 -45 l8 25 l5 -5 h45" stroke="#06b6d4" stroke-width="2" fill="none" />

    <g transform="translate(16, 160)">
      <rect width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">HEART RATE</text>
      <text x="12" y="56" class="font-sans" font-size="26" font-weight="800" fill="#38bdf8">74 <tspan font-size="12" fill="#64748b">bpm</tspan></text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">SpO2</text>
      <text x="186" y="56" class="font-sans" font-size="26" font-weight="800" fill="#14F195">99% <tspan font-size="12" fill="#64748b">O2</tspan></text>
    </g>

    <g transform="translate(16, 244)">
      <rect width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">BP (NIBP)</text>
      <text x="12" y="56" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">118/76</text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">TEMP</text>
      <text x="186" y="56" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">36.8 °C</text>
    </g>
  </g>

  <!-- Right Sidebar Panel: Live Ward Activity & Alerts Feed -->
  <g transform="translate(1208, 250)">
    <rect width="360" height="710" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <rect width="360" height="50" rx="16" fill="#0b172a" stroke="#1e293b" stroke-width="1" />
    <text x="20" y="31" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Active Clinical Feed</text>
    <circle cx="320" cy="25" r="5" fill="#ef4444" filter="url(#glow-red)" />

    <!-- Alert Items -->
    <g transform="translate(16, 70)">
      <rect width="328" height="90" rx="12" fill="#2a080c" stroke="#ef4444" stroke-width="1" />
      <text x="16" y="26" class="font-mono" font-size="11" font-weight="700" fill="#ef4444">23:12:40 — CRITICAL ALARM</text>
      <text x="16" y="48" class="font-sans" font-size="13" font-weight="700" fill="#ffffff">Bed 02: Tachycardia &amp; SpO2 Drop</text>
      <text x="16" y="68" class="font-sans" font-size="12" fill="#fca5a5">Dr. Palkar notified • Attending nurse assigned</text>
    </g>

    <g transform="translate(16, 175)">
      <rect width="328" height="84" rx="12" fill="#1c190b" stroke="#f59e0b" stroke-width="1" />
      <text x="16" y="24" class="font-mono" font-size="11" font-weight="700" fill="#f59e0b">22:45:10 — WARNING</text>
      <text x="16" y="45" class="font-sans" font-size="13" font-weight="600" fill="#ffffff">Bed 05: Bradycardia Event (54 bpm)</text>
      <text x="16" y="64" class="font-sans" font-size="12" fill="#cbd5e1">Telemetry verified • Dose adjusted</text>
    </g>

    <g transform="translate(16, 275)">
      <rect width="328" height="84" rx="12" fill="#071927" stroke="#0284c7" stroke-width="1" />
      <text x="16" y="24" class="font-mono" font-size="11" font-weight="700" fill="#38bdf8">21:30:00 — INFO</text>
      <text x="16" y="45" class="font-sans" font-size="13" font-weight="600" fill="#ffffff">Bed 01: IV Infusion Pump 2 Done</text>
      <text x="16" y="64" class="font-sans" font-size="12" fill="#cbd5e1">Normal saline replaced successfully</text>
    </g>

    <!-- Quick Action Buttons -->
    <g transform="translate(16, 510)">
      <text x="0" y="0" class="font-sans" font-size="13" font-weight="700" fill="#94a3b8">WARD ACTIONS</text>
      <rect x="0" y="16" width="328" height="44" rx="10" fill="#09281e" stroke="#14F195" stroke-width="1" />
      <text x="164" y="43" text-anchor="middle" class="font-sans" font-size="13" font-weight="700" fill="#14F195">+ ADMIT NEW PATIENT</text>

      <rect x="0" y="70" width="328" height="44" rx="10" fill="#0b172a" stroke="#334155" stroke-width="1" />
      <text x="164" y="97" text-anchor="middle" class="font-sans" font-size="13" font-weight="600" fill="#f8fafc">📄 EXPORT WARD SUMMARY PDF</text>

      <rect x="0" y="124" width="328" height="44" rx="10" fill="#2a080c" stroke="#ef4444" stroke-width="1" />
      <text x="164" y="151" text-anchor="middle" class="font-sans" font-size="13" font-weight="700" fill="#ef4444">🚨 CODE BLUE EMERGENCY CALL</text>
    </g>
  </g>

  <!-- Row 2 Bed Cards (Bed 04, Bed 05, Bed 06) -->
  <!-- Bed 4: Sarah Jenkins -->
  <g transform="translate(32, 615)">
    <rect width="360" height="345" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <rect width="360" height="44" rx="16" fill="#0b172a" stroke="#1e293b" stroke-width="1" />
    <text x="16" y="27" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">BED 04 — Sarah Jenkins</text>
    <rect x="260" y="10" width="84" height="24" rx="12" fill="#062822" stroke="#14F195" stroke-width="1" />
    <text x="302" y="26" text-anchor="middle" class="font-mono" font-size="11" fill="#14F195">STABLE</text>
    <text x="16" y="66" class="font-mono" font-size="12" fill="#64748b">MRN: #6029-ICU | Age: 71 | Female</text>

    <rect x="16" y="80" width="328" height="60" rx="8" fill="#050914" stroke="#1e293b" stroke-width="1" />
    <path d="M20 110 h40 l5 -15 l8 35 l8 -45 l8 25 l5 -5 h40 l5 -15 l8 35 l8 -45 l8 25 l5 -5 h40" stroke="#14F195" stroke-width="2" fill="none" />

    <g transform="translate(16, 160)">
      <rect width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">HEART RATE</text>
      <text x="12" y="56" class="font-sans" font-size="26" font-weight="800" fill="#14F195">68 <tspan font-size="12" fill="#64748b">bpm</tspan></text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">SpO2</text>
      <text x="186" y="56" class="font-sans" font-size="26" font-weight="800" fill="#38bdf8">96% <tspan font-size="12" fill="#64748b">O2</tspan></text>
    </g>

    <g transform="translate(16, 244)">
      <rect width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">BP (NIBP)</text>
      <text x="12" y="56" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">110/70</text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">TEMP</text>
      <text x="186" y="56" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">36.6 °C</text>
    </g>
  </g>

  <!-- Bed 5: David Chen -->
  <g transform="translate(424, 615)">
    <rect width="360" height="345" rx="16" fill="url(#card-grad)" stroke="#f59e0b" stroke-width="1.5" />
    <rect width="360" height="44" rx="16" fill="#0b172a" stroke="#1e293b" stroke-width="1" />
    <text x="16" y="27" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">BED 05 — David Chen</text>
    <rect x="240" y="10" width="104" height="24" rx="12" fill="#2d1c03" stroke="#f59e0b" stroke-width="1" />
    <text x="292" y="26" text-anchor="middle" class="font-mono" font-size="11" fill="#f59e0b">MONITORED</text>
    <text x="16" y="66" class="font-mono" font-size="12" fill="#64748b">MRN: #5120-ICU | Age: 53 | Male</text>

    <rect x="16" y="80" width="328" height="60" rx="8" fill="#050914" stroke="#1e293b" stroke-width="1" />
    <path d="M20 110 h60 l5 -15 l8 35 l8 -45 l8 25 l5 -5 h60 l5 -15 l8 35 l8 -45 l8 25 l5 -5 h60" stroke="#f59e0b" stroke-width="2" fill="none" />

    <g transform="translate(16, 160)">
      <rect width="154" height="74" rx="10" fill="#1c1709" stroke="#f59e0b" stroke-width="1" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="600" fill="#fde68a">HR ↓ LOW</text>
      <text x="12" y="56" class="font-sans" font-size="26" font-weight="800" fill="#f59e0b">54 <tspan font-size="12" fill="#fde68a">bpm</tspan></text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">SpO2</text>
      <text x="186" y="56" class="font-sans" font-size="26" font-weight="800" fill="#38bdf8">94% <tspan font-size="12" fill="#64748b">O2</tspan></text>
    </g>

    <g transform="translate(16, 244)">
      <rect width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="12" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">BP (NIBP)</text>
      <text x="12" y="56" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">105/65</text>
      <rect x="174" y="0" width="154" height="74" rx="10" fill="#091326" stroke="#1e293b" stroke-width="1" />
      <text x="186" y="22" class="font-sans" font-size="11" font-weight="600" fill="#94a3b8">TEMP</text>
      <text x="186" y="56" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">37.0 °C</text>
    </g>
  </g>

  <!-- Bed 6: Unoccupied -->
  <g transform="translate(816, 615)">
    <rect width="360" height="345" rx="16" fill="#080e1a" stroke="#1e293b" stroke-width="1" stroke-dasharray="6,6" />
    <text x="180" y="160" text-anchor="middle" class="font-sans" font-size="18" font-weight="700" fill="#475569">BED 06 — AVAILABLE</text>
    <text x="180" y="190" text-anchor="middle" class="font-mono" font-size="13" fill="#64748b">Sanitized &amp; Calibrated for Admission</text>
    <g transform="translate(130, 220)">
      <rect width="100" height="36" rx="18" fill="#09182a" stroke="#0284c7" stroke-width="1" />
      <text x="50" y="23" text-anchor="middle" class="font-sans" font-size="12" font-weight="700" fill="#38bdf8">+ ADMIT</text>
    </g>
  </g>
</svg>`;

// -------------------------------------------------------------------
// 3. PATIENT MONITORING SCREEN
// -------------------------------------------------------------------
const svgPatientMonitoring = `${SVG_HEADER}
  <!-- Header Bar -->
  <rect x="0" y="0" width="1600" height="80" fill="#080e1e" stroke="#1e293b" stroke-width="1" />
  <g transform="translate(32, 24)">
    <rect width="32" height="32" rx="8" fill="url(#btn-grad)" />
    <path d="M16 8v16M8 16h16" stroke="#040711" stroke-width="3" stroke-linecap="round" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">MEDISENSE <tspan fill="#14F195">ICU</tspan></text>
    <text x="200" y="22" class="font-sans" font-size="14" fill="#64748b">← Back to Ward Grid</text>
  </g>

  <!-- Patient Header Info Banner -->
  <g transform="translate(400, 16)">
    <rect width="1160" height="48" rx="10" fill="#0e172a" stroke="#1e293b" stroke-width="1" />
    <text x="20" y="30" class="font-sans" font-size="16" font-weight="800" fill="#ffffff">PATIENT: Elena Rostova</text>
    <text x="230" y="30" class="font-mono" font-size="13" fill="#38bdf8">MRN: #9104-ICU</text>
    <text x="380" y="30" class="font-mono" font-size="13" fill="#94a3b8">Bed: <tspan fill="#14F195" font-weight="700">ICU-Bed-02</tspan></text>
    <text x="520" y="30" class="font-mono" font-size="13" fill="#94a3b8">Age/Sex: 58 / F</text>
    <text x="660" y="30" class="font-mono" font-size="13" fill="#94a3b8">Attending: Dr. S. Palkar</text>
    <rect x="980" y="10" width="160" height="28" rx="14" fill="#ef4444" filter="url(#glow-red)" />
    <text x="1060" y="28" text-anchor="middle" class="font-mono" font-size="12" font-weight="800" fill="#ffffff">! TACHYCARDIA ALERT</text>
  </g>

  <!-- 5 Vitals Cards Horizontal Bar -->
  <g transform="translate(32, 104)">
    <rect width="296" height="150" rx="16" fill="#2a080c" stroke="#ef4444" stroke-width="2" />
    <text x="20" y="32" class="font-sans" font-size="13" font-weight="700" fill="#fca5a5">HEART RATE (ECG Lead II)</text>
    <text x="20" y="88" class="font-sans" font-size="44" font-weight="900" fill="#ef4444">114 <tspan font-size="16" fill="#fca5a5" font-weight="500">bpm</tspan></text>
    <text x="20" y="124" class="font-mono" font-size="12" fill="#ef4444">▲ High (Norm 60-100)</text>
    <path d="M220 50 l5 -12 l8 30 l8 -38 l8 22 l4 -2 h30" stroke="#ef4444" stroke-width="2.5" fill="none" />
  </g>

  <g transform="translate(344, 104)">
    <rect width="296" height="150" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="20" y="32" class="font-sans" font-size="13" font-weight="700" fill="#94a3b8">BLOOD PRESSURE (NIBP)</text>
    <text x="20" y="88" class="font-sans" font-size="40" font-weight="900" fill="#ffffff">145 / 95</text>
    <text x="20" y="124" class="font-mono" font-size="12" fill="#cbd5e1">mmHg | MAP: 111 mmHg</text>
  </g>

  <g transform="translate(656, 104)">
    <rect width="296" height="150" rx="16" fill="#2a080c" stroke="#ef4444" stroke-width="1.5" />
    <text x="20" y="32" class="font-sans" font-size="13" font-weight="700" fill="#fca5a5">SpO2 PULSE OXIMETRY</text>
    <text x="20" y="88" class="font-sans" font-size="44" font-weight="900" fill="#ef4444">92% <tspan font-size="16" fill="#fca5a5" font-weight="500">O2 Sat</tspan></text>
    <text x="20" y="124" class="font-mono" font-size="12" fill="#ef4444">▼ Low (Target &gt;95%)</text>
  </g>

  <g transform="translate(968, 104)">
    <rect width="296" height="150" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="20" y="32" class="font-sans" font-size="13" font-weight="700" fill="#94a3b8">RESPIRATORY RATE (RR)</text>
    <text x="20" y="88" class="font-sans" font-size="44" font-weight="900" fill="#f59e0b">22 <tspan font-size="16" fill="#cbd5e1" font-weight="500">rpm</tspan></text>
    <text x="20" y="124" class="font-mono" font-size="12" fill="#fde68a">▲ Tachypneic</text>
  </g>

  <g transform="translate(1280, 104)">
    <rect width="296" height="150" rx="16" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="20" y="32" class="font-sans" font-size="13" font-weight="700" fill="#94a3b8">CORE TEMP (T1)</text>
    <text x="20" y="88" class="font-sans" font-size="44" font-weight="900" fill="#ef4444">38.4 <tspan font-size="16" fill="#cbd5e1" font-weight="500">°C</tspan></text>
    <text x="20" y="124" class="font-mono" font-size="12" fill="#fca5a5">101.1 °F • Febrile</text>
  </g>

  <!-- Central Live Telemetry Monitor -->
  <g transform="translate(32, 274)">
    <rect width="1120" height="700" rx="20" fill="#040813" stroke="#1e293b" stroke-width="2" />

    <g stroke="#0f1f38" stroke-width="0.5">
      ${Array.from({ length: 44 }).map((_, i) => `<line x1="${i * 25}" y1="0" x2="${i * 25}" y2="700" />`).join('')}
      ${Array.from({ length: 28 }).map((_, i) => `<line x1="0" y1="${i * 25}" x2="1120" y2="${i * 25}" />`).join('')}
    </g>

    <!-- Channel 1: Lead II ECG -->
    <g transform="translate(0, 0)">
      <text x="24" y="36" class="font-mono" font-size="14" font-weight="700" fill="#14F195">ECG LEAD II (25mm/s, 10mm/mV)</text>
      <path d="M0 120 h60 l8 -30 l12 110 l12 -140 l10 80 l8 -20 h70 l8 -30 l12 110 l12 -140 l10 80 l8 -20 h70 l8 -30 l12 110 l12 -140 l10 80 l8 -20 h70 l8 -30 l12 110 l12 -140 l10 80 l8 -20 h70 l8 -30 l12 110 l12 -140 l10 80 l8 -20 h70 l8 -30 l12 110 l12 -140 l10 80 l8 -20 h70 l8 -30 l12 110 l12 -140 l10 80 l8 -20 h70" stroke="#14F195" stroke-width="2.5" fill="none" filter="url(#glow-green)" />
    </g>

    <line x1="0" y1="220" x2="1120" y2="220" stroke="#1e293b" stroke-width="1" />

    <!-- Channel 2: SpO2 Pleth Waveform -->
    <g transform="translate(0, 220)">
      <text x="24" y="36" class="font-mono" font-size="14" font-weight="700" fill="#06b6d4">SpO2 PLETH WAVEFORM (100% Scale)</text>
      <path d="M0 130 Q 30 50, 45 60 T 90 130 Q 120 50, 135 60 T 180 130 Q 210 50, 225 60 T 270 130 Q 300 50, 315 60 T 360 130 Q 390 50, 405 60 T 450 130 Q 480 50, 495 60 T 540 130 Q 570 50, 585 60 T 630 130 Q 660 50, 675 60 T 720 130 Q 750 50, 765 60 T 810 130 Q 840 50, 855 60 T 900 130 Q 930 50, 945 60 T 990 130 Q 1020 50, 1035 60 T 1080 130" stroke="#06b6d4" stroke-width="2.5" fill="none" filter="url(#glow-cyan)" />
    </g>

    <line x1="0" y1="440" x2="1120" y2="440" stroke="#1e293b" stroke-width="1" />

    <!-- Channel 3: Capnography / Respiration Wave -->
    <g transform="translate(0, 440)">
      <text x="24" y="36" class="font-mono" font-size="14" font-weight="700" fill="#f59e0b">CO2 CAPNOGRAPHY (etCO2: 38 mmHg)</text>
      <path d="M0 180 h60 v-90 h100 v90 h60 v-90 h100 v90 h60 v-90 h100 v90 h60 v-90 h100 v90 h60 v-90 h100 v90 h60 v-90 h100 v90 h60" stroke="#f59e0b" stroke-width="2.5" fill="none" />
    </g>
  </g>

  <!-- Right Panel: Connected Equipment -->
  <g transform="translate(1184, 274)">
    <rect width="384" height="700" rx="20" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <rect width="384" height="48" rx="20" fill="#0b172a" stroke="#1e293b" stroke-width="1" />
    <text x="20" y="30" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Connected Medical Hardware</text>

    <g transform="translate(20, 70)">
      <rect width="344" height="180" rx="14" fill="#091428" stroke="#0284c7" stroke-width="1" />
      <text x="16" y="28" class="font-sans" font-size="14" font-weight="700" fill="#38bdf8">MECHANICAL VENTILATOR (Evita V800)</text>
      <text x="16" y="48" class="font-mono" font-size="12" fill="#94a3b8">Mode: SIMV-PC + PS</text>

      <g transform="translate(16, 64)">
        <rect width="94" height="84" rx="8" fill="#050b18" />
        <text x="10" y="24" class="font-sans" font-size="11" fill="#64748b">PEEP</text>
        <text x="10" y="58" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">8.0</text>
        <text x="10" y="74" class="font-mono" font-size="10" fill="#94a3b8">cmH2O</text>
      </g>
      <g transform="translate(122, 64)">
        <rect width="94" height="84" rx="8" fill="#050b18" />
        <text x="10" y="24" class="font-sans" font-size="11" fill="#64748b">FiO2</text>
        <text x="10" y="58" class="font-sans" font-size="22" font-weight="800" fill="#14F195">45%</text>
        <text x="10" y="74" class="font-mono" font-size="10" fill="#94a3b8">O2 Blend</text>
      </g>
      <g transform="translate(228, 64)">
        <rect width="94" height="84" rx="8" fill="#050b18" />
        <text x="10" y="24" class="font-sans" font-size="11" fill="#64748b">TIDAL VOL</text>
        <text x="10" y="58" class="font-sans" font-size="22" font-weight="800" fill="#ffffff">480</text>
        <text x="10" y="74" class="font-mono" font-size="10" fill="#94a3b8">mL target</text>
      </g>
    </g>

    <g transform="translate(20, 270)">
      <rect width="344" height="240" rx="14" fill="#091428" stroke="#1e293b" stroke-width="1" />
      <text x="16" y="28" class="font-sans" font-size="14" font-weight="700" fill="#ffffff">SMART INFUSION PUMP STACK</text>

      <g transform="translate(16, 44)">
        <rect width="312" height="52" rx="8" fill="#050c1b" stroke="#14F195" stroke-width="1" />
        <text x="12" y="22" class="font-sans" font-size="13" font-weight="700" fill="#ffffff">Pump 1: Propofol (10 mg/ml)</text>
        <text x="12" y="40" class="font-mono" font-size="11" fill="#14F195">Rate: 15.0 ml/h • Infusing</text>
      </g>
      <g transform="translate(16, 106)">
        <rect width="312" height="52" rx="8" fill="#050c1b" stroke="#06b6d4" stroke-width="1" />
        <text x="12" y="22" class="font-sans" font-size="13" font-weight="700" fill="#ffffff">Pump 2: Norepinephrine</text>
        <text x="12" y="40" class="font-mono" font-size="11" fill="#06b6d4">Rate: 0.08 mcg/kg/min • Active</text>
      </g>
      <g transform="translate(16, 168)">
        <rect width="312" height="52" rx="8" fill="#050c1b" stroke="#334155" stroke-width="1" />
        <text x="12" y="22" class="font-sans" font-size="13" font-weight="700" fill="#94a3b8">Pump 3: 0.9% Normal Saline</text>
        <text x="12" y="40" class="font-mono" font-size="11" fill="#64748b">Rate: 75 ml/h • KVO Mode</text>
      </g>
    </g>

    <g transform="translate(20, 530)">
      <rect width="344" height="48" rx="10" fill="url(#btn-grad)" filter="url(#glow-green)" />
      <text x="172" y="30" text-anchor="middle" class="font-sans" font-size="14" font-weight="800" fill="#040711">RECORD CLINICAL VITAL SNAPSHOT</text>
    </g>
  </g>
</svg>`;

// -------------------------------------------------------------------
// 4. PATIENT DETAILS / ANALYTICS SCREEN
// -------------------------------------------------------------------
const svgAnalytics = `${SVG_HEADER}
  <!-- Header Bar -->
  <rect x="0" y="0" width="1600" height="80" fill="#080e1e" stroke="#1e293b" stroke-width="1" />
  <g transform="translate(32, 24)">
    <rect width="32" height="32" rx="8" fill="url(#btn-grad)" />
    <path d="M16 8v16M8 16h16" stroke="#040711" stroke-width="3" stroke-linecap="round" />
    <text x="44" y="22" class="font-sans" font-size="18" font-weight="800" fill="#ffffff">MEDISENSE <tspan fill="#14F195">ICU ANALYTICS</tspan></text>
  </g>

  <g transform="translate(600, 20)">
    <rect width="400" height="40" rx="20" fill="#0e172a" stroke="#1e293b" stroke-width="1" />
    <rect x="4" y="4" width="120" height="32" rx="16" fill="#0284c7" />
    <text x="64" y="25" text-anchor="middle" class="font-sans" font-size="13" font-weight="700" fill="#ffffff">Last 24 Hours</text>
    <text x="200" y="25" text-anchor="middle" class="font-sans" font-size="13" fill="#64748b">Last 7 Days</text>
    <text x="330" y="25" text-anchor="middle" class="font-sans" font-size="13" fill="#64748b">Custom Date</text>
  </g>

  <!-- Top 4 Summary Cards -->
  <g transform="translate(32, 100)">
    <rect width="360" height="96" rx="14" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="20" y="32" class="font-sans" font-size="12" font-weight="600" fill="#94a3b8">MAX / MIN HEART RATE</text>
    <text x="20" y="68" class="font-sans" font-size="28" font-weight="800" fill="#ef4444">128 <tspan font-size="16" fill="#64748b">/ 64 bpm</tspan></text>
  </g>

  <g transform="translate(424, 100)">
    <rect width="360" height="96" rx="14" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="20" y="32" class="font-sans" font-size="12" font-weight="600" fill="#94a3b8">MINIMUM SpO2 DROP</text>
    <text x="20" y="68" class="font-sans" font-size="28" font-weight="800" fill="#38bdf8">91% <tspan font-size="14" fill="#f59e0b">@ 14:32 (Resolved)</tspan></text>
  </g>

  <g transform="translate(816, 100)">
    <rect width="360" height="96" rx="14" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="20" y="32" class="font-sans" font-size="12" font-weight="600" fill="#94a3b8">MEAN MAP PRESSURE</text>
    <text x="20" y="68" class="font-sans" font-size="28" font-weight="800" fill="#14F195">102 <tspan font-size="16" fill="#64748b">mmHg</tspan></text>
  </g>

  <g transform="translate(1208, 100)">
    <rect width="360" height="96" rx="14" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <text x="20" y="32" class="font-sans" font-size="12" font-weight="600" fill="#94a3b8">TOTAL ALERTS TRIGGERED</text>
    <text x="20" y="68" class="font-sans" font-size="28" font-weight="800" fill="#ffffff">07 <tspan font-size="14" fill="#14F195">All Acknowledged</tspan></text>
  </g>

  <!-- Large 24-Hour Telemetry Trend Chart 1 -->
  <g transform="translate(32, 220)">
    <rect width="1136" height="360" rx="18" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <rect width="1136" height="48" rx="18" fill="#0b172a" stroke="#1e293b" stroke-width="1" />
    <text x="24" y="30" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">24-Hour Heart Rate &amp; Systolic BP Trend Line</text>
    <text x="450" y="30" class="font-mono" font-size="12" fill="#06b6d4">━ Heart Rate (bpm)</text>
    <text x="620" y="30" class="font-mono" font-size="12" fill="#14F195">━ Systolic BP (mmHg)</text>

    <g stroke="#1e293b" stroke-width="1" opacity="0.6">
      ${Array.from({ length: 6 }).map((_, i) => `<line x1="60" y1="${80 + i * 50}" x2="1100" y2="${80 + i * 50}" />`).join('')}
      ${Array.from({ length: 9 }).map((_, i) => `<line x1="${60 + i * 130}" y1="80" x2="${60 + i * 130}" y2="330" />`).join('')}
    </g>

    <g class="font-mono" font-size="11" fill="#64748b">
      <text x="50" y="348">00:00</text>
      <text x="180" y="348">03:00</text>
      <text x="310" y="348">06:00</text>
      <text x="440" y="348">09:00</text>
      <text x="570" y="348">12:00</text>
      <text x="700" y="348">15:00</text>
      <text x="830" y="348">18:00</text>
      <text x="960" y="348">21:00</text>
      <text x="1080" y="348">24:00</text>
    </g>

    <rect x="60" y="80" width="1040" height="50" fill="#ef4444" opacity="0.08" />
    <line x1="60" y1="130" x2="1100" y2="130" stroke="#ef4444" stroke-dasharray="4,4" stroke-width="1" opacity="0.6" />
    <text x="1000" y="122" class="font-mono" font-size="10" fill="#ef4444">Tachycardia Limit (110 bpm)</text>

    <path d="M60 220 Q 180 230, 310 210 T 570 190 T 700 110 T 830 150 T 960 170 T 1100 160 L 1100 330 L 60 330 Z" fill="url(#chart-cyan-fill)" />
    <path d="M60 220 Q 180 230, 310 210 T 570 190 T 700 110 T 830 150 T 960 170 T 1100 160" stroke="#06b6d4" stroke-width="3" fill="none" filter="url(#glow-cyan)" />
    <path d="M60 160 Q 180 170, 310 150 T 570 140 T 700 100 T 830 130 T 960 140 T 1100 135" stroke="#14F195" stroke-width="3" fill="none" filter="url(#glow-green)" />

    <circle cx="700" cy="110" r="7" fill="#ef4444" filter="url(#glow-red)" />
    <text x="700" y="90" text-anchor="middle" class="font-mono" font-size="12" font-weight="800" fill="#ef4444">128 bpm (ALERT)</text>
  </g>

  <!-- Large 24-Hour Telemetry Trend Chart 2 (SpO2 Curve) -->
  <g transform="translate(32, 600)">
    <rect width="1136" height="370" rx="18" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <rect width="1136" height="48" rx="18" fill="#0b172a" stroke="#1e293b" stroke-width="1" />
    <text x="24" y="30" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">SpO2 Oxygen Saturation 24h Trend</text>
    <text x="450" y="30" class="font-mono" font-size="12" fill="#38bdf8">━ Oxygen Saturation (%)</text>

    <g stroke="#1e293b" stroke-width="1" opacity="0.6">
      ${Array.from({ length: 5 }).map((_, i) => `<line x1="60" y1="${80 + i * 55}" x2="1100" y2="${80 + i * 55}" />`).join('')}
    </g>

    <path d="M60 120 Q 180 115, 310 125 T 570 130 T 680 240 T 730 130 T 960 125 T 1100 120 L 1100 340 L 60 340 Z" fill="url(#chart-green-fill)" />
    <path d="M60 120 Q 180 115, 310 125 T 570 130 T 680 240 T 730 130 T 960 125 T 1100 120" stroke="#38bdf8" stroke-width="3" fill="none" filter="url(#glow-cyan)" />

    <circle cx="680" cy="240" r="7" fill="#ef4444" filter="url(#glow-red)" />
    <text x="680" y="270" text-anchor="middle" class="font-mono" font-size="12" font-weight="800" fill="#ef4444">91% SpO2 (O2 Therapy Adj)</text>
  </g>

  <!-- Right Panel: Lab Vitals & Patient Log -->
  <g transform="translate(1192, 220)">
    <rect width="376" height="750" rx="18" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" />
    <rect width="376" height="48" rx="18" fill="#0b172a" stroke="#1e293b" stroke-width="1" />
    <text x="20" y="30" class="font-sans" font-size="15" font-weight="700" fill="#ffffff">Blood Gas &amp; Lab ABG Panel</text>

    <g transform="translate(20, 70)">
      <rect width="336" height="240" rx="12" fill="#071224" stroke="#1e293b" stroke-width="1" />
      <text x="16" y="28" class="font-mono" font-size="12" fill="#14F195">ARTERIAL BLOOD GAS (ABG)</text>

      <g transform="translate(16, 44)" class="font-sans" font-size="13">
        <text x="0" y="20" fill="#94a3b8">pH Level:</text>
        <text x="200" y="20" font-weight="700" fill="#ffffff">7.36 (Normal)</text>

        <text x="0" y="55" fill="#94a3b8">PaO2 (Oxygen):</text>
        <text x="200" y="55" font-weight="700" fill="#38bdf8">78 mmHg</text>

        <text x="0" y="90" fill="#94a3b8">PaCO2 (Carbon Dioxide):</text>
        <text x="200" y="90" font-weight="700" fill="#ffffff">42 mmHg</text>

        <text x="0" y="125" fill="#94a3b8">HCO3 (Bicarbonate):</text>
        <text x="200" y="125" font-weight="700" fill="#ffffff">24 mEq/L</text>

        <text x="0" y="160" fill="#94a3b8">Lactate:</text>
        <text x="200" y="160" font-weight="700" fill="#14F195">1.4 mmol/L</text>
      </g>
    </g>

    <!-- Clinical Timeline Log -->
    <g transform="translate(20, 330)">
      <text x="0" y="20" class="font-sans" font-size="14" font-weight="700" fill="#ffffff">Nursing &amp; Medical Timeline Log</text>

      <g transform="translate(0, 40)">
        <circle cx="10" cy="10" r="5" fill="#ef4444" />
        <line x1="10" y1="18" x2="10" y2="80" stroke="#1e293b" stroke-width="2" />
        <text x="26" y="14" class="font-mono" font-size="11" fill="#ef4444">23:12:40 — High Priority</text>
        <text x="26" y="32" class="font-sans" font-size="13" font-weight="600" fill="#ffffff">SpO2 drop to 91% resolved</text>
        <text x="26" y="50" class="font-sans" font-size="12" fill="#94a3b8">Increased O2 flow to 6L/min via cannula.</text>
      </g>

      <g transform="translate(0, 130)">
        <circle cx="10" cy="10" r="5" fill="#38bdf8" />
        <line x1="10" y1="18" x2="10" y2="80" stroke="#1e293b" stroke-width="2" />
        <text x="26" y="14" class="font-mono" font-size="11" fill="#38bdf8">20:00:00 — Lab Result</text>
        <text x="26" y="32" class="font-sans" font-size="13" font-weight="600" fill="#ffffff">ABG Sample Processed</text>
        <text x="26" y="50" class="font-sans" font-size="12" fill="#94a3b8">Lab telemetry linked to patient EMR.</text>
      </g>

      <g transform="translate(0, 220)">
        <circle cx="10" cy="10" r="5" fill="#14F195" />
        <text x="26" y="14" class="font-mono" font-size="11" fill="#14F195">16:30:00 — Ward Rounds</text>
        <text x="26" y="32" class="font-sans" font-size="13" font-weight="600" fill="#ffffff">Consultation with Dr. Palkar</text>
        <text x="26" y="50" class="font-sans" font-size="12" fill="#94a3b8">Vitals stable, ventilator weaning evaluated.</text>
      </g>
    </g>
  </g>
</svg>`;

async function generate() {
  console.log("Generating ICU preview webp images...");

  await sharp(Buffer.from(svgLogin))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, "icu-login.webp"));

  await sharp(Buffer.from(svgDashboard))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, "icu-dashboard.webp"));

  await sharp(Buffer.from(svgPatientMonitoring))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, "icu-patient-monitoring.webp"));

  await sharp(Buffer.from(svgAnalytics))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, "icu-analytics.webp"));

  console.log("Successfully created all 4 realistic ICU application webp images!");
}

generate().catch(err => {
  console.error("Error generating images:", err);
  process.exit(1);
});
