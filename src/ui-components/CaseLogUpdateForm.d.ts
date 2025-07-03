/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CaseLog } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CaseLogUpdateFormInputValues = {
    f1?: number;
    f2?: number;
    f3?: number;
};
export declare type CaseLogUpdateFormValidationValues = {
    f1?: ValidationFunction<number>;
    f2?: ValidationFunction<number>;
    f3?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseLogUpdateFormOverridesProps = {
    CaseLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    f1?: PrimitiveOverrideProps<TextFieldProps>;
    f2?: PrimitiveOverrideProps<TextFieldProps>;
    f3?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaseLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: CaseLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    caseLog?: CaseLog;
    onSubmit?: (fields: CaseLogUpdateFormInputValues) => CaseLogUpdateFormInputValues;
    onSuccess?: (fields: CaseLogUpdateFormInputValues) => void;
    onError?: (fields: CaseLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaseLogUpdateFormInputValues) => CaseLogUpdateFormInputValues;
    onValidate?: CaseLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CaseLogUpdateForm(props: CaseLogUpdateFormProps): React.ReactElement;
