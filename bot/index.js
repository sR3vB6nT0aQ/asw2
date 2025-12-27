// bot/index.js  (ESM)
export {
  sendButtons,
  sendInteractiveMessage,
  sendImageWithInteractive,
  getButtonType,
  getButtonArgs,
  InteractiveValidationError,
  validateAuthoringButtons,
  validateInteractiveMessageContent,
  validateSendButtonsPayload,
  validateSendInteractiveMessagePayload
} from './buttons.js';   // ← esto funciona porque Node permite
                         //   re-exportar desde CJS si el nombre coincide