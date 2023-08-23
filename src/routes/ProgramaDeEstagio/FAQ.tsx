
import "./PrEst.css";


// Componente para exibir um item do FAQ
export interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
}

export function FAQ({ faq, index, toggleFAQ }: { faq: FAQItem; index: number; toggleFAQ: (index: number) => void }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
}






