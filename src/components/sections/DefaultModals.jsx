import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog } from "primereact/dialog";
import { X, ArrowRight } from "lucide-react";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";

export default function FeaturesParagraphs({ colorMode }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (cardNum) => {
    const card = content.texts.features[`card${cardNum}`];
    setModalTitle(t(`features.card${cardNum}.title`));

    setModalContent(
      <div className="text-paragraph3">
        <div
          dangerouslySetInnerHTML={{
            __html: t(`features.card${cardNum}.description`),
          }}
        />
      </div>
    );

    setVisible(true);
  };

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "bg-bgSectionLight",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-textButtonsFeature",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass}`} paddingbot={true}>
      <SectionHeader
        className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode={colorMode}
        miniTitleBgColor="bg-minititleDark"
      />

      <SectionWrapper>
        <div className="flex flex-col tablet1:flex-row justify-center items-stretch tablet1:items-stretch w-full gap-6 tablet1:gap-6 desktop1:gap-1">
          {/* Coluna esquerda */}
          <div className="flex flex-col gap-6 items-center tablet1:items-center justify-between h-full flex-1">
            <MotionDivDownToUp>
              <IconButtonFeatureCard
                icon={content.texts.features.card1.icon}
                title={t("features.card1.title")}
                paragraph={t("features.card1.subtitle")}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  icon={
                    <ArrowRight
                      className="text-textButtonsFeature"
                      width={18}
                    />
                  }
                  size="small"
                  label={t("features.card1.buttonLabel")}
                  onClick={() => openModal(1)}
                  color="bg-transparent"
                  textclassName="text-textButtonsFeature"
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <IconButtonFeatureCard
                icon={content.texts.features.card2.icon}
                title={t("features.card2.title")}
                paragraph={t("features.card2.subtitle")}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  icon={
                    <ArrowRight
                      className="text-textButtonsFeature"
                      width={18}
                    />
                  }
                  size="small"
                  label={t("features.card2.buttonLabel")}
                  onClick={() => openModal(2)}
                  color="bg-transparent"
                  textclassName="text-textButtonsFeature"
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>
          </div>

          {/* Imagem central */}
          <MotionDivDownToUp className="flex justify-center w-[90%] desktop1:w-[35%] m-auto relative ">
            <div className="absolute bg-white/20 rounded-2xl inset-0" />
            <img
              src={content.texts.features.imgFeatures}
              alt={content.texts.features.alt}
              className=" h-[640px] object-cover w-full desktop1:flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-shadowFeatures/30"
              loading="lazy"
            />
          </MotionDivDownToUp>

          {/* Coluna direita */}
          <div className="flex flex-col gap-6 items-center tablet1:items-center justify-between h-full flex-1">
            <MotionDivDownToUp className="bg-green-00">
              <IconButtonFeatureCard
                icon={content.texts.features.card3.icon}
                title={t("features.card3.title")}
                paragraph={t("features.card3.subtitle")}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  icon={
                    <ArrowRight
                      className="text-textButtonsFeature"
                      width={18}
                    />
                  }
                  size="small"
                  label={t("features.card3.buttonLabel")}
                  onClick={() => openModal(3)}
                  color="bg-transparent"
                  textclassName="text-textButtonsFeature"
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <IconButtonFeatureCard
                icon={content.texts.features.card4.icon}
                title={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(`features.card4.title`),
                    }}
                  />
                }
                paragraph={t("features.card4.subtitle")}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  icon={
                    <ArrowRight
                      className="text-textButtonsFeature"
                      width={18}
                    />
                  }
                  size="small"
                  label={t("features.card4.buttonLabel")}
                  onClick={() => openModal(4)}
                  color="bg-transparent"
                  textclassName="text-textButtonsFeature"
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>

      {/* Modal */}
      <Dialog
        className="font-secondFont text-colorTexto [&_*]:text-colorTexto"
        closeIcon={<X size={20} />}
        header={
          <div className="w-full border-b border-gray-300 pb-2">
            <span dangerouslySetInnerHTML={{ __html: modalTitle }} />
          </div>
        }
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{
          "4000px": "310px",
          "1024px": "310px",
          "641px": "310px",
        }}
      >
        {modalContent}
      </Dialog>
    </SectionArea>
  );
}
