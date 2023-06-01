import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "Mountain Details", pageHref: "" },
  ];
  const { container } = render(
    <Router>
      <Breadcrumb data={breadcrumbList} />
    </Router>
  );
  const breadcrumb = container.querySelector(".breadcrumb");
  return {
    breadcrumb,
  };
};

test("Should have <ol> with className .breadcrumb and have text Mountain Details", () => {
  const { breadcrumb } = setup();
  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Mountain");
});
