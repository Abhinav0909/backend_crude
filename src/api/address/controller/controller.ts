import { addressDirectory,  queryType} from '../models/models';
import database from '../../../loaders/database';
import { nanoid } from 'nanoid';
export const getValue = async (query:queryType):Promise<string> => {
  const data = await (await database()).collection('address').findOne(query);
  return data;
}

export const addValue = async (val: addressDirectory):Promise<string> => {
  val.id= nanoid()

  await (await database()).collection('address').insertOne(val);
  return val.id;
} 

export const deleteValue = async (val: addressDirectory):Promise<void> => {
  await (await database()).collection('address').deleteOne(val);
}

export const replaceValue = async (val: addressDirectory):Promise<void>=> {
  await (await database()).collection('address').replaceOne({id:val.id},val);
}