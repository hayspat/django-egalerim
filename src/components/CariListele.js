import React, { useEffect } from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/cariler";

const CariListele = props => {
  const { cariler } = props;
  useEffect(() => {
    if (props.token !== undefined && props.token !== null) {
      props.getCariList(props.token);
    }
  }, [props.token]);

  const columns = [
    {
      title: "İsim",
      dataIndex: "isim",
      render: (text, record) => (
        <Link to={`/cariliste/${record.id}`}>{text}</Link>
      )
    },
    {
      title: "E-mail",
      dataIndex: "email"
    },
    {
      title: "Tel no",
      dataIndex: "tel_no"
    }
  ];

  const data = cariler.cariler;
  /*   const data = [
    {
      key: "1",
      isim: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park"
    },
    {
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park"
    }
  ]; */

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      loading={props.cariler.loading}
      rowKey="id"
    />
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    cariler: state.cariler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCariList: token => dispatch(actions.getCariList(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CariListele);
