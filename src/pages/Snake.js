import React from "react";
import SnakeGame from "../components/SnakeGame";
import { useTranslation } from "react-i18next";

function Snake(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="container  separe-margin">
        <div className="separe-margin">
          <h2 className="separe-margin">{t("Snake")}</h2>
          <SnakeGame />
        </div>
      </div>
    </>
  );
}
export default Snake;
