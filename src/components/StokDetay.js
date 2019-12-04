import React, { useEffect } from "react";
import { Descriptions } from "antd";
import * as actions from "../store/actions/stoklar";
import { connect } from "react-redux";

const StokDetay = props => {
  useEffect(() => {
    if (props.token !== undefined && props.token !== null) {
      props.getStokDetay(props.token, props.match.params.id);
    }
  }, [props.token, props.match.params.id]);

  let aracResimleriList;
  let ruhsatResimleriList;

  if (props.currentStok.arac_resimleri) {
    aracResimleriList = props.currentStok.arac_resimleri.map(resimler => (
      <div>
        <img width="500px" alt="Araç Resmi" src={resimler.image} />
      </div>
    ));
  }

  if (props.currentStok.ruhsat_resimleri) {
    ruhsatResimleriList = props.currentStok.ruhsat_resimleri.map(resimler => (
      <div>
        <img width="500px" alt="Araç Resmi" src={resimler.image} />
      </div>
    ));
  }

  return (
    <Descriptions title="Araç Bilgileri" layout="vertical" bordered>
      <Descriptions.Item label="Plaka">
        {props.currentStok.plaka}
      </Descriptions.Item>
      <Descriptions.Item label="Marka">
        {props.currentStok.marka}
      </Descriptions.Item>
      <Descriptions.Item label="Model">
        {props.currentStok.model}
      </Descriptions.Item>
      <Descriptions.Item label="Yıl">{props.currentStok.yil}</Descriptions.Item>
      <Descriptions.Item label="Tür" span={2}>
        {props.currentStok.tur}
      </Descriptions.Item>
      <Descriptions.Item label="Ruhsat No" span={3}>
        {props.currentStok.ruhsat_no}
      </Descriptions.Item>
      <Descriptions.Item label="Alış Tarihi">
        {props.currentStok.alis_tarihi}
      </Descriptions.Item>
      <Descriptions.Item label="Motor No">
        {props.currentStok.motor_no}
      </Descriptions.Item>
      <Descriptions.Item label="Şase No">
        {props.currentStok.sase_no}
      </Descriptions.Item>
      <Descriptions.Item label="Alış Fiyatı">
        {props.currentStok.alis_fiyati}
      </Descriptions.Item>
      <Descriptions.Item label="KDV">{props.currentStok.kdv}</Descriptions.Item>
      <Descriptions.Item label="Toplam">
        {props.currentStok.toplam}
      </Descriptions.Item>
      <Descriptions.Item label="Açıklama" span={4}>
        {props.currentStok.aciklama}
      </Descriptions.Item>
      <Descriptions.Item label="Araç Resimleri">
        {aracResimleriList}
      </Descriptions.Item>
      <Descriptions.Item label="Ruhsat Resimleri">
        {ruhsatResimleriList}
      </Descriptions.Item>
    </Descriptions>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    currentStok: state.stoklar.currentStok,
    stoklar: state.stoklar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStokDetay: (token, id) => dispatch(actions.getStokDetay(token, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StokDetay);
