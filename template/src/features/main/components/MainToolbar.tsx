import React from "react";
import {
  Toolbar,
  ToolbarButtonBase,
  ToolbarButtonCreate,
  ToolbarButtonDelete,
  ToolbarButtonEdit,
  ToolbarButtonFind,
  ToolbarButtonSave,
  ToolbarButtonView,
  ToolbarSplitter
} from "@jfront/ui-core";

const MainToolbar = () => {
  return (
    <Toolbar>
      <ToolbarButtonCreate />
      <ToolbarButtonSave />
      <ToolbarButtonEdit />
      <ToolbarButtonDelete />
      <ToolbarButtonView />
      <ToolbarSplitter />
      <ToolbarButtonBase>List</ToolbarButtonBase>
      <ToolbarButtonFind />
      <ToolbarButtonBase>Search</ToolbarButtonBase>
    </Toolbar>
  );
};

export default MainToolbar;
