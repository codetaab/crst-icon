// src/components/icon.ts
import { defineComponent, h, watch } from 'vue';
import { useIcon } from '../composables';
import { iconsStore } from '../registry';
// (Optional) for debugging: import the virtual module mapping


type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '10xl'
type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'focus'
type ariaLabel = string | undefined

export default defineComponent({
  name: 'CrstIcon',
  props: {
    name: String,
    color: {
      type: String as PropType<IconColor>,
      default: 'primary',
    },
    size: {
      type: String as PropType<IconSize>,
      default: 'md',
    },
    ariaLabel: {
      type: String as PropType<ariaLabel>,
      default: undefined,
    },
    rotate: Number,
  },
  setup(props) {
    const {
      icon, // ref returning the Vue component for the icon
      computedName,
      computedColor,
      computedSize,
      computedRotate,
      computedAriaLabel,
    } = useIcon(props);

    // Watch for changes in the iconsStore to update the icon when ready
    watch(
      () => iconsStore.isReady,
      (isReady) => {
        if (isReady) {
          icon.value = iconsStore.iconsRegistry[computedName.value];
        }
      },
      { immediate: true }
    );

    return () => {
      if (!icon.value) {
        // Show the "Loading..." state while the icon component is undefined.
        return h('span', { class: ['css-icon', 'loading'] }, 'Loading...');
      }
      // Render the icon component once it is defined.
      return h(
        'span',
        { class: ['css-icon', computedSize.value], style: computedRotate.value },
        [
          h(
            icon.value,
            {
              class: ['css-svg', computedColor.value],
              'aria-label': computedAriaLabel.value,
            }
          ),
        ]
      );
    };
  },
});
