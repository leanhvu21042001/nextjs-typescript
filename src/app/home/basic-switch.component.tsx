"use client";

import { Button, Col, Divider, Row, Switch } from "antd";

import { toggleSwitch } from "@/lib/store/features/switch/switch-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/redux-hooks";

const BasicSwitch = () => {
  const dispatch = useAppDispatch();
  const switchState = useAppSelector((state) => state.switch);

  return (
    <>
      <Row justify="center">
        <Col span={12}>
          <Switch checked={switchState.checked} />
          <Divider />
          <Button onClick={() => dispatch(toggleSwitch(false))}>OFF</Button>
          <Button onClick={() => dispatch(toggleSwitch(true))}>ON</Button>
        </Col>
      </Row>
    </>
  );
};

export default BasicSwitch;
