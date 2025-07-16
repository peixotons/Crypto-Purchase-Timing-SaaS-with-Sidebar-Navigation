import React, { useEffect, useState } from 'react';
import { X, AlertCircle, CheckCircle, Bell, Info } from 'lucide-react';
export type NotificationType = 'success' | 'error' | 'warning' | 'info';
export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  title?: string;
  duration?: number;
}
interface NotificationItemProps {
  notification: Notification;
  onClose: (id: string) => void;
}
const NotificationItem = ({
  notification,
  onClose
}: NotificationItemProps) => {
  const {
    id,
    type,
    message,
    title
  } = notification;
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, notification.duration || 5000);
    return () => clearTimeout(timer);
  }, [id, onClose, notification.duration]);
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Bell className="w-5 h-5 text-purple-500" />;
    }
  };
  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-900/30 border-green-700';
      case 'error':
        return 'bg-red-900/30 border-red-700';
      case 'warning':
        return 'bg-yellow-900/30 border-yellow-700';
      case 'info':
        return 'bg-blue-900/30 border-blue-700';
      default:
        return 'bg-purple-900/30 border-purple-700';
    }
  };
  return <div className={`${getBgColor()} border rounded-lg p-4 shadow-lg mb-3 animate-slide-in-right max-w-md w-full`}>
      <div className="flex">
        <div className="flex-shrink-0 mr-3">{getIcon()}</div>
        <div className="flex-1">
          {title && <h4 className="text-white font-medium mb-1">{title}</h4>}
          <p className="text-gray-300 text-sm">{message}</p>
        </div>
        <button onClick={() => onClose(id)} className="flex-shrink-0 ml-2 text-gray-400 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>;
};
interface NotificationSystemProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}
const NotificationSystem = ({
  position = 'top-right'
}: NotificationSystemProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  // Position classes
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };
  // Add a new notification
  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setNotifications(prev => [...prev, {
      ...notification,
      id
    }]);
    return id;
  };
  // Remove a notification
  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };
  // Expose methods to the window for demo purposes
  // In a real app, you would use a context or a state management library
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ;
      (window as any).notifications = {
        success: (message: string, title?: string) => addNotification({
          type: 'success',
          message,
          title
        }),
        error: (message: string, title?: string) => addNotification({
          type: 'error',
          message,
          title
        }),
        warning: (message: string, title?: string) => addNotification({
          type: 'warning',
          message,
          title
        }),
        info: (message: string, title?: string) => addNotification({
          type: 'info',
          message,
          title
        })
      };
    }
    return () => {
      if (typeof window !== 'undefined') {
        delete (window as any).notifications;
      }
    };
  }, []);
  if (notifications.length === 0) return null;
  return <div className={`fixed ${positionClasses[position]} z-50`}>
      {notifications.map(notification => <NotificationItem key={notification.id} notification={notification} onClose={removeNotification} />)}
    </div>;
};
export default NotificationSystem;