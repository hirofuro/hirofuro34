import { createResource } from "solid-js";

// Vars
import { client } from './vars';

export const [newsData, { refetch }] = createResource( async () => {
    const response = await client.get({
        endpoint: 'news'
    });
    return response;
});

