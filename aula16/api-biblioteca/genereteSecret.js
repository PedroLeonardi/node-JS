import { Console } from 'console';
import crypto from 'crypto';

function genereteSecretKey() {
    return crypto.randomBytes(64).toString('hex');
}

const secretKey = genereteSecretKey();

console.log('Chave secreta Gerada: ', secretKey);