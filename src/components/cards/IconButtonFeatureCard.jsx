export default function IconButtonFeatureCard(props) {
  const { icon, title, paragraph, className, children, colorMode } = props;

  // Definir classes de cor com base no modo
  const bgClasses = {
    dark: "bg-white",
    light: "bg-iconButtons",
    default: "bg-iconButtons",
  };
  const textClasses = {
    dark: "text-black",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <div
      className={`w-[250px] phone2:w-[300px] phone3:w-[350px] tablet1:min-h-[300px] tablet1:max-w-[255px] desktop1:max-w-[250px] flex flex-col items-center  justify-between p-4 bg-bgSectionDark rounded-md ${className}`}
    >
      <div
        className={`h-[64px] w-[64px] mb-[24px] rounded-md flex justify-center items-center ${bgClass}`}
      >
        {icon}
      </div>
      <h1
        className={`h-auto font-bold font-mainFont text-title1 text-center mb-[16px] ${textClass}`}
      >
        {title}
      </h1>

      <p
        className={`text-center opacity-70 font-mainFont w-[90%] pb-4 ${textClass}`}
      >
        {paragraph}
      </p>
      {children}
    </div>
  );
}
