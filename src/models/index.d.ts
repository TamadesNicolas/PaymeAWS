import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTransactionOwnerOnly = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TransactionOwnerOnly, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransactionOwnerOnly = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TransactionOwnerOnly, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TransactionOwnerOnly = LazyLoading extends LazyLoadingDisabled ? EagerTransactionOwnerOnly : LazyTransactionOwnerOnly

export declare const TransactionOwnerOnly: (new (init: ModelInit<TransactionOwnerOnly>) => TransactionOwnerOnly) & {
  copyOf(source: TransactionOwnerOnly, mutator: (draft: MutableModel<TransactionOwnerOnly>) => MutableModel<TransactionOwnerOnly> | void): TransactionOwnerOnly;
}

type EagerTransactionCognitoOnly = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TransactionCognitoOnly, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransactionCognitoOnly = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TransactionCognitoOnly, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TransactionCognitoOnly = LazyLoading extends LazyLoadingDisabled ? EagerTransactionCognitoOnly : LazyTransactionCognitoOnly

export declare const TransactionCognitoOnly: (new (init: ModelInit<TransactionCognitoOnly>) => TransactionCognitoOnly) & {
  copyOf(source: TransactionCognitoOnly, mutator: (draft: MutableModel<TransactionCognitoOnly>) => MutableModel<TransactionCognitoOnly> | void): TransactionCognitoOnly;
}

type EagerTransactionBoth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TransactionBoth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransactionBoth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TransactionBoth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TransactionBoth = LazyLoading extends LazyLoadingDisabled ? EagerTransactionBoth : LazyTransactionBoth

export declare const TransactionBoth: (new (init: ModelInit<TransactionBoth>) => TransactionBoth) & {
  copyOf(source: TransactionBoth, mutator: (draft: MutableModel<TransactionBoth>) => MutableModel<TransactionBoth> | void): TransactionBoth;
}