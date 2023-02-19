import Airtable from 'airtable';
import { RouterRequest, RouterResponse } from '@tsndr/cloudflare-worker-router';
import { AUTHORIZATION_TOKEN, BASE_ID } from '..';
import { setResponseFactory } from '../helpers';
import { FormSubmission, Service } from '../types';

const services = Object.keys(Service);

export async function saveFormSubmission({ req, res }: { req: RouterRequest, res: RouterResponse }) {
  const setResponse = setResponseFactory(res);
  const requestBody = JSON.parse(req.body) as FormSubmission;
  const errors = validateData(requestBody);
  if (errors.length > 0) {
    setResponse('Data validation failed', 400, { errors });;
    return;
  }
  const base = new Airtable({ apiKey: AUTHORIZATION_TOKEN }).base(BASE_ID);
  const {
    email,
    ideal_price,
    service,
    telegram_handle,
    twitter_handle,
  } = requestBody;
  const record = {
    fields: {
      email,
      ideal_price,
      service,
      telegram_handle,
      twitter_handle,
    }
  };
  try {
    const response = await base('Form submissions').create([record]);
    if (response.length === 0) {
      throw new Error('No records updated');
    }
    setResponse('Form submitted successfully', 201);
    return;
  } catch (err) {
    setResponse('Something went wrong', 500);
    return;
  }
}


function validateData(requestBody: FormSubmission): string[] {
  const errors: string[] = [];
  services.forEach((key) => {
    if (requestBody[key] === undefined) {
      errors.push(`${key} is required`);
    }
  });
  if (!services.includes(requestBody.service)) {
    errors.push('Services type is invalid');
  }
  return errors;
}
