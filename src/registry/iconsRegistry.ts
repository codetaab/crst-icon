// src/iconsRegistry.ts
import { reactive, markRaw } from 'vue';
import { kebabCase } from '../utils';

export const iconsStore = reactive({
  iconsRegistry: {} as Record<string, any>,
  isReady: false,
});

// Load default icons using the @icons alias
const defaultIconFiles = import.meta.glob('@icons/*.vue');

/**
 * Registers icons from a glob import.
 * @param iconFiles - An object where keys are paths and values are import functions.
 */
export async function registerIcons(iconFiles: Record<string, () => Promise<any>>, source: string = 'user') {
  const icons: Record<string, any> = {};
  await Promise.all(
    Object.entries(iconFiles).map(async ([path, importFn]) => {
      const module = await importFn();
      let baseName = path.split('/').pop()?.replace('.vue', '') || '';
      baseName = baseName.replace(/icon$/i, '');
      const iconName = kebabCase(baseName) + '-icon';

      if (iconsStore.iconsRegistry[iconName]) {
        console.warn(`Duplicate icon name detected: ${iconName} from ${source} source`);
      } else {
        icons[iconName] = markRaw(module.default);
        if (process.env.NODE_ENV !== 'production') {
          console.log(`Registered icon: ${iconName} from ${source} source`);
        }
      }
    })
  );

  Object.assign(iconsStore.iconsRegistry, icons);
  iconsStore.isReady = true;

  if (process.env.NODE_ENV !== 'production') {
    console.log('Registry now contains:', Object.keys(iconsStore.iconsRegistry));
  }
}

// Initialize default icons
registerIcons(defaultIconFiles, 'default');

export function getIcon(name: string): any {
  return iconsStore.iconsRegistry[name];
}

export function getRegisteredIconNames(): string[] {
  return Object.keys(iconsStore.iconsRegistry);
}
