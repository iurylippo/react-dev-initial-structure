// import React from 'react';
import { toast } from 'react-toastify';
import { NotificationTypes } from './notificationEnums';

export type Props = {
    message: string;
    type: string;
};

const frontendNotification = ({ message, type }: Props) => {
    if (type === NotificationTypes.SUCCESS) {
        toast.success(message);
    } else if (type === NotificationTypes.WARNING) {
        toast.warning(message);
    } else if (type === NotificationTypes.ERROR) {
        toast.error(message);
    } else if (type === NotificationTypes.INFO) {
        toast.info(message);
    }
};

export default frontendNotification;
