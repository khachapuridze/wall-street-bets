import Airtable from 'airtable';
import { RouterRequest, RouterResponse } from '@tsndr/cloudflare-worker-router';
import { AUTHORIZATION_TOKEN, BASE_ID } from '..';
import { setResponseFactory } from '../helpers';
import { FormSubmission, Service } from '../types';

const services = Object.values(Service);

export async function saveFormSubmission({ req, res }: { req: RouterRequest, res: RouterResponse }) {
  const setResponse = setResponseFactory(res);
  const requestBody = req.body;
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
  ['email', 'ideal_price', 'service', 'telegram_handle', 'twitter_handle'].forEach((key) => {
    if (requestBody[key] === undefined) {
      errors.push(`${key} is required`);
    }
  });
  if (!services.includes(requestBody.service)) {
    errors.push(`Services type [${requestBody.service}] is invalid`);
  }
  return errors;
}


async function parseRequestBody(request: RouterRequest) {
  const contentType = request.headers.get('content-type')!;
  if (contentType.includes('application/json')) {
    return request.json();
  } else if (contentType.includes('application/text') || contentType.includes('text/html')) {
    throw new Error('Text type is not supported');
  } else if (contentType.includes('form')) {
    const formData = await request.formData();
    const body = {};
    for (const [key, value] of formData.entries()) {
      body[key] = value;
    }
    return body;
  } else {
    throw new Error('Unable to parse request body');
  }
}