import { stats } from "../constants";
import styles from "../style";
const Status = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row  flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex-1  flex justify-start items-center flex-row ,-3`}>
          <h4 className="font-poppins text-white font-semibold  xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
            {stat.value}
          </h4>
          <p className={`${styles.paragraph} font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3`}>{stat.title}</p>
        </div>
      )
      )}
    </section>
  );
};

export default Status;
