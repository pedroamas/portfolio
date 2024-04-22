import React from "react";
import MinesweeperGame from "../components/MinesweeperGame";
import { useTranslation } from "react-i18next";

function Minesweeper(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="container  separe-margin">
        <div className="separe-margin">
          <h2 className="separe-margin">{t("Minesweeper")}</h2>
          <MinesweeperGame />
        </div>
      </div>
    </>
  );
}

export default Minesweeper;
