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
            <HText>Unsere Vision</HText>
            <p className="py-5 text-white text-lg">

          Wir träumen von einem Internet, 
          das wirklich für alle da ist – und wir haben die Werkzeuge, 
          um diesen Traum Wirklichkeit werden zu lassen. Accesstra bietet innovative Lösungen,
           um deine Website nicht nur regelkonform, sondern zu einem Leuchtturm der Zugänglichkeit zu machen.
            Mit unserem frischen Wind in der digitalen Barrierefreiheit öffnen wir dir die Türen zu einem größerem Publikum.
           Lass uns gemeinsam zeigen, dass das Internet ein Ort für uns alle ist.

            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
