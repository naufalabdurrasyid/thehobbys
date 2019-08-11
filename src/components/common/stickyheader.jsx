const handleScroll = (props, state, setState, stickyDivRef) => {
  const { sides } = props;
  const stickyDiv = stickyDivRef.current || null;
  const scrollTarget = props.scrollTarget || window;

  if (!stickyDiv) {
    return;
  }

  let scrollRect = scrollTarget.getBoundingClientRect ? 
    scrollTarget.getBoundingClientRect() : 
    { // scrollTarget is the window
      height: scrollTarget.innerHeight,
      width: scrollTarget.innerWidth,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      x: scrollTarget.scrollX,
      y: scrollTarget.scrollY,
    };

  if (scrollTarget.getBoundingClientRect) { // scrollTarget is not the window
    scrollRect = scrollTarget.getBoundingClientRect();
  }

  const stickyRect = stickyDiv.getBoundingClientRect();

  if (typeof sides.bottom === 'number') {
    const stuckBottom = stickyRect.y + stickyRect.height > (scrollRect.height + scrollRect.top) - sides.bottom;
    setState({ stuckBottom });
  }

  if (typeof sides.top === 'number') {
    const stuckTop = stickyRect.y < scrollRect.top + sides.top;
    setState({ stuckTop });
  }

  if (typeof sides.left === 'number') {
    const stuckLeft = stickyRect.x < scrollRect.left + sides.left;
    setState({ stuckLeft });
  }

  if (typeof sides.right === 'number') {
    const stuckRight = stickyRect.x + stickyRect.width > (scrollRect.width + scrollRect.left) - sides.right;  
    setState({ stuckRight });
  }
}

export { handleScroll };
