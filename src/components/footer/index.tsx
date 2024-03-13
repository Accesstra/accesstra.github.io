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
          <p>© ACCESSTRA All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Verbinden Sie sich:</p>
          <p className="my-5">https://www.linkedin.com/company/accesstra</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Kontaktieren Sie uns:</h4>
          <p className="my-5">info@accesstra.tech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
