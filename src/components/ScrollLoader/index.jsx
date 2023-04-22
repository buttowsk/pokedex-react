import { useEffect, useState } from 'react';

const ScrollLoader = ({ onLoadMore }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;

      const scrolledTo = (scrollTop + clientHeight) / scrollHeight;

      if (scrolledTo >= 0.7) {
        setVisible(true);
        onLoadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onLoadMore]);

  return visible && <div className="scroll-loader">Loading more...</div>;
};

export default ScrollLoader;