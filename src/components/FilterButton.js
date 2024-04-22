import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function FilterButton(props) {
  const { t } = useTranslation();
  return (
    <Tabs
      defaultActiveKey="All"
      variant="pills"
      className="separe-margin nav-pills nav-fill"
      onSelect={(filterName) => props.setFilter(filterName)}
    >
      <Tab eventKey="Filters:" title={t("Filters") + ":"} disabled></Tab>
      <Tab eventKey="All" title={t("All")}></Tab>
      <Tab eventKey="Active" title={t("Active")}></Tab>
      <Tab eventKey="Completed" title={t("Completed")}></Tab>
    </Tabs>
  );
}

export default FilterButton;
