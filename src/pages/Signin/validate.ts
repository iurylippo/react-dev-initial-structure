// import React from 'react';
import i18n from '../../i18n';
import frontendNotification, { Props } from '../../components/Notification';
import { NotificationTypes } from '../../components/Notification/notificationEnums';
import { isValidEmail, isValidPassword } from '../../utils/validations';

type SigninProps = {
    email: string;
    password: string;
};

const signinValidade = ({ email, password }: SigninProps) => {
    // const { t } = useTranslation();
    let notify: Props;

    if (!email) {
        notify = {
            message: i18n.t('signin.fields.validations.emailRequired'),
            type: NotificationTypes.WARNING,
        };
        frontendNotification(notify);
        return false;
    }

    if (!isValidEmail(email)) {
        notify = {
            message: i18n.t('signin.fields.validations.invalidEmail'),
            type: NotificationTypes.WARNING,
        };
        frontendNotification(notify);
        return false;
    }

    if (!password) {
        notify = {
            message: i18n.t('signin.fields.validations.passwordRequired'),
            type: NotificationTypes.WARNING,
        };
        frontendNotification(notify);
        return false;
    }

    if (!isValidPassword(password)) {
        notify = {
            message: i18n.t('signin.fields.validations.passwordInvalidLength'),
            type: NotificationTypes.WARNING,
        };
        frontendNotification(notify);
        return false;
    }

    return true;
};

export default signinValidade;
