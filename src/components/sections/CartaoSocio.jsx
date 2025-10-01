import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";
import content from "../../content/content";
import SalvarContatoButton from "../interactives/Cartao/SalvarContato";
import CartaoRedeSocial from "../interactives/Cartao/CartaoRedeSocial";
import Button from "../interactives/Button";
import { useColorMode } from "../../assets/context/ColorModeContext";

function CartaoSocio() {
  const { nome } = useParams(); // pega a rota
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Busca o sócio no conteúdo
  const socioKey = Object.keys(content.texts.socios).find((key) => {
    const socioNome = content.texts.socios[key]?.nome;
    return socioNome?.toLowerCase() === nome?.toLowerCase();
  });

  if (!socioKey) return <div>Página não localizada</div>;

  const socio = content.texts.socios[socioKey];
  const url = `${window.location.origin}/${nome.toLowerCase()}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Conteúdo do modal de compartilhamento
  const modalTitle = "Compartilhar";
  const modalContent = (
    <div className="flex flex-col gap-4 font-mainFont">
      <div className="flex flex-wrap gap-3">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border rounded bg-green-500 text-white"
        >
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border rounded bg-blue-600 text-white"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border rounded bg-sky-400 text-white"
        >
          Twitter
        </a>
      </div>

      <p className="text-sm text-gray-600">
        Copie o link e cole em qualquer lugar que você queira compartilhá-lo:
      </p>

      <div className="flex flex-wrap gap-2 items-center">
        <input
          type="text"
          value={url}
          readOnly
          className="flex-1 border rounded p-1"
        />
        <button
          onClick={handleCopy}
          className="px-3 py-1 bg-gray-800 text-white rounded"
        >
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
    </div>
  );

  const { colorMode } = useColorMode(); // pega do contexto

  let textColor = "";
  let textSecondary = "";
  let bgColor = "";
  let borderColor = "";

  switch (colorMode) {
    case "dark":
      textColor = "text-white";
      textSecondary = "text-white/60";
      bgColor = "bg-bgFixedDark";
      borderColor = "border-gray-700";
      break;
    case "light":
      textColor = "text-black";
      textSecondary = "";
      bgColor = "bg-bgFixedLight";
      borderColor = "border-gray-300";
      break;
    default:
      textColor = "text-white";
      textSecondary = "text-white/60";
      bgColor = "bg-bgSectionDark";
      borderColor = "border-gray-700";
  }

  return (
    <div className={`${bgColor} min-h-screen`}>
      <div
        className={`pt-6 phone3:max-w-[320px] m-auto font-mainFont  ${textColor}`}
      >
        {/* Botões principais */}
        <div className="flex justify-center gap-2">
          <SalvarContatoButton socio={socio} />
          <Button
            onClick={() => setVisible(true)}
            className="rounded-[3px] p-1"
            label="Compartilhar"
            size="small"
          ></Button>
        </div>

        <div className="p-[24px]">
          {/* Logo e descrição */}
          <div className="pt-[32px]">
            <img
              src={content.texts.navbar.logo.img}
              alt={content.texts.navbar.logo.alt}
              className=" phone3:max-w-[248px] rounded-[5px] m-auto"
            />
          </div>

          <div className="pt-[50px]">
            {/* Imagem principal */}
            <div className="phone3:max-w-[248px] m-auto">
              <img
                src={content.texts.socios.socio1.image}
                alt=""
                className="rounded-md"
              />
            </div>
            <div className="w-[200px] m-auto text-center leading-5 py-[32px] flex flex-col gap-2">
              <h1 className="text-paragraph5 font-semibold font-mainFont">
                {content.texts.socios.socio1.nome}{" "}
                {content.texts.socios.socio1.sobrenome}
              </h1>
              <h3>Função</h3>
            </div>

            <div className=" w-[70%] m-auto">
              <i>
                <p
                  className={`m-auto text-paragraph3 text-center ${textSecondary}`}
                >
                  {content.texts.socios.socio1.description}
                </p>
              </i>
            </div>

            {/* Informações profissionais */}
            <div className={`w-[205px] m-auto py-[32px] ${textColor}`}>
              <h1 className=" text-[15px] font-bold text-center pb-[16px]">
                Contato:
              </h1>
              <div className="flex flex-wrap gap-2 h-[48px] w-[205px] px-2 justify-center">
                <CartaoRedeSocial tipo="contato" socio={socio} />
              </div>
              {/* <div className="flex justify-center">
              <button className="border-[1px] text-paragraph2 rounded-[3px] py-[3.2px] px-[9.6px]">
                Ver como texto
              </button>
            </div> */}
            </div>

            {/* Perfis profissionais */}
            <div className={`w-[205px] m-auto ${textColor}`}>
              <h1 className=" font-bold text-center pb-[16px]">
                Redes Sociais:
              </h1>
              <div className="flex justify-around h-[48px]">
                <CartaoRedeSocial tipo="social" socio={socio} />
              </div>
              {/* <div className="flex justify-center">
              <button className="border-[1px] text-paragraph2 rounded-[3px] py-[3.2px] px-[9.6px]">
                Ver como texto
              </button>
            </div> */}
            </div>
          </div>
        </div>

        {/* Modal de compartilhamento */}
        <Dialog
          className="font-secondFont"
          closeIcon={<X size={20} />}
          header={modalTitle}
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "50vw" }}
          breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
        >
          {modalContent}
        </Dialog>
      </div>
    </div>
  );
}

export default CartaoSocio;
