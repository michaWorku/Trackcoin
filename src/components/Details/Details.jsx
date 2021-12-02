import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

import useStyles from "./styles";
import useTransactions from "../../useTransaction";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      {/* <Typography
        variant="h2"
        style={{
          fontSize: 30,
          fontWeight: 900,
          textAlign: "center",
          margin: 20,
        }}
      >
        {title} 
      </Typography>*/}
      {
        <CardHeader
          title={title}
          titleTypographyProps={{
            variant: "h4",
            component: "h4",
          }}
          className={classes.cardHeader}
        />
      }
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Pie data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
