/**
 * ImagineForge by Hope Theory — Inpaint Models Extension
 */
export const inpaintModels = [
  { id: 'comfyui-inpaint', name: 'ComfyUI Inpaint (Local)', family: 'comfyui', hasPrompt: true, imageField: 'image_url', maskField: 'mask_url', inputs: { prompt: { type: 'string' }, denoise: { type: 'float', default: 0.85 } } },
  { id: 'flux-inpaint', name: 'Flux Inpaint (via ComfyUI)', family: 'flux', hasPrompt: true, imageField: 'image_url', maskField: 'mask_url', inputs: { prompt: { type: 'string' }, denoise: { type: 'float', default: 0.75 } } }
];
export function getInpaintModelById(id) { return inpaintModels.find(m => m.id === id) || inpaintModels[0]; }
export function getInpaintModels() { return inpaintModels; }
export function getProviderCapabilities(providerId) {
  const map = { 'comfyui': { supportsInpaint: true, supportsT2I: true, supportsI2I: true }, 'fal': { supportsInpaint: true }, 'replicate': { supportsInpaint: true } };
  return map[providerId] || { supportsInpaint: false };
}