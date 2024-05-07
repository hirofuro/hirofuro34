import { A } from "@solidjs/router";

// Resource
import { newsData } from './utility/resource';

export default function NewsList(){
    return(
        <ul>
            {
                newsData()?.contents?.map((item, index) => {
                    return(
                        <li key={index}>
                            <A href={`/${item.id}`}>
                                <h1>{item.title}</h1>
                                <p innerHTML={item?.body}></p>
                            </A>
                        </li>
                    )
                })
            }
        </ul>
    )
}