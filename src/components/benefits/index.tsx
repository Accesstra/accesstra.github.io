import { BenefitType, SelectedPage } from "../../shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "../../assets/Logo/AccesstraWaves.svg";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Modernste Technik",
    description:
      "Wir nutzen innovative Technologien, um Barrieren auf Websites zu identifizieren und zu beseitigen – für eine mühelose Nutzung durch alle.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Vielfältiges Schulungsangebot",
    description:
      "Unsere breite Palette an Schulungen vermittelt Ihnen alles, was Sie für eine barrierefreie Website benötigen – verständlich und anwendbar.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Erfahrene Experten",
    description:
      "Unsere Fachexperten stehen Ihnen zur Seite, um Ihre Website für jeden zugänglich zu machen. Erfahren Sie mehr über unsere Werte und unsere Arbeit, die Menschen verbindet. Kommen Sie mit uns ins Gespräch.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* MAIN HEADER */}
        <motion.div
          className="sm:mt-20 md:my-5 md:w-3/5 text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MEHR ALS NUR EIN NAME.</HText>
          <p className="my-5 text-m">
            Ihr Zugang zu einer Welt ohne digitale Grenzen. Wir setzen uns dafür
            ein, dass jede Website von jedem besucht werden kann. Das ist unser
            Engagement für eine inklusive digitale Zukunft.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto mb-20"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    WAS HEISST {" "}
                    <span className="text-primary-500">BARRIEREFREIHEIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-lg">
              Barrierefreiheit in der digitalen Welt sorgt dafür, dass Websites, 
              Apps und alle digitalen Inhalte für Menschen mit Behinderungen nutzbar sind. 
              Das beinhaltet Anpassungen für Screenreader-Nutzung und Tastaturbedienung. 
              Der bald EU-weit geltende European Accessibility Act (EAA) macht diese Anpassungen dringend.
           
               
              </p>
              <p className="mb-5 text-lg">
              Er verpflichtet Unternehmen, ihre digitalen Services zugänglich zu machen, damit jeder, 
               unabhängig von körperlichen Fähigkeiten, gleichen Zugang hat.
              Dieses Gesetz fördert eine inklusive Gesellschaft und schreibt vor, 
                hohe Strafen bei Nichtbefolgung zu zahlen. Indem Unternehmen Barrierefreiheitsstandards umsetzen, 
                vermeiden sie Diskriminierung, 
              fördern soziale Integration und erreichen ein breiteres Publikum 
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
