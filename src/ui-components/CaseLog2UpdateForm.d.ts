/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CaseLog2 } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CaseLog2UpdateFormInputValues = {
    user?: string;
    faceAmount?: string;
    prod?: string;
    sex?: string;
    smoker?: string;
    caseName?: string;
    caseDesc?: string;
};
export declare type CaseLog2UpdateFormValidationValues = {
    user?: ValidationFunction<string>;
    faceAmount?: ValidationFunction<string>;
    prod?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    smoker?: ValidationFunction<string>;
    caseName?: ValidationFunction<string>;
    caseDesc?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseLog2UpdateFormOverridesProps = {
    CaseLog2UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    faceAmount?: PrimitiveOverrideProps<TextFieldProps>;
    prod?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<TextFieldProps>;
    smoker?: PrimitiveOverrideProps<TextFieldProps>;
    caseName?: PrimitiveOverrideProps<TextFieldProps>;
    caseDesc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaseLog2UpdateFormProps = React.PropsWithChildren<{
    overrides?: CaseLog2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    caseLog2?: CaseLog2;
    onSubmit?: (fields: CaseLog2UpdateFormInputValues) => CaseLog2UpdateFormInputValues;
    onSuccess?: (fields: CaseLog2UpdateFormInputValues) => void;
    onError?: (fields: CaseLog2UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaseLog2UpdateFormInputValues) => CaseLog2UpdateFormInputValues;
    onValidate?: CaseLog2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function CaseLog2UpdateForm(props: CaseLog2UpdateFormProps): React.ReactElement;
