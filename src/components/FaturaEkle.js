import React from "react"


import { Form, Row, Col, Input, Button, Select } from 'antd';

const { Option } = Select;

class CariEkleForm extends React.Component {
    state = {
        expand: false,
    };

    // To generate mock Form.Item


    handlePlaka = (rule, value, callback) => {
        let regex, v;
        let val = value;
        v = val.replace(/\s+/g, "").toUpperCase();
        console.log(v)
        regex = (/([0-9]{2}|[01]{2})([a-z|A-Z]{2,})([0-9]{2,})/)
        console.log(v.match(regex))
        if (v.match(regex)) {
            return callback()
        }
        else {
            return callback(true)
        }

    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };


    render() {

        const { getFieldDecorator } = this.props.form


        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+90',
        })(
            <Select style={{ width: 70 }}>
                <Option value="+90">+90</Option>
            </Select>,
        );

        return (
            <Form labelAlign="left" className="ant-advanced-search-form" onSubmit={this.handleSubmit}>

                <Row>

                    <Col span={12} style={{ textAlign: 'left' }}>
                        <h2>Cari Ekle</h2>


                    </Col>
                    <Col span={12} style={{ textAlign: 'right', paddingRight: "4%" }}>


                        <Button type="primary" htmlType="submit">
                            Kaydet
                    </Button>
                    </Col>
                </Row>


                <hr />
                <br />
                <Row type="flex" gutter={24}>

                    <Col span={24} key={"cariara"}>
                        <Form.Item required label={`Carinin Adı`} labelCol={{ span: 3 }}>
                            {getFieldDecorator('Carinin Adı', {
                                rules: [{ required: true, message: 'Lütfen bir cari ismi girin' }],
                            })(<Input placeholder="Carinin Adı" />)}
                        </Form.Item>
                    </Col>

                    <Col span={24} key={"vergino"}>
                        <Form.Item label={`Vergi/TC No`} labelCol={{ span: 3 }}>
                            {getFieldDecorator('Vergi/TC No', {
                                rules: [{ required: true, message: 'Lütfen carinin TC veya Vergi numarasını girin' }],
                            })(<Input placeholder="Carinin TC veya Vergi Numarası" />)}
                        </Form.Item>
                    </Col>

                    <Col span={24} key={"vergidaire"}>
                        <Form.Item label={`Vergi Dairesi`} labelCol={{ span: 3 }}>
                            {getFieldDecorator('Vergi Dairesi', {
                                rules: [{ required: true, message: 'Lütfen vergi dairesini girin' }],
                            })(<Input placeholder="Vergi dairesi" />)}
                        </Form.Item>
                    </Col>

                    <Col span={24} key={"adres"}>
                        <Form.Item label={`Adres`} labelCol={{ span: 3 }}>
                            {getFieldDecorator('Adres', {
                                rules: [{ required: false, message: 'Lütfen carinin TC veya Vergi numarasını girin' }],
                            })(<Input placeholder="Carinin Adresi" />)}
                        </Form.Item>
                    </Col>

                    <Col span={24} key={"telno"}>
                        <Form.Item label={`Telefon Numarası`} labelCol={{ span: 3 }}>
                            {getFieldDecorator('Telefon Numarası', {
                                rules: [{ required: false, message: 'Lütfen vergi dairesini girin' }],
                            })(<Input placeholder="Telefon Numarası" addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                        </Form.Item>
                    </Col>

                    <Col span={24} key={"email"}>
                        <Form.Item label={`E-mail`} labelCol={{ span: 3 }}>
                            {getFieldDecorator('E-mail', {
                                rules: [{ required: false, message: 'Lütfen carinin TC veya Vergi numarasını girin' }],
                            })(<Input placeholder="Carinin e-mail adresi" />)}
                        </Form.Item>
                    </Col>

                    <Col span={24} key={"posta"}>
                        <Form.Item label={`Posta Kodu`} labelCol={{ span: 3 }}>
                            {getFieldDecorator('Posta Kodu', {
                                rules: [{ required: false, message: 'Lütfen vergi dairesini girin' }],
                            })(<Input placeholder="Posta Kodu" />)}
                        </Form.Item>
                    </Col>

                </Row>
            </Form>
        );
    }
}

const WrappedCariEkleForm = Form.create({ name: 'cari_ekle' })(CariEkleForm);




export default WrappedCariEkleForm
