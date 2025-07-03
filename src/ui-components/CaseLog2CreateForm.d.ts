/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CaseLog2CreateFormInputValues = {
    user?: string;
    faceAmount?: string;
    prod?: string;
    sex?: string;
    smoker?: string;
    caseName?: string;
    caseDesc?: string;
};
export declare type CaseLog2CreateFormValidationValues = {
    user?: ValidationFunction<string>;
    faceAmount?: ValidationFunction<string>;
    prod?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    smoker?: ValidationFunction<string>;
    caseName?: ValidationFunction<string>;
    caseDesc?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseLog2CreateFormOverridesProps = {
    CaseLog2CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    faceAmount?: PrimitiveOverrideProps<TextFieldProps>;
    prod?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<TextFieldProps>;
    smoker?: PrimitiveOverrideProps<TextFieldProps>;
    caseName?: PrimitiveOverrideProps<TextFieldProps>;
    caseDesc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaseLog2CreateFormProps = React.PropsWithChildren<{
    overrides?: CaseLog2CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CaseLog2CreateFormInputValues) => CaseLog2CreateFormInputValues;
    onSuccess?: (fields: CaseLog2CreateFormInputValues) => void;
    onError?: (fields: CaseLog2CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaseLog2CreateFormInputValues) => CaseLog2CreateFormInputValues;
    onValidate?: CaseLog2CreateFormValidationValues;
} & React.CSSProperties>;
export default function CaseLog2CreateForm(props: CaseLog2CreateFormProps): React.ReactElement;
