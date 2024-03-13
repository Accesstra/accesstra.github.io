import Logo from "../../assets/Logo/ACCESSTRA0.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0 text-white">
          <img src={Logo} alt="logo" />
          <p className="my-5 ">
            Verbinden Sie sich mit uns für eine zugänglichere
            digitale Welt. Unser Team ist bereit, Sie auf dem Weg zu einer
            barrierefreien Website zu unterstützen. Kontaktieren Sie uns, um
            mehr zu erfahren und Teil der Bewegung für digitale Inklusion zu
            werden.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"><a href="https://www.linkedin.com/company/accesstra" target="_blank" rel="noopener noreferrer" className="text-white">
            LinkedIn.de
          </a></p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Kontaktieren Sie uns:</h4>
          
          <p className="my-5">E-mail: info@accesstra.tech</p>
          <p className="my-5">Tel.: 01782677714</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
