import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'YOUR-DOMAIN', //microCMSで登録したドメインに書き換えてください。
    apiKey: 'YOUR-API-KE】', //microCMSに表示されるAPIキーに書き換えてください。
});