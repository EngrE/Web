import Features from "../../components/Features";
import {
  Brain, Hospital, Footprints, Sparkles,  UnfoldHorizontal,
  ShieldAlert, Anchor,Bubbles,Flag,Link, Phone, HeartCrack , TrendingDown
} from "lucide-react";
import { useState } from "react";
import ModalCardSection from "../../components/ModalCards";

const crisisCards = [
  {
    icon: <Brain />,
    colorType: "purple",
    title: "What are psychosomatic problems? How to deal with it?",
    excerpt:
      "When we face intense stress or trauma, our body often reacts through physical symptoms ",
      fullContent: (
  <>
    <p>
      When we face intense stress or trauma, our body often reacts through physical symptoms – these are called psychosomatic problems.
      Headaches, stomach issues, muscle tension, or unexplained chronic pain can be signs that your body is trying to process unhealed emotional wounds. Here are some first steps to consider:
      Acknowledge the Connection:
      Understand that your body and mind are closely linked – stress and trauma also manifest physically.
    </p>

    <p>
      <strong>Seek Professional Guidance: </strong>
      No matter if you seek help here or somewhere else. A trauma-informed therapist or a hypnotherapist can help you understand and overcoming the root causes of your symptoms.
    </p>

    <p>
      <strong>Practice Gentle Self-Care: </strong>
      Techniques like deep breathing, mindfulness, or light physical activity can offer initial relief and reduce stress.
    </p>

    <p>
      <strong>Explore Holistic Approaches:</strong>
      Hypnotherapy, such as the methods we offer, can address both the emotional and physical aspects of trauma.
    </p>
  </>
),

  },
  {
    icon: <Hospital />,
    colorType: "danger",
    title: "Hospital stay: Yes or no?",
    excerpt:
      "Here are some key considerations for deciding whether a hospital stay might be necessary or not",
    fullContent: (
      <>
        <p>Here are some key considerations for deciding whether a hospital stay might be necessary or not:</p>

        <p>
          <strong>Immediate Safety</strong>
          <br />
          If you feel like you’re a danger to yourself or others, a hospital stay may provide a safe space to stabilize and receive care.
        </p>

        <p>
          <strong>Intensive Support</strong>
          <br />
          Hospitals can offer intensive therapies and monitoring for those in acute distress. If your family is already exhausted, your care takers are close to a burn out it might be time to consider help through professionals.
        </p>

        <p>
          <strong>Evaluate Immediate Needs</strong>
          <br />
          If you’re experiencing severe symptoms – such as persistent flashbacks, self-harming urges, or overwhelming anxiety – a hospital stay might offer the structured support you need. Additionally you also find the medical support there, just in case you might need it.
        </p>

        <p>
          <strong>Outpatient Options</strong>
          <br />
          If you prefer to stay in your own environment, outpatient therapies, like hypnotherapy or counseling, can be a less invasive alternative. Online possibilities are especially helpful if you have troubles leaving your home easily.
        </p>

        <p>
          <strong>Take care of your needs</strong>
          <br />
          Trust your feelings – what environment feels right for you at this stage of healing? A hospital stay is just one of many paths to recovery.
        </p>

        <p>
          <strong>Talk to a Trusted Professional</strong>
          <br />
          Speaking with a therapist or counselor about your options can clarify whether an inpatient setting might be beneficial or if outpatient care could be just as effective.
        </p>

        <p>
          <strong>Consider Stability and Routine</strong>
          <br />
          Hospitals provide a structured environment, which can be comforting if you’re struggling with daily routines or finding it hard to function at home.
        </p>

        <p>
          <strong>Reflect on Your Comfort & Security Level</strong>
          <br />
          Think about where you feel safest. Some people feel more secure in a supportive home environment, while others find peace in a clinical setting with intensive care.
        </p>

        <p>
          <strong>Seek a Second Opinion</strong>
          <br />
          If you’re unsure, consider reaching out for a second opinion from a different mental health professional, as this can provide a fresh perspective on your needs.
        </p>

        <p>
          <strong>Know Your Alternatives</strong>
          <br />
          Hospital stays aren’t the only option. Outpatient programs, therapy, support groups, or hypnotherapy can also offer intensive support without requiring a full-time commitment.
        </p>
      </>
    ),
  },
  {
    icon: <Footprints />,
    colorType: "neutral",
    title: "The first steps out of the negative spiral",
    excerpt:
      "Finding the first steps out of a negative spiral can feel daunting, but small changes already make a big difference!",
    fullContent: (
      <>
        <p>Finding the first steps out of a negative spiral can feel daunting, but small changes already make a big difference!</p>

        <p>Be patient with yourself, and give yourself all the care, love and compassion you deserve. Because you are worth it.</p>

        <p>
          <strong>Reach Out for Help</strong>
          <br />
          Speaking to a professional or a trusted friend can be the first step towards feeling less alone.
        </p>

        <p>
          <strong>Break Tasks into Small Steps</strong>
          <br />
          Focus on manageable actions, like making an appointment, practicing a relaxation technique, or simply going outside for a few minutes.
        </p>

        <p>
          <strong>Challenge Negative Thoughts</strong>
          <br />
          Try to replace harsh self-criticism with kinder, more compassionate thoughts.
        </p>

        <p>
          <strong>Focus on the Present Moment</strong>
          <br />
          Mindfulness exercises can help ground you when anxiety about the past or future takes over.
        </p>

        <p>
          <strong>Set Small, Realistic Goals</strong>
          <br />
          Aim for one achievable goal each day, no matter how small. This could be as simple as drinking a glass of water or taking a short walk.
        </p>

        <p>
          <strong>Prioritize Rest and Sleep</strong>
          <br />
          Quality sleep is essential for mental health. Try establishing a calming evening routine to improve your rest.
        </p>

        <p>
          <strong>Limit Exposure to Stressors</strong>
          <br />
          Take a break from news, social media, or other stress-inducing sources. Allow yourself moments of peace and calm.
        </p>

        <p>
          <strong>Practice Kindness Toward Yourself</strong>
          <br />
          Remind yourself that healing takes time. Practice speaking kindly to yourself, as you would to a friend.
        </p>

        <p>
          <strong>Engage in Gentle Movement</strong>
          <br />
          Physical activity, even if it’s just stretching or a short walk, can help release tension and improve mood.
        </p>

        <p>
          <strong>Find Joy in Simple Activities</strong>
          <br />
          Small moments, like enjoying a warm cup of tea or listening to soothing music, can help shift focus away from negative thoughts.
        </p>

        <p>
          <strong>Consider Journaling</strong>
          <br />
          Writing down thoughts, feelings, or small victories can be therapeutic and helps track your progress.
        </p>

        <p>
          <strong>Explore Creative Outlets</strong>
          <br />
          Art, music, or any form of creative expression can help process emotions in a non-verbal way and offer relief.
        </p>
      </>
    ),
  },
  {
    icon: <Sparkles />,
    colorType: "success",
    title: "Already on the road to recovery?",
    excerpt:
      "Most importantly you have to know: Taking the first steps towards healing, is already your road to recovery!",
    fullContent: (
          <>
            <p>Most importantly you have to know: Taking the first steps towards healing, is already your road to recovery!</p>

            <p>It might be a different path than you’d expect but simply doing the first step is the secret to success. Recovery is not a straight line, and setbacks are part of the journey. Always remember to celebrate your progress, no matter how small it may seem!</p>

            <p>Here are a few things to keep in mind:</p>

            <p>
              <strong>Reflect on Your Progress</strong>
              <br />
              Take a moment to recognize the positive changes you’ve made so far, even if they’re small.
            </p>

            <p>
              <strong>Stay Connected</strong>
              <br />
              Surround yourself with supportive people who understand your journey.
            </p>

            <p>
              <strong>Keep Exploring Healing Methods</strong>
              <br />
              As you progress, consider integrating new approaches, like self-hypnosis or group sessions, to deepen your healing.
            </p>

            <p>
              <strong>Self-Compassion & Self Love</strong>
              <br />
              Being kind to yourself is key in recovery. Treat yourself with patience and encouragement, especially during difficult days.
            </p>

            <p>
              <strong>Embrace Setbacks as Part of Growth</strong>
              <br />
              Healing isn’t a straight line, and occasional setbacks don’t mean failure. Each experience offers a lesson and an opportunity to strengthen your resilience.
            </p>

            <p>
              <strong>Celebrate Small Wins</strong>
              <br />
              Take time to recognize even the smallest victories. Whether it’s completing a daily task or experiencing a moment of calm, every positive step is a sign of progress.
            </p>

            <p>
              <strong>Stay Curious</strong>
              <br />
              Recovery can open doors to new interests and methods, new hobbies, new relations, to a new higher purpose or new ideas. Stay open to exploring what feels right for you.
            </p>

            <p>
              <strong>Seek Community</strong>
              <br />
              Support groups or online communities can provide comfort, inspiration, and understanding from people on similar journeys. Sharing your experiences can remind you that you’re not alone.
            </p>

            <p>
              <strong>Reflect on Your Goals and Values</strong>
              <br />
              As you heal, your goals and perspectives may shift. Regularly reflect on what matters most to you and how recovery is helping you grow toward a fulfilling life.
            </p>

            <p>
              <strong>Reconnect with Purpose:</strong>
              <br />
              Find activities or causes that bring meaning to your life, whether it’s a hobby, volunteering, or spending time in nature. Purpose can anchor and uplift you on your journey.
            </p>
          </>
        ),
  },
  {
    icon: < UnfoldHorizontal />,
    colorType: "warning",
    title: "What if seemingly nothing worked you tried?",
    excerpt:
     "xxxx",
    fullContent: (
      <>
      "xxxxxxx"
      </>
    ),
  },
  {
    icon: <HeartCrack />,
    colorType: "light",
    title: "Feelings of hopelessness & mental/physical exhaustion?",
    excerpt:
      "xxxxx",
    fullContent: (
      <>
      "xxxxxxx"
      </>
    ),
  },
  {
    icon: <TrendingDown />,
    colorType: "purple",
    title: "Fear of going crazy and/or loosing control because of the PTSD",
    excerpt:
      "xxxxx",
    fullContent: (
      <>
      "xxxxxxx"
      </>
    ),
  },
];

function PtsdTraumaDealingPage() {
  
  return (

    <main className="ptsd-page crisis-page">
      <section className="vision section">
        <div className="container">  


          <ModalCardSection
            heading={
              <>
                How to deal with a{" "}
                <span className="gradient-text">mental crisis situation?</span>
              </>
            }
            subtitle={
              <>
                Tips to manage your psyche.
              </>
            }
            cards={crisisCards}
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
          <section>
              <div className="ptsd-header">
                <h2 className="ptsd-title">
                  TAKE YOUR
                  <span className="gradient-text">CHANCE</span>
                </h2>

                <p className="ptsd-subtitle">
                  Get the best out of our ressources & possibilities!
                </p>
              </div>
              <div className="ptsd-points">
                <div className="ptsd-point">
                  <div className="accordion-icon danger">
                    <Anchor />
                  </div>
                  <div className="ptsd-point-content">
                    <h3 className="ptsd-point-title">
                     Learn new ways in hypnosis and understanding your brain!
                    </h3>
                      <p className="ptsd-point-description">                 
                        Supraliminal hypnosis is treading new paths in hypnosis. A new understanding of hypnosis, different mind states, and neurocognitive intelligence led to new – gentler – possibilities in dealing with trauma and overcoming PTSD. 
                        Open up to all possibilities – even the seemingly impossible ones!
                      </p>
                  </div>
                </div>

                <div className="ptsd-point">
                  <div className="accordion-icon success">
                    <Bubbles />
                  </div>
                  <div className="ptsd-point-content">
                    <h3 className="ptsd-point-title"> 
                      A unique philosophy, shared by people around the world
                    </h3>
                    <p className="ptsd-point-description">
                      Choose your personal expert & program and start your individual healing journey.
                      Welcome into your new life! ptsd-trauma.help offers a unique approach – our mission is giving global access to affordable, top level hypnosis & mind tools. Saisoned, experienced, and enthusiastic experts from all over the world found together in this unique network highly trained therapists, mind trainers, hypnotherpists, and practitioners. 
                      To support you on your way back into the life you want.
                     
                    </p>
                  </div>
                </div>

                <div className="ptsd-point">
                  <div className="accordion-icon neutral">
                   <Flag />
                  </div>
                  <div className="ptsd-point-content">
                    <h3 className="ptsd-point-title">
                     Free self help manual!
                    </h3>
                    <p className="ptsd-point-description">

                      Download our self help manual and start your transformational journey. Use self hypnosis and other mind tools as an efficient and effective solution for overcoming your symptoms. Finally achieve your objectives.

                                 
                       </p>  <blockquote>Want to know more? Inform yourself and start practicing your self help skills with our self help manual. 
                        Regardless if you are our client yet or not. 😉
                      </blockquote>  
                  </div>
                </div>
                
                <div className="ptsd-point">
                  <div className="accordion-icon purple">
                    <Link />
                  </div>
                  <div className="ptsd-point-content">
                    <h3 className="ptsd-point-title">
                    Free self help audios          
                    </h3>
                    <p className="ptsd-point-description">
                      
                    Bring  your self hypnosis abilities to the next level and expand your experiences with our free self help audios.

                    </p>
                  </div>
                </div>

                <div className="ptsd-point">
                  <div className="accordion-icon success">
                    <UnfoldHorizontal />
                  </div>
                  <div className="ptsd-point-content">
                    <h3 className="ptsd-point-title">
                     Packages & prices for every budget
                    </h3>
                    <p className="ptsd-point-description">
                      We know that money is an issue for many of those affected. However, we firmly believe that healing and health should not depend on wealth or poverty. That is why we do everything we can to ensure that people with limited financial resources can also find professional help at ptsd-trauma.help and that we can still pay our rent.

                      </p>
                  </div>
                </div>
                
                <div className="accordion-cta">
                  <div>
                    <div className="accordion-cta-title">
                      Do you need another important question answered?
                    </div>

                    <div className="accordion-cta-text">
                      Please contact us. Call us or write per WhatsApp. We will answer as soon as possible.
                    </div>
                  </div>

                  <button className="accordion-cta-button">
                     <Phone/>
                  </button>
                </div>
              </div>
            </section>

            
              
        </div>
      </section>
    </main>
  );
}

export default PtsdTraumaDealingPage;




/* 
import "./PtsdTrauma.css";
import { Heart, ShieldCheck, Brain, HandHeart } from "lucide-react";

function PtsdTraumaDealingPage() {
  return (
    <main className="ptsd-page">
      <section className="vision section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-text">
              <div className="vision-header">
                <h2 className="vision-title">
                  Dealing with{" "}
                  <span className="gradient-text">PTSD &amp; Trauma</span>
                </h2>

                <p className="vision-subtitle">
                  Practical, compassionate support for taking the first steps
                  toward healing.
                </p>
              </div>

              <div className="vision-points">
                <div className="vision-point">
                  <div className="vision-point-icon">
                    <ShieldCheck />
                  </div>
                  <div className="vision-point-content">
                    <h3 className="vision-point-title">
                      Create a sense of safety
                    </h3>
                    <p className="vision-point-description">
                      Start with small grounding actions that help your body and
                      mind feel more present.
                    </p>
                  </div>
                </div>

                <div className="vision-point">
                  <div className="vision-point-icon">
                    <Brain />
                  </div>
                  <div className="vision-point-content">
                    <h3 className="vision-point-title">
                      Understand your reactions
                    </h3>
                    <p className="vision-point-description">
                      Trauma responses are not weakness. They are protective
                      patterns your system learned.
                    </p>
                  </div>
                </div>

                <div className="vision-point">
                  <div className="vision-point-icon">
                    <HandHeart />
                  </div>
                  <div className="vision-point-content">
                    <h3 className="vision-point-title">
                      Take one step at a time
                    </h3>
                    <p className="vision-point-description">
                      Healing does not need to be rushed. A steady, gentle
                      approach can be more sustainable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="vision-cta">
                <button className="btn-primary vision-button">
                  Start Your Healing Journey
                  <svg
                    className="button-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="vision-image">
              <h2 className="vision-title">
                Support for you:{" "}
                <span className="gradient-text">
                  what can help right now?
                </span>
              </h2>

              <div className="vision-carousel-container">
                <div className="carousel-slide">
                  <div
                    className="carousel-image"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <div className="carousel-content">
                      <div className="carousel-icon">
                        <Heart />
                      </div>
                      <h3>Grounding support</h3>
                      <p>
                        Simple practices to reconnect with the present moment
                        when emotions feel intense.
                      </p>
                    </div>
                    <div className="carousel-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PtsdTraumaDealingPage; */