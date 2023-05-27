import { Link } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import { SectionTitle2 } from "../SectionTitles";
import { services } from "../../data/services";

const Services = () => {
  return (
    <section className="servicesWrap pb-[4.5rem] md:pb-[5.5rem] lg:pb-[6.5rem] xl:pb-[7.5rem] relative w-full">
      <div className="row" style={{margin: "100px"}}></div>
      <div className="container sm:container md:container lg:container xl:max-w-[98.125rem] mx-auto">
        <SectionTitle2
          title="The Best"
          titleInner="Services"
          subTitle="What I Do"
        ></SectionTitle2>
        <div className="servicesBoxes relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.875rem]">
            {services.map(
              (item, index) =>
                index < 8 && (
                  <div className="gridItem" key={index}>
                    <div className="serviceBox flex flex-wrap gap-3 flex-col justify-center relative w-full z-[1] min-h-[20rem] md:min-h-[24.375rem] p-[1.875rem] md:p-7 lg:p-10 xl:p-[3.125rem]">
                      <div
                        className={`serviceBg before:absolute before:inset-0 before:${item.bgColor} before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] ${item.bgColor}`}
                        style={{ backgroundImage: `url(${PatternImg2})` }}
                      ></div>
                      <span className="inline-block mb-[.9375rem]">
                        {item.servIcon}
                      </span>
                      <h3
                        className={`text-[1.3rem] lg:text-[1.325rem] xl:text-[1.5rem] font-Poppins font-semibold max-w-full sm:max-w-full lg:max-w-full xl:max-w-[90%] ${item.titleColor}`}
                      >
                        <Link to={`/service/${item.id}`} title={item.servTitle}>
                          {item.servTitle}
                        </Link>
                      </h3>
                      <p
                        className={`text-[1rem] md:text-[1.125rem] font-NunitoSans ${item.descColor}`}
                      >
                        {item.servDesc}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
          {/* Services Boxes */}
        </div>
        <div className="viewAll text-center w-full mt-10 md:mt-[3.125rem] lg:mt-[4.0625rem]">
          <p className="text-desc2 font-NunitoSans text-[1rem] md:text-[1.125rem]">
            Want to see my professional services.{" "}
          </p>
          {/* View All */}
        </div>
      </div>
      {/* Services Wrap */}
    </section>
  );
};

export default Services;
