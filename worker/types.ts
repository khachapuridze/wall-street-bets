export type FormSubmission = {
  email: string;
  ideal_price: string;
  service: Service;
  telegram_handle: string;
  twitter_handle: string;
}


export enum Service {
  HIDDEN_GEM = 'hidden_gem',
  MINI_VOICE_AMA_MEET_AND_GREET = 'mini_voice_ama_meet_and_greet',
  POST_ON_TOP_CRYPTO_SUB_REDDITS = 'post_on_top_crypto_sub_reddits',
  SHILLING_SERVICE = 'shilling_service',
  STANDARD_PINNED_POST = 'standard_pinned_post',
  SUPERSHILLER_SPECIAL = 'supershiller_special',
  TEXT_AMA = 'text_ama',
  VOICE_CHAT_AMA = 'voice_chat_ama'
}