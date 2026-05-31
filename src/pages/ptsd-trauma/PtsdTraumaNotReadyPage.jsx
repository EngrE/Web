// src/pages/ptsd-trauma/PtsdTraumaNotReadyPage.jsx
import "./PtsdTrauma.css";
import ModalCardSection from "../../components/ModalCards";
import FlipCircleSection from "../../components/FlipCards";

import {
  Brain, Hospital, Footprints, Sparkles,  UnfoldHorizontal,
  ShieldAlert, Anchor,Bubbles,Flag,Link, Phone, HeartCrack , TrendingDown,   ShieldCheck,
  Zap, Waypoints, RockingChair,
} from "lucide-react";


const FlipCards = [
  {
    id: 1,
    color: "purple",
    icon: ShieldCheck,
    title: "gentle & efficient",
    text: "What issue is it that you want to overcome through our hypnosis sessions? ",
    backTitle: "Details",
    backText:
      "Find your personal way of change that is optimal for you. With our client centred program – every hypnosis session is tailored to your personal needs. Choose between single sessions, group sessions, surrogacy sessions, selfhypnosis training or simple coaching for your everyday -life-challenges.",
  },
  {
    id: 2,
    color: "danger",
    icon: Zap,
    title: "no need to talk about it",
    text: "Sometimes we know exactly what our problem is ",
    backTitle: "Details",
    backText:
      "Sometimes we know exactly what our problem is – but sometimes our issues lie beyond words. You do not have to talk about your trauma. Together we are looking for the gentlest, respectful und most efficient way of your personal healing story.",
  },
  {
    id: 3,
    color: "neutral",
    icon: Waypoints,
    title: "find the optimal program for you!",
    text: "No matter which program you choose: Together we work on an intense non-conscious level",
    backTitle: "Details",
    backText:
      "No matter which program you choose: Together we work on an intense non-conscious level, without reliving old experiences whenever your superconscious mind allows to clear it supraliminally. Many clients see improvements after just few sessions, though multiple sessions may be necessary for clearing up complex trauma experiences.",
  },
  {
    id: 4,
    color: "success",
    icon: RockingChair,
    title: "comfortable & safe",
    text: "Track important activity and performance insights.",
    backTitle: "Details",
    backText:
      "No matter what the reason is as client comes for help: They are always on the safe side. Our process is designed to be non-invasive and comfortable in every session, making it suitable for all age groups and issues.",
  },
];

function PtsdTraumaNotReadyPage() {
 return (
  
    <main className="ptsd-page crisis-page" style={{ padding: "120px 40px" }}>
      <section>
              <div className="modal-section-header ptsd-header">
                <h2 className="modal-section-title ptsd-title">
                  NOT READY FOR
                  <span className="gradient-text"> CHANGES YET?</span>
                </h2>

                <p className="modal-section-subtitle"> You have PTSD, suffer from trauma but have no desires for changes yet?
                <br/> Do’s and Don’ts of managing your own a mental crisis, no matter if it is PTSD, trauma or something else.
                 </p> <div className="ptsd-page accordion-content"><blockquote>First steps to evaluate the situation. Note: a lot is similar to the Do’s & Don’ts of your loved ones: Learn to take care of yourself optimally! </blockquote>
               </div>
              </div>

      </section>

      <section>
        <div className="ptsd-points">
          <div className="ptsd-point">
            <div className="accordion-icon danger">
              <Anchor />
            </div>
            <div className="ptsd-point-content">
              <h3 className="ptsd-point-title">
                DO’s if you have PTSD?
              </h3>
                <p className="ptsd-point-description">                 
                  When we face intense stress or trauma, our body often reacts through physical symptoms – these are called psychosomatic problems.
                  <br/>Headaches, stomach issues, muscle tension, or unexplained chronic pain can be signs that your body is trying to process unhealed emotional wounds. Here are some first steps to consider:
                  <br/> <strong>Acknowledge the Connection: </strong> Understand that your body and mind are closely linked – stress and trauma also manifest physically.
                  <br/> <strong>Seek Professional Guidance:</strong> No matter if you seek help here or somewhere else. A trauma-informed therapist or a hypnotherapist can help you understand and overcoming the root causes of your symptoms.
                  <br/> <strong>Practice Gentle Self-Care:</strong>  Techniques like deep breathing, mindfulness, or light physical activity can offer initial relief and reduce stress.
                  <br/> <strong>Explore Holistic Approaches:</strong> Hypnotherapy, such as the methods we offer, can address both the emotional and physical aspects of trauma.
                </p>
            </div>
          </div>

          <div className="ptsd-point">
            <div className="accordion-icon success">
              <Bubbles />
            </div>
            <div className="ptsd-point-content">
              <h3 className="ptsd-point-title"> 
                DONT’s if you have PTSD?
              </h3>
              <p className="ptsd-point-description">
                CHere are some key considerations for deciding whether a hospital stay might be necessary or not:

                <br/> <strong>  :</strong> 
                Immediate Safety:
                If you feel like you’re a danger to yourself or others, a hospital stay may provide a safe space to stabilize and receive care.

                <br/> <strong>Intensive Support:</strong>  Hospitals can offer intensive therapies and monitoring for those in acute distress. If your family is already exhausted, your care takers are close to a burn out it might be time to consider help through professionals.
                <br/> <strong>Evaluate Immediate Needd:</strong>  If you’re experiencing severe symptoms – such as persistent flashbacks, self-harming urges, or overwhelming anxiety – a hospital stay might offer the structured support you need. Additionally you also find the medical support there, just in case you might need it.
                <br/> <strong>Outpatient Options:</strong> If you prefer to stay in your own environment, outpatient therapies, like hypnotherapy or counseling, can be a less invasive alternative. Online possibilities are especially helpful if you have troubles leaving your home easily.
                <br/> <strong>Take care of your needs:</strong> Trust your feelings – what environment feels right for you at this stage of healing? A hospital stay is just one of many paths to recovery.
                <br/> <strong>Talk to a Trusted Professional:</strong> Speaking with a therapist or counselor about your options can clarify whether an inpatient setting might be beneficial or if outpatient care could be just as effective.
                <br/> <strong>Consider Stability and Routine:</strong>  Hospitals provide a structured environment, which can be comforting if you’re struggling with daily routines or finding it hard to function at home.
                <br/> <strong>Reflect on Your Comfort & Security Level:</strong> Think about where you feel safest. Some people feel more secure in a supportive home environment, while others find peace in a clinical setting with intensive care.
                <br/> <strong>Seek a Second Opinion:</strong> If you’re unsure, consider reaching out for a second opinion from a different mental health professional, as this can provide a fresh perspective on your needs.
                <br/> <strong>Know Your Alternatives:</strong> Hospital stays aren’t the only option. Outpatient programs, therapy, support groups, or hypnotherapy can also offer intensive support without requiring a full-time commitment.                   
                </p>
            </div>
          </div>

          <div className="ptsd-point">
            <div className="accordion-icon neutral">
              <Flag />
            </div>
            <div className="ptsd-point-content">
              <h3 className="ptsd-point-title">
              What you always should do for yourself when you have PTSD
              </h3>
              <p className="ptsd-point-description">

            Finding the first steps out of a negative spiral can feel daunting, but small changes already make a big difference!
                Be patient with yourself, and give yourself all the care, love and compassion you deserve. Because you are worth it.
                <br/><strong>Reach Out for Help</strong> Speaking to a professional or a trusted friend can be the first step towards feeling less alone.

                <br/><strong>Break Tasks into Small Steps </strong> Focus on manageable actions, like making an appointment, practicing a relaxation technique, or simply going outside for a few minutes.

                <br/><strong>Challenge Negative Thoughts </strong> Try to replace harsh self-criticism with kinder, more compassionate thoughts.

                <br/><strong>Focus on the Present Moment </strong> Mindfulness exercises can help ground you when anxiety about the past or future takes over.

                <br/><strong>Set Small, Realistic Goals</strong> Aim for one achievable goal each day, no matter how small. This could be as simple as drinking a glass of water or taking a short walk.

                <br/><strong>Prioritize Rest and Sleep</strong> Quality sleep is essential for mental health. Try establishing a calming evening routine to improve your rest.

                <br/><strong>Limit Exposure to Stressors</strong> Take a break from news, social media, or other stress-inducing sources. Allow yourself moments of peace and calm.

                <br/><strong>Practice Kindness Toward Yourself</strong>
                Remind yourself that healing takes time. Practice speaking kindly to yourself, as you would to a friend.

                <br/><strong>Engage in Gentle Movement</strong> Physical activity, even if it’s just stretching or a short walk, can help release tension and improve mood.

                <br/><strong>Find Joy in Simple Activities</strong> Small moments, like enjoying a warm cup of tea or listening to soothing music, can help shift focus away from negative thoughts.

                <br/><strong>Consider Journaling</strong> Writing down thoughts, feelings, or small victories can be therapeutic and helps track your progress.

                <br/><strong>Explore Creative Outlets</strong> Art, music, or any form of creative expression can help process emotions in a non-verbal way and offer relief.
                                                
                  </p> 
                  <div className="ptsd-page accordion-content">
                  
                  <blockquote>Want to know more? Inform yourself and start practicing your self help skills with our self help manual. 
                  Regardless if you are our client yet or not. 😉
                </blockquote>  
                  </div>

            </div>
          </div>
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


        <FlipCircleSection
        sectionTitle=
              {<>
                IN CASE YOU CHANGE YOUR OPINION{" "}
                <span className="gradient-text">Get the best out of it!</span>
              </>}
   
        // sectionText="You do not need to be ready to tell your whole story. Support can begin exactly where you are."
        cards={FlipCards}
      />
      
    </main>

  );
}

export default PtsdTraumaNotReadyPage;