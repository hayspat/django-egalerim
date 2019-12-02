import React, { useEffect } from "react";
import { Descriptions } from "antd";
import * as actions from "../store/actions/cariler";
import { connect, useDispatch, useSelector } from "react-redux";

const CariDetay = props => {
  useEffect(() => {
    if (props.token !== undefined && props.token !== null) {
      props.getCariDetay(props.token, props.match.params.id);
    }
  }, [props.token, props.match.params.id]);

  return (
    <Descriptions title="Cari Bilgileri" layout="vertical">
      <Descriptions.Item label="Cari Adı">
        {props.currentCari.isim}
      </Descriptions.Item>
      <Descriptions.Item label="TC No">
        {props.currentCari.tc_no}
      </Descriptions.Item>
      <Descriptions.Item label="Email">
        {props.currentCari.email}
      </Descriptions.Item>
      <Descriptions.Item label="Vergi No">
        {props.currentCari.vergi_no}
      </Descriptions.Item>
      <Descriptions.Item label="Adres" span={2}>
        {props.currentCari.adres}
      </Descriptions.Item>
      <Descriptions.Item label="Posta Kodu">
        {props.currentCari.posta_kodu}
      </Descriptions.Item>
    </Descriptions>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    currentCari: state.cariler.currentCari,
    cariler: state.cariler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCariDetay: (token, id) => dispatch(actions.getCariDetay(token, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CariDetay);
