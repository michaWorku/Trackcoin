import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(245,245,245,1)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: "20px 0",
  },
  cardHeader: {
    textAlign: "center",
    margin: 20,
    backgroundColor: "rgba(245,245,245,1)",
    borderRadius: 20,
  },
}));
