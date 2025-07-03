/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CalcRequestCreateFormInputValues = {
    Age?: number;
    Sex?: string;
    Tobacco?: string;
    CreditMethod?: string;
    FaceAmount?: number;
    AnnualPrem?: number;
    PremYrs?: number;
};
export declare type CalcRequestCreateFormValidationValues = {
    Age?: ValidationFunction<number>;
    Sex?: ValidationFunction<string>;
    Tobacco?: ValidationFunction<string>;
    CreditMethod?: ValidationFunction<string>;
    FaceAmount?: ValidationFunction<number>;
    AnnualPrem?: ValidationFunction<number>;
    PremYrs?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalcRequestCreateFormOverridesProps = {
    CalcRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Age?: PrimitiveOverrideProps<TextFieldProps>;
    Sex?: PrimitiveOverrideProps<SelectFieldProps>;
    Tobacco?: PrimitiveOverrideProps<TextFieldProps>;
    CreditMethod?: PrimitiveOverrideProps<TextFieldProps>;
    FaceAmount?: PrimitiveOverrideProps<TextFieldProps>;
    AnnualPrem?: PrimitiveOverrideProps<TextFieldProps>;
    PremYrs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CalcRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: CalcRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CalcRequestCreateFormInputValues) => CalcRequestCreateFormInputValues;
    onSuccess?: (fields: CalcRequestCreateFormInputValues) => void;
    onError?: (fields: CalcRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalcRequestCreateFormInputValues) => CalcRequestCreateFormInputValues;
    onValidate?: CalcRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function CalcRequestCreateForm(props: CalcRequestCreateFormProps): React.ReactElement;
