import { Router } from '@tsndr/cloudflare-worker-router';
import { saveFormSubmission } from './methods/save-submission';

export const AUTHORIZATION_TOKEN = 'patLbokwxL7efCgUP.f8fe0947278f7b6bd24e4148df33fe6e1a0182891b31b2eca9f2f8a7dea10c1d';
export const BASE_ID = 'appRm0FNqGXY8zaNg';


const router = new Router();
router.cors();

router.post('/apply', saveFormSubmission);

export default {
  async fetch(request: Request, env) {
    return router.handle(env, request);
  }
}
