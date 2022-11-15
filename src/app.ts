import { Lexer } from './parser/lexer';
import { Parser } from './parser/parser';
import { Functions } from './static/functions';
import { Constants } from './static/constants';

(async () => {
    console.log('[+] Total functions:', Functions.getExisting().length);
    console.log('[+] Total constants:', Constants.getExisting().length);

    const data = '10!! % 28';
    console.log('[!] Running expression: "' + data + '"');

    const tokens = new Lexer(data).tokenize();
    const ast = new Parser(tokens).parse();

    console.log('[!] Result:', ast.eval());
})();