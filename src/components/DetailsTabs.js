import React, { useEffect, useState } from "react";
import { AppBar, Box, Tab, Tabs } from "@mui/material";
import { tabPanel, tabsDescription } from "./../styles/sharedStyles";
import { useDispatch, useSelector } from "react-redux";
import { tabSelected } from "./../redux/slice/tabSlice";

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      className={tabsDescription}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box className="tab-description">{children}</Box>}
    </div>
  );
};

const DetailsTabs = ({ tabDetails }) => {
  const [tabValue, setTabValue] = useState(0);
  const selectedTab = useSelector((store) => store.tab?.selectedTab);
  const dispatch = useDispatch();

  useEffect(() => {
    setTabValue(selectedTab);
  }, [selectedTab]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    dispatch(tabSelected(newValue));
  };

  return (
    <div className={tabPanel}>
      <AppBar position="static" className="tab-container">
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="fullWidth"
          centered
        >
          {tabDetails.map((tab, index) => (
            <Tab key={index} label={tab.label} id={`tab-${index}`} />
          ))}
        </Tabs>
      </AppBar>

      {tabDetails.map((tab, index) => (
        <TabPanel key={index} value={tabValue} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
};

export default DetailsTabs;
