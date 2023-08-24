import {Injectable} from '@angular/core';
import {
  LocalStorageArrayKeys,
  LocalStorageKeys,
  LocalStorageModel,
} from "../models/local-storage.model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get<T extends LocalStorageKeys>(key: T): LocalStorageModel[T] | null {
    const saved = localStorage.getItem(key);
    if (!saved) return null;

    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  }

  set<T extends LocalStorageKeys>(key: T, value: LocalStorageModel[T]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  append<T extends LocalStorageArrayKeys>(key: T, ...values: LocalStorageModel[T]) {
    const saved = this.get<T>(key);
    if (!saved) {
      this.set<T>(key, values);
      return;
    }

    saved.push(...values);
    this.set<T>(key, saved);
  }
}
