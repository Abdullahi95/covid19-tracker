import React from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import CountUp from "react-countup";
import "./Cards.css";

export default function Cards(props) {
  return (
    <Card>
      <CardContent>
        <Typography className="top-text" align="center" variant="h6">
          <CountUp start={0} end={props.value || 1} separator=","></CountUp>
        </Typography>
        <Divider></Divider>
        <Typography className="bottom-text">{props.text}</Typography>
      </CardContent>
    </Card>
  );
}
