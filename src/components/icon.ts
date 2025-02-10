// src/components/icon.ts
import { defineComponent, h, watch } from 'vue';
import { useIcon } from '../composables';
import { iconsStore } from '../registry';
// (Optional) for debugging: import the virtual module mapping

export default defineComponent({
  name: 'CrstIcon',
  props: {
    name: String,
    color: String,
    size: String,
    ariaLabel: String,
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
              class: ['css-icon', computedColor.value],
              'aria-label': computedAriaLabel.value,
            }
          ),
        ]
      );
    };
  },
});
