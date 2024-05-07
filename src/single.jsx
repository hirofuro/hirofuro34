import { createResource } from 'solid-js';
import { useParams } from "@solidjs/router";

// Vars
import { client } from './utility/vars';

export default function Single(){
    
    const params = useParams();
    
    const [newsSingle, { refetch }] = createResource( async () => {
        const response = await client.get({
            endpoint: 'news',
            contentId: params.id
        });
        return response;
    });
    
    return(
        <article>
            <h1>{newsSingle()?.title}</h1>
            <p innerHTML={newsSingle()?.body}></p>
        </article>
    )
    
}