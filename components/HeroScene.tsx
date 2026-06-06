export default function HeroScene() {
  return (
    <svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C1208"/>
          <stop offset="35%" stopColor="#6B3A1E"/>
          <stop offset="65%" stopColor="#B8652A"/>
          <stop offset="100%" stopColor="#D4924A"/>
        </linearGradient>
        <linearGradient id="mt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A2810"/>
          <stop offset="100%" stopColor="#5A3E20"/>
        </linearGradient>
        <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A1E0A"/>
          <stop offset="100%" stopColor="#0E0905"/>
        </linearGradient>
        <radialGradient id="gw" cx="52%" cy="42%" r="35%">
          <stop offset="0%" stopColor="#E8A030" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#E8A030" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sk)"/>
      <ellipse cx="830" cy="370" rx="200" ry="130" fill="url(#gw)"/>
      <path d="M0 520 L180 400 L310 440 L470 360 L620 410 L780 330 L920 385 L1080 345 L1240 395 L1400 360 L1600 415 L1600 900 L0 900Z" fill="url(#mt)" opacity="0.8"/>
      <path d="M0 610 Q350 565 700 590 Q1050 615 1600 580 L1600 900 L0 900Z" fill="#3C2A12" opacity="0.9"/>
      <path d="M0 730 Q400 700 800 720 Q1200 740 1600 710 L1600 900 L0 900Z" fill="url(#fg)"/>
      <ellipse cx="185" cy="620" rx="52" ry="42" fill="#100C04" opacity="0.95"/>
      <rect x="181" y="618" width="8" height="75" fill="#100C04"/>
      <ellipse cx="225" cy="638" rx="30" ry="25" fill="#100C04" opacity="0.85"/>
      <ellipse cx="1310" cy="598" rx="65" ry="52" fill="#100C04" opacity="0.9"/>
      <rect x="1306" y="596" width="9" height="85" fill="#100C04"/>
      <ellipse cx="1390" cy="622" rx="38" ry="30" fill="#100C04" opacity="0.8"/>
      <path d="M0 735 Q200 720 400 730 Q600 740 800 728 Q1000 716 1200 725 Q1400 734 1600 720 L1600 900 L0 900Z" fill="#0A0704" opacity="0.6"/>
    </svg>
  );
}
