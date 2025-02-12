// src/use-icon.ts
import { shallowRef, computed, markRaw, watchEffect } from 'vue';
import { getIcon } from '../registry/iconsRegistry';
import { kebabCase } from '../utils';
const BASE_ICON_CLASS_PREFIX = 'css-icon--';

/**
 * Composable function for managing an icon component.
 * @param props - The props for the icon component.
 * @returns An object containing the icon component and computed properties.
 */
export function useIcon(props: {
  name: string;
  color?: string;
  size?: string;
  ariaLabel?: string;
  rotate?: number;
}) {
  // Use a writable shallowRef for the icon component.
  const icon = shallowRef(null);

  // Compute the icon name (e.g., "offer" becomes "offer-icon").
  const computedName = computed(() => {
    return `${kebabCase(props.name)}-icon`;
  });

  // add a list of standerd sizes: xs, sm, md, lg, xl
  const standardSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];


  // Use watchEffect to update the writable ref when the computed name changes.
  watchEffect(() => {
    const iconComponent = getIcon(computedName.value);
    icon.value = iconComponent ? markRaw(iconComponent) : null;
  });

  // Memoize computed properties to avoid unnecessary recomputations.
  const computedColor = computed(() => props.color || '');
  const computedSize = computed(() => {
    return standardSizes.includes(props.size) ? `${BASE_ICON_CLASS_PREFIX}${props.size}` : props.size;
  });
  const computedRotate = computed(() => (props.rotate ? `transform: rotate(${props.rotate}deg)` : ''));
  const computedAriaLabel = computed(() => props.ariaLabel ?? props.name);

  return {
    icon, // Writable shallowRef that will update via watchEffect.
    computedName,
    computedSize,
    computedColor,
    computedRotate,
    computedAriaLabel,
  };
}
