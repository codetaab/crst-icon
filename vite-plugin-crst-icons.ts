// vite-plugin-crst-icons.ts
import path from 'path';
import fs from 'fs/promises';
import type { Plugin } from 'vite';

export interface CrstIconsPluginOptions {
  /** Folders to scan (default: ['src/icons']) */
  iconsFolders?: string[];
  /** Virtual module ID (default: 'virtual:crst-icons') */
  virtualModuleId?: string;
}

/**
 * Converts a string from PascalCase or camelCase to kebab-case.
 * For example, "Home" or "HomeIcon" becomes "home".
 */
function kebabCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

export default function CrstIconsPlugin(
  options: CrstIconsPluginOptions = {}
): Plugin {
  const {
    iconsFolders = ['src/icons'], // default to user-defined icons
    virtualModuleId = 'virtual:crst-icons',
  } = options;
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  let iconsMapping: Record<string, string> = {};

  return {
    name: 'vite-plugin-crst-icons',

    async buildStart() {
      for (const folder of iconsFolders) {
        try {
          const folderPath = path.resolve(process.cwd(), folder);
          console.log(`[CrstIconsPlugin] Looking for icons in: ${folderPath}`);
          const files = await fs.readdir(folderPath);
          files
            .filter((file) => file.endsWith('.vue'))
            .forEach((file) => {
              let baseName = file.replace(/\.vue$/, '');
              baseName = baseName.replace(/icon$/i, '');
              const iconName = kebabCase(baseName) + '-icon';
              const fullPath = path.join(folderPath, file).split(path.sep).join('/');
              iconsMapping[iconName] = fullPath;
            });
        } catch (error) {
          console.warn(`[CrstIconsPlugin] Icons folder "${folder}" not found.`);
        }
      }
      this.warn(`[CrstIconsPlugin] Loaded icons: ${Object.keys(iconsMapping).join(', ')}`);
    },

    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      return null;
    },

    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        let code = 'export default {';
        for (const [iconName, filePath] of Object.entries(iconsMapping)) {
          code += `\n  "${iconName}": () => import("${filePath}"),`;
        }
        code += '\n};';
        return code;
      }
      return null;
    },
  };
}
