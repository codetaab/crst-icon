// src/iconsRegistry.ts
import { reactive, markRaw } from 'vue';
import { kebabCase } from '../utils';

export const iconsStore = reactive({
  iconsRegistry: {} as Record<string, any>,
  isReady: false,
});


/**
 * Registers icons from a glob import.
 * @param iconFiles - An object where keys are paths and values are import functions.
 */
export async function registerIcons(iconFiles: Record<string, () => Promise<any>>) {
  const icons: Record<string, any> = {};

  await Promise.all(
    Object.entries(iconFiles).map(async ([path, importFn]) => {
      const module = await importFn();
      let baseName = path.split('/').pop()?.replace('.vue', '') || '';
      baseName = baseName.replace(/icon$/i, '');
      const iconName = kebabCase(baseName) + '-icon';
      icons[iconName] = markRaw(module.default);
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Registered icon: ${iconName}`); // Debug: Log each registered icon
      }
    })
  );

  Object.assign(iconsStore.iconsRegistry, icons);
  iconsStore.isReady = true; // Set the ready state to true
  if (process.env.NODE_ENV !== 'production') {
    console.log('Registry now contains:', iconsStore.iconsRegistry); // Debug: Log the registry contents
  }
}

/**
 * Returns the icon component by name.
 * @param name - The key for the icon (e.g., "home-icon").
 */
export function getIcon(name: string): any {
  return iconsStore.iconsRegistry[name];
}

/**
 * Returns all registered icon keys.
 */
export function getRegisteredIconNames(): string[] {
  return Object.keys(iconsStore.iconsRegistry);
}

