import styles from "../style";
import { logo } from "../assets";
import { footerLinks, navLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.padding} ${styles.paddingY} flex-col`}
    >
      <div className={`${styles.flexStart} md:flex-row  flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="Hoobank" className="w-[266px] h-[72px]" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]:`}>
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex  flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col ss:my-0  my-4 min-w-[150px] ">
              <h4 className="text-white font-semibold ">{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li key={link.key} className="text-gray-300 text-sm  cursor-pointer hover:text-secondary font-poppins my-2">
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
