"use client";

import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastNotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const ToastNotification = ({ message, isVisible, onClose, duration = 3000 }: ToastNotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className="bg-dark text-white px-4 py-3 rounded-md shadow-lg flex items-center space-x-2">
        <CheckCircle size={18} className="text-accent" />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ToastNotification; 