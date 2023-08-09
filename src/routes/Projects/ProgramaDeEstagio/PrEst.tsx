
import { useState } from "react";
import "./PrEst.css";

import {FAQ} from "./FAQ";
import { FAQItem } from './FAQ';






  export function PrEst() {
    // const [faqs, setFaqs] = useState<FAQItem[]>([
    //   {
    //     question: "Benefícios Trabalhistas",
    //     answer:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    //     open: true,
    //   },
    //   {
    //     question: "Who is the most awesome person?",
    //     answer: "You! The viewer!",
    //     open: false,
    //   },
    //   {
    //     question: "How many questions does it take to make a successful FAQ Page?",
    //     answer: "This many!",
    //     open: false,
    //   },
    // ]);
  
    const categories = [
      "Benefícios Programa de Estágio",
      "Estagiários por CLT",
      "Benefícios Sociais",
      "Benefícios Trabalhistas",
      "Como Aderir ao programa de estágio:"
      // Adicione mais categorias aqui, se necessário
    ];
  
    const initialCategoryFaqs: { [key: string]: FAQItem[] } = {
      "Benefícios Programa de Estágio": [
        {
          question: "Custo reduzido",
          answer: "Os estagiários geralmente recebem uma bolsa de estágio, que é um valor inferior ao salário de um profissional contratado em tempo integral. Isso pode ajudar a reduzir os custos de contratação para a empresa.",
          open: false,
        },
        {
          question: "Renovação de talentos",
          answer: "Contratar estagiários permite que a empresa atraia talentos jovens e recém-formados, trazendo novas ideias, perspectivas e habilidades para a equipe.",
          open: false,
        },
        {
          question: "Treinamentos e desenvolvimentos",
          answer: "Os estagiários são excelentes candidatos para treinamento e desenvolvimento, pois ainda estão em fase de aprendizado e podem ser moldados de acordo com as necessidades da empresa.",
          open: false,
        },
        
        {
          question: "Flexibilidade",
          answer: "Os contratos de estágio normalmente têm uma duração pré-definida, o que oferece à empresa maior flexibilidade ao contratar pessoas para projetos específicos ou períodos de demanda temporária.",
          open: false,
        },
        
        {
          question: "Prospecção de talentos",
          answer: "Contratar estagiários permite que a empresa avalie potenciais futuros funcionários, possibilitando a identificação dos mais talentosos e adequados para a cultura organizacional.",
          open: false,
        },
        {
          question: "Aprendizado mútuo",
          answer: "Os estagiários trazem consigo conhecimentos atualizados e uma perspectiva fresca, mas também têm a oportunidade de aprender com os profissionais experientes da empresa.",
          open: false,
        },
         {
          question: "Incentivo fiscal",
          answer: "Dependendo da legislação trabalhista local, pode haver incentivos fiscais para empresas que contratam estagiários.",
          open: false,
        },
        
        
      ],
      "Estagiários por CLT": [
        {
          question: "De 01 (um) a 05 (cinco) CLT ",
          answer: "01 (um) estagiário.",
          open: false,
        },
        {
          question: "De 06 (seis) a 10 (dez) CLT  ",
          answer: "02 (dois) estagiários.",
          open: false,
        },
        {
          question: "De 11 (onze) a 25 (vinte e cinco) CLT  ",
          answer: "até 05 (cinco) estagiários",
          open: false,
        },
        {
          question: "Acima de 25 (vinte e cinco) CLT  ",
          answer: "até 20% (vinte por cento) de estagiários.",
          open: false,
        },
      ],
      "Benefícios Sociais": [
        {
          question: "Contribuição para a formação de futuros profissionais",
          answer: "Ao oferecer oportunidades de estágio, as empresas ajudam na formação de jovens talentos, preparando-os para o mercado de trabalho e contribuindo para a capacitação de futuros profissionais.",
          open: false,
        },
        {
          question: "Fortalecimento da imagem da empresa",
          answer: "Empresas que oferecem programas de estágio bem estruturados e valorizam o desenvolvimento profissional dos estagiários tendem a ganhar uma imagem positiva perante a sociedade e até mesmo potenciais clientes.",
          open: false,
        },
        {
          question: "Integração entre gerações",
          answer: "A presença de estagiários pode promover a integração entre diferentes gerações de funcionários na empresa. Os estagiários podem trazer perspectivas frescas e atualizadas, enquanto os funcionários mais experientes podem compartilhar seus conhecimentos e sabedoria.",
          open: false,
        },
      ],
      "Benefícios Trabalhistas": [
        {
          question: "O Caráter Formativo do Estágio",
          answer: "O estágio tem um caráter educacional e formativo, com o objetivo de proporcionar ao estudante a oportunidade de aplicar e aprimorar seus conhecimentos teóricos na prática profissional. O estagiário recebe uma bolsa-auxílio como forma de contraprestação pelo seu trabalho, que não é considerada um salário, e não estão previstos direitos trabalhistas, como FGTS, férias remuneradas ou 13º salário .",
          open: false,
        },
    
      ],
      "Como Aderir ao programa de estágio:": [
        {
          question: "Termos de Convênio",
          answer: "A adesão do Programa de estágio é formalizada por meio de termos de convênios esses termos estabelecem as bases e as responsabilidades de cada parte envolvida no estágio sendo uma forma de garantir transparência e segurança para todas as partes envolvidas no processo de estágio.",
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
          <span>Oque é o</span> Programa de Estágio
        </h4>
        <p className="gestaodh">
          Trata-se de um conjunto de atividades e iniciativas por parte de empresas
          e demais instituições com o objetivo de contribuir com os estudantes em 
          sua formação profissional, com funções relacionadas a sua futura área de trabalho de forma prática.
        </p>
      </div>

      {/* =========================================================FAQ=============================================================================================================== */}

      <div className="containerFAQ">
        <div id="faq-links">
          {categories.map((category, index) => (
            <div
              key={index}
              
              className={ activeCategory === category ? "faq-selected" : ""  }
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </div>
          ))}
        </div>
       
      </div>

      <div className="faqs faq-grid">
        {categoryFaqs[activeCategory].map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </section>
  );
}