import React from "react";
import MenuItem from "../menu-item/menu-items.component";
import "./directory-menu.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectDirectorySection} from "../../redux/directory/directory.selector";

const DirectoryMenu = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(DirectoryMenu);
