import { useState } from "react";
import Form from "../component/Form/Form";
import Header from "../component/Header/Header";
import Licence from "../component/Licence/Licence";
import stateData from "../data/stateData.json";
import classes from "./Layout.module.scss";

const Layout = () => {
const [formData, setFormData] = useState("")

const getFormData = (data) => {
    setFormData(data);
    console.log(`data`, data)
}

  return (
    <div className={classes.container}>
      <div>
        <Header />
        <Form stateData={stateData} getFormData={getFormData}/>
      </div>
      <div className={classes.licence}>
        <Licence formData={formData}/>
      </div>
    </div>
  );
};

export default Layout;
