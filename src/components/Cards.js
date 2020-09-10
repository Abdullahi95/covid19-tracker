import React from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import CountUp from "react-countup";

export default function Cards(props) {
  return (
    <Card>
      <CardContent>
        <Typography align="center" variant="h6">
          <CountUp start={0} end={props.value || 1} separator=","></CountUp>
        </Typography>
        <Divider></Divider>
        <Typography aligh="center " variant="body2" gutterbottom>
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
