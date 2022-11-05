import React from 'react';

import styles from './Scrollable.module.scss';

export const Scrollable = (props) => {
  let ref = React.useRef();

  React.useEffect(() => {
    const el = ref.current;
    if(el) {
      const onWheel = (e) => {
        e.prventDefault();
        React.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: 'smoot'
        });
      };

      el.addEventListener('wheel', onWheel);

      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  
  return (
    <div 
      className={styles.category__navigation}
      ref={ref}    
    >
      {
        React.Children.map(props.children, child => React.Children.only(child))
      }
    </div>
  );
};
