import { InjectionToken } from "@angular/core";

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export const SERVICE_TASKS = '/todos'