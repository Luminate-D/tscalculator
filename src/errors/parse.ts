import { TokenType } from '../parser/tokentype';

export class ParseError extends Error {
    public readonly position: number;
    public readonly tokenType: TokenType;

    public constructor(type: TokenType, position: number) {
        super('Failed to parse near token ' + TokenType[type] + ` (pos ${position})`);
        this.position = position;
        this.tokenType = type;
    }
}