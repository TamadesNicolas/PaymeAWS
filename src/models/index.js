// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TransactionOwnerOnly, TransactionCognitoOnly, TransactionBoth } = initSchema(schema);

export {
  TransactionOwnerOnly,
  TransactionCognitoOnly,
  TransactionBoth
};