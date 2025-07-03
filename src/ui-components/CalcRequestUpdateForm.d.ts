/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CalcRequest } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CalcRequestUpdateFormInputValues = {
    Age?: number;
    Sex?: string;
    Tobacco?: string;
    CreditMethod?: string;
    FaceAmount?: number;
    AnnualPrem?: number;
    PremYrs?: number;
};
export declare type CalcRequestUpdateFormValidationValues = {
    Age?: ValidationFunction<number>;
    Sex?: ValidationFunction<string>;
    Tobacco?: ValidationFunction<string>;
    CreditMethod?: ValidationFunction<string>;
    FaceAmount?: ValidationFunction<number>;
    AnnualPrem?: ValidationFunction<number>;
    PremYrs?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalcRequestUpdateFormOverridesProps = {
    CalcRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Age?: PrimitiveOverrideProps<TextFieldProps>;
    Sex?: PrimitiveOverrideProps<TextFieldProps>;
    Tobacco?: PrimitiveOverrideProps<TextFieldProps>;
    CreditMethod?: PrimitiveOverrideProps<TextFieldProps>;
    FaceAmount?: PrimitiveOverrideProps<TextFieldProps>;
    AnnualPrem?: PrimitiveOverrideProps<TextFieldProps>;
    PremYrs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CalcRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: CalcRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    calcRequest?: CalcRequest;
    onSubmit?: (fields: CalcRequestUpdateFormInputValues) => CalcRequestUpdateFormInputValues;
    onSuccess?: (fields: CalcRequestUpdateFormInputValues) => void;
    onError?: (fields: CalcRequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalcRequestUpdateFormInputValues) => CalcRequestUpdateFormInputValues;
    onValidate?: CalcRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CalcRequestUpdateForm(props: CalcRequestUpdateFormProps): React.ReactElement;
