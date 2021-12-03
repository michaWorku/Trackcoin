import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
import useTransactions from "../../useTransaction";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <Typography variant="h2" className={classes.cardHeader}>
        {title}
      </Typography>

      <CardContent>
        <Typography variant="h5" style={{ marginLeft: 20 }}>
          ${total}
        </Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
