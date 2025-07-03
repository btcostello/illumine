/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CaseLog2 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CaseLog2CreateForm(props) {
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
    user: "",
    faceAmount: "",
    prod: "",
    sex: "",
    smoker: "",
    caseName: "",
    caseDesc: "",
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [faceAmount, setFaceAmount] = React.useState(initialValues.faceAmount);
  const [prod, setProd] = React.useState(initialValues.prod);
  const [sex, setSex] = React.useState(initialValues.sex);
  const [smoker, setSmoker] = React.useState(initialValues.smoker);
  const [caseName, setCaseName] = React.useState(initialValues.caseName);
  const [caseDesc, setCaseDesc] = React.useState(initialValues.caseDesc);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser(initialValues.user);
    setFaceAmount(initialValues.faceAmount);
    setProd(initialValues.prod);
    setSex(initialValues.sex);
    setSmoker(initialValues.smoker);
    setCaseName(initialValues.caseName);
    setCaseDesc(initialValues.caseDesc);
    setErrors({});
  };
  const validations = {
    user: [],
    faceAmount: [],
    prod: [],
    sex: [],
    smoker: [],
    caseName: [],
    caseDesc: [],
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
          user,
          faceAmount,
          prod,
          sex,
          smoker,
          caseName,
          caseDesc,
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
          await DataStore.save(new CaseLog2(modelFields));
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
      {...getOverrideProps(overrides, "CaseLog2CreateForm")}
      {...rest}
    >
      <TextField
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={user}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user: value,
              faceAmount,
              prod,
              sex,
              smoker,
              caseName,
              caseDesc,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
      ></TextField>
      <TextField
        label="Face amount"
        isRequired={false}
        isReadOnly={false}
        value={faceAmount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              faceAmount: value,
              prod,
              sex,
              smoker,
              caseName,
              caseDesc,
            };
            const result = onChange(modelFields);
            value = result?.faceAmount ?? value;
          }
          if (errors.faceAmount?.hasError) {
            runValidationTasks("faceAmount", value);
          }
          setFaceAmount(value);
        }}
        onBlur={() => runValidationTasks("faceAmount", faceAmount)}
        errorMessage={errors.faceAmount?.errorMessage}
        hasError={errors.faceAmount?.hasError}
        {...getOverrideProps(overrides, "faceAmount")}
      ></TextField>
      <TextField
        label="Prod"
        isRequired={false}
        isReadOnly={false}
        value={prod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              faceAmount,
              prod: value,
              sex,
              smoker,
              caseName,
              caseDesc,
            };
            const result = onChange(modelFields);
            value = result?.prod ?? value;
          }
          if (errors.prod?.hasError) {
            runValidationTasks("prod", value);
          }
          setProd(value);
        }}
        onBlur={() => runValidationTasks("prod", prod)}
        errorMessage={errors.prod?.errorMessage}
        hasError={errors.prod?.hasError}
        {...getOverrideProps(overrides, "prod")}
      ></TextField>
      <TextField
        label="Sex"
        isRequired={false}
        isReadOnly={false}
        value={sex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              faceAmount,
              prod,
              sex: value,
              smoker,
              caseName,
              caseDesc,
            };
            const result = onChange(modelFields);
            value = result?.sex ?? value;
          }
          if (errors.sex?.hasError) {
            runValidationTasks("sex", value);
          }
          setSex(value);
        }}
        onBlur={() => runValidationTasks("sex", sex)}
        errorMessage={errors.sex?.errorMessage}
        hasError={errors.sex?.hasError}
        {...getOverrideProps(overrides, "sex")}
      ></TextField>
      <TextField
        label="Smoker"
        isRequired={false}
        isReadOnly={false}
        value={smoker}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              faceAmount,
              prod,
              sex,
              smoker: value,
              caseName,
              caseDesc,
            };
            const result = onChange(modelFields);
            value = result?.smoker ?? value;
          }
          if (errors.smoker?.hasError) {
            runValidationTasks("smoker", value);
          }
          setSmoker(value);
        }}
        onBlur={() => runValidationTasks("smoker", smoker)}
        errorMessage={errors.smoker?.errorMessage}
        hasError={errors.smoker?.hasError}
        {...getOverrideProps(overrides, "smoker")}
      ></TextField>
      <TextField
        label="Case name"
        isRequired={false}
        isReadOnly={false}
        value={caseName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              faceAmount,
              prod,
              sex,
              smoker,
              caseName: value,
              caseDesc,
            };
            const result = onChange(modelFields);
            value = result?.caseName ?? value;
          }
          if (errors.caseName?.hasError) {
            runValidationTasks("caseName", value);
          }
          setCaseName(value);
        }}
        onBlur={() => runValidationTasks("caseName", caseName)}
        errorMessage={errors.caseName?.errorMessage}
        hasError={errors.caseName?.hasError}
        {...getOverrideProps(overrides, "caseName")}
      ></TextField>
      <TextField
        label="Case desc"
        isRequired={false}
        isReadOnly={false}
        value={caseDesc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              faceAmount,
              prod,
              sex,
              smoker,
              caseName,
              caseDesc: value,
            };
            const result = onChange(modelFields);
            value = result?.caseDesc ?? value;
          }
          if (errors.caseDesc?.hasError) {
            runValidationTasks("caseDesc", value);
          }
          setCaseDesc(value);
        }}
        onBlur={() => runValidationTasks("caseDesc", caseDesc)}
        errorMessage={errors.caseDesc?.errorMessage}
        hasError={errors.caseDesc?.hasError}
        {...getOverrideProps(overrides, "caseDesc")}
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
