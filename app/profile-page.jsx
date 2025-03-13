'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaCrown, FaStar, FaShieldAlt, FaInfoCircle, FaUserFriends } from 'react-icons/fa';

export default function ProfilePage() {
  const [balance, setBalance] = useState(21412);
  const [deposit, setDeposit] = useState(400000);
  
  return (
    <div className="container mx-auto px-4 pb-20 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Header Card */}
        <div className="rounded-2xl bg-indigo-50 p-5 mb-5">
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mr-3">
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center text-white">
                <FaCrown className="text-xl" />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="text-lg font-semibold text-background-800">Quiz Champion</h2>
                <div className="ml-2 bg-indigo-100 text-indigo-800 text-xs rounded-full px-2 py-0.5">
                  Verified
                </div>
              </div>
              <p className="text-sm text-background-500">Quiz enthusiast</p>
            </div>
          </div>
          
          {/* Balance Display */}
          <div className="bg-amber-100 rounded-lg p-3 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-background-700">Balance</span>
              <span className="font-semibold text-background-900">{balance.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-background-700">Quiz points</span>
              <span className="font-semibold text-background-900">{deposit.toLocaleString()}</span>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <button className="flex flex-col items-center">
              <div className="bg-amber-50 rounded-full p-3 mb-1">
                <FaStar className="text-amber-500" />
              </div>
              <span className="text-xs text-background-700">Stars</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-amber-50 rounded-full p-3 mb-1">
                <FaInfoCircle className="text-amber-500" />
              </div>
              <span className="text-xs text-background-700">About</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-amber-50 rounded-full p-3 mb-1">
                <FaUserFriends className="text-amber-500" />
              </div>
              <span className="text-xs text-background-700">Friends</span>
            </button>
          </div>
        </div>
        
        {/* Menu List */}
        <div className="rounded-2xl bg-white shadow-sm">
          <div className="divide-y divide-background-100">
            <MenuItem title="Quiz History" onClick={() => {}} />
            <MenuItem title="Rewards" onClick={() => {}} />
            <MenuItem title="Settings" onClick={() => {}} />
            <MenuItem title="Help Center" onClick={() => {}} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MenuItem({ title, onClick }) {
  return (
    <button 
      className="w-full flex items-center justify-between p-4 hover:bg-background-50"
      onClick={onClick}
    >
      <span className="text-background-800">{title}</span>
      <FaChevronRight className="text-background-400" />
    </button>
  );
}