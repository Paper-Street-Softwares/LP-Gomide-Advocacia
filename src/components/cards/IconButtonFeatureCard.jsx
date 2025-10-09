export default function IconButtonFeatureCard(props) {
  const { icon, title, paragraph, className, children, colorMode } = props;

  // Definir classes de cor com base no modo
  const bgClasses = {
    dark: "bg-primary",
    light: "bg-buttonColor",
    default: "bg-bgLogo",
  };
  const textClasses = {
    dark: "text-black",
    light: "text-colorTexto",
    default: "text-colorTexto",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  const renderIcon =
    typeof icon === "string" ? (
      <img src={icon} alt="ícone" className="w-8 h-8 object-contain" />
    ) : (
      icon
    );

  return (
    <div
      className={`w-[250px] phone2:w-[300px] phone3:w-[350px] tablet1:min-h-[300px] tablet1:max-w-[200px] desktop1:max-w-[250px] flex flex-col items-center p-4  rounded-md ${className}`}
    >
      <div
        className={`h-[64px] w-[64px] mb-[24px] rounded-full flex justify-center items-center ${bgClass}`}
      >
        {renderIcon}
      </div>

      <h1
        className={`h-auto mb-3 font-bold font-mainFont text-paragraph5 text-center ${textClass}`}
      >
        {title}
      </h1>

      <p
        className={`text-center mb-6 opacity-70 font-secondFont text-paragraph3 w-[90%] ${textClass}`}
      >
        {paragraph}
      </p>

      {children}
    </div>
  );
}
