'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaQuestion, FaUser } from 'react-icons/fa';

export default function BottomNavbar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: <FaHome className="text-xl" />,
    },
    {
      label: 'Quiz',
      href: '/quiz',
      icon: <FaQuestion className="text-xl" />,
    },
    {
      label: 'Profile',
      href: '/profile',
      icon: <FaUser className="text-xl" />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-background-200 bg-white">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link href={item.href} key={item.href} className="relative flex flex-1 flex-col items-center">
              <div className="flex h-full w-full flex-col items-center justify-center pt-1">
                <div className="mb-1 flex items-center justify-center">
                  <div className={`${isActive ? 'text-indigo-600' : 'text-background-500'}`}>
                    {item.icon}
                  </div>
                </div>
                <span className={`text-xs ${isActive ? 'font-medium text-indigo-600' : 'text-background-500'}`}>
                  {item.label}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-indigo-600"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}