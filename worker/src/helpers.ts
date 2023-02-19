import { RouterResponse } from '@tsndr/cloudflare-worker-router';

export function setResponseFactory(res: RouterResponse) {
  return (message: string = 'Something went wrong', status: number = 500, additionalData = {}) => {
    res.status = status;
    res.body = {
      success: status <= 400,
      message,
      ...additionalData
    }
  }
}

export function appendIfNotHas(char: string, input: string): string {
  if (input[0] === char) return input;
  return `${char}${input}`;
}

export function isNot(field: boolean | undefined) {
  return [undefined, false].includes(field);
}
