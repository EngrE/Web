import StatsTemplate from "../../components/StatsTemplate";
import statsBg from "../../assets/images/pexels-pixabay-349758-scaled.jpg";

import "../ptsd-trauma/PtsdTrauma.css";
import '../../components/Features.css';
import { Heart, CircleCheck,Smile,MonitorSmartphone, PencilRuler ,Brain } from 'lucide-react';
import Features from "../../components/Features/";


const sessionsStats = [
  {
    value: "3144",
    label: "Successful\nsessions",
  },
  {
    value: "5",
    label: "Non-successful\nsessions",
  },
  {
    value: "3",
    label: "Average\nnumber of\nsessions / client",
  },
  {
    value: "2",
    label: "Average\nduration of a\nsession\n(hours)",
  },
  {
    value: "8",
    label: "Trauma\nPrograms",
  },
  {
    value: "26",
    label: "Client’s\nnationalities",
  },
  {
    value: "3",
    label: "Languages",
  },
  {
    value: "7",
    label: "Minimum\nyears of\nexperience /\nexpert",
  },
  {
    value: "2",
    label: "Senior team\nmembers",
  },
  {
    value: "10000",
    label: "Minimum\nhours of\nexpertise /\nexpert",
  },
];

function ActivitiesPage() {
 return (
    <main>

      <section className="vision section">
        <div className="container">

            <Features
              title="ACTIVITES"
              gradientTitle="by ptsd-trauma.help | international"
              subtitle=""
              buttonText="Book a Free Pre-Talk"
              features={[
                      {
                        icon: <Heart />,
                        title: "Community – Infos – Webinars",
                        description:
                                      "Join your community and find your “mind mates” – people with the same goals and desire to broaden their horizon!",
                      },
                      {
                        icon: <CircleCheck />,
                        title:    "Intensive Therapy & Training Camp (1 week)",
                        description:
                          "One intensive therapy & training week together with your mind mates – Join us all over the world: America, Europe, South America, Canada, Great Britain, Asia (Dubai).",
                      },
                      {
                        icon: <PencilRuler />,
                        title:    "Practical tools & Support",
                        description:
                          "Use our tailored “Self-Help Archive” of audio-files, videos, scripts, manuals, our self-help manual and much more.",  
                      },
                      {
                        icon: <Smile />,
                        title:   "Self-Hypnosis Training: Practice Group (2h)",
                        description:
                          "Using the power of hypnosis every day and consistently following the path to recovery.",
                      },
                    ]}
                  />
          </div>
      </section>
        <section className="stats-section">
                        <div className="stats-grid">
                          <div className="stat-card" style={{ "--percent": 99 }}>
                            <div className="stat-card-inner">
                              <h2>99%</h2>
                              <h3>Instant Relief</h3>
                              <p>within the first session</p>
                            </div>
                          </div>
    
                          <div className="stat-card" style={{ "--percent": 92 }}>
                            <div className="stat-card-inner">
                              <h2>92%</h2>
                              <h3>Positive physical sensations</h3>
                              <p>Feels often very unexpected &amp; new to clients</p>
                            </div>
                          </div>
    
                          <div className="stat-card" style={{ "--percent": 100 }}>
                            <div className="stat-card-inner">
                              <h2>100%</h2>
                              <h3>No re-traumatization / no intense abreactions</h3>
                              <p>Profound changes in hypnosis even without words.</p>
                            </div>
                          </div>
    
                          <div className="stat-card" style={{ "--percent": 28 }}>
                            <div className="stat-card-inner">
                              <h2>28%</h2>
                              <h3>Unexpected spiritual experiences</h3>
                              <p>No matter which religion, agnostic or atheist.</p>
                            </div>
                          </div>
    
                          <div className="stat-card" style={{ "--percent": 99 }}>
                            <div className="stat-card-inner">
                              <h2>99%</h2>
                              <h3>Session as a significant positive experience</h3>
                              <p>No matter how long or intense the trauma had been inside you</p>
                            </div>
                          </div>
                        </div>
              </section>
              
      <StatsTemplate stats={sessionsStats} backgroundImage={statsBg} />
        <></>
    </main>
  );
}

export default ActivitiesPage;