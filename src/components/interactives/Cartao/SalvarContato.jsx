import React from "react";
import Button from "../../interactives/Button";

export default function SalvarContatoButton({ socio }) {
  const handleSalvarContato = () => {
    if (!socio) return;

    const vcardLines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${socio.sobrenome || ""};${socio.nome || ""}`,
      `FN:${socio.nome || ""} ${socio.sobrenome || ""}`,
    ];

    if (socio.telefone) vcardLines.push(`TEL;TYPE=CELL:${socio.telefone}`);
    if (socio.whatsapp)
      vcardLines.push(`TEL;TYPE=WORK,WhatsApp:${socio.whatsapp}`);
    if (socio.email) vcardLines.push(`EMAIL:${socio.email}`);

    vcardLines.push("END:VCARD");

    const vcard = vcardLines.join("\n");
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${socio.nome || "contato"}.vcf`;

    // Append to body e clique
    document.body.appendChild(a);
    a.click();

    // Remover e revogar URL
    setTimeout(() => {
      URL.revokeObjectURL(url);
      a.remove();
    }, 1000);
  };

  return (
    <Button
      className=" rounded-[3px] p-1"
      onClick={handleSalvarContato}
      label=" Salvar Contato"
      size="small"
    ></Button>
  );
}
