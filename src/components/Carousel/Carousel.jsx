import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import cls from './Carousel.module.scss';

export const Carousel = ({children}) => {
  const [pages, setPages] = React.useState([]);
  const [offSet, setOffSet] = React.useState(0);

  const PAGE_WIDTH = 173;

  React.useEffect(() => {
    setPages(
      React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: '100%',
          },
        });
      })
    );
  }, []);

  const handleLeftArrowClick = () => {
    console.log('handleLeftArrowClick');
    // if (offSet === 0) setOffSet(-381);
    setOffSet((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;

      return Math.min(newOffset, 0); 
    });
  };

  const handleRightArrowClick = () => {
    console.log('handleRightArrowClick');
    // if (offSet === -381) setOffSet(0);
    setOffSet((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      return Math.max(newOffset, maxOffset); 
    });
  };

  return (
    <div className={cls.container}>
      <FaChevronLeft className={cls.arrowLeft} onClick={handleLeftArrowClick} />
      <div className={cls.window}>
        <div 
          className={cls.items}
          style={{
            transform: `translateX(${offSet}px)`
          }}
        >{children}</div>
      </div>
      <FaChevronRight className={cls.arrowRight} onClick={handleRightArrowClick} />
    </div>
  );
};