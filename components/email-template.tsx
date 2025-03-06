import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div className="p-4 m-auto border rounded-lg">
    <h2 className="text-customGray-light">📩 Nuevo mensaje de contacto</h2>
    <p>
      <strong>Nombre:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong>{" "}
      <a href={`mailto:${email}`} className="text-violetPrimary">
        {email}
      </a>
    </p>
    <p>
      <strong>Mensaje:</strong>
    </p>
    <p className="p-4 bg-white rounded-md border">{message}</p>
    <hr className="my-8" />
    <p className="text-xs text-gray-500">
      Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
    </p>
  </div>
);
