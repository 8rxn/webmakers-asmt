import { useState } from "react";
import Heading from "./ui/heading";
import Typography from "./ui/typography";

const questions = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can change your plan at any time. If you upgrade, you will be prorated the remaining balance of your current plan. If you downgrade, you will be credited on your next invoice.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. If you cancel, you will be billed for the current month, but you won't be billed again.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add your company's name, address, and VAT number to your invoice. You can also add a custom footer to your invoice.",
  },
  {
    question: "How does billing work?",
    answer:
      "You will be billed monthly or annually, depending on your plan. You can cancel your subscription at any time.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email from your account settings. If you have any trouble, please contact us.",
  },
];

const Faq = () => {
  const [question, setQuestion] = useState<number | null>(null);
  const toggle = (index: number) => {
    if (question == index) {
      setQuestion(null);
    } else {
      setQuestion(index);
    }
  };
  return (
    <section className="flex flex-col gap-12 mx-4 my-20 " id="faq">
      <ul className="flex flex-col gap-3">
        <Heading size={"default"}>Frequently asked questions</Heading>
        <Typography size={"nav"} className="text-center max-w-3xl mx-auto">
          Everything you need to know about the product and billing.
        </Typography>
      </ul>

      <ul className="flex flex-col gap-8  max-w-3xl mx-auto">
        {questions.map((q, index) => (
          <div className={`${index!=0?"border-t border-gray-200":""} gap-3 flex flex-col`}>
            <div
              className="flex justify-between cursor-pointer mt-6"
              onClick={() => {
                toggle(index);
              }}
            >
              <Typography className="text-start">{q.question}</Typography>
              <div>
                {/* Plus Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={` transition-transform ease-in-out duration-300 ${
                    question == index ? "scale-0 -rotate-180 h-0 " : " "
                  }`}
                >
                  <path
                    d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#1F2937"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                {/* Minus Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={` transition-transform ease-in-out duration-300 ${
                    question == index ? " " : " scale-0 rotate-180 h-0"
                  }`}
                >
                  <path
                    d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#1F2937"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Typography
              size={"nav"}
              className={`text-start  mx-auto transition-transform ease-out duration-300  ${
                question == index
                  ? "scale-100 translate-y-0 "
                  : " scale-y-0 -translate-y-[50%] h-0"
              } `}
            >
              {q.answer}
            </Typography>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Faq;
