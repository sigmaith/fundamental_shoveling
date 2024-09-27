import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { TypeScriptLexer } from './TypeScriptLexer';
import { TypeScriptParser } from './TypeScriptParser';

function parseTypeScript(input: string) {
    // 입력 문자열로부터 CharStream 생성
    const chars = CharStreams.fromString(input);

    // Lexer 생성
    const lexer = new TypeScriptLexer(chars);

    // CommonTokenStream 생성
    const tokens = new CommonTokenStream(lexer);

    // Parser 생성
    const parser = new TypeScriptParser(tokens);

    // 파싱 시작 (여기서는 프로그램의 시작점인 'program' 규칙을 사용)
    const tree = parser.program();

    console.log('파싱 완료:', tree.toStringTree(parser.ruleNames));
}

// 테스트
const testCode = `
type Storage = {
  todos: Todo[];
}

type Todo = {
  title: string;
  completed: boolean;
}
`;

parseTypeScript(testCode);