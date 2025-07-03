/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CaseLog } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CaseLogUpdateForm(props) {
  const {
    id: idProp,
    caseLog: caseLogModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    f1: "",
    f2: "",
    f3: "",
  };
  const [f1, setF1] = React.useState(initialValues.f1);
  const [f2, setF2] = React.useState(initialValues.f2);
  const [f3, setF3] = React.useState(initialValues.f3);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = caseLogRecord
      ? { ...initialValues, ...caseLogRecord }
      : initialValues;
    setF1(cleanValues.f1);
    setF2(cleanValues.f2);
    setF3(cleanValues.f3);
    setErrors({});
  };
  const [caseLogRecord, setCaseLogRecord] = React.useState(caseLogModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CaseLog, idProp)
        : caseLogModelProp;
      setCaseLogRecord(record);
    };
    queryData();
  }, [idProp, caseLogModelProp]);
  React.useEffect(resetStateValues, [caseLogRecord]);
  const validations = {
    f1: [],
    f2: [],
    f3: [],
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
          f1,
          f2,
          f3,
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
          await DataStore.save(
            CaseLog.copyOf(caseLogRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CaseLogUpdateForm")}
      {...rest}
    >
      <TextField
        label="F1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={f1}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              f1: value,
              f2,
              f3,
            };
            const result = onChange(modelFields);
            value = result?.f1 ?? value;
          }
          if (errors.f1?.hasError) {
            runValidationTasks("f1", value);
          }
          setF1(value);
        }}
        onBlur={() => runValidationTasks("f1", f1)}
        errorMessage={errors.f1?.errorMessage}
        hasError={errors.f1?.hasError}
        {...getOverrideProps(overrides, "f1")}
      ></TextField>
      <TextField
        label="F2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={f2}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              f1,
              f2: value,
              f3,
            };
            const result = onChange(modelFields);
            value = result?.f2 ?? value;
          }
          if (errors.f2?.hasError) {
            runValidationTasks("f2", value);
          }
          setF2(value);
        }}
        onBlur={() => runValidationTasks("f2", f2)}
        errorMessage={errors.f2?.errorMessage}
        hasError={errors.f2?.hasError}
        {...getOverrideProps(overrides, "f2")}
      ></TextField>
      <TextField
        label="F3"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={f3}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              f1,
              f2,
              f3: value,
            };
            const result = onChange(modelFields);
            value = result?.f3 ?? value;
          }
          if (errors.f3?.hasError) {
            runValidationTasks("f3", value);
          }
          setF3(value);
        }}
        onBlur={() => runValidationTasks("f3", f3)}
        errorMessage={errors.f3?.errorMessage}
        hasError={errors.f3?.hasError}
        {...getOverrideProps(overrides, "f3")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || caseLogModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || caseLogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
