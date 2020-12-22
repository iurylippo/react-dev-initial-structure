import React from 'react';
import styles from './styles.module.scss';

type Props = { loading?: boolean };

const Loading = ({ loading = false }: Props) => {
    if (loading) {
        return <div className={styles.box_loading} />;
    }
    return null;
};

export default Loading;
