// src/pages/ptsd-trauma/PtsdTraumaManagingPage.jsx
/* import "./PtsdTrauma.css";

function PtsdTraumaManagingPage() {
  return (
    <main style={{ padding: "120px 40px" }}>
      <h1 style={{ color: "red", fontSize: "60px" }}>
        TEST DEALING PAGE
      </h1>
    </main>
  );
}

export default PtsdTraumaManagingPage; */


import { useState } from "react";

/* ── THEME ────────────────────────────────────────────── */
const T = {
  teal:       "#0d7a6e",
  tealDark:   "#095f55",
  tealLight:  "#1aaa96",
  tealBg:     "#e8f5f3",
  navy:       "#1a2332",
  bodyText:   "#4a5568",
  lightGray:  "#f4f7f6",
  white:      "#ffffff",
  border:     "#e2e8f0",
};

const gFont = "'Inter','Helvetica Neue',Arial,sans-serif";

/* ── SMALL HELPERS ────────────────────────────────────── */
function TealIconBox({ children }) {
  return (
    <div style={{
      width:48,height:48,borderRadius:12,background:T.teal,
      display:"flex",alignItems:"center",justifyContent:"center",
      flexShrink:0,fontSize:20,color:"#fff",
    }}>
      {children}
    </div>
  );
}

function PillBtn({ children, filled=true, onClick, style={} }) {
  return (
    <button onClick={onClick} style={{
      padding:"13px 30px",borderRadius:50,border:`2px solid ${T.teal}`,
      background: filled ? T.teal : "transparent",
      color: filled ? "#fff" : T.teal,
      fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:gFont,
      letterSpacing:"0.2px",transition:"all 0.2s",...style,
    }}>
      {children}
    </button>
  );
}

function SectionHeader({ label, title, accent, sub, center=true }) {
  return (
    <div style={{textAlign:center?"center":"left",marginBottom:48}}>
      {label && (
        <span style={{
          display:"inline-block",background:T.tealBg,color:T.teal,
          padding:"5px 16px",borderRadius:20,fontSize:13,fontWeight:700,
          letterSpacing:"0.5px",marginBottom:16,
        }}>{label}</span>
      )}
      <h2 style={{
        fontSize:"clamp(26px,4vw,42px)",fontWeight:800,color:T.navy,
        margin:"0 0 14px",lineHeight:1.2,fontFamily:gFont,
      }}>
        {title}{accent && <> <span style={{color:T.teal}}>{accent}</span></>}
      </h2>
      {sub && <p style={{
        fontSize:17,color:T.bodyText,
        maxWidth:600,margin:center?"0 auto":"0",lineHeight:1.7,
        fontFamily:gFont,
      }}>{sub}</p>}
    </div>
  );
}

/* ── ACCORDION DATA ───────────────────────────────────── */
const FAQ = [
  {
    icon:"✓", bg:T.teal,
    title:"DO's — How to support a loved one with PTSD",
    body:(
      <>
        <p style={{marginTop:0}}><strong>1. Educate yourself about PTSD.</strong> Understanding what your loved one experiences helps you respond with empathy rather than confusion.</p>
        <p><strong>2. Be patient &amp; understanding.</strong> Recovery is not linear. Some days will be much harder than others — this is completely normal.</p>
        <p><strong>3. Create a safe, calm environment.</strong> Reduce unpredictable stimuli when possible and give them space to express themselves without judgment.</p>
        <blockquote style={{
          borderLeft:`4px solid ${T.teal}`,margin:"16px 0",
          padding:"14px 20px",background:T.tealBg,
          borderRadius:"0 10px 10px 0",fontStyle:"italic",
          color:T.navy,fontSize:15,lineHeight:1.7,
        }}>
          "I understand that you've been through something really difficult. I'm here for you, and I want to support you in whatever way I can."
        </blockquote>
        <p style={{marginBottom:0}}>Avoid "why" questions — they may feel like blame or pressure to explain feelings the person may not fully understand themselves.</p>
      </>
    ),
  },
  {
    icon:"✕", bg:"#c0392b",
    title:"DON'Ts — What to avoid when helping someone",
    body:(
      <>
        <p style={{marginTop:0}}><strong>1. Never force them to talk about the trauma.</strong> Pushing for details can retraumatize and damage trust in your relationship.</p>
        <p><strong>2. Avoid minimizing their experience.</strong> Phrases like "just move on" or "others have it worse" are deeply harmful and counterproductive.</p>
        <p style={{marginBottom:0}}><strong>3. Never try to "fix" them.</strong> Your role is to support, not to cure. Professional help is needed for treatment. Try not to express frustration openly.</p>
      </>
    ),
  },
  {
    icon:"◎", bg:"#6b7280",
    title:"What you should do for yourself to help your loved ones",
    body:(
      <>
        <p style={{marginTop:0}}><strong>1. Prioritize self-care.</strong> Make time for activities that recharge you — exercise, hobbies, and social connections outside the caregiving role.</p>
        <p><strong>2. Set healthy boundaries.</strong> Emotional, respectful limits protect both you and your loved one. You can be supportive without sacrificing your own wellbeing.</p>
        <p style={{marginBottom:0}}><strong>3. Seek your own support.</strong> Therapists, support groups, or trusted friends help you process your own feelings. Compassion fatigue is real.</p>
      </>
    ),
  },
  {
    icon:"→", bg:"#7c3aed",
    title:"Already beyond the first steps of managing PTSD?",
    body:(
      <p style={{margin:0}}>Be patient — healing takes time and every person is different in their resilience and capabilities. If you or your loved one has begun making progress, celebrate that, no matter how small it seems. Continue checking in regularly, maintain routines, and look for professional support options if symptoms persist or worsen.</p>
    ),
  },
  {
    icon:"★", bg:T.teal,
    title:"Can my loved one overcome PTSD?",
    body:(
      <p style={{margin:0}}>Yes — with the right support and treatment, PTSD is a condition that many people can manage and even fully overcome. Effective approaches including trauma-focused hypnotherapy, EMDR, and cognitive-behavioral therapy have strong track records. The key is finding the right approach for the individual. Our team specializes in personalizing treatment pathways.</p>
    ),
  },
  {
    icon:"?", bg:"#d97706",
    title:"Am I in danger of developing PTSD?",
    body:(
      <p style={{margin:0}}>If you're concerned about being at risk for PTSD, consider speaking with a professional — especially if you have experienced or witnessed a traumatic event and are noticing persistent symptoms such as flashbacks, sleep disturbances, emotional numbness, or hypervigilance. Early intervention significantly improves outcomes. A free 20-minute consultation can help clarify your situation.</p>
    ),
  },
];

function AccordionItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background:T.white,borderRadius:16,marginBottom:12,overflow:"hidden",
      border:`1.5px solid ${open?T.teal:T.border}`,transition:"border-color 0.2s",
    }}>
      <button
        onClick={()=>setOpen(v=>!v)}
        style={{
          width:"100%",padding:"20px 24px",background:"transparent",
          border:"none",display:"flex",alignItems:"center",gap:16,
          cursor:"pointer",textAlign:"left",
        }}
      >
        <div style={{
          width:36,height:36,borderRadius:10,background:item.bg,
          color:"#fff",display:"flex",alignItems:"center",
          justifyContent:"center",fontWeight:700,fontSize:15,flexShrink:0,
        }}>{item.icon}</div>
        <span style={{flex:1,fontSize:16,fontWeight:700,color:T.navy,fontFamily:gFont}}>
          {item.title}
        </span>
        <span style={{
          color:T.teal,fontSize:20,flexShrink:0,
          transform:open?"rotate(180deg)":"rotate(0deg)",
          transition:"transform 0.25s",
        }}>▾</span>
      </button>
      {open && (
        <div style={{
          padding:"0 24px 24px",paddingTop:20,
          fontSize:15,lineHeight:1.8,color:T.bodyText,
          borderTop:`1px solid ${T.border}`,fontFamily:gFont,
        }}>
          {item.body}
        </div>
      )}
    </div>
  );
}

/* ── PAGE ─────────────────────────────────────────────── */
export default function ManagingPTSD() {
  return (
    <div style={{fontFamily:gFont,fontSize:16,color:T.bodyText,background:T.lightGray,minHeight:"100vh"}}>

      {/* HERO */}
      <section style={{
        background:"linear-gradient(135deg,#c8dbd8 0%,#ddeae6 45%,#e8f2ef 100%)",
        padding:"80px 40px 64px",position:"relative",overflow:"hidden",
      }}>
        {/* deco */}
        {[
          {top:"18%",right:"20%",icon:"♡",size:32,op:0.3},
          {top:"62%",right:"7%",icon:"☺",size:26,op:0.25},
          {top:"38%",right:"40%",icon:"♡",size:20,op:0.2},
        ].map((d,i)=>(
          <span key={i} style={{
            position:"absolute",top:d.top,right:d.right,
            fontSize:d.size,color:T.teal,opacity:d.op,
            pointerEvents:"none",userSelect:"none",
          }}>{d.icon}</span>
        ))}

        <div style={{
          maxWidth:1100,margin:"0 auto",
          display:"grid",gridTemplateColumns:"1fr 380px",
          gap:48,alignItems:"center",
        }}>
          {/* text */}
          <div>
            <div style={{
              display:"inline-block",background:T.teal,color:"#fff",
              padding:"5px 18px",borderRadius:20,fontSize:12,
              fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",
              marginBottom:20,
            }}>Step 2 of 5 — PTSD &amp; Trauma</div>
            <h1 style={{
              fontSize:"clamp(32px,5vw,58px)",fontWeight:900,
              color:T.teal,margin:"0 0 14px",lineHeight:1.1,
              letterSpacing:"-1px",
            }}>Managing PTSD<br/>&amp; Trauma</h1>
            <p style={{fontSize:19,fontWeight:700,color:T.tealDark,margin:"0 0 16px"}}>
              support. understand. heal.
            </p>
            <p style={{fontSize:16,color:T.navy,lineHeight:1.75,maxWidth:560,margin:"0 0 28px"}}>
              Practical guidance for those supporting loved ones — and for those on the journey of healing themselves. No need to relive the trauma. A gentle, efficient path forward.
            </p>
            <p style={{fontSize:13,color:"#555",marginBottom:28,lineHeight:1.65}}>
              <strong>Open Hours:</strong> Mon–Fri 7am–10pm CEST &nbsp;|&nbsp; 7am–1pm PDT &nbsp;|&nbsp; 5–11pm NZST<br/>
              Sat–Sun: by personal appointment
            </p>
            <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
              <PillBtn>Start Your Journey →</PillBtn>
              <PillBtn filled={false}>Learn More</PillBtn>
            </div>
          </div>

          {/* feature card */}
          <div style={{
            background:T.teal,borderRadius:24,padding:"44px 32px",
            color:"#fff",textAlign:"center",position:"relative",overflow:"hidden",
          }}>
            <div style={{
              position:"absolute",inset:0,
              background:"radial-gradient(circle at 30% 20%,rgba(255,255,255,0.1) 0%,transparent 60%)",
              pointerEvents:"none",
            }}/>
            <div style={{fontSize:56,marginBottom:20}}>🧠</div>
            <h3 style={{fontSize:22,fontWeight:800,margin:"0 0 12px"}}>
              community &amp; network
            </h3>
            <p style={{fontSize:15,opacity:0.88,lineHeight:1.6,margin:"0 0 28px"}}>
              Safe techniques with no re-traumatization. Join our global healing community.
            </p>
            <div style={{display:"flex",justifyContent:"center",gap:8}}>
              {[0,1,2].map(i=>(
                <div key={i} style={{
                  width:i===2?24:8,height:8,borderRadius:4,
                  background:i===2?"#fff":"rgba(255,255,255,0.4)",
                }}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER – 3 cards */}
      <section style={{background:T.white,padding:"72px 40px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <SectionHeader
            label="What We Offer"
            title="Unique therapeutic approaches at"
            accent="ptsd-trauma.help"
            sub="Discover the innovative healing models that set ptsd-trauma.help apart from traditional therapy."
          />
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))",
            gap:24,
          }}>
            {[
              {icon:"♡",title:"Unique therapeutic trauma programs",body:"No stressful client abreactions. Clients' safety is the first priority with highly trained specialists. Gentle and no re-traumatization."},
              {icon:"✓",title:"Gentle & efficient hypnosis sessions",body:"Our active approach sharpens critical thinking, building adaptability and empowering clients to become leaders in their own healing journey."},
              {icon:"☺",title:"Network building & finding friends",body:"Foster teamwork and communication skills through peer-to-peer support and group problem-solving activities. You are not alone."},
            ].map((c,i)=>(
              <div key={i} style={{
                background:T.white,border:`1.5px solid ${T.border}`,
                borderRadius:20,padding:"36px 28px",cursor:"pointer",
                transition:"transform 0.2s,box-shadow 0.2s,border-color 0.2s",
              }}
                onMouseEnter={e=>{
                  e.currentTarget.style.transform="translateY(-5px)";
                  e.currentTarget.style.boxShadow="0 16px 48px rgba(13,122,110,0.12)";
                  e.currentTarget.style.borderColor=T.teal;
                }}
                onMouseLeave={e=>{
                  e.currentTarget.style.transform="translateY(0)";
                  e.currentTarget.style.boxShadow="none";
                  e.currentTarget.style.borderColor=T.border;
                }}
              >
                <div style={{
                  width:48,height:48,borderRadius:12,background:T.tealBg,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:22,color:T.teal,marginBottom:20,
                }}>
                  {c.icon}
                </div>
                <h3 style={{fontSize:19,fontWeight:800,color:T.navy,margin:"0 0 12px",lineHeight:1.3}}>
                  {c.title}
                </h3>
                <p style={{fontSize:14,color:T.bodyText,lineHeight:1.75,margin:0}}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DO'S & DON'TS grid */}
      <section style={{background:T.lightGray,padding:"72px 40px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <SectionHeader
            label="Guidance"
            title="Do's &amp; Don'ts for supporting"
            accent="your loved one"
            sub="Tips for friends, family members, colleagues — or even a caring stranger. Empathy and healthy boundaries are the cornerstones of meaningful support."
          />
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))",
            gap:20,
          }}>
            {[
              {icon:"♡",accent:T.teal,title:"DO's if you want to help loved ones with PTSD",body:"1. Educate yourself  2. Be patient & understanding  3. Create a safe environment and listen without judgment."},
              {icon:"⊗",accent:"#c0392b",title:"DON'Ts if you want to help loved ones with PTSD",body:"1. Never force them to talk  2. Avoid minimizing their experience  3. Never try to \"fix\" them yourself."},
              {icon:"◎",accent:"#6b7280",title:"What you should do for yourself",body:"Prioritize self-care, set healthy emotional limits, and seek your own support network to avoid compassion fatigue."},
              {icon:"→",accent:"#7c3aed",title:"Already beyond the first steps?",body:"Be patient — healing takes time and every person is different in their resilience and healing capabilities."},
              {icon:"★",accent:T.teal,title:"Can my loved one overcome PTSD?",body:"Yes — with the right support and treatment, PTSD is a condition many people can manage and even fully overcome."},
              {icon:"?",accent:"#d97706",title:"Am I in danger of developing PTSD?",body:"If you're concerned about being at risk, speak with a professional early. Early intervention significantly improves outcomes."},
            ].map((c,i)=>(
              <div key={i} style={{
                background:T.white,border:`1.5px solid ${T.border}`,
                borderRadius:18,padding:"28px 24px",cursor:"pointer",
                transition:"transform 0.2s,box-shadow 0.2s,border-color 0.2s",
              }}
                onMouseEnter={e=>{
                  e.currentTarget.style.transform="translateY(-4px)";
                  e.currentTarget.style.boxShadow="0 12px 36px rgba(13,122,110,0.1)";
                  e.currentTarget.style.borderColor=c.accent;
                }}
                onMouseLeave={e=>{
                  e.currentTarget.style.transform="translateY(0)";
                  e.currentTarget.style.boxShadow="none";
                  e.currentTarget.style.borderColor=T.border;
                }}
              >
                <div style={{
                  width:44,height:44,borderRadius:10,
                  background:c.accent+"22",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:20,color:c.accent,marginBottom:16,
                }}>{c.icon}</div>
                <h3 style={{fontSize:17,fontWeight:800,color:T.navy,margin:"0 0 10px",lineHeight:1.3}}>
                  {c.title}
                </h3>
                <p style={{fontSize:14,color:T.bodyText,lineHeight:1.7,margin:"0 0 18px"}}>
                  {c.body}
                </p>
                <span style={{color:T.teal,fontWeight:700,fontSize:14}}>
                  read more →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ACCORDION */}
      <section style={{background:T.lightGray,padding:"72px 40px"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <SectionHeader
            label="Full Details"
            title="Detailed Guidance"
            accent="— expand each topic"
            sub="Everything you need to know about supporting someone with PTSD, caring for yourself, and understanding recovery."
          />
          {FAQ.map((item,i)=>(
            <AccordionItem key={i} item={item}/>
          ))}
          <div style={{
            background:T.tealBg,borderRadius:16,padding:"28px 32px",marginTop:24,
            display:"flex",alignItems:"center",justifyContent:"space-between",
            flexWrap:"wrap",gap:16,
          }}>
            <div>
              <div style={{fontSize:17,fontWeight:700,color:T.navy,marginBottom:4}}>
                Do you need another important question answered?
              </div>
              <div style={{fontSize:14,color:T.bodyText}}>
                Please contact us! Call us or write per WhatsApp. We will answer as soon as possible.
              </div>
            </div>
            <PillBtn>Contact Us →</PillBtn>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{background:T.white,padding:"72px 40px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <SectionHeader
            label="Our Results"
            title="What clients"
            accent="experience"
            sub="Results from our trauma recovery programs using trance'formative hypnosis."
          />
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
            gap:20,
          }}>
            {[
              {n:"91%",l:"Relief within the first session"},
              {n:"78%",l:"Feels unexpected & new to clients"},
              {n:"85%",l:"Profound changes even without words"},
              {n:"100%",l:"Open to all faiths & backgrounds"},
              {n:"∞",l:"No matter how long the trauma"},
            ].map((s,i)=>(
              <div key={i} style={{
                background:T.lightGray,borderRadius:18,
                padding:"32px 20px",textAlign:"center",
              }}>
                <div style={{
                  fontSize:48,fontWeight:800,color:T.teal,
                  lineHeight:1,marginBottom:10,
                }}>{s.n}</div>
                <div style={{fontSize:14,color:T.bodyText,lineHeight:1.5,fontWeight:600}}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* TEAM */}
      <section style={{background:T.white,padding:"72px 40px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <SectionHeader
            label="Your Experts"
            title="Your team of"
            accent="experts"
            sub="Certified, compassionate specialists dedicated to your trauma recovery journey."
          />
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
            gap:28,
          }}>
            {[
              {
                initials:"HT",name:"Hannes Tiedens",
                role:"Hypno Therapist, SP Practitioner",location:"Switzerland",
                bio:"Co-founder of mindVision® and creator of the trance'formative hypnosis technique. Specializing in PTSD & trauma, alcohol & addiction, physical regeneration, cell hypnosis, and mindful riders.",
                tags:["PTSD & Trauma","Addiction","Cell Hypnosis","Mindful Riders"],
                langs:"English · Spanish · German",
              },
              {
                initials:"SS",name:"Mag. Sandra Schwaighofer",
                role:"Hypnotist, Mind Trainer & Certified SP® Practitioner",location:"Austria",
                bio:"Founder of MindVision® — The Trance'formative Hypnosis Technique. Specializing in PTSD & Trauma Recovery, Narcissism & Co-dependency Healing, Family Hypnosis, and Leadership Empowerment Training.",
                tags:["PTSD & Trauma","Narcissism","Family Hypnosis","Leadership"],
                langs:"English · German",
              },
            ].map((p,i)=>(
              <div key={i} style={{
                background:T.white,borderRadius:20,
                border:`1.5px solid ${T.border}`,
                padding:"36px 32px",display:"flex",flexDirection:"column",gap:16,
              }}>
                <div style={{display:"flex",alignItems:"center",gap:16}}>
                  <div style={{
                    width:64,height:64,borderRadius:"50%",
                    background:T.tealBg,border:`3px solid ${T.teal}`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:20,fontWeight:700,color:T.teal,flexShrink:0,
                  }}>{p.initials}</div>
                  <div>
                    <div style={{fontSize:19,fontWeight:800,color:T.navy}}>{p.name}</div>
                    <div style={{fontSize:13,color:T.teal,fontWeight:600,marginTop:2}}>{p.role}</div>
                    <div style={{fontSize:12,color:"#888",marginTop:2}}>📍 {p.location}</div>
                  </div>
                </div>
                <p style={{fontSize:14,color:T.bodyText,lineHeight:1.75,margin:0}}>{p.bio}</p>
                <div>
                  {p.tags.map(t=>(
                    <span key={t} style={{
                      display:"inline-block",background:T.tealBg,color:T.tealDark,
                      padding:"4px 12px",borderRadius:20,fontSize:12,
                      fontWeight:600,marginRight:6,marginBottom:6,
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{fontSize:13,color:T.teal,fontWeight:600}}>{p.langs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FOOTER CONTACT */}
      <footer style={{background:T.navy,padding:"40px",color:"rgba(255,255,255,0.75)"}}>
        <div style={{
          maxWidth:1100,margin:"0 auto",
          display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:28,
        }}>
          {[
            {label:"Address",val:"Paris-Lodron-Str. 19/29\n5020 Salzburg, Austria"},
            {label:"Contact",val:"contact@ptsd-trauma.help\n+43 676 3569 231"},
            {label:"Open Hours",val:"Mon–Fri: 11am–8pm\nWeekend: 10am–6pm"},
          ].map((c,i)=>(
            <div key={i}>
              <div style={{
                fontSize:11,letterSpacing:"2px",textTransform:"uppercase",
                color:T.tealLight,marginBottom:6,fontWeight:700,
              }}>{c.label}</div>
              <div style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7,whiteSpace:"pre-line"}}>
                {c.val}
              </div>
            </div>
          ))}
          <div style={{display:"flex",alignItems:"center"}}>
            <button style={{
              background:T.teal,color:"#fff",border:"none",
              padding:"12px 28px",borderRadius:50,fontSize:14,
              fontWeight:700,cursor:"pointer",fontFamily:gFont,
            }}>Book Session Now</button>
          </div>
        </div>
      </footer>

    </div>
  );
}