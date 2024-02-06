import React from "react";
import Button from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import yourData from "../../data/portfolio.json";

library.add(fab, fas);

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <FontAwesomeIcon icon={social.icon} pull="left"/>{" "}{social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
