// Importando bibliotecas
import { Connection, PublicKey } from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import { Provider, Program, web3 } from '@staratlas/anchor';
import * as dataSource from '@staratlas/data-source';

// Função principal
async function main() {
    // Código de exemplo para usar as bibliotecas importadas
    const connection = new Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed');
    const NFT_ADDRESS = new PublicKey("ironxrUhTEaBiR9Pgp6hy4qWx6V2FirDoXhsFP25GFP");

    console.log('Conexão estabelecida:', connection);
    console.log('Endereço NFT:', NFT_ADDRESS);
}

// Exportar função principal
export { main };
