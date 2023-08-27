import {AuthData} from "./auth.model";
import {ArrayKeys, ObjectKeys} from "../helpers/types";
import {PostModel} from "./post.model";

export interface LocalStorageModel {
  authData: AuthData | null;
  registered: Record<AuthData['email'], AuthData['password']>,
  posts: PostModel[];
}

export type LocalStorageKeys = keyof LocalStorageModel;
export type LocalStorageArrayKeys = ArrayKeys<LocalStorageModel>;


