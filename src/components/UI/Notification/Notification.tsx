import { FC } from "react";
import s from './Notification.module.scss'

interface INotificationProps {
    message: string
}

const Notification: FC<INotificationProps> = ({
  message,
}) => {
  return (
    <div className={s.notification}>
      <span>{message}</span>
    </div>
  );
};

export {Notification}
