/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CalcRequest } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CalcRequestCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Age: "",
    Sex: "",
    Tobacco: "",
    CreditMethod: "",
    FaceAmount: "",
    AnnualPrem: "",
    PremYrs: "",
  };
  const [Age, setAge] = React.useState(initialValues.Age);
  const [Sex, setSex] = React.useState(initialValues.Sex);
  const [Tobacco, setTobacco] = React.useState(initialValues.Tobacco);
  const [CreditMethod, setCreditMethod] = React.useState(
    initialValues.CreditMethod
  );
  const [FaceAmount, setFaceAmount] = React.useState(initialValues.FaceAmount);
  const [AnnualPrem, setAnnualPrem] = React.useState(initialValues.AnnualPrem);
  const [PremYrs, setPremYrs] = React.useState(initialValues.PremYrs);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAge(initialValues.Age);
    setSex(initialValues.Sex);
    setTobacco(initialValues.Tobacco);
    setCreditMethod(initialValues.CreditMethod);
    setFaceAmount(initialValues.FaceAmount);
    setAnnualPrem(initialValues.AnnualPrem);
    setPremYrs(initialValues.PremYrs);
    setErrors({});
  };
  const validations = {
    Age: [],
    Sex: [
      {
        type: "Contains",
        strValues: ["Male", "Female"],
        validationMessage: 'The value must contain "Male" or "Female"',
      },
    ],
    Tobacco: [],
    CreditMethod: [],
    FaceAmount: [],
    AnnualPrem: [],
    PremYrs: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Age,
          Sex,
          Tobacco,
          CreditMethod,
          FaceAmount,
          AnnualPrem,
          PremYrs,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new CalcRequest(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CalcRequestCreateForm")}
      {...rest}
    >
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Age: value,
              Sex,
              Tobacco,
              CreditMethod,
              FaceAmount,
              AnnualPrem,
              PremYrs,
            };
            const result = onChange(modelFields);
            value = result?.Age ?? value;
          }
          if (errors.Age?.hasError) {
            runValidationTasks("Age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("Age", Age)}
        errorMessage={errors.Age?.errorMessage}
        hasError={errors.Age?.hasError}
        {...getOverrideProps(overrides, "Age")}
      ></TextField>
      <SelectField
        label="Sex"
        placeholder="Please select an option"
        isDisabled={false}
        value={Sex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Age,
              Sex: value,
              Tobacco,
              CreditMethod,
              FaceAmount,
              AnnualPrem,
              PremYrs,
            };
            const result = onChange(modelFields);
            value = result?.Sex ?? value;
          }
          if (errors.Sex?.hasError) {
            runValidationTasks("Sex", value);
          }
          setSex(value);
        }}
        onBlur={() => runValidationTasks("Sex", Sex)}
        errorMessage={errors.Sex?.errorMessage}
        hasError={errors.Sex?.hasError}
        {...getOverrideProps(overrides, "Sex")}
      >
        <option
          children="Male"
          value="Male"
          {...getOverrideProps(overrides, "Sexoption0")}
        ></option>
        <option
          children="Female"
          value="Female"
          {...getOverrideProps(overrides, "Sexoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Tobacco"
        isRequired={false}
        isReadOnly={false}
        value={Tobacco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Age,
              Sex,
              Tobacco: value,
              CreditMethod,
              FaceAmount,
              AnnualPrem,
              PremYrs,
            };
            const result = onChange(modelFields);
            value = result?.Tobacco ?? value;
          }
          if (errors.Tobacco?.hasError) {
            runValidationTasks("Tobacco", value);
          }
          setTobacco(value);
        }}
        onBlur={() => runValidationTasks("Tobacco", Tobacco)}
        errorMessage={errors.Tobacco?.errorMessage}
        hasError={errors.Tobacco?.hasError}
        {...getOverrideProps(overrides, "Tobacco")}
      ></TextField>
      <TextField
        label="Credit method"
        isRequired={false}
        isReadOnly={false}
        value={CreditMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Age,
              Sex,
              Tobacco,
              CreditMethod: value,
              FaceAmount,
              AnnualPrem,
              PremYrs,
            };
            const result = onChange(modelFields);
            value = result?.CreditMethod ?? value;
          }
          if (errors.CreditMethod?.hasError) {
            runValidationTasks("CreditMethod", value);
          }
          setCreditMethod(value);
        }}
        onBlur={() => runValidationTasks("CreditMethod", CreditMethod)}
        errorMessage={errors.CreditMethod?.errorMessage}
        hasError={errors.CreditMethod?.hasError}
        {...getOverrideProps(overrides, "CreditMethod")}
      ></TextField>
      <TextField
        label="Face amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={FaceAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Age,
              Sex,
              Tobacco,
              CreditMethod,
              FaceAmount: value,
              AnnualPrem,
              PremYrs,
            };
            const result = onChange(modelFields);
            value = result?.FaceAmount ?? value;
          }
          if (errors.FaceAmount?.hasError) {
            runValidationTasks("FaceAmount", value);
          }
          setFaceAmount(value);
        }}
        onBlur={() => runValidationTasks("FaceAmount", FaceAmount)}
        errorMessage={errors.FaceAmount?.errorMessage}
        hasError={errors.FaceAmount?.hasError}
        {...getOverrideProps(overrides, "FaceAmount")}
      ></TextField>
      <TextField
        label="Annual prem"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={AnnualPrem}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Age,
              Sex,
              Tobacco,
              CreditMethod,
              FaceAmount,
              AnnualPrem: value,
              PremYrs,
            };
            const result = onChange(modelFields);
            value = result?.AnnualPrem ?? value;
          }
          if (errors.AnnualPrem?.hasError) {
            runValidationTasks("AnnualPrem", value);
          }
          setAnnualPrem(value);
        }}
        onBlur={() => runValidationTasks("AnnualPrem", AnnualPrem)}
        errorMessage={errors.AnnualPrem?.errorMessage}
        hasError={errors.AnnualPrem?.hasError}
        {...getOverrideProps(overrides, "AnnualPrem")}
      ></TextField>
      <TextField
        label="Prem yrs"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={PremYrs}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Age,
              Sex,
              Tobacco,
              CreditMethod,
              FaceAmount,
              AnnualPrem,
              PremYrs: value,
            };
            const result = onChange(modelFields);
            value = result?.PremYrs ?? value;
          }
          if (errors.PremYrs?.hasError) {
            runValidationTasks("PremYrs", value);
          }
          setPremYrs(value);
        }}
        onBlur={() => runValidationTasks("PremYrs", PremYrs)}
        errorMessage={errors.PremYrs?.errorMessage}
        hasError={errors.PremYrs?.hasError}
        {...getOverrideProps(overrides, "PremYrs")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
