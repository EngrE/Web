import ModalCardSection from "../../components/ModalCards";
import VisionTemplate from '../../components/VisionTemplate'
import "../ptsd-trauma/PtsdTrauma.css";
import { Heart, BookOpenCheck,ShieldCheck,HandHeart,LeafyGreen,Anchor ,Bubbles , Flag , Link , UnfoldHorizontal , Phone  } from "lucide-react";
import StatsTemplate from "../../components/StatsTemplate";
import statsBg from "../../assets/images/pexels-pixabay-349758-scaled.jpg";
import CompactStatsTemplate from "../../components/CompactStatsTemplate";

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

const clientStatsSections = [
  {
    title: "Who are our clients?",
    items: [
      {
        value: "33%",
        label: "Men",
        description: "Percentage of our male clients",
      },
      {
        value: "34%",
        label: "Women",
        description: "Percentage of our female clients",
      },
      {
        value: "26%",
        label: "Children & teenagers",
        description: "Percentage of clients under age 16",
      },
      {
        value: "7%",
        label: "LGBTQI+",
        description: "Percentage of our LGBTQI+ clients",
      },
    ],
  },
  {
    title: "Working formats",
    items: [
      {
        value: "33%",
        label: "Working in groups",
        description:
          "Group size: XS max. 5 people, S 24, M 14, L 50, XL 100, XXL 100+",
      },
      {
        value: "33%",
        label: "Mixed groups",
        description:
          "Group size: XS max. 5 people, S 24, M 14, L 50, XL 100, XXL 100+",
      },
    ],
  },
  {
    title: "Before the first sessions",
    items: [
      {
        value: "94%",
        label: "Sleep and restlessness",
        description: "No sleep, restlessness, thought spinning",
      },
      {
        value: "100%",
        label: "Emotional flashbacks",
        description: "Clients experienced emotional flashbacks",
      },
      {
        value: "83%",
        label: "Physical reactions",
        description: "Anger issues and poor impulse control",
      },
      {
        value: "19%",
        label: "Emotional numbness",
        description: "No emotions or no feelings at all",
      },
      {
        value: "100%",
        label: "Relationship problems",
        description: "Problems with family and friends",
      },
    ],
  },
  {
    title: "Where are our clients from?",
    items: [
      {
        value: "41%",
        label: "Europe",
        description: "Especially middle, south and north Europe",
      },
      {
        value: "23%",
        label: "America",
        description:
          "New York, California, Texas, Colorado, Florida, Hawaii, New Mexico",
      },
      {
        value: "11%",
        label: "Canada",
        description: "Toronto, Montreal",
      },
      {
        value: "23%",
        label: "Asia",
        description: "Dubai, Qatar, Pakistan, Israel",
      },
      {
        value: "2%",
        label: "Other",
        description: "Australia, New Zealand",
      },
    ],
  },
];


function SessionsPage() {
 return (
    <main style={{ padding: "120px 40px" }}>
              <div className="modal-section-header ptsd-header">
                <h2 className="modal-section-title ptsd-title">
                  SESSIONS by ptsd-trauma.help 
                  <span className="gradient-text"> globally & online</span>
                </h2>
              </div>


              <VisionTemplate
  sectionId="about"
  titlePrefix=""
  titleHighlight=""
  subtitle=""
  carouselTitlePrefix="YOUR"
  carouselTitleHighlight="ADVANTAGES"
  ctaText="Book Now"
  visionPoints={[
    {
      title: "Single Session (2-3h)",
      description: "Tailor-made hypnotherapy. Your well-being is always at the center.",
    },
    
   {
      title: "Group Session (2h)",
      description: "Meeting like-minded people and using the collective power of the group also in hypnosis.",
    },
    {
      title: "Surrogacy Session (2-3h)",
      description: "Successful vicarious hypnosis sessions for loved ones due to special circumstances.",
    },
    {
      title: "Self-Hypnosis Training: Practice Group (2h)",
      description:"Using the power of hypnosis every day and consistently following the path to recovery.",
    },
        {
      title: "Family Session (2-3h)",
      description:"Detangle emotional family enmeshments together with your loved ones.",
    },
        {
      title: "Intensive Therapy & Training Camp (1 week)",
      description:"One intensive therapy & training week together with your mind mates - Join us all over the world: America, Europe, South America, Canada, Great Britain, Asia (Dubai).",
    },
        {
      title: "Community - Infos - Webinars",
      description:"Join your community and find your “mind mates” - people with the same goals and desire to broaden their horizon!",
    },
            {
      title: "Practical tools & Support",
      description:"Get access to a tailored” Self-Help Archive” of audio-files, videos, scripts, manuals, our self-help manual and much more.",
    },
  ]}


  slides={[
    {
      id: 1,
      title: "Safe & reliable",
      description: "No stressful abreactions. Client′s safety is first priority.",
      icon: <HandHeart />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
     { 
      id: 2,
      title: "gentle & fast",
      description: "Particularly gentle for trauma & pain release. Comprehensive optimal outcome asap.",
      icon: <ShieldCheck />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
     {
      id: 3,
      title: "no need to talk",
      description: "Profound changes in hypnosis even without words. improvement in only 3-5 sessions",
      icon: <Heart />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
     {
      id: 4,
      title: "improvement in only 3-5 sessions",
      description: "Ideally significant relief already in your first session.",
      icon: <BookOpenCheck />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
     {
      id: 5,
      title: "highly experienced team",
      description: "Profit from the expertise of our global team. Special certification with years of experience.",
      icon: <LeafyGreen />,
      gradient: "background: linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },

  ]}
/>


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
    <>
      <CompactStatsTemplate
        sections={clientStatsSections}
        backgroundImage={statsBg}
      />
    </>
    </main>
  );
}

export default SessionsPage;