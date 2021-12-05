import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, Edit, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";
import { useGlobalContext } from "../../../context/context";

const List = () => {
  const {
    init,
    transactions,
    editTransaction,
    deleteTransaction,
    snackPack,
    setSnackPack,
  } = useGlobalContext();
  const classes = useStyles();

  const handleEdit = (id) => {
    if (!snackPack.length) {
      editTransaction(id);
    } else {
      init();
      editTransaction(id);
    }
    setSnackPack((prev) => [
      ...prev,
      {
        message: "Transaction successfully updated",
        key: uuidv4(),
        type: "edit",
      },
    ]);
  };

  const handleDelete = (id) => {
    init();
    deleteTransaction(id);
    setSnackPack((prev) => [
      ...prev,
      {
        message: "Transaction successfully removed",
        key: uuidv4(),
        type: "error",
      },
    ]);
  };

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            ></ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <Edit
                  onClick={(e) => {
                    e.preventDefault();
                    handleEdit(transaction.id);
                  }}
                />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <Delete
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(transaction.id);
                  }}
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
