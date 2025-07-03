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
export declare type CaseLogCreateFormInputValues = {
    f1?: number;
    f2?: number;
    f3?: number;
};
export declare type CaseLogCreateFormValidationValues = {
    f1?: ValidationFunction<number>;
    f2?: ValidationFunction<number>;
    f3?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseLogCreateFormOverridesProps = {
    CaseLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    f1?: PrimitiveOverrideProps<TextFieldProps>;
    f2?: PrimitiveOverrideProps<TextFieldProps>;
    f3?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaseLogCreateFormProps = React.PropsWithChildren<{
    overrides?: CaseLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CaseLogCreateFormInputValues) => CaseLogCreateFormInputValues;
    onSuccess?: (fields: CaseLogCreateFormInputValues) => void;
    onError?: (fields: CaseLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaseLogCreateFormInputValues) => CaseLogCreateFormInputValues;
    onValidate?: CaseLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function CaseLogCreateForm(props: CaseLogCreateFormProps): React.ReactElement;
