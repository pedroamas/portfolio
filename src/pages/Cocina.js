import React from "react";
import { Row, Col, Image, NavLink, Table } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";

function Cocina(props) {
  const { t } = useTranslation();
  return (
    <> <div style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}>
    <iframe
      src="./cliente.html" // Archivo en la carpeta public
      width="100%"
      height="100%"
      style={{ border: "none" }}
      title="Mi Archivo HTML"
    ></iframe>
  </div>
      </>
  );
}

export default Cocina;
