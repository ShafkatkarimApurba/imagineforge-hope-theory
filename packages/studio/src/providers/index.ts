/**
 * Hope Theory ImagineForge — Provider Registry & Factory
 */
import type { IProvider, ProviderRegistryEntry } from './provider-interface';
import { ComfyUIAdapter, createComfyUIAdapter } from './comfyui-adapter';
import { FalAdapter, createFalAdapter } from './fal-adapter';
import { ReplicateAdapter, createReplicateAdapter } from './replicate-adapter';
import { CustomHttpAdapter, createCustomHttpAdapter } from './custom-http-adapter';

let activeProvider: IProvider | null = null;
const registry: Map<string, ProviderRegistryEntry> = new Map();

export function registerProvider(entry: ProviderRegistryEntry) {
  registry.set(entry.id, entry);
}
export function getProvider(id: string): IProvider | undefined {
  return registry.get(id)?.adapter;
}
export function getActiveProvider(): IProvider {
  if (!activeProvider) {
    const comfy = createComfyUIAdapter();
    registerProvider({ id: comfy.id, name: comfy.name, adapter: comfy, isDefault: true, category: 'local' });
    activeProvider = comfy;
  }
  return activeProvider;
}
export function switchProvider(id: string): IProvider {
  const entry = registry.get(id);
  if (!entry) throw new Error(`Provider "${id}" not registered`);
  activeProvider = entry.adapter;
  return activeProvider;
}
export function listProviders(): ProviderRegistryEntry[] {
  return Array.from(registry.values());
}
export function initializeProviders(config?: any) {
  const comfy = createComfyUIAdapter(config?.comfyui);
  registerProvider({ id: comfy.id, name: comfy.name, adapter: comfy, isDefault: true, category: 'local' });
  if (!activeProvider) activeProvider = comfy;
  return listProviders();
}
export type { IProvider, GenerationMode, GenerationParams, GenerationResult, ProviderCapabilities, ProgressUpdate } from './provider-interface';