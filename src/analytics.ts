import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let isDestroyed: boolean = false;
  const listener = (): number => counter++;

  $(document).on('click', listener);
  return {
    destroy() {
      $(document).off('click', listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return 'Analytics is destroy';
      }
      return counter;
    }
  };
};

window['analytics'] = createAnalytics();