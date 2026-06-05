/**
 * Hope Theory ImagineForge — Provider Abstraction Layer
 */

export type GenerationMode = 't2i' | 'i2i' | 'inpaint' | 't2v' | 'i2v';

export interface GenerationParams {
  prompt: string;
  negativePrompt?: string;
  image?: string;
  mask?: string;
  strength?: number;
  width?: number;
  height?: number;
  aspectRatio?: string;
  numImages?: number;
  seed?: number;
  steps?: number;
  cfgScale?: number;
  sampler?: string;
  scheduler?: string;
  duration?: number;
  fps?: number;
  workflowOverride?: Record<string, any>;
  model?: string;
  extra?: Record<string, any>;
}

export interface ProviderCapabilities {
  supportsT2I: boolean;
  supportsI2I: boolean;
  supportsInpaint: boolean;
  supportsT2V: boolean;
  supportsI2V: boolean;
  maxImagesPerBatch: number;
  recommendedResolution: { width: number; height: number };
  supportsWebSocketProgress: boolean;
  requiresLocalSetup?: boolean;
  notes?: string;
}

export interface GenerationResult {
  success: boolean;
  images?: string[];
  videos?: string[];
  promptId?: string;
  error?: string;
  metadata?: Record<string, any>;
}
export interface ProgressUpdate {
  progress: number;
  message: string;
  stage?: string;
}
export interface IProvider {
  readonly id: string;
  readonly name: string;
  readonly supportedModes: GenerationMode[];
  getCapabilities(): ProviderCapabilities;
  testConnection(): Promise<{ success: boolean; message: string; latencyMs?: number; details?: any }>;
  generate(mode: GenerationMode, params: GenerationParams, onProgress?: (update: ProgressUpdate) => void): Promise<GenerationResult>;
  uploadImage?(base64: string, filename?: string): Promise<{ filename: string; subfolder?: string }>;
  getConfig(): Record<string, any>;
}
export interface ProviderRegistryEntry {
  id: string;
  name: string;
  adapter: IProvider;
  isDefault?: boolean;
  category: 'local' | 'cloud';
}