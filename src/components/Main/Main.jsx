import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context/context";
import Form from "./Form/Form";
import InfoCard from "./InfoCard";
import List from "./List/List";
import useStyles from "./style";

const Main = () => {
  const classes = useStyles();
  const { balance } = useGlobalContext();
  return (
    <Card className={classes.root}>
      <CardHeader
        title="Money Tracker"
        subheader="Powered By Speechly"
        titleTypographyProps={{
          variant: "h4",
          component: "h4",
        }}
        className={classes.cardHeader}
      />
      <CardContent>
        <Typography style={{ marginLeft: 20 }} variant="h5">
          Total Balance ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
