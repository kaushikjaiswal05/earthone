import { useState } from "react";
import "./faq.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What does the plant monitor measure?",
      answer:
        "Our plant monitor measures soil moisture, light intensity, ambient temperature, and humidity. These four factors are the most critical to your plant's well-being and growth. With these, we can calculate your plant's vapor pressure deficit (VPD), a key indicator of plant health, and growing degree days (GDD), a key indicator of plant growth.",
    },
    {
      question: "How do I set up my plant monitor?",
      answer:
        "Setting up your plant monitor is super easy! Simply download the app, and follow the instructions to connect your device to your Wi-Fi network. Once connected, you can link your plant monitor to your plant and start receiving real-time data and insights!",
    },
    {
      question: "Can I use this plant monitor with more than one plant?",
      answer:
        "You can use one plant monitor for multiple plants (by linking and unlinking in the app). We do recommend 1 per plant as the device learns from your plant the longer you keep it with one.",
    },
    {
      question: "Can I use the plant monitor outdoors?",
      answer:
        "Our monitor can be used outdoors given a good Wi-Fi connection and a protected area such as a porch, terrace, etc.",
    },
    {
      question:
        "What types of soil/substrate does the plant monitor work with?",
      answer:
        "Our sensor works with most substrates. We do not recommend using it with substrates that have too many air pockets (e.g., pebbles, leca, etc.) as it may affect the readings.",
    },
    {
      question: "How long does the battery last?",
      answer:
        "The battery lasts up to 4 months and can be recharged with the included USB-C cable.",
    },
    {
      question: "Do I need a membership to use this?",
      answer:
        "Absolutely NO membership is required to use our devices! We do offer a membership plan that comes with extra features such as device protection, unlimited plant identification and notifications, weather integration, and the ability to request historical metrics for any timeframe.",
    },
    {
      question: "Will the app work on my phone and tablet?",
      answer:
        "Our app is available on both iOS and Android phones and tablets. You can download it from the App Store and Google Play Store.",
    },
    {
      question: "What makes the EarthOne plant monitor unique in plant care?",
      answer:
        "EarthOne provides tailored care recommendations based on soil type, plant species, environmental conditions, and seasonal variations. This ensures that each plant gets exactly what it needs to thrive, not just survive.",
    },
    {
      question: "Do you work with other smart home devices or assistants?",
      answer:
        "Yes, we work with Amazon Alexa, Google Assistant, Apple Homekit, Siri, and over 900+ other brands through IFTTT. You can connect your plant monitor to your smart home devices and create custom applets to automate your home.",
    },
  ];

  const toggleItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="faq">
        <p>learn more</p>
        <h1>The looming question? We have plants!</h1>
        <div className="faq-accordion">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleItem(index)}>
                {item.question}
                <span className="faq-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
