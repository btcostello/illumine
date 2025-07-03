import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCaseLog2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CaseLog2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly faceAmount?: string | null;
  readonly prod?: string | null;
  readonly sex?: string | null;
  readonly smoker?: string | null;
  readonly caseName?: string | null;
  readonly caseDesc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCaseLog2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CaseLog2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly faceAmount?: string | null;
  readonly prod?: string | null;
  readonly sex?: string | null;
  readonly smoker?: string | null;
  readonly caseName?: string | null;
  readonly caseDesc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CaseLog2 = LazyLoading extends LazyLoadingDisabled ? EagerCaseLog2 : LazyCaseLog2

export declare const CaseLog2: (new (init: ModelInit<CaseLog2>) => CaseLog2) & {
  copyOf(source: CaseLog2, mutator: (draft: MutableModel<CaseLog2>) => MutableModel<CaseLog2> | void): CaseLog2;
}