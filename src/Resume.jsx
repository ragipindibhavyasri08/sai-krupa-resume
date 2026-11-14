"use client";
import { useEffect, useState } from "react";

/* Kammari Saikrupa — motion-graphics resume.
   Self-contained: only React is needed. Styles are scoped under .rs. */

const EMAIL = "saikrupa.ve@gmail.com";
const PHONE = { href: "+919701474204", text: "+91 97014 74204" };
const PORTFOLIO = "https://sai-krupa-edit-portfolio.saikrupa647.chatgpt.site/";

const TICKER =
  "VIDEO EDITING • AI VIDEO GENERATION • COLOR GRADING • MOTION GRAPHICS • VFX • REELS & SHORTS • YOUTUBE EDITS • PROMO ADS • SOUND DESIGN • STORYBOARDING •";

const EDUCATION = [
  ["2021 — 2024", "B.Sc. Computer Science (MPCs)", "Govt. Degree College, Medak"],
  ["APR 2021", "Intermediate", "Geetha Junior College, Medak · 50%"],
  ["MAY 2019", "SSC (Matriculation)", "Geetha School, Medak · CGPA 8.8/10"],
];

const EXPERIENCE = [
  {
    role: "Freelance Video Editor",
    when: "OCT 2026 — PRESENT",
    org: "Independent · Open for projects",
    points: [
      "Editing reels, shorts, YouTube videos and promo ads for clients.",
      "Color grading, motion graphics and VFX to elevate every edit.",
      "Full workflow from storyboard to final render.",
    ],
  },
  {
    role: "Video Editor & Team Lead",
    when: "AUG 2025 — SEP 2026",
    org: "Rayfog Business Solutions",
    points: [
      "Lead and mentor a team of video editors, keeping every deliverable to high-quality and brand standards.",
      "Manage end-to-end production workflows, from concept to final color grading and rendering.",
      "Oversee QA for social media assets, with formats optimized for Reels, Shorts and YouTube.",
    ],
  },
  {
    role: "Video Editor",
    when: "DEC 2024 — JUL 2025",
    org: "Wolf Media",
    points: [
      "Edited high-energy promo videos, ads and reels built for maximum audience retention.",
      "Executed advanced color grading, seamless transitions and motion graphics to lift production value.",
      "Delivered 10+ high-quality video assets per week with the creative team, under tight deadlines.",
    ],
  },
];

/* label, clip color (p pink, y cyan, w light, s slate), clips as [text, left %, width %] */
const LANES = [
  ["V1 EDIT", "p", [["Premiere Pro", 0, 22], ["DaVinci Resolve", 23, 26], ["CapCut", 50, 22]]],
  ["V2 VFX", "y", [["After Effects", 10, 24], ["GUVI Certified VFX", 35, 30]]],
  ["V3 DESIGN", "w", [["Photoshop", 4, 18], ["Poster Design", 23, 22], ["Branding", 46, 16], ["Canva", 63, 14]]],
  ["V4 AI", "p", [["AI Video Generation", 0, 28], ["Text-to-Video", 29, 20], ["Image-to-Video", 50, 21], ["Prompt Engineering", 72, 28]]],
  ["A1 CORE", "s", [["Color Grading", 0, 20], ["Sound Design", 21, 20], ["Storyboarding", 42, 20], ["Social Media Algorithms", 63, 37]]],
  ["A2 LEAD", "s", [["Team Management", 0, 20], ["Creative Direction", 21, 22], ["Workflow Optimization", 44, 26], ["Client Coordination", 71, 29]]],
  ["A3 SOFT", "w", [["Leadership", 0, 14], ["Interactive", 15, 14], ["Communication", 30, 20], ["Presentation", 51, 20]]],
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap');
.rs{position:relative;width:840px;height:1380px;overflow:hidden;background:#0D0D14;color:#ECECF5;font:13px/1.5 Inter,sans-serif}
.rs a{color:#22E5FF;text-decoration:none}.rs a:hover{color:#fff}
.rs .m{font-family:ui-monospace,Menlo,Consolas,monospace;letter-spacing:.12em}
.rs .grid{position:absolute;inset:0;background-image:linear-gradient(#ffffff0d 1px,transparent 1px),linear-gradient(90deg,#ffffff0d 1px,transparent 1px);background-size:40px 40px}
.rs .orb{position:absolute;top:-70px;right:-60px;width:260px;height:260px;border-radius:50%;background:#FF3D81;animation:bob 6s ease-in-out infinite}
.rs .ring{position:absolute;top:40px;right:50px;width:200px;height:200px;box-sizing:border-box;border:2px dashed #22E5FF;border-radius:50%;animation:spin 18s linear infinite}
.rs .tri{position:absolute;top:118px;left:682px;border:22px solid transparent;border-left:34px solid #fff;border-right-width:0}
.rs .k{position:absolute;width:26px;height:26px;border:0 solid #22E5FF}
.rs .k1{top:18px;left:18px;border-width:3px 0 0 3px}.rs .k2{top:18px;right:18px;border-width:3px 3px 0 0}
.rs .k3{bottom:18px;left:18px;border-width:0 0 3px 3px}.rs .k4{bottom:18px;right:18px;border-width:0 3px 3px 0}
.rs .wrap{position:relative;z-index:1;display:flex;flex-direction:column;height:100%}
.rs .head{padding:42px 48px 0}
.rs .rec{display:flex;align-items:center;gap:10px;font-size:11px;color:#A9ABC2}
.rs .dot{width:10px;height:10px;border-radius:50%;background:#FF3D81;animation:blink 1.2s infinite}
.rs .name{margin:16px 0 0;font:700 94px/.95 'Space Grotesk',sans-serif;letter-spacing:-.03em;text-transform:uppercase}
.rs .mask{display:block;overflow:hidden}
.rs .rise{display:block;animation:rise .9s cubic-bezier(.2,.8,.2,1) both}
.rs .outline{color:transparent;-webkit-text-stroke:2px #22E5FF;animation-delay:.15s}
.rs .f{animation:fade .8s cubic-bezier(.2,.8,.2,1) both}
.rs .role{margin-top:14px;font:500 17px 'Space Grotesk',sans-serif;letter-spacing:.16em;text-transform:uppercase;animation-delay:.5s}
.rs .role b{color:#FF3D81}
.rs .pills{margin-top:14px;display:flex;align-items:center;gap:14px;animation-delay:.65s}
.rs .pill{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:99px;font-size:11px;font-weight:700;color:#0D0D14}
.rs .pill.cy{background:#22E5FF}.rs .pill.pk{background:#FF3D81}
.rs .pdot{width:8px;height:8px;border-radius:50%;background:#0D0D14;animation:blink 1.2s infinite}
.rs .loc{font-size:11px;color:#A9ABC2}
.rs .tk{position:relative;height:70px;margin:16px -60px 0}
.rs .band1{position:absolute;left:0;right:0;top:16px;height:38px;background:#22E5FF;transform:rotate(1.6deg)}
.rs .band2{position:absolute;left:0;right:0;top:14px;height:40px;background:#FF3D81;color:#0D0D14;transform:rotate(-1.6deg);overflow:hidden;display:flex;align-items:center;font:700 15px 'Space Grotesk',sans-serif;letter-spacing:.1em;white-space:nowrap}
.rs .trk{display:flex;width:max-content;animation:tick 26s linear infinite}
.rs .trk span{padding-right:12px}
.rs .body{display:grid;grid-template-columns:230px 1fr;gap:36px;padding:24px 48px 0}
.rs .h{display:flex;align-items:center;gap:10px;margin:0 0 12px;font:700 13px 'Space Grotesk',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#FF3D81}
.rs .h:after{content:"";flex:1;height:2px;background:#2A2B3D}
.rs .lab{font-size:10px;color:#A9ABC2}.rs .lab.cy{color:#22E5FF}
.rs .contact{display:flex;flex-direction:column;gap:8px;margin-bottom:24px;animation-delay:.8s}
.rs .pf{font-weight:600;color:#FF3D81}
.rs .url{font-size:11px;line-height:1.35;color:#A9ABC2;word-break:break-all}
.rs .edu{margin-bottom:12px;animation-delay:.95s}
.rs .ed{margin-bottom:12px}.rs .ed b{display:block;font-weight:600}.rs .ed span{color:#A9ABC2;font-size:12px}
.rs .course{padding:14px 16px;background:#151622;border-radius:12px;animation-delay:1.1s}
.rs .badge{display:inline-block;padding:2px 8px;border-radius:99px;background:#FF3D81;color:#0D0D14;font-size:10px;font-weight:700}
.rs .course h3{margin:8px 0 0;font:700 16px 'Space Grotesk',sans-serif}
.rs .course p{margin:0;color:#A9ABC2;font-size:12px}
.rs .card{margin-bottom:14px;padding:16px 20px;background:#151622;border-radius:14px}
.rs .top{display:flex;justify-content:space-between;align-items:baseline;gap:10px}
.rs .top h3{margin:0;font:700 19px 'Space Grotesk',sans-serif}
.rs .when{font-size:10px;color:#22E5FF;white-space:nowrap}
.rs .org{margin:2px 0 8px;color:#FF3D81;font-weight:600}
.rs .card ul{margin:0;padding-left:16px;color:#C9CBDD;font-size:12.5px;line-height:1.45}
.rs .card li{margin-bottom:3px}
.rs .tline{margin-top:auto;padding:0 48px 38px}
.rs .tracks{position:relative}
.rs .rw{display:flex;gap:8px;margin-bottom:5px}
.rs .lb{width:52px;flex:none;font-size:10px;color:#A9ABC2;line-height:24px}
.rs .ruler{flex:1;height:12px;background:repeating-linear-gradient(90deg,#4A4C66 0 1px,transparent 1px 34px) left bottom/100% 7px no-repeat}
.rs .ln{position:relative;flex:1;height:24px;background:#151622;border-radius:4px;overflow:hidden}
.rs .c{position:absolute;top:2px;bottom:2px;display:flex;align-items:center;padding:0 8px;border-radius:3px;font:600 11px Inter,sans-serif;white-space:nowrap;overflow:hidden;transform-origin:left;animation:clip .8s cubic-bezier(.2,.8,.2,1) both}
.rs .c.p{background:#FF3D81;color:#0D0D14}.rs .c.y{background:#22E5FF;color:#0D0D14}
.rs .c.w{background:#ECECF5;color:#0D0D14}.rs .c.s{background:#34365A;color:#ECECF5}
.rs .ph{position:absolute;left:60px;right:0;top:0;bottom:0;pointer-events:none}
.rs .ph div{position:absolute;top:0;bottom:0;width:2px;background:#FF3D81;animation:play 9s linear infinite}
.rs .ph span{position:absolute;top:-2px;left:-5px;width:12px;height:12px;border-radius:2px;background:#FF3D81}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes rise{from{transform:translateY(110%)}}
@keyframes fade{from{opacity:0;transform:translateY(14px)}}
@keyframes blink{50%{opacity:.15}}
@keyframes tick{to{transform:translateX(-50%)}}
@keyframes bob{50%{transform:translateY(-16px)}}
@keyframes play{from{left:0}to{left:100%}}
@keyframes clip{from{transform:scaleX(0)}}
@media (prefers-reduced-motion:reduce){.rs *{animation:none!important}}
`;

const W = 840;
const H = 1380;

export default function Resume() {
  // Shrinks the fixed 840px layout to fit narrow screens.
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => setScale(Math.min(1, window.innerWidth / W));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div style={{ width: W * scale, height: H * scale, margin: "0 auto" }}>
      <style>{css}</style>
      <div className="rs" style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <div className="grid" aria-hidden="true" />
        <div className="orb" aria-hidden="true" />
        <div className="ring" aria-hidden="true" />
        <div className="tri" aria-hidden="true" />
        {["k1", "k2", "k3", "k4"].map((k) => (
          <div key={k} className={`k ${k}`} aria-hidden="true" />
        ))}

        <div className="wrap">
          <header className="head">
            <div className="rec m"><span className="dot" />REC · SHOWREEL RESUME · 2026</div>
            <h1 className="name">
              <span className="mask"><span className="rise">Kammari</span></span>
              <span className="mask"><span className="rise outline">Saikrupa</span></span>
            </h1>
            <div className="role f">Video Editor <b>/</b> Team Lead <b>/</b> Motion Graphics</div>
            <div className="pills f">
              <span className="pill cy m"><span className="pdot" />OPEN FOR FREELANCE</span>
              <span className="pill pk m">AI VIDEO SPECIALIST</span>
              <span className="loc m">MEDAK · TELANGANA · INDIA</span>
            </div>
            <div className="tk" aria-label="Services">
              <div className="band1" aria-hidden="true" />
              <div className="band2">
                <div className="trk">
                  <span>{TICKER}</span>
                  <span aria-hidden="true">{TICKER}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="body">
            <aside>
              <h2 className="h">Contact</h2>
              <div className="contact f">
                <div><div className="lab m">EMAIL</div><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
                <div><div className="lab m">PHONE</div><a href={`tel:${PHONE.href}`}>{PHONE.text}</a></div>
                <div>
                  <div className="lab m">PORTFOLIO</div>
                  <a className="pf" href={PORTFOLIO}>View my work ↗</a>
                  <div className="url">{PORTFOLIO.replace("https://", "").replace(/\/$/, "")}</div>
                </div>
              </div>

              <h2 className="h">Education</h2>
              <div className="edu f">
                {EDUCATION.map(([when, title, school]) => (
                  <div className="ed" key={title}>
                    <div className="lab cy m">{when}</div>
                    <b>{title}</b>
                    <span>{school}</span>
                  </div>
                ))}
              </div>

              <h2 className="h">Course</h2>
              <div className="course f">
                <span className="badge m">CERTIFIED</span>
                <h3>Power of VFX</h3>
                <p>Online course · GUVI</p>
              </div>
            </aside>

            <section>
              <h2 className="h">Experience</h2>
              {EXPERIENCE.map((e, i) => (
                <article className="card f" key={e.role + e.org} style={{ animationDelay: `${0.85 + i * 0.15}s` }}>
                  <div className="top">
                    <h3>{e.role}</h3>
                    <span className="when m">{e.when}</span>
                  </div>
                  <div className="org">{e.org}</div>
                  <ul>
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </article>
              ))}
            </section>
          </div>

          <footer className="tline">
            <h2 className="h">Toolkit / Timeline</h2>
            <div className="tracks">
              <div className="rw"><b className="lb" /><div className="ruler" /></div>
              {LANES.map(([label, tone, clips], li) => (
                <div className="rw" key={label}>
                  <b className="lb m">{label}</b>
                  <div className="ln">
                    {clips.map(([text, left, width], ci) => (
                      <i
                        key={text}
                        className={`c ${tone}`}
                        style={{ left: `${left}%`, width: `${width}%`, animationDelay: `${1 + (li + ci) * 0.1}s` }}
                      >
                        {text}
                      </i>
                    ))}
                  </div>
                </div>
              ))}
              <div className="ph" aria-hidden="true"><div><span /></div></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
