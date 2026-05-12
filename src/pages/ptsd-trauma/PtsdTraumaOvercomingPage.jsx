// src/pages/ptsd-trauma/PtsdTraumaOvercomingPage.jsx
import "./PtsdTrauma.css";
import '../../components/Features.css';
import { Heart, CircleCheck,Smile,MonitorSmartphone, PencilRuler ,Brain } from 'lucide-react';
import Features from "../../components/Features/";

function PtsdTraumaOvercomingPage() {
  return (
  <main className="ptsd-page">
      <section className="vision section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-text">
              <div className="vision-header">
                <h2 className="vision-title">
                  Overcoming PTSD & trauma{" "}
                  <span className="gradient-text"> which program do you need?</span>
                </h2>
                <p className="vision-subtitle">
                 All our services are 100% cliented centered & tailored for your needs! Your next steps:
                </p>
              </div>
            </div>
            </div>

            <Features
              title="What issue do you have to deal with, and what is it that you want to heal from?"
              gradientTitle="trauma or PTSD?"
              subtitle=" xxxxx "
              buttonText="Book a Free Pre-Talk"
              features={[
                      {
                        icon: <Heart />,
                        title: "xxx",
                        description:
                                      "xxxx",
                      },
                      {
                        icon: <CircleCheck />,
                        title:    "xxxx",
                        description:
                          "xxxx",
                      },
                      {
                        icon: <Smile />,
                        title:    "xxxx",
                        description:
                          "xxxx",  
                      },
                      {
                        icon: <MonitorSmartphone />,
                        title:   "xxxx",
                        description:
                          "xxxxx",
                      },
                      {
                        icon: <PencilRuler />,
                        title:    "xxxx",
                        description:
                          "xxxxx",
                      },
                    ]}
                  />
          </div>
      </section>
    </main>
  );
}

export default PtsdTraumaOvercomingPage;