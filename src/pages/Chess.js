import React, { useState } from "react";
import Chessboard from "chessboardjsx";
import StockFish from "../integrations/Stockfish.js";
import { useTranslation } from "react-i18next";

function Chess(props) {
  const { t } = useTranslation();
  const [responsiveWidth, setResponsiveWidth] = useState(
    Math.min(window.innerWidth, window.innerHeight - 200)
  );
  window.addEventListener("resize", updateDimensions);

  function updateDimensions() {
    setResponsiveWidth(Math.min(window.innerWidth, window.innerHeight - 200));
  }
  return (
    <div className="container  separe-margin">
      <h2>{t("Chess with Stockfish")}</h2>
      <div style={boardsContainer}>
        <StockFish>
          {({ position, onDrop }) => (
            <Chessboard
              id="stockfish"
              position={position}
              onDrop={onDrop}
              boardStyle={boardStyle}
              orientation="white"
              draggable={true}
              width={responsiveWidth}
            />
          )}
        </StockFish>
        ;
      </div>
    </div>
  );
}

export default Chess;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
};
