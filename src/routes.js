import React from "react";
import { Route, Switch } from "react-router-dom";
import Hoc from "./hoc/hoc";
import Home from "./components/Home"
import CariEkle from "./components/CariEkle"
import StokEkle from "./components/StokEkle"

const BaseRouter = () => (

  <Hoc>
    <Route path="/stokekle" component={StokEkle} />
    <Route path="/cariekle" component={CariEkle} />
    <Route exact path="/" component={Home} />
  </Hoc>

);

export default BaseRouter;
