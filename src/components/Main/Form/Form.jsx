import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef } from "react";

import { PushToTalkButton } from "@speechly/react-ui";

import { useSpeechContext } from "@speechly/react-client";

import useStyles from "./styles";
import { useGlobalContext } from "../../../context/context";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";
import { v4 as uuidv4 } from "uuid";
import CustomSnackbar from "../../Snackbars/CustomSnackbar";
import { AttachMoney } from "@material-ui/icons";

const Form = () => {
  const classes = useStyles();
  const formRef = useRef();
  const { segment } = useSpeechContext();
  const {
    initialFormData,
    formData,
    setFormData,
    addTransaction,
    deleteTransaction,
    snackPack,
    setSnackPack,
  } = useGlobalContext();

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  const createTransaction = () => {
    if (
      !formData.category ||
      Number(formData.amount) === 0 ||
      Number.isNaN(Number(formData.amount)) ||
      !formData.date.includes("-")
    ) {
      setFormData({ ...formData, amount: "" });
      return;
    }

    if (snackPack.length && snackPack[0].type === "edit") {
      setSnackPack([]);
      setSnackPack((prev) => [
        ...prev,
        {
          message: "Transaction successfully updated",
          key: uuidv4(),
          type: "info",
        },
      ]);
      deleteTransaction(formData.id);
      addTransaction({ ...formData, amount: +formData.amount });
    } else {
      setSnackPack((prev) => [
        ...prev,
        {
          message: "Transaction successfully created",
          key: uuidv4(),
          type: "success",
        },
      ]);

      addTransaction({ ...formData, amount: +formData.amount, id: uuidv4() });
    }
    setFormData(initialFormData);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setFormData({ ...formData, type: "Expense" });
      } else if (segment.intent.intent === "add_income") {
        setFormData({ ...formData, type: "Income" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        return createTransaction();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        setFormData(initialFormData);
      }

      segment.entities.forEach((entity) => {
        const category = `${entity.value.charAt(0)}${entity.value
          .slice(1)
          .toLowerCase()}`;

        switch (entity.type) {
          case "amount":
            setFormData({ ...formData, amount: entity.value });
            break;
          case "category":
            if (incomeCategories.map((IC) => IC.type).includes(category)) {
              setFormData({ ...formData, type: "Income", category });
            } else if (
              expenseCategories.map((EC) => EC.type).includes(category)
            ) {
              setFormData({ ...formData, type: "Expense", category });
            }
            break;
          case "date":
            setFormData({ ...formData, date: entity.value });
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        formData.type &&
        formData.category &&
        formData.amount &&
        formData.date
      ) {
        createTransaction();
      }
    }
  }, [segment]);

  return (
    <form ref={formRef}>
      <Grid required container spacing={2}>
        <CustomSnackbar />
        <Grid items xs={12}>
          <Typography variant="subtitle2" align="center" gutterBottom>
            {segment ? (
              <div className="segment">
                {segment.words.map((w) => w.value).join(" ")}
              </div>
            ) : null}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl required fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl required fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {selectedCategories.map((c) => (
                <MenuItem key={c.type} value={c.type}>
                  {c.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            label="amount"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="date"
            fullWidth
            required
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: formatDate(e.target.value) })
            }
          />
        </Grid>
        <div className={classes.buttonCon}>
          <Button
            variant="contained"
            endIcon={<AttachMoney align="center" />}
            onClick={(e) => {
              e.preventDefault();
              formRef.current.reportValidity();
              createTransaction();
            }}
            type="submit"
            className={
              snackPack.length && snackPack[0].type === "edit"
                ? classes.buttonEdit
                : classes.button
            }
          >
            {snackPack.length && snackPack[0].type === "edit"
              ? "Edit"
              : "Create"}
          </Button>

          <PushToTalkButton
            capturekey="(a spacebar)"
            intro="Push to talk or hold a spacebar"
            size="55px"
            gradientStops={["#00ff00", "#00ff00"]}
          />
        </div>
      </Grid>
    </form>
  );
};

export default Form;
