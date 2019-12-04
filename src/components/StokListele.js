import React, { useEffect } from "react";
import { List, Avatar, Icon } from "antd";
import * as actions from "../store/actions/stoklar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StokListele = props => {
  const { stoklar } = props;
  useEffect(() => {
    if (props.token !== undefined && props.token !== null) {
      props.getStokList(props.token);
    }
  }, [props.token]);

  return (
    //
    /*     <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      }}
      dataSource={stoklar.stoklar}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <Icon type="star-o" text="156" key="list-vertical-star-o" />,
            <Icon type="like-o" text="156" key="list-vertical-like-o" />,
            <Icon type="message" text="2" key="list-vertical-message" />
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src={item.arac_resimleri[0] ? item.arac_resimleri[0].image : ""}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.plaka}</a>}
            description={item.aciklama}
          />
          {item.content}
        </List.Item>
      )}
    /> */
    <List
      itemLayout="horizontal"
      dataSource={stoklar.stoklar}
      renderItem={item => (
        <List.Item
          extra={
            <img
              width={200}
              height={200}
              alt="logo"
              src={item.arac_resimleri[0] ? item.arac_resimleri[0].image : ""}
            />
          }
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <Link to={`/stokliste/${item.id}/`}>more</Link>
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                src={item.arac_resimleri[0] ? item.arac_resimleri[0].image : ""}
              />
            }
            title={<Link to={`/stokliste/${item.id}/`}>{item.plaka}</Link>}
            description={item.aciklama}
          />
        </List.Item>
      )}
    />
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    stoklar: state.stoklar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStokList: token => dispatch(actions.getStokList(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StokListele);
