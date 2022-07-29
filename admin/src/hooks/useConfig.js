import {useEffect, useState} from 'react';
import {request} from '@strapi/helper-plugin';
import pluginId from '../pluginId';


export default function useConfig() {
    const [config, setConfig] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchConfig = async () => {
        const config = await request(`/${pluginId}/config`, {method: 'GET'});
        setConfig(config);
        setLoading(false);
    };

    useEffect(() => {
        fetchConfig();
    }, []);

    return {config, loading};
}
