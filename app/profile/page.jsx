'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaUserCircle, FaRegCreditCard, FaHistory, FaShieldAlt, FaBullhorn, FaUserFriends } from 'react-icons/fa';
import { MdOutlineAccountBalance, MdEmail } from 'react-icons/md';
import { BiSolidDashboard, BiSolidUserCircle, BiTransfer } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';
import { IoDocumentText } from 'react-icons/io5';
import Image from 'next/image';

export default function ProfilePage() {
  const [balance, setBalance] = useState(21412);
  const [deposit, setDeposit] = useState(400000);
  const user = localStorage.getItem('quizUser');

  console.log(user)
  
  return (
    <div className="bg-gray-50 min-h-screen pb-20 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Header Card */}
        <div className="bg-indigo-50 p-5">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center mr-3">
              <div className="text-white">
                <FaUserCircle size={24} />
              </div>
            </div>
            <div>
              <h2 className="text-base font-medium">Possible Antarctica</h2>
              <p className="text-xs text-gray-500">ID647 • Verification code</p>
            </div>
          </div>
          
          {/* Balance Card */}
          <div className="bg-amber-50 rounded-lg p-3 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-700">Balance</span>
              <span className="font-semibold">{balance.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Deposit</span>
              <span className="font-semibold">{deposit.toLocaleString()}</span>
            </div>
          </div>
          
          {/* Action Grid */}
          <div className="grid grid-cols-3 gap-4">
            <ActionButton icon={<BiTransfer size={20} />} label="Recharge" />
            <ActionButton icon={<FaRegCreditCard size={20} />} label="Withdrawal" />
            <ActionButton icon={<IoDocumentText size={20} />} label="Records" />
            <ActionButton icon={<FaHistory size={20} />} label="Activity" />
            <ActionButton icon={<FaBullhorn size={20} />} label="Introduction" />
            <ActionButton icon={<FaUserFriends size={20} />} label="Invite friends" />
          </div>
        </div>
        
        {/* Menu List */}
        <div className="mt-4 bg-white">
          <MenuItem title="Safety center" onClick={() => {}} />
          <MenuItem title="Receivables account management" onClick={() => {}} />
        </div>
      </motion.div>
    </div>
  );
}

function ActionButton({ icon, label }) {
  return (
    <button className="flex flex-col items-center py-2">
      <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center text-amber-500 mb-1">
        {icon}
      </div>
      <span className="text-xs text-gray-700">{label}</span>
    </button>
  );
}

function MenuItem({ title, onClick }) {
  return (
    <button 
      className="w-full flex items-center justify-between p-4 border-b border-gray-100"
      onClick={onClick}
    >
      <span className="text-gray-800">{title}</span>
      <FaChevronRight className="text-gray-400" />
    </button>
  );
}