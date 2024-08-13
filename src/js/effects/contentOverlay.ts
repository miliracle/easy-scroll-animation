// src/js/effects/contentOverlay.ts

export function initContentOverlay() {
  const scrollWrappers = document.querySelectorAll<HTMLElement>('.scroll-wrapper');

  scrollWrappers.forEach((wrapper) => {
    const fixedContent = wrapper.querySelector('.fixed-content');
    const scrollingContent = wrapper.querySelector('.scrolling-content');

    if (fixedContent && scrollingContent) {
      const totalScrollHeight = scrollingContent.scrollHeight;
      const wrapperHeight = wrapper.offsetHeight;

      // Adjust the height of the scroll-wrapper to accommodate the scrolling content
      wrapper.style.height = `${totalScrollHeight + wrapperHeight}px`;

      window.addEventListener('scroll', () => {
        const wrapperRect = wrapper.getBoundingClientRect();

        // Check if the scroll-wrapper is in the viewport
        if (wrapperRect.top <= 0 && wrapperRect.bottom >= 0) {
          fixedContent.classList.add('in-view');
        } else {
          fixedContent.classList.remove('in-view');
        }
      });
    }
  });
}
