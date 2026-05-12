import { useState } from "react";
import "./PtsdTrauma.css";
import { ThumbsUp, ThumbsDown, Rose, Goal,Unlink, TriangleAlert, Puzzle, Key, Phone} from "lucide-react";
import '../../components/Features.css';
import { Heart, CircleCheck,Smile,MonitorSmartphone, PencilRuler ,Brain } from 'lucide-react';
import Features from "../../components/Features/";




const FAQ = [
   {
    icon: <ThumbsUp />,
    iconType: "success",
    title: "DO’s if you want to help loved ones with PTSD",
    body: (   
      <>
        <p>
          <strong>1. Educate yourself about PTSD</strong> Learn about PTSD symptoms, triggers, and treatment options to better understand what your loved one is going through.
        </p>

        <p>
          <strong>2. Be patient and understanding</strong> Recovery from PTSD takes time, and your loved one may experience setbacks. Offer consistent support without pressuring them to “get better” quickly.
          
          • Talk to them about symptoms you observe - if they are ready. This will hep you to understand their issues and what they struggle with.
          • Be supportive and show empathy - validate their feelings.
          • Do not try to “fix” things. Be there for them - literally but set healthy boundries where necessary.
        </p>
        <p>
          <strong> 3. Create a Safe and Supportive Environment</strong> Ensure your loved one feels safe and secure at home. Help reduce stress by creating a calm, stable environment and avoiding unnecessary conflicts.
        </p>

        <p>
        <strong>4.Listen Without Judgment</strong> Encourage them to share their feelings if they are comfortable, and listen empathetically without giving unsolicited advice or minimizing their experience.
        </p>


        <p>
        <strong>5. Help Them Avoid Triggers</strong> Work with your loved one to identify and avoid triggers that may cause flashbacks or heightened anxiety.
        </p>

        <p>
        <strong>6. Encourage Professional Help</strong> Support them in seeking treatment, whether it’s therapy, hypnotherapy, or other PTSD-specific interventions. Offer to help find therapists or drive them to appointments.
        </p>

        <p>
        <strong>7. Maintain Your Own Well-being</strong> Supporting someone with PTSD can be emotionally exhausting. Ensure you take care of your mental and physical health, seek support for yourself, and set healthy boundaries when needed.
        </p>

        <p>
        <strong>8. Be Consistent and Reliable</strong> Provide consistent emotional support, whether by checking in regularly or simply being present during difficult moments.
        </p>

        <p>
        <strong>9. Respect Their Need for Space</strong> Understand that people with PTSD may need time alone to process their emotions. Respect their need for space without taking it personally.
        </p>

        <p>
        <strong>10. Encourage Positive Coping Strategies</strong> Help your loved one engage in activities that promote relaxation, such as mindfulness, physical exercise, or hobbies that reduce stress.
        </p>
        <p>
        <strong>11. When violence is involved</strong> Get out of the situation asap! Get help through friends, family, strangers, work colleagues, experts – get as much help as possible. Inform yourself – get as much information as possible!
        Build a support-network, develop an exit strategy, and find professional support. Educate yourself about the cycle of abuse, domostic abuse, and the dynamic of violent behavior.
        </p>

        <blockquote>
          " Test example for sandra I understand that you've been through something really difficult. I'm here for you, and I want to support you in whatever way I can."
        </blockquote>

      </>
    ),
  },
  {
    icon: <ThumbsDown />,
    iconType: "danger",
    title: "DON’Ts if you want to help loved ones with PTSD",
    body: (
      <>
      <p><strong>1. Never Force Them to Talk About the Trauma</strong>Pressuring your loved one to share details of their trauma before they are ready can lead to distress and worsen symptoms. Let them open up in their own time.</p>

      <p><strong>2. Avoid Minimizing Their Experience</strong>Saying things like “It’s not a big deal” or “Just move on” invalidates their feelings and can make them feel misunderstood or unsupported.</p>

      <p><strong>3. Don’t Take Their Symptoms Personally</strong>PTSD can cause irritability, emotional withdrawal, or mood swings. Remember that these reactions are symptoms of the condition and not a reflection of their feelings toward you.</p>

      <p><strong>4. Do not get caught up in trauma bonding</strong>If you feel deeply conflicted or overly attached despite unhealthy dynamics, it’s important to assess whether trauma bonding might be influencing your relationship. Do not disregard this dynamic but ssek help for both of you.</p>

      <p><strong>5. Never Push Them to “Get Over It” Quickly</strong>Recovery from PTSD is a long process, and pushing someone to “get better” or expecting immediate improvement can create additional pressure and slow down progress.</p>

      <p><strong>6. Don’t Trigger Their PTSD Deliberately</strong>Avoid exposing them to situations, places, or conversations that could trigger their trauma response. Even well-intentioned efforts to “face their fears” without professional guidance can be harmful.</p>

      <p><strong>7. Don’t Dismiss or Ignore Their Symptoms</strong>Ignoring or downplaying their anxiety, flashbacks, or nightmares can cause your loved one to feel isolated and unsupported.</p>

      <p><strong>8. Never Try to “Fix” Them on Your Own</strong>While your support is valuable, you are not a substitute for professional help. Don’t take on the role of therapist or think that you can single-handedly “cure” their PTSD.</p>

      <p><strong>9. Avoid Losing Patience</strong>Frustration with their progress (or lack thereof) can harm your relationship and hinder their recovery. Try to stay patient and offer consistent, gentle support.</p>

      <p><strong>10. Don’t Use Guilt or Manipulation</strong>Guilt-tripping or manipulating them into certain actions, like attending social events or engaging in activities they’re not ready for, can deepen their distress.</p>

      <p><strong>11. Never touch them when they are having a flashback</strong>No touching during a flashback, except they tell you it helps them to calm down.<br />If a person is having a flashback, and you touch them, you might condition their brain to connect your physical touch with having a flashback. This could lead to the situation, you incidentally trigger a flashback through touching them.</p>

      <p><strong>12. Never Ignore Your Own Boundaries</strong>While it’s important to support them, neglecting your own needs and boundaries can lead to burnout. Take care of your well-being to ensure you can provide long-term support.</p>

      </>
    ),
  },
 
  {
    icon: <Rose />,
    iconType: "neutral",
    title: "What you should do for yourself to help your loved ones",
    body: (
      <>

      <p><strong>1. Prioritize Self-Care</strong>Make time for activities that recharge you, such as exercise, hobbies, or quiet moments for yourself. Self-care is essential for managing the stress of supporting someone with PTSD.</p>

      <p><strong>2. Set Healthy Boundaries</strong>Establish clear boundaries to protect your emotional and mental health. It’s okay to say no when you feel overwhelmed, and it’s important to communicate your limits respectfully. Do not get caught up in the world of trauma of your loved one.</p>

      <p><strong>3. Seek Your Own Support</strong>Join support groups for families of PTSD survivors, or speak to a therapist to help you process your feelings. It’s crucial to have a space where you can express your emotions and receive guidance.</p>

      <p><strong>4. Educate Yourself About PTSD</strong>Learning about PTSD can help you better understand your loved one’s behavior and avoid taking their actions personally. Knowledge will help you provide better support while protecting your emotional health.</p>

      <p><strong>5. Acknowledge Your Own Emotions</strong>Supporting someone with PTSD can evoke feelings of frustration, sadness, or helplessness. Recognize these emotions and allow yourself to process them without guilt.</p>

      <p><strong>6. Take Breaks When Needed</strong>It’s okay to step away temporarily when you feel emotionally drained. Taking a break allows you to recharge and come back with a clearer mindset and renewed energy to support your loved one.</p>

      <p><strong>7. Practice Mindfulness and Stress-Reduction Techniques</strong>Engage in activities like meditation, deep breathing, or yoga to help manage stress and anxiety. Mindfulness can improve your resilience in emotionally challenging situations.</p>

      <p><strong>8. Maintain Your Social Life</strong>Don’t neglect your friendships or personal relationships. Staying connected with friends and family outside of the PTSD caregiving role can provide emotional balance and support.</p>

      <p><strong>9. Focus on What You Can Control</strong>Accept that you can’t “fix” your loved one’s PTSD. Focus on what is within your control—offering support, being patient, and taking care of yourself.</p>

      <p><strong>10. Be Kind to Yourself</strong>Remember that you are doing your best, and it’s normal to feel overwhelmed at times. Practice self-compassion and avoid being too hard on yourself.</p>

      <p><strong>11. Check If There Is Any Trauma Bonding Left</strong>Trauma bonding occurs when emotional attachment develops through repeated cycles of abuse, fear, and power imbalance. In this case seek help for yourself and think of helping you first.</p>

      </>
    ),
  },
  {
    icon: <Goal />,
    iconType: "purple",
    title: "Already beyond the first steps of managing PTSD?",
    body: (

    <>
        <p>Recognizing PTSD in a loved one can be challenging, as symptoms might not always be obvious.</p>

        <p>However, common indicators include mood swings, emotional outbursts, social withdrawal, and increased anxiety or fear in response to triggers.</p>

        <p>Also persistent feelings of fear, anger, or guilt or so-called “hypervigilance” (feeling constantly “on edge”) might indicate a trauma response.</p>

        <p>It’s essential to seek professional help if these signs persist.</p>

        <p>Educate yourself about trauma & PTSD, offer your help if they are ready – not before.</p>

        <p>Heal all trauma bonds and do not dive into the world of emotional and/or physical pain with them.</p>

        <p>Set healthy, living & respectful boundries.</p>
    </>
    ),
  },
  {
    icon: <Unlink />,
    iconType: "success",
    title: "Can my loved one overcome PTSD?",
    body: (
      <>
      <blockquote>Yes, with the right support and treatment, PTSD is a condition that many people can manage and even fully overcome.</blockquote>
      <p>While it may feel overwhelming, countless individuals have successfully reclaimed control over their lives through the right combination of therapy, patience, and a supportive environment.</p>

      <p><strong>Professional Guidance Matters</strong><br />Recovery often includes professional help, such as trauma-informed therapy, hypnotherapy, or counseling. But always respect the personal healing way of your loved one.</p>

      <p>Take a look at our tips for loved ones supporting PTSD & trauma survivirs to get helpful information for you as well.</p>

      <p>A structured approach ensures that your loved one has the resources they need at each stage of healing.</p>

      <p><strong>Empowerment Through Information</strong><br />Explore our Do’s and Don’ts section to learn ways to support your loved one effectively. A little guidance can make a significant difference in creating a positive healing environment.</p>

      <p><strong>Encourage Self-Care and Self-Compassion</strong><br />Remind your loved one to prioritize small acts of self-care, from daily routines to gentle physical activities, as these can aid emotional resilience and healing.</p>

      <p><strong>Free Pre-Talk with Our Experts</strong><br />If you’re unsure about the best way forward, schedule a free pre-talk with one of our experienced practitioners. They can help you understand options, answer questions, and offer tailored advice for supporting your loved one’s recovery journey.</p>

      <p><strong>Stay Patient and Hopeful</strong><br />Recovery from PTSD takes time, and there may be ups and downs along the way. However, with the right approach and continued support, significant improvements are possible, allowing your loved one to lead a fulfilling, empowered life.</p>

      <p>Check out our Do’s and Don’ts and make youre your loved one gets exactly the help they might need.</p>

      <p>If you are not sure what to do, schedule a free pre-talk with one of our experts to help you in your decision finding and answering your questions.</p>
    </>

    ),
  },
  {
    icon: <TriangleAlert />,
    iconType: "warning",
    title: "Am I in danger of developing PTSD?",
    body: (

      <>
  <p>If you’re concerned about being at risk for PTSD, consider a self-assessment or consulting with a mental health professional or one of our experts.</p>

  <p>The more so-called “risk factors” you have to face in life, the more in danger of PTSD you are. Early recognition of symptoms can lead to quicker intervention and better outcomes.</p>

  <p>Also check out our symptoms and risk factors of PTSD and schedule a fre pre-Talk with one of our experts to clarify the situation.</p>

  <p><strong>Risk Factors:</strong></p>

  <p><strong>Severity and Duration of Trauma:</strong><br />The more severe and prolonged the traumatic experience, the higher the risk of developing PTSD.</p>

  <p><strong>Childhood Trauma:</strong><br />Individuals who experienced abuse or neglect during childhood are more vulnerable to developing PTSD in adulthood.</p>

  <p><strong>Pre-existing Mental Health Conditions:</strong><br />A history of anxiety, depression, or other mental health issues can increase susceptibility.</p>

  <p><strong>Lack of Social Support:</strong><br />People with limited support systems may struggle more with processing trauma, increasing the risk of PTSD.</p>

  <p><strong>Repeated Exposure to Trauma:</strong><br />First responders, military personnel, or those in high-stress environments are at greater risk due to repeated exposure to traumatic events.</p>

  <p><strong>Practicing the following professions:</strong><br />medical and care staff, first responders, therapists, psychiatrists & social workers, locomotive & bus drivers, policemen, firefighters, veterans & soldiers, security staff, internet content reviewers</p>

  <p><strong>Having following experiences:</strong></p>

  <p>Military combat</p>

  <p>Physical or sexual assault</p>

  <p>Natural disasters</p>

  <p>Serious accidents (car crashes, injuries)</p>

  <p>Witnessing violence or death</p>
</>

    ),
  },
  {
    icon: <Puzzle />,
    iconType: "success",
    title: "XX",
    body: (
      <p>
       If your loved one frequently avoids certain activities, has nightmares, or becomes easily upset in stressful situations, they might be dealing with PTSD.
       It’s important to approach the topic with sensitivity and support, encouraging them to seek help without pressuring them.
      </p>
    ),
  },

];

function AccordionItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-item ${open ? "is-open" : ""}`}>
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className={`accordion-icon ${item.iconType}`}>
          {item.icon}
        </div>

        <span className="accordion-question">
          {item.title}
        </span>

        <span className="accordion-arrow">
          ▾
        </span>
      </button>

      {open && (
        <div className="accordion-content">
          {item.body}
        </div>
      )}
    </div>
  );
}

function PtsdTraumaManagingPage() {
  return (
    <main className="ptsd-page">
      <section className="ptsd section">
        <div className="container">
          <div className="ptsd-singleColcontent">
            <div className="ptsd-text">
              <div className="ptsd-header">
                <h2 className="ptsd-title">
                  MANAGING{" "}
                  <span className="gradient-text">PTSD &amp; Trauma</span>
                </h2>

                <p className="ptsd-subtitle">
                  Do’s &amp; don’ts: What you can do for your loved one dealing with trauma
                  <br />
                  Tips to you as a friend, family member, or colleague, or even a caring stranger.
                </p>
              </div>

              <div className="accordion-container">
                {FAQ.map((item, index) => (
                  <AccordionItem key={index} item={item} />
                ))}

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
                         
                <Features
                title="What to do with someone suffering from"
                gradientTitle="trauma or PTSD?"
                subtitle=" It can be difficult to know what to do or say to someone with PTSD. Showing empathy & understanding is a crucial peace of the puzzle.
                                  Setting healthy emotional, respectful boundries is another key factor."
                ctaText="Ready to take the first step toward support?"
                buttonText="Book a Free Pre-Talk"
                features={[
                        {
                          icon: <Heart />,
                          title: "You could say something like",
                          description:
                        `“I understand that you've been through something really difficult. I’m here for you, and I want to support you in whatever way I can.” Avoid asking “why” questions, as they may come across as blaming or pressuring the person to explain themselves when they may not fully understand their feelings.`,
                        },
                        {
                          icon: <CircleCheck />,
                          title: "You could do something like that:",
                          description:
                            "xxxx",
                        },
                        {
                          icon: <Smile />,
                          title: "You could hear something like that:",
                          description:
                            "xxxx",  
                        },
                        {
                          icon: <MonitorSmartphone />,
                          title: "You could do something like that",
                          description:
                            "xxxxx",
                        },
                        {
                          icon: <PencilRuler />,
                          title: "You could think something like that",
                          description:
                            "xxxxx",
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PtsdTraumaManagingPage;
