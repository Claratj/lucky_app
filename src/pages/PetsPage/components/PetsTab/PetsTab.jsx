import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ContentDate from '../ContentPetsTab/ContentDate';
import ContentHealth from '../ContentPetsTab/ContentHealth';
import ContentAdoption from '../ContentPetsTab/ContentAdoption';
import './PetsTab.scss';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>

      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





export default function PetsTab() {

  const location = useLocation();
  const route = location.pathname;
  const cutPathPets = '/pets'+route.substring(5);
  const cutPathAdop = '/adoptions/'+route.substring(9);
  
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="c-tab">
    {location.pathname ==  cutPathPets &&
    <div>
      <AppBar position="static" className="c-petsTab__app">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="c-petsTab__tab">
          <Tab label="Datos" {...a11yProps(0)} className="c-petsTab__item"/>
          <Tab label="Salud" {...a11yProps(1)} />
          <Tab label="Adopción" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ContentDate></ContentDate>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentHealth></ContentHealth>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContentAdoption></ContentAdoption>
      </TabPanel>
      </div>}

      {location.pathname ==  cutPathAdop &&
    <div>
      <AppBar position="static" className="c-petsTab__app">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="c-petsTab__tab">
          <Tab label="Datos" {...a11yProps(0)} className="c-petsTab__item"/>
          <Tab label="Salud" {...a11yProps(1)} />
          <Tab label="Adopción" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ContentDate></ContentDate>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentHealth></ContentHealth>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContentAdoption></ContentAdoption>
      </TabPanel>
      </div>}
    </div>
  );
}