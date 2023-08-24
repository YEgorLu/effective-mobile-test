import {AuthData} from "./auth.model";
import {ArrayKeys, ObjectKeys} from "../helpers/types";

export interface LocalStorageModel {
  authData: AuthData;
  registered: Record<AuthData['email'], AuthData['password']>,
  smth: number[];
}

export type LocalStorageKeys = keyof LocalStorageModel;
export type LocalStorageArrayKeys = ArrayKeys<LocalStorageModel>;
export type LocalStorageRecordKeys = ObjectKeys<LocalStorageModel>;


