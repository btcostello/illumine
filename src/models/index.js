// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CaseLog2 } = initSchema(schema);

export {
  CaseLog2
};