/** @type { import('@storybook/vue3-vite').Preview } */
import '../src/assets/tailwind.css'; 
import { setup } from '@storybook/vue3';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

// PrimeVue global registrieren
setup((app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark',
        cssLayer: {
          name: 'primevue',
          order: 'tailwind-base, primevue, tailwind-utilities'
        }
      }
    }
  });
});

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;