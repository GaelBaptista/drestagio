
import { useState } from "react";
import "./PrEst.css";

import {FAQ} from "./FAQ";
import { FAQItem } from './FAQ';






  export function PrEst() {
    const [faqs, setFaqs] = useState<FAQItem[]>([
      {
        question: "Benefícios Trabalhistas",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
        open: true,
      },
      {
        question: "Who is the most awesome person?",
        answer: "You! The viewer!",
        open: false,
      },
      {
        question: "How many questions does it take to make a successful FAQ Page?",
        answer: "This many!",
        open: false,
      },
    ]);
  
    const categories = [
      "service",
      "installation",
      "plan",
      "features",
      "mobile"
      // Adicione mais categorias aqui, se necessário
    ];
  
    const initialCategoryFaqs: { [key: string]: FAQItem[] } = {
      service: [
        {
          question: "What services do you offer?",
          answer: "We offer a wide range of services to meet your needs.",
          open: false,
        },
        {
          question: "How can I request a service?",
          answer: "You can request a service through our website or by contacting us.",
          open: false,
        },
      ],
      installation: [
        {
          question: "Do you provide installation services?",
          answer: "Yes, we offer professional installation services for all our products.",
          open: false,
        },
      ],
      plan: [
        {
          question: "What are your pricing plans?",
          answer: "We have flexible pricing plans to suit different budgets.",
          open: false,
        },
        {
          question: "Do you offer a free trial?",
          answer: "Yes, we offer a free trial period for new users.",
          open: false,
        },
      ],
      features: [
        {
          question: "What features are included?",
          answer: "Our product comes with a variety of powerful features to enhance your experience.",
          open: false,
        },
      ],
      mobile: [
        {
          question: "Is your app available for mobile devices?",
          answer: "Yes, our app is available for both iOS and Android devices.",
          open: false,
        },
        {
          question: "Can I use the app offline?",
          answer: "Yes, you can use some features of the app offline.",
          open: false,
        },
      ],
      // Adicione mais categorias aqui, se necessário
    };
  
    const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
    const [categoryFaqs, setCategoryFaqs] = useState(initialCategoryFaqs);
  
    const handleCategoryChange = (category: string) => {
      setActiveCategory(category);
    };
  
    const toggleFAQ = (index: number) => {
      setCategoryFaqs((prevCategoryFaqs) => {
        return {
          ...prevCategoryFaqs,
          [activeCategory]: prevCategoryFaqs[activeCategory].map((faq, i) => {
            if (i === index) {
              return {
                ...faq,
                open: !faq.open,
              };
            }
            return {
              ...faq,
              open: false,
            };
          }),
        };
      });
    };
  return (
    <section className="ContainerProgramadeEstagio">
      <div className="section-head prEst">
        <h4>
          <span>Gestão de </span>DH
        </h4>
        <p className="gestaodh">
          Promover uma gestão do desenvolvimento humano (DH) significa transformar as vivências e habilidades de
          cada trabalhador em um recurso muito valioso para o crescimento da empresa e do desenvolvimento dos colaboradores
        </p>
      </div>

      {/* =========================================================FAQ=============================================================================================================== */}

      <div className="containerFAQ">
        <div id="faq-links">
          {categories.map((category, index) => (
            <div
              key={index}
              className={activeCategory === category ? "faq-selected" : ""}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className="faqs">
        {categoryFaqs[activeCategory].map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </section>
  );
}