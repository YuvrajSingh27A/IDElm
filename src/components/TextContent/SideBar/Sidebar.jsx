import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineCheck, AiFillCheckCircle } from 'react-icons/ai';

const Sidebar = ({ items, language }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [completedItems, setCompletedItems] = useState([]);

  const handleClick = (index) => {
    setActiveItem(index);
    if (!completedItems.includes(index)) {
      setCompletedItems([...completedItems, index]);
    }
  };

  return (
    <div className="fixed top-12 left-0 overflow-y-scroll overflow-x-hidden max-h-[calc(100vh-3rem)]">
      <ul className="scrollbar-thin scrollbar-thumb-orange scrollbar-track-orange-400">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={`/Learner/${language}/${item.replace(/\s+/g, '-')}`}>
              <div className="flex items-center">
                <p
                  onClick={() => handleClick(index)}
                  className={`${
                    activeItem === index
                      ? 'bg-orange-500 '
                      : 'bg-black text-white hover:bg-orange-500  '
                  }  py-2 px-3 border w-full flex justify-between items-center transition duration-300 ease-in-out cursor-pointer relative z-10`}
                >
                  <span>{item}</span>
                  {completedItems.includes(index) ? (
                    <AiFillCheckCircle className="text-green-500 ml-2" />
                  ) : (
                    <AiOutlineCheck className="text-gray-400 ml-2" />
                  )}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
