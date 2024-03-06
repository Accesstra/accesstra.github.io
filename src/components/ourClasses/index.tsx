import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5 text-white">
            <HText>Our Vision</HText>
            <p className="py-5 text-white text-lg">
              Treten Sie ein in die Ära der digitalen Inklusion mit
              Accesstra.tech. Wir bieten wegweisende Lösungen, die Ihre Website
              nicht nur konform, sondern vorbildlich in Sachen Barrierefreiheit
              gestalten. Beginnen Sie jetzt und erweitern Sie Ihr Publikum mit
              einem Internet, das wirklich für alle da ist. Erfahren Sie mehr
              über unsere Innovationen – Ihr Weg zu einer zugänglichen
              Webpräsenz beginnt hier.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
