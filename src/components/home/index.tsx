import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/Logo/Slogan.svg";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import Logo2 from "../../assets/Logo/LogoV3BigWhite.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-primary-300 py-10 h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:z-[-1] before:ml-20 before:-left-20 md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText}></img>
              </div>
            </div>

            <p className="mt-8 text-lg text-white ml-2">
              Entdecken Sie mit Accesstra.tech die Zukunft der
              Web-Barrierefreiheit. Unser Ziel ist es, das Internet für jeden
              zugänglich zu machen – mit Tools und Schulungen, die Barrieren
              abbauen und Inklusivität fördern. Sind Sie bereit, Ihre Website
              für alle Menschen zu öffnen? Klicken Sie hier und beginnen Sie
              Ihre Reise zu einer umfassenderen digitalen Welt.
            </p>
          </motion.div>

          {/* ACTION BUTTON */}
          <motion.div
            className="mt-8 mb-2 flex intems-center gap-8 text-lg text-primary-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              What is Accesstra?
            </ActionButton>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="Logo" src={Logo2}></img>
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10 flex items-center">
          <div className="mx-auto w-5/6">
            <div className="flex w-full items-center justify-between gap-8">
              <img alt="sponsor-redbull" src={SponsorRedBull} />
              <img alt="sponsor-forbes" src={SponsorForbes} />
              <img alt="sponsor-fortune" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
