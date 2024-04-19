import React from "react";
import image from "../../assets/Vector.png";
import imageTwo from "../../assets/VectorTwo.svg";
import dep from "../../assets/depoimentos.png";
import Banner from "../../components/Banner";
import "./styles.css";
import Button from "../../components/Button";

const Home: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <img className="image-designer" src={image} />

      <div className="d-flex justify-content-center">
        <div className="container-info">
          <div className="box-info">
            <p>
              Na Unex, nós abraçamos a <strong>Metodologia PBL </strong>
              (Problem-Based Learning) como uma das nossas maneiras inovadoras
              de ensinar. Colocamos o aluno como protagonista no processo de
              aprendizagem, combinando teoria e prática.
            </p>
            <p>
              Por meio da PBL, os nossos estudantes mergulham na resolução de
              problemas reais, situações comuns encontradas na prática médica.
              Apoiados por
              <a href="#" className="link-info">
                professores experientes
              </a>
              que os auxiliam a assimilar informações essenciais, eles aprendem
              não apenas a solucionar problemas clínicos, mas também a cultivar
              habilidades críticas e analíticas que são cruciais para o sucesso
              em uma carreira médica em constante evolução.
            </p>
            <p>
              Sendo assim, a Metodologia PBL proporciona uma formação completa e
              prepara os futuros médicos para enfrentar os desafios do mercado
              de trabalho com competência, ética e humanismo.
            </p>
          </div>
          <iframe
            width="100%"
            height={600}
            frameBorder="0"
            src="https://www.youtube.com/embed/QTi78E7CrGA"
          />

          <div className="box-info">
            <h2 className="text-primary">
              Passo a Passo: Como funciona a Metodologia PBL?
            </h2>
            <br />
            <p>
              Imagine um emocionante capítulo de uma novela, onde o estudante
              assume o papel principal e os professores atuam como tutores
              experientes… 
            </p>
            <p>
              A cada semana, apresentamos um novo caso central que desafia os
              alunos a se tornarem protagonistas de sua própria aprendizagem.
              Assim, durante o semestre, eles se deparam com doze a quinze casos
              clínicos diversificados, abordando diversas temáticas.
            </p>
            <p>
              Entenda como funciona a Metodologia PBL no curso de Medicina da
              Unex:
            </p>
            <br />
            <ol>
              <li>
                <strong>Problema Desafiador:</strong> Diferente da abordagem
                tradicional, no PBL, o professor inicia o processo oferecendo um
                problema real relacionado à prática médica. Esse problema
                desafiador instiga a curiosidade dos alunos e os coloca no
                centro do aprendizado.
              </li>
              <li>
                <strong>Identificação do Conteúdo:</strong> Os estudantes são
                incentivados a identificar quais conceitos e conhecimentos são
                necessários para resolver o problema proposto. Essa etapa
                estimula a busca por informações relevantes e a compreensão da
                teoria aplicada à prática.
              </li>
              <li>
                <strong>Aprendizado Autônomo:</strong> Os alunos desenvolvem
                habilidades de pesquisa e auto aprendizagem, buscando as
                informações necessárias para resolver o problema de forma
                independente. Isso promove uma formação mais autônoma e
                autodidata.
              </li>
              <li>
                <strong>Discussões Colaborativas:</strong> A Metodologia PBL
                incentiva a colaboração entre os alunos, que trabalham em grupos
                para discutir e compartilhar ideias e soluções. Essa troca de
                conhecimentos enriquece o aprendizado e desenvolve habilidades
                de comunicação e trabalho em equipe.
              </li>
              <li>
                <strong>Facilitação do Professor:</strong> O papel do professor
                no PBL é atuar como facilitador das discussões, estimulando a
                participação ativa dos estudantes e oferecendo suporte para que
                eles encontrem o caminho para a resolução do problema. O
                professor não é apenas um transmissor de conhecimento, mas um
                guia no processo de aprendizagem.
              </li>
              <li>
                <strong>Integração Teoria e Prática: </strong> Ao resolver
                problemas reais, os alunos conectam a teoria aprendida em sala
                de aula com a prática médica, tornando o conhecimento mais
                significativo e aplicável no contexto profissional.
              </li>
            </ol>
            <br />
            <h2 className="text-primary">
              Como o PBL é aplicado no curso de Medicina?
            </h2>
            <br />
            <p>
              O método PBL é empregado nos Tutoriais, uma das principais
              <a href="#" className="link-info">
                disciplinas do curso
              </a>
              , incorporando diversas atividades que proporcionam uma
              aprendizagem significativa e prática. 
            </p>
            <p>
              Os Tutoriais são sessões de aprendizado em grupos reduzidos,
              orientados por um tutor ou facilitador. Neles, são apresentados
              problemas médicos complexos e desafiadores que exigem a aplicação
              de conhecimentos teóricos na busca por soluções. 
            </p>
            <p>
              Os estudantes são incentivados a discutir e analisar os casos,
              debatendo diferentes abordagens e trabalhando colaborativamente
              para encontrar diagnósticos e planos de tratamento adequados.
            </p>
            <br />
            <h3 className="text-primary">
              Checklist de habilidades adquiridas através do PBL
            </h3>
            <br />
            <p>
              Ao incorporar a Metodologia PBL, proporcionamos uma formação
              completa e atualizada, preparando os futuros médicos para
              enfrentar os desafios da prática médica com excelência. 
            </p>
            <p>
              O desenvolvimento dessas habilidades essenciais contribui para a
              formação de profissionais capacitados e preparados para atuar com
              sucesso na{" "}
              <a href="#" className="link-info">
                carreira médica
              </a>
              , oferecendo cuidados de qualidade e contribuindo positivamente
              para a saúde da sociedade.
            </p>
            <br />
            <ul>
              <li>Pensamento Crítico</li>
              <li>Resolução de Problemas</li>
              <li>Autonomia</li>
              <li>Autodidatismo</li>
              <li>Trabalho em Equipe</li>
              <li>Comunicação</li>
            </ul>
            <br />
            <div className="d-flex justify-content-center aling-item-center">
              <Button btnType="success" radius={25}>
                <strong>Conheça a matriz curricular do curso</strong>
              </Button>
            </div>
            <br />
            <p>
              Leia algumas recomendações para aproveitar ao máximo a Metodologia
              PBL:
            </p>
            <br />
            <strong className="text-info mb-2">Seja Protagonista</strong>
            <p>
              A Metodologia PBL incentiva a colaboração entre os alunos, que
              trabalham em grupos para discutir e compartilhar ideias e
              soluções. Essa troca de conhecimentos enriquece o aprendizado e
              desenvolve habilidades de comunicação e trabalho em equipe.
            </p>
            <strong className="text-info mb-2">
              Participe Ativamente das Discussões
            </strong>
            <p>
              A Metodologia PBL incentiva a colaboração entre os alunos, que
              trabalham em grupos para discutir e compartilhar ideias e
              soluções. Essa troca de conhecimentos enriquece o aprendizado e
              desenvolve habilidades de comunicação e trabalho em equipe.
            </p>
            <strong className="text-info mb-2">Desenvolva a Autonomia</strong>
            <p>
              A Metodologia PBL exige uma postura autônoma em relação ao
              aprendizado. Busque fontes de conhecimento além do material
              oferecido, explore artigos científicos, livros e estudos
              relevantes para complementar seus estudos e ampliar sua
              compreensão sobre os casos apresentados.
            </p>

            <strong className="text-info mb-2">Mantenha-se Curioso</strong>
            <p>
              Cultive a curiosidade! Explore além do óbvio, faça perguntas e
              busque respostas. A busca por novos conhecimentos e o interesse
              genuíno pela medicina o ajudarão a se destacar como estudante e
              profissional do futuro.
            </p>

            <strong className="text-info mb-2">
              Estabeleça Parcerias de Estudo
            </strong>
            <p>
              A colaboração é um dos pilares do PBL. Forme parcerias de estudo
              com seus colegas, compartilhe recursos e informações relevantes. O
              trabalho em equipe enriquece o processo de aprendizagem e estimula
              a troca de experiências.
            </p>

            <strong className="text-info mb-2">Busque Feedback</strong>
            <p>
              Esteja aberto a receber feedback construtivo dos seus professores
              e preceptores. A orientação de profissionais experientes o ajudará
              a aprimorar suas habilidades clínicas e acadêmicas.
            </p>

            <strong className="text-info mb-2">Conecte Teoria e Prática</strong>
            <p>
              Ao estudar os casos propostos, busque entender como os conceitos
              teóricos se aplicam à prática médica. A integração entre teoria e
              prática é essencial para um aprendizado significativo e uma
              formação médica completa.
            </p>
          </div>
          <div className="box-testimonial">
            <div className="d-flex row">
              <div className="col-4"></div>
              <div className="col-8">
                <h1>
                  Ninguém melhor para reconhecer a nossa excelência: nosso
                  estudante
                </h1>
                <span>
                  O que nossos alunos e alunas falam sobre a experiência de
                  cursar medicina na Unex. Lorem ipsum dolor sit amet consectum
                  dolor. Pregnam consectum lorem ipsum dolor sit amet consectum
                  dolor. Pregnam consectum.
                </span>
              </div>
            </div>

            <img
              alt="teste01"
              src={dep}
              style={{ position: "relative", top: -224 }}
            />

          </div>
          <div className="d-flex justify-content-center aling-item-center">
              <Button btnType="outline-success" radius={25}>
                <span className="text-black"><b>Leia mais depoimentos</b></span>
              </Button>
            </div>
        </div>
      </div>

      <img className="image-designer-two" src={imageTwo} />
    </div>
  );
};

export default Home;
