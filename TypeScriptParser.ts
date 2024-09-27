// Generated from TypeScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TypeScriptParserListener } from "./TypeScriptParserListener";

export class TypeScriptParser extends TypeScriptParserBase {
	public static readonly MultiLineComment = 1;
	public static readonly SingleLineComment = 2;
	public static readonly RegularExpressionLiteral = 3;
	public static readonly OpenBracket = 4;
	public static readonly CloseBracket = 5;
	public static readonly OpenParen = 6;
	public static readonly CloseParen = 7;
	public static readonly OpenBrace = 8;
	public static readonly TemplateCloseBrace = 9;
	public static readonly CloseBrace = 10;
	public static readonly SemiColon = 11;
	public static readonly Comma = 12;
	public static readonly Assign = 13;
	public static readonly QuestionMark = 14;
	public static readonly QuestionMarkDot = 15;
	public static readonly Colon = 16;
	public static readonly Ellipsis = 17;
	public static readonly Dot = 18;
	public static readonly PlusPlus = 19;
	public static readonly MinusMinus = 20;
	public static readonly Plus = 21;
	public static readonly Minus = 22;
	public static readonly BitNot = 23;
	public static readonly Not = 24;
	public static readonly Multiply = 25;
	public static readonly Divide = 26;
	public static readonly Modulus = 27;
	public static readonly Power = 28;
	public static readonly NullCoalesce = 29;
	public static readonly Hashtag = 30;
	public static readonly LeftShiftArithmetic = 31;
	public static readonly LessThan = 32;
	public static readonly MoreThan = 33;
	public static readonly LessThanEquals = 34;
	public static readonly GreaterThanEquals = 35;
	public static readonly Equals_ = 36;
	public static readonly NotEquals = 37;
	public static readonly IdentityEquals = 38;
	public static readonly IdentityNotEquals = 39;
	public static readonly BitAnd = 40;
	public static readonly BitXOr = 41;
	public static readonly BitOr = 42;
	public static readonly And = 43;
	public static readonly Or = 44;
	public static readonly MultiplyAssign = 45;
	public static readonly DivideAssign = 46;
	public static readonly ModulusAssign = 47;
	public static readonly PlusAssign = 48;
	public static readonly MinusAssign = 49;
	public static readonly LeftShiftArithmeticAssign = 50;
	public static readonly RightShiftArithmeticAssign = 51;
	public static readonly RightShiftLogicalAssign = 52;
	public static readonly BitAndAssign = 53;
	public static readonly BitXorAssign = 54;
	public static readonly BitOrAssign = 55;
	public static readonly PowerAssign = 56;
	public static readonly NullishCoalescingAssign = 57;
	public static readonly ARROW = 58;
	public static readonly NullLiteral = 59;
	public static readonly BooleanLiteral = 60;
	public static readonly DecimalLiteral = 61;
	public static readonly HexIntegerLiteral = 62;
	public static readonly OctalIntegerLiteral = 63;
	public static readonly OctalIntegerLiteral2 = 64;
	public static readonly BinaryIntegerLiteral = 65;
	public static readonly BigHexIntegerLiteral = 66;
	public static readonly BigOctalIntegerLiteral = 67;
	public static readonly BigBinaryIntegerLiteral = 68;
	public static readonly BigDecimalIntegerLiteral = 69;
	public static readonly Break = 70;
	public static readonly Do = 71;
	public static readonly Instanceof = 72;
	public static readonly Typeof = 73;
	public static readonly Case = 74;
	public static readonly Else = 75;
	public static readonly New = 76;
	public static readonly Var = 77;
	public static readonly Catch = 78;
	public static readonly Finally = 79;
	public static readonly Return = 80;
	public static readonly Void = 81;
	public static readonly Continue = 82;
	public static readonly For = 83;
	public static readonly Switch = 84;
	public static readonly While = 85;
	public static readonly Debugger = 86;
	public static readonly Function_ = 87;
	public static readonly This = 88;
	public static readonly With = 89;
	public static readonly Default = 90;
	public static readonly If = 91;
	public static readonly Throw = 92;
	public static readonly Delete = 93;
	public static readonly In = 94;
	public static readonly Try = 95;
	public static readonly As = 96;
	public static readonly From = 97;
	public static readonly ReadOnly = 98;
	public static readonly Async = 99;
	public static readonly Await = 100;
	public static readonly Yield = 101;
	public static readonly YieldStar = 102;
	public static readonly Class = 103;
	public static readonly Enum = 104;
	public static readonly Extends = 105;
	public static readonly Super = 106;
	public static readonly Const = 107;
	public static readonly Export = 108;
	public static readonly Import = 109;
	public static readonly Implements = 110;
	public static readonly Let = 111;
	public static readonly Private = 112;
	public static readonly Public = 113;
	public static readonly Interface = 114;
	public static readonly Package = 115;
	public static readonly Protected = 116;
	public static readonly Static = 117;
	public static readonly Any = 118;
	public static readonly Number = 119;
	public static readonly Never = 120;
	public static readonly Boolean = 121;
	public static readonly String = 122;
	public static readonly Unique = 123;
	public static readonly Symbol = 124;
	public static readonly Undefined = 125;
	public static readonly Object = 126;
	public static readonly Of = 127;
	public static readonly KeyOf = 128;
	public static readonly TypeAlias = 129;
	public static readonly Constructor = 130;
	public static readonly Namespace = 131;
	public static readonly Require = 132;
	public static readonly Module = 133;
	public static readonly Declare = 134;
	public static readonly Abstract = 135;
	public static readonly Is = 136;
	public static readonly At = 137;
	public static readonly Identifier = 138;
	public static readonly StringLiteral = 139;
	public static readonly BackTick = 140;
	public static readonly WhiteSpaces = 141;
	public static readonly LineTerminator = 142;
	public static readonly HtmlComment = 143;
	public static readonly CDataComment = 144;
	public static readonly UnexpectedCharacter = 145;
	public static readonly TemplateStringEscapeAtom = 146;
	public static readonly TemplateStringStartExpression = 147;
	public static readonly TemplateStringAtom = 148;
	public static readonly RULE_initializer = 0;
	public static readonly RULE_bindingPattern = 1;
	public static readonly RULE_typeParameters = 2;
	public static readonly RULE_typeParameterList = 3;
	public static readonly RULE_typeParameter = 4;
	public static readonly RULE_constraint = 5;
	public static readonly RULE_typeArguments = 6;
	public static readonly RULE_typeArgumentList = 7;
	public static readonly RULE_typeArgument = 8;
	public static readonly RULE_type_ = 9;
	public static readonly RULE_unionOrIntersectionOrPrimaryType = 10;
	public static readonly RULE_primaryType = 11;
	public static readonly RULE_predefinedType = 12;
	public static readonly RULE_typeReference = 13;
	public static readonly RULE_typeGeneric = 14;
	public static readonly RULE_typeName = 15;
	public static readonly RULE_objectType = 16;
	public static readonly RULE_typeBody = 17;
	public static readonly RULE_typeMemberList = 18;
	public static readonly RULE_typeMember = 19;
	public static readonly RULE_arrayType = 20;
	public static readonly RULE_tupleType = 21;
	public static readonly RULE_tupleElementTypes = 22;
	public static readonly RULE_functionType = 23;
	public static readonly RULE_constructorType = 24;
	public static readonly RULE_typeQuery = 25;
	public static readonly RULE_typeQueryExpression = 26;
	public static readonly RULE_propertySignatur = 27;
	public static readonly RULE_typeAnnotation = 28;
	public static readonly RULE_callSignature = 29;
	public static readonly RULE_parameterList = 30;
	public static readonly RULE_requiredParameterList = 31;
	public static readonly RULE_parameter = 32;
	public static readonly RULE_optionalParameter = 33;
	public static readonly RULE_restParameter = 34;
	public static readonly RULE_requiredParameter = 35;
	public static readonly RULE_accessibilityModifier = 36;
	public static readonly RULE_identifierOrPattern = 37;
	public static readonly RULE_constructSignature = 38;
	public static readonly RULE_indexSignature = 39;
	public static readonly RULE_methodSignature = 40;
	public static readonly RULE_typeAliasDeclaration = 41;
	public static readonly RULE_constructorDeclaration = 42;
	public static readonly RULE_interfaceDeclaration = 43;
	public static readonly RULE_interfaceExtendsClause = 44;
	public static readonly RULE_classOrInterfaceTypeList = 45;
	public static readonly RULE_enumDeclaration = 46;
	public static readonly RULE_enumBody = 47;
	public static readonly RULE_enumMemberList = 48;
	public static readonly RULE_enumMember = 49;
	public static readonly RULE_namespaceDeclaration = 50;
	public static readonly RULE_namespaceName = 51;
	public static readonly RULE_importAliasDeclaration = 52;
	public static readonly RULE_decoratorList = 53;
	public static readonly RULE_decorator = 54;
	public static readonly RULE_decoratorMemberExpression = 55;
	public static readonly RULE_decoratorCallExpression = 56;
	public static readonly RULE_program = 57;
	public static readonly RULE_sourceElement = 58;
	public static readonly RULE_statement = 59;
	public static readonly RULE_block = 60;
	public static readonly RULE_statementList = 61;
	public static readonly RULE_abstractDeclaration = 62;
	public static readonly RULE_importStatement = 63;
	public static readonly RULE_importFromBlock = 64;
	public static readonly RULE_importModuleItems = 65;
	public static readonly RULE_importAliasName = 66;
	public static readonly RULE_moduleExportName = 67;
	public static readonly RULE_importedBinding = 68;
	public static readonly RULE_importDefault = 69;
	public static readonly RULE_importNamespace = 70;
	public static readonly RULE_importFrom = 71;
	public static readonly RULE_aliasName = 72;
	public static readonly RULE_exportStatement = 73;
	public static readonly RULE_exportFromBlock = 74;
	public static readonly RULE_exportModuleItems = 75;
	public static readonly RULE_exportAliasName = 76;
	public static readonly RULE_declaration = 77;
	public static readonly RULE_variableStatement = 78;
	public static readonly RULE_variableDeclarationList = 79;
	public static readonly RULE_variableDeclaration = 80;
	public static readonly RULE_emptyStatement_ = 81;
	public static readonly RULE_expressionStatement = 82;
	public static readonly RULE_ifStatement = 83;
	public static readonly RULE_iterationStatement = 84;
	public static readonly RULE_varModifier = 85;
	public static readonly RULE_continueStatement = 86;
	public static readonly RULE_breakStatement = 87;
	public static readonly RULE_returnStatement = 88;
	public static readonly RULE_yieldStatement = 89;
	public static readonly RULE_withStatement = 90;
	public static readonly RULE_switchStatement = 91;
	public static readonly RULE_caseBlock = 92;
	public static readonly RULE_caseClauses = 93;
	public static readonly RULE_caseClause = 94;
	public static readonly RULE_defaultClause = 95;
	public static readonly RULE_labelledStatement = 96;
	public static readonly RULE_throwStatement = 97;
	public static readonly RULE_tryStatement = 98;
	public static readonly RULE_catchProduction = 99;
	public static readonly RULE_finallyProduction = 100;
	public static readonly RULE_debuggerStatement = 101;
	public static readonly RULE_functionDeclaration = 102;
	public static readonly RULE_classDeclaration = 103;
	public static readonly RULE_classHeritage = 104;
	public static readonly RULE_classTail = 105;
	public static readonly RULE_classExtendsClause = 106;
	public static readonly RULE_implementsClause = 107;
	public static readonly RULE_classElement = 108;
	public static readonly RULE_propertyMemberDeclaration = 109;
	public static readonly RULE_propertyMemberBase = 110;
	public static readonly RULE_indexMemberDeclaration = 111;
	public static readonly RULE_generatorMethod = 112;
	public static readonly RULE_generatorFunctionDeclaration = 113;
	public static readonly RULE_generatorBlock = 114;
	public static readonly RULE_generatorDefinition = 115;
	public static readonly RULE_iteratorBlock = 116;
	public static readonly RULE_iteratorDefinition = 117;
	public static readonly RULE_classElementName = 118;
	public static readonly RULE_privateIdentifier = 119;
	public static readonly RULE_formalParameterList = 120;
	public static readonly RULE_formalParameterArg = 121;
	public static readonly RULE_lastFormalParameterArg = 122;
	public static readonly RULE_functionBody = 123;
	public static readonly RULE_sourceElements = 124;
	public static readonly RULE_arrayLiteral = 125;
	public static readonly RULE_elementList = 126;
	public static readonly RULE_arrayElement = 127;
	public static readonly RULE_objectLiteral = 128;
	public static readonly RULE_propertyAssignment = 129;
	public static readonly RULE_getAccessor = 130;
	public static readonly RULE_setAccessor = 131;
	public static readonly RULE_propertyName = 132;
	public static readonly RULE_arguments = 133;
	public static readonly RULE_argumentList = 134;
	public static readonly RULE_argument = 135;
	public static readonly RULE_expressionSequence = 136;
	public static readonly RULE_singleExpression = 137;
	public static readonly RULE_asExpression = 138;
	public static readonly RULE_assignable = 139;
	public static readonly RULE_anonymousFunction = 140;
	public static readonly RULE_arrowFunctionDeclaration = 141;
	public static readonly RULE_arrowFunctionParameters = 142;
	public static readonly RULE_arrowFunctionBody = 143;
	public static readonly RULE_assignmentOperator = 144;
	public static readonly RULE_literal = 145;
	public static readonly RULE_templateStringLiteral = 146;
	public static readonly RULE_templateStringAtom = 147;
	public static readonly RULE_numericLiteral = 148;
	public static readonly RULE_bigintLiteral = 149;
	public static readonly RULE_getter = 150;
	public static readonly RULE_setter = 151;
	public static readonly RULE_identifierName = 152;
	public static readonly RULE_identifier = 153;
	public static readonly RULE_identifierOrKeyWord = 154;
	public static readonly RULE_reservedWord = 155;
	public static readonly RULE_keyword = 156;
	public static readonly RULE_eos = 157;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"initializer", "bindingPattern", "typeParameters", "typeParameterList", 
		"typeParameter", "constraint", "typeArguments", "typeArgumentList", "typeArgument", 
		"type_", "unionOrIntersectionOrPrimaryType", "primaryType", "predefinedType", 
		"typeReference", "typeGeneric", "typeName", "objectType", "typeBody", 
		"typeMemberList", "typeMember", "arrayType", "tupleType", "tupleElementTypes", 
		"functionType", "constructorType", "typeQuery", "typeQueryExpression", 
		"propertySignatur", "typeAnnotation", "callSignature", "parameterList", 
		"requiredParameterList", "parameter", "optionalParameter", "restParameter", 
		"requiredParameter", "accessibilityModifier", "identifierOrPattern", "constructSignature", 
		"indexSignature", "methodSignature", "typeAliasDeclaration", "constructorDeclaration", 
		"interfaceDeclaration", "interfaceExtendsClause", "classOrInterfaceTypeList", 
		"enumDeclaration", "enumBody", "enumMemberList", "enumMember", "namespaceDeclaration", 
		"namespaceName", "importAliasDeclaration", "decoratorList", "decorator", 
		"decoratorMemberExpression", "decoratorCallExpression", "program", "sourceElement", 
		"statement", "block", "statementList", "abstractDeclaration", "importStatement", 
		"importFromBlock", "importModuleItems", "importAliasName", "moduleExportName", 
		"importedBinding", "importDefault", "importNamespace", "importFrom", "aliasName", 
		"exportStatement", "exportFromBlock", "exportModuleItems", "exportAliasName", 
		"declaration", "variableStatement", "variableDeclarationList", "variableDeclaration", 
		"emptyStatement_", "expressionStatement", "ifStatement", "iterationStatement", 
		"varModifier", "continueStatement", "breakStatement", "returnStatement", 
		"yieldStatement", "withStatement", "switchStatement", "caseBlock", "caseClauses", 
		"caseClause", "defaultClause", "labelledStatement", "throwStatement", 
		"tryStatement", "catchProduction", "finallyProduction", "debuggerStatement", 
		"functionDeclaration", "classDeclaration", "classHeritage", "classTail", 
		"classExtendsClause", "implementsClause", "classElement", "propertyMemberDeclaration", 
		"propertyMemberBase", "indexMemberDeclaration", "generatorMethod", "generatorFunctionDeclaration", 
		"generatorBlock", "generatorDefinition", "iteratorBlock", "iteratorDefinition", 
		"classElementName", "privateIdentifier", "formalParameterList", "formalParameterArg", 
		"lastFormalParameterArg", "functionBody", "sourceElements", "arrayLiteral", 
		"elementList", "arrayElement", "objectLiteral", "propertyAssignment", 
		"getAccessor", "setAccessor", "propertyName", "arguments", "argumentList", 
		"argument", "expressionSequence", "singleExpression", "asExpression", 
		"assignable", "anonymousFunction", "arrowFunctionDeclaration", "arrowFunctionParameters", 
		"arrowFunctionBody", "assignmentOperator", "literal", "templateStringLiteral", 
		"templateStringAtom", "numericLiteral", "bigintLiteral", "getter", "setter", 
		"identifierName", "identifier", "identifierOrKeyWord", "reservedWord", 
		"keyword", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'['", "']'", "'('", "')'", 
		"'{'", undefined, "'}'", "';'", "','", "'='", "'?'", "'?.'", "':'", "'...'", 
		"'.'", "'++'", "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", 
		"'**'", "'??'", "'#'", "'<<'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
		"'==='", "'!=='", "'&'", "'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", 
		"'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", 
		"'**='", "'??='", "'=>'", "'null'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'break'", 
		"'do'", "'instanceof'", "'typeof'", "'case'", "'else'", "'new'", "'var'", 
		"'catch'", "'finally'", "'return'", "'void'", "'continue'", "'for'", "'switch'", 
		"'while'", "'debugger'", "'function'", "'this'", "'with'", "'default'", 
		"'if'", "'throw'", "'delete'", "'in'", "'try'", "'as'", "'from'", "'readonly'", 
		"'async'", "'await'", "'yield'", "'yield*'", "'class'", "'enum'", "'extends'", 
		"'super'", "'const'", "'export'", "'import'", "'implements'", "'let'", 
		"'private'", "'public'", "'interface'", "'package'", "'protected'", "'static'", 
		"'any'", "'number'", "'never'", "'boolean'", "'string'", "'unique'", "'symbol'", 
		"'undefined'", "'object'", "'of'", "'keyof'", "'type'", "'constructor'", 
		"'namespace'", "'require'", "'module'", "'declare'", "'abstract'", "'is'", 
		"'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineComment", "SingleLineComment", "RegularExpressionLiteral", 
		"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"TemplateCloseBrace", "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", 
		"QuestionMarkDot", "Colon", "Ellipsis", "Dot", "PlusPlus", "MinusMinus", 
		"Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", "Modulus", "Power", 
		"NullCoalesce", "Hashtag", "LeftShiftArithmetic", "LessThan", "MoreThan", 
		"LessThanEquals", "GreaterThanEquals", "Equals_", "NotEquals", "IdentityEquals", 
		"IdentityNotEquals", "BitAnd", "BitXOr", "BitOr", "And", "Or", "MultiplyAssign", 
		"DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "PowerAssign", "NullishCoalescingAssign", 
		"ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral", 
		"OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
		"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
		"BigDecimalIntegerLiteral", "Break", "Do", "Instanceof", "Typeof", "Case", 
		"Else", "New", "Var", "Catch", "Finally", "Return", "Void", "Continue", 
		"For", "Switch", "While", "Debugger", "Function_", "This", "With", "Default", 
		"If", "Throw", "Delete", "In", "Try", "As", "From", "ReadOnly", "Async", 
		"Await", "Yield", "YieldStar", "Class", "Enum", "Extends", "Super", "Const", 
		"Export", "Import", "Implements", "Let", "Private", "Public", "Interface", 
		"Package", "Protected", "Static", "Any", "Number", "Never", "Boolean", 
		"String", "Unique", "Symbol", "Undefined", "Object", "Of", "KeyOf", "TypeAlias", 
		"Constructor", "Namespace", "Require", "Module", "Declare", "Abstract", 
		"Is", "At", "Identifier", "StringLiteral", "BackTick", "WhiteSpaces", 
		"LineTerminator", "HtmlComment", "CDataComment", "UnexpectedCharacter", 
		"TemplateStringEscapeAtom", "TemplateStringStartExpression", "TemplateStringAtom",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TypeScriptParser._LITERAL_NAMES, TypeScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TypeScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TypeScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return TypeScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TypeScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TypeScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TypeScriptParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(TypeScriptParser.Assign);
			this.state = 317;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bindingPattern(): BindingPatternContext {
		let _localctx: BindingPatternContext = new BindingPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TypeScriptParser.RULE_bindingPattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.OpenBracket:
				{
				this.state = 319;
				this.arrayLiteral();
				}
				break;
			case TypeScriptParser.OpenBrace:
				{
				this.state = 320;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TypeScriptParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(TypeScriptParser.LessThan);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.LessThan || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (TypeScriptParser.As - 96)) | (1 << (TypeScriptParser.From - 96)) | (1 << (TypeScriptParser.Async - 96)) | (1 << (TypeScriptParser.Yield - 96)) | (1 << (TypeScriptParser.Any - 96)) | (1 << (TypeScriptParser.Number - 96)) | (1 << (TypeScriptParser.Never - 96)) | (1 << (TypeScriptParser.Boolean - 96)) | (1 << (TypeScriptParser.String - 96)) | (1 << (TypeScriptParser.Unique - 96)) | (1 << (TypeScriptParser.Symbol - 96)) | (1 << (TypeScriptParser.Undefined - 96)) | (1 << (TypeScriptParser.Object - 96)) | (1 << (TypeScriptParser.Of - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (TypeScriptParser.KeyOf - 128)) | (1 << (TypeScriptParser.TypeAlias - 128)) | (1 << (TypeScriptParser.Constructor - 128)) | (1 << (TypeScriptParser.Namespace - 128)) | (1 << (TypeScriptParser.Abstract - 128)) | (1 << (TypeScriptParser.Identifier - 128)))) !== 0)) {
				{
				this.state = 324;
				this.typeParameterList();
				}
			}

			this.state = 327;
			this.match(TypeScriptParser.MoreThan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterList(): TypeParameterListContext {
		let _localctx: TypeParameterListContext = new TypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TypeScriptParser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.typeParameter();
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeScriptParser.Comma) {
				{
				{
				this.state = 330;
				this.match(TypeScriptParser.Comma);
				this.state = 331;
				this.typeParameter();
				}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TypeScriptParser.RULE_typeParameter);
		let _la: number;
		try {
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 337;
				this.identifier();
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Extends) {
					{
					this.state = 338;
					this.constraint();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 341;
				this.identifier();
				this.state = 342;
				this.match(TypeScriptParser.Assign);
				this.state = 343;
				this.typeArgument();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 345;
				this.typeParameters();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraint(): ConstraintContext {
		let _localctx: ConstraintContext = new ConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TypeScriptParser.RULE_constraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(TypeScriptParser.Extends);
			this.state = 349;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TypeScriptParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(TypeScriptParser.LessThan);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.OpenBrace))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeScriptParser.LessThan - 32)) | (1 << (TypeScriptParser.BitAnd - 32)) | (1 << (TypeScriptParser.BitOr - 32)) | (1 << (TypeScriptParser.NullLiteral - 32)) | (1 << (TypeScriptParser.BooleanLiteral - 32)) | (1 << (TypeScriptParser.DecimalLiteral - 32)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (TypeScriptParser.Typeof - 73)) | (1 << (TypeScriptParser.New - 73)) | (1 << (TypeScriptParser.Void - 73)) | (1 << (TypeScriptParser.This - 73)) | (1 << (TypeScriptParser.As - 73)) | (1 << (TypeScriptParser.From - 73)) | (1 << (TypeScriptParser.Async - 73)) | (1 << (TypeScriptParser.Yield - 73)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (TypeScriptParser.Any - 118)) | (1 << (TypeScriptParser.Number - 118)) | (1 << (TypeScriptParser.Never - 118)) | (1 << (TypeScriptParser.Boolean - 118)) | (1 << (TypeScriptParser.String - 118)) | (1 << (TypeScriptParser.Unique - 118)) | (1 << (TypeScriptParser.Symbol - 118)) | (1 << (TypeScriptParser.Undefined - 118)) | (1 << (TypeScriptParser.Object - 118)) | (1 << (TypeScriptParser.Of - 118)) | (1 << (TypeScriptParser.KeyOf - 118)) | (1 << (TypeScriptParser.TypeAlias - 118)) | (1 << (TypeScriptParser.Constructor - 118)) | (1 << (TypeScriptParser.Namespace - 118)) | (1 << (TypeScriptParser.Abstract - 118)) | (1 << (TypeScriptParser.Identifier - 118)) | (1 << (TypeScriptParser.StringLiteral - 118)))) !== 0)) {
				{
				this.state = 352;
				this.typeArgumentList();
				}
			}

			this.state = 355;
			this.match(TypeScriptParser.MoreThan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentList(): TypeArgumentListContext {
		let _localctx: TypeArgumentListContext = new TypeArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TypeScriptParser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.typeArgument();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeScriptParser.Comma) {
				{
				{
				this.state = 358;
				this.match(TypeScriptParser.Comma);
				this.state = 359;
				this.typeArgument();
				}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TypeScriptParser.RULE_typeArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, TypeScriptParser.RULE_type_);
		let _la: number;
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.BitAnd || _la === TypeScriptParser.BitOr) {
					{
					this.state = 367;
					_la = this._input.LA(1);
					if (!(_la === TypeScriptParser.BitAnd || _la === TypeScriptParser.BitOr)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 370;
				this.unionOrIntersectionOrPrimaryType(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 371;
				this.functionType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 372;
				this.constructorType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 373;
				this.typeGeneric();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext;
	public unionOrIntersectionOrPrimaryType(_p: number): UnionOrIntersectionOrPrimaryTypeContext;
	// @RuleVersion(0)
	public unionOrIntersectionOrPrimaryType(_p?: number): UnionOrIntersectionOrPrimaryTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: UnionOrIntersectionOrPrimaryTypeContext = new UnionOrIntersectionOrPrimaryTypeContext(this._ctx, _parentState);
		let _prevctx: UnionOrIntersectionOrPrimaryTypeContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PrimaryContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 377;
			this.primaryType(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 387;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 385;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType);
						this.state = 379;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 380;
						this.match(TypeScriptParser.BitOr);
						this.state = 381;
						this.unionOrIntersectionOrPrimaryType(4);
						}
						break;

					case 2:
						{
						_localctx = new IntersectionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType);
						this.state = 382;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 383;
						this.match(TypeScriptParser.BitAnd);
						this.state = 384;
						this.unionOrIntersectionOrPrimaryType(3);
						}
						break;
					}
					}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryType(): PrimaryTypeContext;
	public primaryType(_p: number): PrimaryTypeContext;
	// @RuleVersion(0)
	public primaryType(_p?: number): PrimaryTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryTypeContext = new PrimaryTypeContext(this._ctx, _parentState);
		let _prevctx: PrimaryTypeContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, TypeScriptParser.RULE_primaryType, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				_localctx = new ParenthesizedPrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 391;
				this.match(TypeScriptParser.OpenParen);
				this.state = 392;
				this.type_();
				this.state = 393;
				this.match(TypeScriptParser.CloseParen);
				}
				break;

			case 2:
				{
				_localctx = new PredefinedPrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 395;
				this.predefinedType();
				}
				break;

			case 3:
				{
				_localctx = new ReferencePrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 396;
				this.typeReference();
				}
				break;

			case 4:
				{
				_localctx = new ObjectPrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 397;
				this.objectType();
				}
				break;

			case 5:
				{
				_localctx = new TuplePrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 398;
				this.match(TypeScriptParser.OpenBracket);
				this.state = 399;
				this.tupleElementTypes();
				this.state = 400;
				this.match(TypeScriptParser.CloseBracket);
				}
				break;

			case 6:
				{
				_localctx = new QueryPrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 402;
				this.typeQuery();
				}
				break;

			case 7:
				{
				_localctx = new ThisPrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 403;
				this.match(TypeScriptParser.This);
				}
				break;

			case 8:
				{
				_localctx = new RedefinitionOfTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 404;
				this.typeReference();
				this.state = 405;
				this.match(TypeScriptParser.Is);
				this.state = 406;
				this.primaryType(2);
				}
				break;

			case 9:
				{
				_localctx = new KeyOfTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 408;
				this.match(TypeScriptParser.KeyOf);
				this.state = 409;
				this.primaryType(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 421;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayPrimTypeContext(new PrimaryTypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_primaryType);
					this.state = 412;
					if (!(this.precpred(this._ctx, 6))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
					}
					this.state = 413;
					if (!(notLineTerminator())) {
						throw this.createFailedPredicateException("notLineTerminator()");
					}
					this.state = 414;
					this.match(TypeScriptParser.OpenBracket);
					this.state = 416;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenParen) | (1 << TypeScriptParser.OpenBrace))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.This - 59)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (TypeScriptParser.As - 96)) | (1 << (TypeScriptParser.From - 96)) | (1 << (TypeScriptParser.Async - 96)) | (1 << (TypeScriptParser.Yield - 96)) | (1 << (TypeScriptParser.Any - 96)) | (1 << (TypeScriptParser.Number - 96)) | (1 << (TypeScriptParser.Never - 96)) | (1 << (TypeScriptParser.Boolean - 96)) | (1 << (TypeScriptParser.String - 96)) | (1 << (TypeScriptParser.Unique - 96)) | (1 << (TypeScriptParser.Symbol - 96)) | (1 << (TypeScriptParser.Undefined - 96)) | (1 << (TypeScriptParser.Object - 96)) | (1 << (TypeScriptParser.Of - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (TypeScriptParser.KeyOf - 128)) | (1 << (TypeScriptParser.TypeAlias - 128)) | (1 << (TypeScriptParser.Constructor - 128)) | (1 << (TypeScriptParser.Namespace - 128)) | (1 << (TypeScriptParser.Abstract - 128)) | (1 << (TypeScriptParser.Identifier - 128)) | (1 << (TypeScriptParser.StringLiteral - 128)))) !== 0)) {
						{
						this.state = 415;
						this.primaryType(0);
						}
					}

					this.state = 418;
					this.match(TypeScriptParser.CloseBracket);
					}
					}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predefinedType(): PredefinedTypeContext {
		let _localctx: PredefinedTypeContext = new PredefinedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TypeScriptParser.RULE_predefinedType);
		let _la: number;
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.Any:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 424;
				this.match(TypeScriptParser.Any);
				}
				break;
			case TypeScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 425;
				this.match(TypeScriptParser.NullLiteral);
				}
				break;
			case TypeScriptParser.Number:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 426;
				this.match(TypeScriptParser.Number);
				}
				break;
			case TypeScriptParser.DecimalLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 427;
				this.match(TypeScriptParser.DecimalLiteral);
				}
				break;
			case TypeScriptParser.Boolean:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 428;
				this.match(TypeScriptParser.Boolean);
				}
				break;
			case TypeScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 429;
				this.match(TypeScriptParser.BooleanLiteral);
				}
				break;
			case TypeScriptParser.String:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 430;
				this.match(TypeScriptParser.String);
				}
				break;
			case TypeScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 431;
				this.match(TypeScriptParser.StringLiteral);
				}
				break;
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Unique) {
					{
					this.state = 432;
					this.match(TypeScriptParser.Unique);
					}
				}

				this.state = 435;
				this.match(TypeScriptParser.Symbol);
				}
				break;
			case TypeScriptParser.Never:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 436;
				this.match(TypeScriptParser.Never);
				}
				break;
			case TypeScriptParser.Undefined:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 437;
				this.match(TypeScriptParser.Undefined);
				}
				break;
			case TypeScriptParser.Object:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 438;
				this.match(TypeScriptParser.Object);
				}
				break;
			case TypeScriptParser.Void:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 439;
				this.match(TypeScriptParser.Void);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeReference(): TypeReferenceContext {
		let _localctx: TypeReferenceContext = new TypeReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TypeScriptParser.RULE_typeReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.typeName();
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 443;
				this.typeGeneric();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeGeneric(): TypeGenericContext {
		let _localctx: TypeGenericContext = new TypeGenericContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TypeScriptParser.RULE_typeGeneric);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(TypeScriptParser.LessThan);
			this.state = 447;
			this.typeArgumentList();
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.LessThan) {
				{
				this.state = 448;
				this.typeGeneric();
				}
			}

			this.state = 451;
			this.match(TypeScriptParser.MoreThan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TypeScriptParser.RULE_typeName);
		try {
			this.state = 455;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 453;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 454;
				this.namespaceName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectType(): ObjectTypeContext {
		let _localctx: ObjectTypeContext = new ObjectTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TypeScriptParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (TypeScriptParser.OpenBracket - 4)) | (1 << (TypeScriptParser.OpenParen - 4)) | (1 << (TypeScriptParser.LessThan - 4)))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.HexIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)))) !== 0)) {
				{
				this.state = 458;
				this.typeBody();
				}
			}

			this.state = 461;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBody(): TypeBodyContext {
		let _localctx: TypeBodyContext = new TypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TypeScriptParser.RULE_typeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.typeMemberList();
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.SemiColon || _la === TypeScriptParser.Comma) {
				{
				this.state = 464;
				_la = this._input.LA(1);
				if (!(_la === TypeScriptParser.SemiColon || _la === TypeScriptParser.Comma)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeMemberList(): TypeMemberListContext {
		let _localctx: TypeMemberListContext = new TypeMemberListContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TypeScriptParser.RULE_typeMemberList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.typeMember();
			this.state = 472;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 468;
					_la = this._input.LA(1);
					if (!(_la === TypeScriptParser.SemiColon || _la === TypeScriptParser.Comma)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 469;
					this.typeMember();
					}
					}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeMember(): TypeMemberContext {
		let _localctx: TypeMemberContext = new TypeMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TypeScriptParser.RULE_typeMember);
		let _la: number;
		try {
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this.propertySignatur();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 476;
				this.callSignature();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 477;
				this.constructSignature();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 478;
				this.indexSignature();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 479;
				this.methodSignature();
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.ARROW) {
					{
					this.state = 480;
					this.match(TypeScriptParser.ARROW);
					this.state = 481;
					this.type_();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TypeScriptParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.primaryType(0);
			this.state = 487;
			if (!(notLineTerminator())) {
				throw this.createFailedPredicateException("notLineTerminator()");
			}
			this.state = 488;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 489;
			this.match(TypeScriptParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleType(): TupleTypeContext {
		let _localctx: TupleTypeContext = new TupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TypeScriptParser.RULE_tupleType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 492;
			this.tupleElementTypes();
			this.state = 493;
			this.match(TypeScriptParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleElementTypes(): TupleElementTypesContext {
		let _localctx: TupleElementTypesContext = new TupleElementTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TypeScriptParser.RULE_tupleElementTypes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.type_();
			this.state = 500;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 496;
					this.match(TypeScriptParser.Comma);
					this.state = 497;
					this.type_();
					}
					}
				}
				this.state = 502;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Comma) {
				{
				this.state = 503;
				this.match(TypeScriptParser.Comma);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TypeScriptParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.LessThan) {
				{
				this.state = 506;
				this.typeParameters();
				}
			}

			this.state = 509;
			this.match(TypeScriptParser.OpenParen);
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.At - 123)) | (1 << (TypeScriptParser.Identifier - 123)))) !== 0)) {
				{
				this.state = 510;
				this.parameterList();
				}
			}

			this.state = 513;
			this.match(TypeScriptParser.CloseParen);
			this.state = 514;
			this.match(TypeScriptParser.ARROW);
			this.state = 515;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorType(): ConstructorTypeContext {
		let _localctx: ConstructorTypeContext = new ConstructorTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TypeScriptParser.RULE_constructorType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(TypeScriptParser.New);
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.LessThan) {
				{
				this.state = 518;
				this.typeParameters();
				}
			}

			this.state = 521;
			this.match(TypeScriptParser.OpenParen);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.At - 123)) | (1 << (TypeScriptParser.Identifier - 123)))) !== 0)) {
				{
				this.state = 522;
				this.parameterList();
				}
			}

			this.state = 525;
			this.match(TypeScriptParser.CloseParen);
			this.state = 526;
			this.match(TypeScriptParser.ARROW);
			this.state = 527;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeQuery(): TypeQueryContext {
		let _localctx: TypeQueryContext = new TypeQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TypeScriptParser.RULE_typeQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(TypeScriptParser.Typeof);
			this.state = 530;
			this.typeQueryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeQueryExpression(): TypeQueryExpressionContext {
		let _localctx: TypeQueryExpressionContext = new TypeQueryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TypeScriptParser.RULE_typeQueryExpression);
		try {
			let _alt: number;
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 532;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 536;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 533;
						this.identifierName();
						this.state = 534;
						this.match(TypeScriptParser.Dot);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 538;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 540;
				this.identifierName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertySignatur(): PropertySignaturContext {
		let _localctx: PropertySignaturContext = new PropertySignaturContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, TypeScriptParser.RULE_propertySignatur);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 544;
				this.match(TypeScriptParser.ReadOnly);
				}
				break;
			}
			this.state = 547;
			this.propertyName();
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.QuestionMark) {
				{
				this.state = 548;
				this.match(TypeScriptParser.QuestionMark);
				}
			}

			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Colon) {
				{
				this.state = 551;
				this.typeAnnotation();
				}
			}

			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.ARROW) {
				{
				this.state = 554;
				this.match(TypeScriptParser.ARROW);
				this.state = 555;
				this.type_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAnnotation(): TypeAnnotationContext {
		let _localctx: TypeAnnotationContext = new TypeAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, TypeScriptParser.RULE_typeAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.match(TypeScriptParser.Colon);
			this.state = 559;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callSignature(): CallSignatureContext {
		let _localctx: CallSignatureContext = new CallSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, TypeScriptParser.RULE_callSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.LessThan) {
				{
				this.state = 561;
				this.typeParameters();
				}
			}

			this.state = 564;
			this.match(TypeScriptParser.OpenParen);
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.At - 123)) | (1 << (TypeScriptParser.Identifier - 123)))) !== 0)) {
				{
				this.state = 565;
				this.parameterList();
				}
			}

			this.state = 568;
			this.match(TypeScriptParser.CloseParen);
			this.state = 570;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 569;
				this.typeAnnotation();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, TypeScriptParser.RULE_parameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 588;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.Ellipsis:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 572;
				this.restParameter();
				}
				break;
			case TypeScriptParser.OpenBracket:
			case TypeScriptParser.OpenBrace:
			case TypeScriptParser.NullLiteral:
			case TypeScriptParser.BooleanLiteral:
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.At:
			case TypeScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 573;
				this.parameter();
				this.state = 578;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 574;
						this.match(TypeScriptParser.Comma);
						this.state = 575;
						this.parameter();
						}
						}
					}
					this.state = 580;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 583;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 581;
					this.match(TypeScriptParser.Comma);
					this.state = 582;
					this.restParameter();
					}
					break;
				}
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Comma) {
					{
					this.state = 585;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requiredParameterList(): RequiredParameterListContext {
		let _localctx: RequiredParameterListContext = new RequiredParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, TypeScriptParser.RULE_requiredParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this.requiredParameter();
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeScriptParser.Comma) {
				{
				{
				this.state = 591;
				this.match(TypeScriptParser.Comma);
				this.state = 592;
				this.requiredParameter();
				}
				}
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, TypeScriptParser.RULE_parameter);
		try {
			this.state = 600;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 598;
				this.requiredParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 599;
				this.optionalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalParameter(): OptionalParameterContext {
		let _localctx: OptionalParameterContext = new OptionalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, TypeScriptParser.RULE_optionalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.At) {
				{
				this.state = 602;
				this.decoratorList();
				}
			}

			{
			this.state = 606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 605;
				this.accessibilityModifier();
				}
				break;
			}
			this.state = 608;
			this.identifierOrPattern();
			this.state = 617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.QuestionMark:
				{
				this.state = 609;
				this.match(TypeScriptParser.QuestionMark);
				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Colon) {
					{
					this.state = 610;
					this.typeAnnotation();
					}
				}

				}
				break;
			case TypeScriptParser.Assign:
			case TypeScriptParser.Colon:
				{
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Colon) {
					{
					this.state = 613;
					this.typeAnnotation();
					}
				}

				this.state = 616;
				this.initializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public restParameter(): RestParameterContext {
		let _localctx: RestParameterContext = new RestParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, TypeScriptParser.RULE_restParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this.match(TypeScriptParser.Ellipsis);
			this.state = 620;
			this.singleExpression(0);
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Colon) {
				{
				this.state = 621;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requiredParameter(): RequiredParameterContext {
		let _localctx: RequiredParameterContext = new RequiredParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, TypeScriptParser.RULE_requiredParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.At) {
				{
				this.state = 624;
				this.decoratorList();
				}
			}

			this.state = 628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 627;
				this.accessibilityModifier();
				}
				break;
			}
			this.state = 630;
			this.identifierOrPattern();
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Colon) {
				{
				this.state = 631;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accessibilityModifier(): AccessibilityModifierContext {
		let _localctx: AccessibilityModifierContext = new AccessibilityModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, TypeScriptParser.RULE_accessibilityModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			_la = this._input.LA(1);
			if (!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (TypeScriptParser.Private - 112)) | (1 << (TypeScriptParser.Public - 112)) | (1 << (TypeScriptParser.Protected - 112)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierOrPattern(): IdentifierOrPatternContext {
		let _localctx: IdentifierOrPatternContext = new IdentifierOrPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, TypeScriptParser.RULE_identifierOrPattern);
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.NullLiteral:
			case TypeScriptParser.BooleanLiteral:
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 636;
				this.identifierName();
				}
				break;
			case TypeScriptParser.OpenBracket:
			case TypeScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 637;
				this.bindingPattern();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructSignature(): ConstructSignatureContext {
		let _localctx: ConstructSignatureContext = new ConstructSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, TypeScriptParser.RULE_constructSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(TypeScriptParser.New);
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.LessThan) {
				{
				this.state = 641;
				this.typeParameters();
				}
			}

			this.state = 644;
			this.match(TypeScriptParser.OpenParen);
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.At - 123)) | (1 << (TypeScriptParser.Identifier - 123)))) !== 0)) {
				{
				this.state = 645;
				this.parameterList();
				}
			}

			this.state = 648;
			this.match(TypeScriptParser.CloseParen);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Colon) {
				{
				this.state = 649;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexSignature(): IndexSignatureContext {
		let _localctx: IndexSignatureContext = new IndexSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, TypeScriptParser.RULE_indexSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 653;
			this.identifier();
			this.state = 654;
			this.match(TypeScriptParser.Colon);
			this.state = 655;
			_la = this._input.LA(1);
			if (!(_la === TypeScriptParser.Number || _la === TypeScriptParser.String)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 656;
			this.match(TypeScriptParser.CloseBracket);
			this.state = 657;
			this.typeAnnotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodSignature(): MethodSignatureContext {
		let _localctx: MethodSignatureContext = new MethodSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, TypeScriptParser.RULE_methodSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.propertyName();
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.QuestionMark) {
				{
				this.state = 660;
				this.match(TypeScriptParser.QuestionMark);
				}
			}

			this.state = 663;
			this.callSignature();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAliasDeclaration(): TypeAliasDeclarationContext {
		let _localctx: TypeAliasDeclarationContext = new TypeAliasDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, TypeScriptParser.RULE_typeAliasDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Export) {
				{
				this.state = 665;
				this.match(TypeScriptParser.Export);
				}
			}

			this.state = 668;
			this.match(TypeScriptParser.TypeAlias);
			this.state = 669;
			this.identifier();
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.LessThan) {
				{
				this.state = 670;
				this.typeParameters();
				}
			}

			this.state = 673;
			this.match(TypeScriptParser.Assign);
			this.state = 674;
			this.type_();
			this.state = 675;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, TypeScriptParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (TypeScriptParser.Private - 112)) | (1 << (TypeScriptParser.Public - 112)) | (1 << (TypeScriptParser.Protected - 112)))) !== 0)) {
				{
				this.state = 677;
				this.accessibilityModifier();
				}
			}

			this.state = 680;
			this.match(TypeScriptParser.Constructor);
			this.state = 681;
			this.match(TypeScriptParser.OpenParen);
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (TypeScriptParser.Break - 70)) | (1 << (TypeScriptParser.Do - 70)) | (1 << (TypeScriptParser.Instanceof - 70)) | (1 << (TypeScriptParser.Typeof - 70)) | (1 << (TypeScriptParser.Case - 70)) | (1 << (TypeScriptParser.Else - 70)) | (1 << (TypeScriptParser.New - 70)) | (1 << (TypeScriptParser.Var - 70)) | (1 << (TypeScriptParser.Catch - 70)) | (1 << (TypeScriptParser.Finally - 70)) | (1 << (TypeScriptParser.Return - 70)) | (1 << (TypeScriptParser.Void - 70)) | (1 << (TypeScriptParser.Continue - 70)) | (1 << (TypeScriptParser.For - 70)) | (1 << (TypeScriptParser.Switch - 70)) | (1 << (TypeScriptParser.While - 70)) | (1 << (TypeScriptParser.Debugger - 70)) | (1 << (TypeScriptParser.Function_ - 70)) | (1 << (TypeScriptParser.This - 70)) | (1 << (TypeScriptParser.With - 70)) | (1 << (TypeScriptParser.Default - 70)) | (1 << (TypeScriptParser.If - 70)) | (1 << (TypeScriptParser.Throw - 70)) | (1 << (TypeScriptParser.Delete - 70)) | (1 << (TypeScriptParser.In - 70)) | (1 << (TypeScriptParser.Try - 70)) | (1 << (TypeScriptParser.As - 70)) | (1 << (TypeScriptParser.From - 70)) | (1 << (TypeScriptParser.ReadOnly - 70)) | (1 << (TypeScriptParser.Async - 70)) | (1 << (TypeScriptParser.Await - 70)) | (1 << (TypeScriptParser.Yield - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (TypeScriptParser.Class - 103)) | (1 << (TypeScriptParser.Enum - 103)) | (1 << (TypeScriptParser.Extends - 103)) | (1 << (TypeScriptParser.Super - 103)) | (1 << (TypeScriptParser.Const - 103)) | (1 << (TypeScriptParser.Export - 103)) | (1 << (TypeScriptParser.Import - 103)) | (1 << (TypeScriptParser.Implements - 103)) | (1 << (TypeScriptParser.Let - 103)) | (1 << (TypeScriptParser.Private - 103)) | (1 << (TypeScriptParser.Public - 103)) | (1 << (TypeScriptParser.Interface - 103)) | (1 << (TypeScriptParser.Package - 103)) | (1 << (TypeScriptParser.Protected - 103)) | (1 << (TypeScriptParser.Static - 103)) | (1 << (TypeScriptParser.Any - 103)) | (1 << (TypeScriptParser.Number - 103)) | (1 << (TypeScriptParser.Never - 103)) | (1 << (TypeScriptParser.Boolean - 103)) | (1 << (TypeScriptParser.String - 103)) | (1 << (TypeScriptParser.Unique - 103)) | (1 << (TypeScriptParser.Symbol - 103)) | (1 << (TypeScriptParser.Undefined - 103)) | (1 << (TypeScriptParser.Object - 103)) | (1 << (TypeScriptParser.Of - 103)) | (1 << (TypeScriptParser.KeyOf - 103)) | (1 << (TypeScriptParser.TypeAlias - 103)) | (1 << (TypeScriptParser.Constructor - 103)) | (1 << (TypeScriptParser.Namespace - 103)) | (1 << (TypeScriptParser.Require - 103)) | (1 << (TypeScriptParser.Module - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (TypeScriptParser.Abstract - 135)) | (1 << (TypeScriptParser.At - 135)) | (1 << (TypeScriptParser.Identifier - 135)))) !== 0)) {
				{
				this.state = 682;
				this.formalParameterList();
				}
			}

			this.state = 685;
			this.match(TypeScriptParser.CloseParen);
			this.state = 691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				{
				this.state = 686;
				this.match(TypeScriptParser.OpenBrace);
				this.state = 687;
				this.functionBody();
				this.state = 688;
				this.match(TypeScriptParser.CloseBrace);
				}
				}
				break;

			case 2:
				{
				this.state = 690;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, TypeScriptParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Export) {
				{
				this.state = 693;
				this.match(TypeScriptParser.Export);
				}
			}

			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Declare) {
				{
				this.state = 696;
				this.match(TypeScriptParser.Declare);
				}
			}

			this.state = 699;
			this.match(TypeScriptParser.Interface);
			this.state = 700;
			this.identifier();
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.LessThan) {
				{
				this.state = 701;
				this.typeParameters();
				}
			}

			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Extends) {
				{
				this.state = 704;
				this.interfaceExtendsClause();
				}
			}

			this.state = 707;
			this.objectType();
			this.state = 709;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 708;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceExtendsClause(): InterfaceExtendsClauseContext {
		let _localctx: InterfaceExtendsClauseContext = new InterfaceExtendsClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, TypeScriptParser.RULE_interfaceExtendsClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this.match(TypeScriptParser.Extends);
			this.state = 712;
			this.classOrInterfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceTypeList(): ClassOrInterfaceTypeListContext {
		let _localctx: ClassOrInterfaceTypeListContext = new ClassOrInterfaceTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, TypeScriptParser.RULE_classOrInterfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.typeReference();
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeScriptParser.Comma) {
				{
				{
				this.state = 715;
				this.match(TypeScriptParser.Comma);
				this.state = 716;
				this.typeReference();
				}
				}
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, TypeScriptParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Const) {
				{
				this.state = 722;
				this.match(TypeScriptParser.Const);
				}
			}

			this.state = 725;
			this.match(TypeScriptParser.Enum);
			this.state = 726;
			this.identifier();
			this.state = 727;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.OpenBracket || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.HexIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)))) !== 0)) {
				{
				this.state = 728;
				this.enumBody();
				}
			}

			this.state = 731;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, TypeScriptParser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this.enumMemberList();
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Comma) {
				{
				this.state = 734;
				this.match(TypeScriptParser.Comma);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumMemberList(): EnumMemberListContext {
		let _localctx: EnumMemberListContext = new EnumMemberListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, TypeScriptParser.RULE_enumMemberList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this.enumMember();
			this.state = 742;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 738;
					this.match(TypeScriptParser.Comma);
					this.state = 739;
					this.enumMember();
					}
					}
				}
				this.state = 744;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumMember(): EnumMemberContext {
		let _localctx: EnumMemberContext = new EnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, TypeScriptParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 745;
			this.propertyName();
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Assign) {
				{
				this.state = 746;
				this.match(TypeScriptParser.Assign);
				this.state = 747;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceDeclaration(): NamespaceDeclarationContext {
		let _localctx: NamespaceDeclarationContext = new NamespaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, TypeScriptParser.RULE_namespaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Declare) {
				{
				this.state = 750;
				this.match(TypeScriptParser.Declare);
				}
			}

			this.state = 753;
			this.match(TypeScriptParser.Namespace);
			this.state = 754;
			this.namespaceName();
			this.state = 755;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 757;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 756;
				this.statementList();
				}
				break;
			}
			this.state = 759;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceName(): NamespaceNameContext {
		let _localctx: NamespaceNameContext = new NamespaceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, TypeScriptParser.RULE_namespaceName);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.identifier();
			this.state = 770;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 763;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 762;
						this.match(TypeScriptParser.Dot);
						}
						}
						this.state = 765;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === TypeScriptParser.Dot);
					this.state = 767;
					this.identifier();
					}
					}
				}
				this.state = 772;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importAliasDeclaration(): ImportAliasDeclarationContext {
		let _localctx: ImportAliasDeclarationContext = new ImportAliasDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, TypeScriptParser.RULE_importAliasDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			this.identifier();
			this.state = 774;
			this.match(TypeScriptParser.Assign);
			this.state = 775;
			this.namespaceName();
			this.state = 776;
			this.match(TypeScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decoratorList(): DecoratorListContext {
		let _localctx: DecoratorListContext = new DecoratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, TypeScriptParser.RULE_decoratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 778;
					this.decorator();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 781;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorator(): DecoratorContext {
		let _localctx: DecoratorContext = new DecoratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, TypeScriptParser.RULE_decorator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(TypeScriptParser.At);
			this.state = 786;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 784;
				this.decoratorMemberExpression(0);
				}
				break;

			case 2:
				{
				this.state = 785;
				this.decoratorCallExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public decoratorMemberExpression(): DecoratorMemberExpressionContext;
	public decoratorMemberExpression(_p: number): DecoratorMemberExpressionContext;
	// @RuleVersion(0)
	public decoratorMemberExpression(_p?: number): DecoratorMemberExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DecoratorMemberExpressionContext = new DecoratorMemberExpressionContext(this._ctx, _parentState);
		let _prevctx: DecoratorMemberExpressionContext = _localctx;
		let _startState: number = 110;
		this.enterRecursionRule(_localctx, 110, TypeScriptParser.RULE_decoratorMemberExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.Async:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
				{
				this.state = 789;
				this.identifier();
				}
				break;
			case TypeScriptParser.OpenParen:
				{
				this.state = 790;
				this.match(TypeScriptParser.OpenParen);
				this.state = 791;
				this.singleExpression(0);
				this.state = 792;
				this.match(TypeScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 801;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DecoratorMemberExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_decoratorMemberExpression);
					this.state = 796;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 797;
					this.match(TypeScriptParser.Dot);
					this.state = 798;
					this.identifierName();
					}
					}
				}
				this.state = 803;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decoratorCallExpression(): DecoratorCallExpressionContext {
		let _localctx: DecoratorCallExpressionContext = new DecoratorCallExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, TypeScriptParser.RULE_decoratorCallExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.decoratorMemberExpression(0);
			this.state = 805;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, TypeScriptParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 807;
				this.sourceElements();
				}
				break;
			}
			this.state = 810;
			this.match(TypeScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, TypeScriptParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 812;
				this.match(TypeScriptParser.Export);
				}
				break;
			}
			this.state = 815;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, TypeScriptParser.RULE_statement);
		try {
			this.state = 846;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 817;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 818;
				this.variableStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 819;
				this.importStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 820;
				this.exportStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 821;
				this.emptyStatement_();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 822;
				this.abstractDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 823;
				this.classDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 824;
				this.functionDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 825;
				this.expressionStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 826;
				this.interfaceDeclaration();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 827;
				this.namespaceDeclaration();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 828;
				this.ifStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 829;
				this.iterationStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 830;
				this.continueStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 831;
				this.breakStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 832;
				this.returnStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 833;
				this.yieldStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 834;
				this.withStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 835;
				this.labelledStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 836;
				this.switchStatement();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 837;
				this.throwStatement();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 838;
				this.tryStatement();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 839;
				this.debuggerStatement();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 840;
				this.arrowFunctionDeclaration();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 841;
				this.generatorFunctionDeclaration();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 842;
				this.typeAliasDeclaration();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 843;
				this.enumDeclaration();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 844;
				this.match(TypeScriptParser.Export);
				this.state = 845;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, TypeScriptParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 849;
				this.statementList();
				}
				break;
			}
			this.state = 852;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, TypeScriptParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 854;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 857;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractDeclaration(): AbstractDeclarationContext {
		let _localctx: AbstractDeclarationContext = new AbstractDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, TypeScriptParser.RULE_abstractDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			this.match(TypeScriptParser.Abstract);
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 860;
				this.identifier();
				this.state = 861;
				this.callSignature();
				}
				break;

			case 2:
				{
				this.state = 863;
				this.variableStatement();
				}
				break;
			}
			this.state = 866;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, TypeScriptParser.RULE_importStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 868;
			this.match(TypeScriptParser.Import);
			this.state = 869;
			this.importFromBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importFromBlock(): ImportFromBlockContext {
		let _localctx: ImportFromBlockContext = new ImportFromBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, TypeScriptParser.RULE_importFromBlock);
		try {
			this.state = 883;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.OpenBrace:
			case TypeScriptParser.Multiply:
			case TypeScriptParser.NullLiteral:
			case TypeScriptParser.BooleanLiteral:
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 872;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 871;
					this.importDefault();
					}
					break;
				}
				this.state = 876;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TypeScriptParser.Multiply:
				case TypeScriptParser.NullLiteral:
				case TypeScriptParser.BooleanLiteral:
				case TypeScriptParser.Break:
				case TypeScriptParser.Do:
				case TypeScriptParser.Instanceof:
				case TypeScriptParser.Typeof:
				case TypeScriptParser.Case:
				case TypeScriptParser.Else:
				case TypeScriptParser.New:
				case TypeScriptParser.Var:
				case TypeScriptParser.Catch:
				case TypeScriptParser.Finally:
				case TypeScriptParser.Return:
				case TypeScriptParser.Void:
				case TypeScriptParser.Continue:
				case TypeScriptParser.For:
				case TypeScriptParser.Switch:
				case TypeScriptParser.While:
				case TypeScriptParser.Debugger:
				case TypeScriptParser.Function_:
				case TypeScriptParser.This:
				case TypeScriptParser.With:
				case TypeScriptParser.Default:
				case TypeScriptParser.If:
				case TypeScriptParser.Throw:
				case TypeScriptParser.Delete:
				case TypeScriptParser.In:
				case TypeScriptParser.Try:
				case TypeScriptParser.As:
				case TypeScriptParser.From:
				case TypeScriptParser.ReadOnly:
				case TypeScriptParser.Async:
				case TypeScriptParser.Await:
				case TypeScriptParser.Yield:
				case TypeScriptParser.Class:
				case TypeScriptParser.Enum:
				case TypeScriptParser.Extends:
				case TypeScriptParser.Super:
				case TypeScriptParser.Const:
				case TypeScriptParser.Export:
				case TypeScriptParser.Import:
				case TypeScriptParser.Implements:
				case TypeScriptParser.Let:
				case TypeScriptParser.Private:
				case TypeScriptParser.Public:
				case TypeScriptParser.Interface:
				case TypeScriptParser.Package:
				case TypeScriptParser.Protected:
				case TypeScriptParser.Static:
				case TypeScriptParser.Any:
				case TypeScriptParser.Number:
				case TypeScriptParser.Never:
				case TypeScriptParser.Boolean:
				case TypeScriptParser.String:
				case TypeScriptParser.Unique:
				case TypeScriptParser.Symbol:
				case TypeScriptParser.Undefined:
				case TypeScriptParser.Object:
				case TypeScriptParser.Of:
				case TypeScriptParser.KeyOf:
				case TypeScriptParser.TypeAlias:
				case TypeScriptParser.Constructor:
				case TypeScriptParser.Namespace:
				case TypeScriptParser.Require:
				case TypeScriptParser.Module:
				case TypeScriptParser.Abstract:
				case TypeScriptParser.Identifier:
					{
					this.state = 874;
					this.importNamespace();
					}
					break;
				case TypeScriptParser.OpenBrace:
					{
					this.state = 875;
					this.importModuleItems();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 878;
				this.importFrom();
				this.state = 879;
				this.eos();
				}
				break;
			case TypeScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 881;
				this.match(TypeScriptParser.StringLiteral);
				this.state = 882;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importModuleItems(): ImportModuleItemsContext {
		let _localctx: ImportModuleItemsContext = new ImportModuleItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, TypeScriptParser.RULE_importModuleItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 885;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 891;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 886;
					this.importAliasName();
					this.state = 887;
					this.match(TypeScriptParser.Comma);
					}
					}
				}
				this.state = 893;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			}
			this.state = 898;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)))) !== 0)) {
				{
				this.state = 894;
				this.importAliasName();
				this.state = 896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Comma) {
					{
					this.state = 895;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
			}

			this.state = 900;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importAliasName(): ImportAliasNameContext {
		let _localctx: ImportAliasNameContext = new ImportAliasNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, TypeScriptParser.RULE_importAliasName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 902;
			this.moduleExportName();
			this.state = 905;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.As) {
				{
				this.state = 903;
				this.match(TypeScriptParser.As);
				this.state = 904;
				this.importedBinding();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleExportName(): ModuleExportNameContext {
		let _localctx: ModuleExportNameContext = new ModuleExportNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, TypeScriptParser.RULE_moduleExportName);
		try {
			this.state = 909;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.NullLiteral:
			case TypeScriptParser.BooleanLiteral:
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 907;
				this.identifierName();
				}
				break;
			case TypeScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 908;
				this.match(TypeScriptParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importedBinding(): ImportedBindingContext {
		let _localctx: ImportedBindingContext = new ImportedBindingContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, TypeScriptParser.RULE_importedBinding);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 911;
			_la = this._input.LA(1);
			if (!(_la === TypeScriptParser.Await || _la === TypeScriptParser.Yield || _la === TypeScriptParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDefault(): ImportDefaultContext {
		let _localctx: ImportDefaultContext = new ImportDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, TypeScriptParser.RULE_importDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 913;
			this.aliasName();
			this.state = 914;
			this.match(TypeScriptParser.Comma);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importNamespace(): ImportNamespaceContext {
		let _localctx: ImportNamespaceContext = new ImportNamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, TypeScriptParser.RULE_importNamespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 918;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.Multiply:
				{
				this.state = 916;
				this.match(TypeScriptParser.Multiply);
				}
				break;
			case TypeScriptParser.NullLiteral:
			case TypeScriptParser.BooleanLiteral:
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
				{
				this.state = 917;
				this.identifierName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.As) {
				{
				this.state = 920;
				this.match(TypeScriptParser.As);
				this.state = 921;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importFrom(): ImportFromContext {
		let _localctx: ImportFromContext = new ImportFromContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, TypeScriptParser.RULE_importFrom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 924;
			this.match(TypeScriptParser.From);
			this.state = 925;
			this.match(TypeScriptParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasName(): AliasNameContext {
		let _localctx: AliasNameContext = new AliasNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, TypeScriptParser.RULE_aliasName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 927;
			this.identifierName();
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.As) {
				{
				this.state = 928;
				this.match(TypeScriptParser.As);
				this.state = 929;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportStatement(): ExportStatementContext {
		let _localctx: ExportStatementContext = new ExportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, TypeScriptParser.RULE_exportStatement);
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				_localctx = new ExportDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 932;
				this.match(TypeScriptParser.Export);
				this.state = 934;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 933;
					this.match(TypeScriptParser.Default);
					}
					break;
				}
				this.state = 938;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 936;
					this.exportFromBlock();
					}
					break;

				case 2:
					{
					this.state = 937;
					this.declaration();
					}
					break;
				}
				this.state = 940;
				this.eos();
				}
				break;

			case 2:
				_localctx = new ExportDefaultDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 942;
				this.match(TypeScriptParser.Export);
				this.state = 943;
				this.match(TypeScriptParser.Default);
				this.state = 944;
				this.singleExpression(0);
				this.state = 945;
				this.eos();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportFromBlock(): ExportFromBlockContext {
		let _localctx: ExportFromBlockContext = new ExportFromBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, TypeScriptParser.RULE_exportFromBlock);
		try {
			this.state = 959;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.Multiply:
			case TypeScriptParser.NullLiteral:
			case TypeScriptParser.BooleanLiteral:
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 949;
				this.importNamespace();
				this.state = 950;
				this.importFrom();
				this.state = 951;
				this.eos();
				}
				break;
			case TypeScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 953;
				this.exportModuleItems();
				this.state = 955;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 954;
					this.importFrom();
					}
					break;
				}
				this.state = 957;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportModuleItems(): ExportModuleItemsContext {
		let _localctx: ExportModuleItemsContext = new ExportModuleItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, TypeScriptParser.RULE_exportModuleItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 961;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 967;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 962;
					this.exportAliasName();
					this.state = 963;
					this.match(TypeScriptParser.Comma);
					}
					}
				}
				this.state = 969;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			}
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)))) !== 0)) {
				{
				this.state = 970;
				this.exportAliasName();
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Comma) {
					{
					this.state = 971;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
			}

			this.state = 976;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportAliasName(): ExportAliasNameContext {
		let _localctx: ExportAliasNameContext = new ExportAliasNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, TypeScriptParser.RULE_exportAliasName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 978;
			this.moduleExportName();
			this.state = 981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.As) {
				{
				this.state = 979;
				this.match(TypeScriptParser.As);
				this.state = 980;
				this.moduleExportName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, TypeScriptParser.RULE_declaration);
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 983;
				this.variableStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 984;
				this.classDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 985;
				this.functionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, TypeScriptParser.RULE_variableStatement);
		let _la: number;
		try {
			this.state = 1017;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 988;
				this.bindingPattern();
				this.state = 990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Colon) {
					{
					this.state = 989;
					this.typeAnnotation();
					}
				}

				this.state = 992;
				this.initializer();
				this.state = 994;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 993;
					this.match(TypeScriptParser.SemiColon);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (TypeScriptParser.Private - 112)) | (1 << (TypeScriptParser.Public - 112)) | (1 << (TypeScriptParser.Protected - 112)))) !== 0)) {
					{
					this.state = 996;
					this.accessibilityModifier();
					}
				}

				this.state = 1000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Var || _la === TypeScriptParser.Const || _la === TypeScriptParser.Let) {
					{
					this.state = 999;
					this.varModifier();
					}
				}

				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.ReadOnly) {
					{
					this.state = 1002;
					this.match(TypeScriptParser.ReadOnly);
					}
				}

				this.state = 1005;
				this.variableDeclarationList();
				this.state = 1007;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 1006;
					this.match(TypeScriptParser.SemiColon);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1009;
				this.match(TypeScriptParser.Declare);
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Var || _la === TypeScriptParser.Const || _la === TypeScriptParser.Let) {
					{
					this.state = 1010;
					this.varModifier();
					}
				}

				this.state = 1013;
				this.variableDeclarationList();
				this.state = 1015;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1014;
					this.match(TypeScriptParser.SemiColon);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, TypeScriptParser.RULE_variableDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.variableDeclaration();
			this.state = 1024;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1020;
					this.match(TypeScriptParser.Comma);
					this.state = 1021;
					this.variableDeclaration();
					}
					}
				}
				this.state = 1026;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, TypeScriptParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.Async:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
				{
				this.state = 1027;
				this.identifierOrKeyWord();
				}
				break;
			case TypeScriptParser.OpenBracket:
				{
				this.state = 1028;
				this.arrayLiteral();
				}
				break;
			case TypeScriptParser.OpenBrace:
				{
				this.state = 1029;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1032;
				this.typeAnnotation();
				}
				break;
			}
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1035;
				this.singleExpression(0);
				}
				break;
			}
			this.state = 1043;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1038;
				this.match(TypeScriptParser.Assign);
				this.state = 1040;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1039;
					this.typeParameters();
					}
					break;
				}
				this.state = 1042;
				this.singleExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let _localctx: EmptyStatement_Context = new EmptyStatement_Context(this._ctx, this.state);
		this.enterRule(_localctx, 162, TypeScriptParser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1045;
			this.match(TypeScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, TypeScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			if (!(this.notOpenBraceAndNotFunction())) {
				throw this.createFailedPredicateException("this.notOpenBraceAndNotFunction()");
			}
			this.state = 1048;
			this.expressionSequence();
			this.state = 1050;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1049;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, TypeScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			this.match(TypeScriptParser.If);
			this.state = 1053;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1054;
			this.expressionSequence();
			this.state = 1055;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1056;
			this.statement();
			this.state = 1059;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1057;
				this.match(TypeScriptParser.Else);
				this.state = 1058;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, TypeScriptParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 1155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1061;
				this.match(TypeScriptParser.Do);
				this.state = 1062;
				this.statement();
				this.state = 1063;
				this.match(TypeScriptParser.While);
				this.state = 1064;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1065;
				this.expressionSequence();
				this.state = 1066;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1067;
				this.eos();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1069;
				this.match(TypeScriptParser.While);
				this.state = 1070;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1071;
				this.expressionSequence();
				this.state = 1072;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1073;
				this.statement();
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1075;
				this.match(TypeScriptParser.For);
				this.state = 1076;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (TypeScriptParser.RegularExpressionLiteral - 3)) | (1 << (TypeScriptParser.OpenBracket - 3)) | (1 << (TypeScriptParser.OpenParen - 3)) | (1 << (TypeScriptParser.OpenBrace - 3)) | (1 << (TypeScriptParser.PlusPlus - 3)) | (1 << (TypeScriptParser.MinusMinus - 3)) | (1 << (TypeScriptParser.Plus - 3)) | (1 << (TypeScriptParser.Minus - 3)) | (1 << (TypeScriptParser.BitNot - 3)) | (1 << (TypeScriptParser.Not - 3)) | (1 << (TypeScriptParser.LessThan - 3)))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.HexIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigHexIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.YieldStar - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.BackTick - 123)))) !== 0)) {
					{
					this.state = 1077;
					this.expressionSequence();
					}
				}

				this.state = 1080;
				this.match(TypeScriptParser.SemiColon);
				this.state = 1082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (TypeScriptParser.RegularExpressionLiteral - 3)) | (1 << (TypeScriptParser.OpenBracket - 3)) | (1 << (TypeScriptParser.OpenParen - 3)) | (1 << (TypeScriptParser.OpenBrace - 3)) | (1 << (TypeScriptParser.PlusPlus - 3)) | (1 << (TypeScriptParser.MinusMinus - 3)) | (1 << (TypeScriptParser.Plus - 3)) | (1 << (TypeScriptParser.Minus - 3)) | (1 << (TypeScriptParser.BitNot - 3)) | (1 << (TypeScriptParser.Not - 3)) | (1 << (TypeScriptParser.LessThan - 3)))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.HexIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigHexIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.YieldStar - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.BackTick - 123)))) !== 0)) {
					{
					this.state = 1081;
					this.expressionSequence();
					}
				}

				this.state = 1084;
				this.match(TypeScriptParser.SemiColon);
				this.state = 1086;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (TypeScriptParser.RegularExpressionLiteral - 3)) | (1 << (TypeScriptParser.OpenBracket - 3)) | (1 << (TypeScriptParser.OpenParen - 3)) | (1 << (TypeScriptParser.OpenBrace - 3)) | (1 << (TypeScriptParser.PlusPlus - 3)) | (1 << (TypeScriptParser.MinusMinus - 3)) | (1 << (TypeScriptParser.Plus - 3)) | (1 << (TypeScriptParser.Minus - 3)) | (1 << (TypeScriptParser.BitNot - 3)) | (1 << (TypeScriptParser.Not - 3)) | (1 << (TypeScriptParser.LessThan - 3)))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.HexIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigHexIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.YieldStar - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.BackTick - 123)))) !== 0)) {
					{
					this.state = 1085;
					this.expressionSequence();
					}
				}

				this.state = 1088;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1089;
				this.statement();
				}
				break;

			case 4:
				_localctx = new ForVarStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1090;
				this.match(TypeScriptParser.For);
				this.state = 1091;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1092;
				this.varModifier();
				this.state = 1093;
				this.variableDeclarationList();
				this.state = 1094;
				this.match(TypeScriptParser.SemiColon);
				this.state = 1096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (TypeScriptParser.RegularExpressionLiteral - 3)) | (1 << (TypeScriptParser.OpenBracket - 3)) | (1 << (TypeScriptParser.OpenParen - 3)) | (1 << (TypeScriptParser.OpenBrace - 3)) | (1 << (TypeScriptParser.PlusPlus - 3)) | (1 << (TypeScriptParser.MinusMinus - 3)) | (1 << (TypeScriptParser.Plus - 3)) | (1 << (TypeScriptParser.Minus - 3)) | (1 << (TypeScriptParser.BitNot - 3)) | (1 << (TypeScriptParser.Not - 3)) | (1 << (TypeScriptParser.LessThan - 3)))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.HexIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigHexIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.YieldStar - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.BackTick - 123)))) !== 0)) {
					{
					this.state = 1095;
					this.expressionSequence();
					}
				}

				this.state = 1098;
				this.match(TypeScriptParser.SemiColon);
				this.state = 1100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (TypeScriptParser.RegularExpressionLiteral - 3)) | (1 << (TypeScriptParser.OpenBracket - 3)) | (1 << (TypeScriptParser.OpenParen - 3)) | (1 << (TypeScriptParser.OpenBrace - 3)) | (1 << (TypeScriptParser.PlusPlus - 3)) | (1 << (TypeScriptParser.MinusMinus - 3)) | (1 << (TypeScriptParser.Plus - 3)) | (1 << (TypeScriptParser.Minus - 3)) | (1 << (TypeScriptParser.BitNot - 3)) | (1 << (TypeScriptParser.Not - 3)) | (1 << (TypeScriptParser.LessThan - 3)))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.HexIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigHexIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.YieldStar - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.BackTick - 123)))) !== 0)) {
					{
					this.state = 1099;
					this.expressionSequence();
					}
				}

				this.state = 1102;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1103;
				this.statement();
				}
				break;

			case 5:
				_localctx = new ForInStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1105;
				this.match(TypeScriptParser.For);
				this.state = 1106;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1107;
				this.singleExpression(0);
				this.state = 1108;
				this.match(TypeScriptParser.In);
				this.state = 1109;
				this.expressionSequence();
				this.state = 1110;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1111;
				this.statement();
				}
				break;

			case 6:
				_localctx = new ForVarInStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1113;
				this.match(TypeScriptParser.For);
				this.state = 1114;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1115;
				this.varModifier();
				this.state = 1116;
				this.variableDeclaration();
				this.state = 1117;
				this.match(TypeScriptParser.In);
				this.state = 1118;
				this.expressionSequence();
				this.state = 1119;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1120;
				this.statement();
				}
				break;

			case 7:
				_localctx = new ForOfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1122;
				this.match(TypeScriptParser.For);
				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Await) {
					{
					this.state = 1123;
					this.match(TypeScriptParser.Await);
					}
				}

				this.state = 1126;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1127;
				this.singleExpression(0);
				this.state = 1128;
				this.identifier();
				this.state = 1129;
				if (!(this.p("of"))) {
					throw this.createFailedPredicateException("this.p(\"of\")");
				}
				this.state = 1130;
				this.expressionSequence();
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.As) {
					{
					this.state = 1131;
					this.match(TypeScriptParser.As);
					this.state = 1132;
					this.type_();
					}
				}

				this.state = 1135;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1136;
				this.statement();
				}
				break;

			case 8:
				_localctx = new ForVarOfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1138;
				this.match(TypeScriptParser.For);
				this.state = 1140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Await) {
					{
					this.state = 1139;
					this.match(TypeScriptParser.Await);
					}
				}

				this.state = 1142;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1143;
				this.varModifier();
				this.state = 1144;
				this.variableDeclaration();
				this.state = 1145;
				this.identifier();
				this.state = 1146;
				if (!(this.p("of"))) {
					throw this.createFailedPredicateException("this.p(\"of\")");
				}
				this.state = 1147;
				this.expressionSequence();
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.As) {
					{
					this.state = 1148;
					this.match(TypeScriptParser.As);
					this.state = 1149;
					this.type_();
					}
				}

				this.state = 1152;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1153;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varModifier(): VarModifierContext {
		let _localctx: VarModifierContext = new VarModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, TypeScriptParser.RULE_varModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1157;
			_la = this._input.LA(1);
			if (!(_la === TypeScriptParser.Var || _la === TypeScriptParser.Const || _la === TypeScriptParser.Let)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, TypeScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1159;
			this.match(TypeScriptParser.Continue);
			this.state = 1162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1160;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 1161;
				this.identifier();
				}
				break;
			}
			this.state = 1164;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, TypeScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.match(TypeScriptParser.Break);
			this.state = 1169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1167;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 1168;
				this.identifier();
				}
				break;
			}
			this.state = 1171;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, TypeScriptParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			this.match(TypeScriptParser.Return);
			this.state = 1176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1174;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 1175;
				this.expressionSequence();
				}
				break;
			}
			this.state = 1178;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let _localctx: YieldStatementContext = new YieldStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, TypeScriptParser.RULE_yieldStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1180;
			_la = this._input.LA(1);
			if (!(_la === TypeScriptParser.Yield || _la === TypeScriptParser.YieldStar)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1181;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 1182;
				this.expressionSequence();
				}
				break;
			}
			this.state = 1185;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withStatement(): WithStatementContext {
		let _localctx: WithStatementContext = new WithStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, TypeScriptParser.RULE_withStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1187;
			this.match(TypeScriptParser.With);
			this.state = 1188;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1189;
			this.expressionSequence();
			this.state = 1190;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1191;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, TypeScriptParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1193;
			this.match(TypeScriptParser.Switch);
			this.state = 1194;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1195;
			this.expressionSequence();
			this.state = 1196;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1197;
			this.caseBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let _localctx: CaseBlockContext = new CaseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, TypeScriptParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1199;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Case) {
				{
				this.state = 1200;
				this.caseClauses();
				}
			}

			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Default) {
				{
				this.state = 1203;
				this.defaultClause();
				this.state = 1205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Case) {
					{
					this.state = 1204;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 1209;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClauses(): CaseClausesContext {
		let _localctx: CaseClausesContext = new CaseClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, TypeScriptParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1211;
				this.caseClause();
				}
				}
				this.state = 1214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === TypeScriptParser.Case);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClause(): CaseClauseContext {
		let _localctx: CaseClauseContext = new CaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, TypeScriptParser.RULE_caseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1216;
			this.match(TypeScriptParser.Case);
			this.state = 1217;
			this.expressionSequence();
			this.state = 1218;
			this.match(TypeScriptParser.Colon);
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1219;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let _localctx: DefaultClauseContext = new DefaultClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, TypeScriptParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1222;
			this.match(TypeScriptParser.Default);
			this.state = 1223;
			this.match(TypeScriptParser.Colon);
			this.state = 1225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1224;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelledStatement(): LabelledStatementContext {
		let _localctx: LabelledStatementContext = new LabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, TypeScriptParser.RULE_labelledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1227;
			this.identifier();
			this.state = 1228;
			this.match(TypeScriptParser.Colon);
			this.state = 1229;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, TypeScriptParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1231;
			this.match(TypeScriptParser.Throw);
			this.state = 1232;
			if (!(this.notLineTerminator())) {
				throw this.createFailedPredicateException("this.notLineTerminator()");
			}
			this.state = 1233;
			this.expressionSequence();
			this.state = 1234;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, TypeScriptParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this.match(TypeScriptParser.Try);
			this.state = 1237;
			this.block();
			this.state = 1243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.Catch:
				{
				this.state = 1238;
				this.catchProduction();
				this.state = 1240;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
				case 1:
					{
					this.state = 1239;
					this.finallyProduction();
					}
					break;
				}
				}
				break;
			case TypeScriptParser.Finally:
				{
				this.state = 1242;
				this.finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchProduction(): CatchProductionContext {
		let _localctx: CatchProductionContext = new CatchProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, TypeScriptParser.RULE_catchProduction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1245;
			this.match(TypeScriptParser.Catch);
			this.state = 1253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.OpenParen) {
				{
				this.state = 1246;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1247;
				this.identifier();
				this.state = 1249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Colon) {
					{
					this.state = 1248;
					this.typeAnnotation();
					}
				}

				this.state = 1251;
				this.match(TypeScriptParser.CloseParen);
				}
			}

			this.state = 1255;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyProduction(): FinallyProductionContext {
		let _localctx: FinallyProductionContext = new FinallyProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, TypeScriptParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			this.match(TypeScriptParser.Finally);
			this.state = 1258;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public debuggerStatement(): DebuggerStatementContext {
		let _localctx: DebuggerStatementContext = new DebuggerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, TypeScriptParser.RULE_debuggerStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1260;
			this.match(TypeScriptParser.Debugger);
			this.state = 1261;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, TypeScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Async) {
				{
				this.state = 1263;
				this.match(TypeScriptParser.Async);
				}
			}

			this.state = 1266;
			this.match(TypeScriptParser.Function_);
			this.state = 1268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Multiply) {
				{
				this.state = 1267;
				this.match(TypeScriptParser.Multiply);
				}
			}

			this.state = 1270;
			this.identifier();
			this.state = 1271;
			this.callSignature();
			this.state = 1277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.OpenBrace:
				{
				{
				this.state = 1272;
				this.match(TypeScriptParser.OpenBrace);
				this.state = 1273;
				this.functionBody();
				this.state = 1274;
				this.match(TypeScriptParser.CloseBrace);
				}
				}
				break;
			case TypeScriptParser.SemiColon:
				{
				this.state = 1276;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, TypeScriptParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.At) {
				{
				this.state = 1279;
				this.decoratorList();
				}
			}

			this.state = 1286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Export) {
				{
				this.state = 1282;
				this.match(TypeScriptParser.Export);
				this.state = 1284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Default) {
					{
					this.state = 1283;
					this.match(TypeScriptParser.Default);
					}
				}

				}
			}

			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Abstract) {
				{
				this.state = 1288;
				this.match(TypeScriptParser.Abstract);
				}
			}

			this.state = 1291;
			this.match(TypeScriptParser.Class);
			this.state = 1292;
			this.identifier();
			this.state = 1294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.LessThan) {
				{
				this.state = 1293;
				this.typeParameters();
				}
			}

			this.state = 1296;
			this.classHeritage();
			this.state = 1297;
			this.classTail();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classHeritage(): ClassHeritageContext {
		let _localctx: ClassHeritageContext = new ClassHeritageContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, TypeScriptParser.RULE_classHeritage);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Extends) {
				{
				this.state = 1299;
				this.classExtendsClause();
				}
			}

			this.state = 1303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Implements) {
				{
				this.state = 1302;
				this.implementsClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classTail(): ClassTailContext {
		let _localctx: ClassTailContext = new ClassTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, TypeScriptParser.RULE_classTail);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1305;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1309;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1306;
					this.classElement();
					}
					}
				}
				this.state = 1311;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			}
			this.state = 1312;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classExtendsClause(): ClassExtendsClauseContext {
		let _localctx: ClassExtendsClauseContext = new ClassExtendsClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, TypeScriptParser.RULE_classExtendsClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1314;
			this.match(TypeScriptParser.Extends);
			this.state = 1315;
			this.typeReference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementsClause(): ImplementsClauseContext {
		let _localctx: ImplementsClauseContext = new ImplementsClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, TypeScriptParser.RULE_implementsClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1317;
			this.match(TypeScriptParser.Implements);
			this.state = 1318;
			this.classOrInterfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classElement(): ClassElementContext {
		let _localctx: ClassElementContext = new ClassElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, TypeScriptParser.RULE_classElement);
		try {
			this.state = 1327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1320;
				this.constructorDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1322;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
				case 1:
					{
					this.state = 1321;
					this.decoratorList();
					}
					break;
				}
				this.state = 1324;
				this.propertyMemberDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1325;
				this.indexMemberDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1326;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyMemberDeclaration(): PropertyMemberDeclarationContext {
		let _localctx: PropertyMemberDeclarationContext = new PropertyMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, TypeScriptParser.RULE_propertyMemberDeclaration);
		let _la: number;
		try {
			this.state = 1358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				_localctx = new PropertyDeclarationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1329;
				this.propertyMemberBase();
				this.state = 1330;
				this.propertyName();
				this.state = 1332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.QuestionMark) {
					{
					this.state = 1331;
					this.match(TypeScriptParser.QuestionMark);
					}
				}

				this.state = 1335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Colon) {
					{
					this.state = 1334;
					this.typeAnnotation();
					}
				}

				this.state = 1338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Assign) {
					{
					this.state = 1337;
					this.initializer();
					}
				}

				this.state = 1340;
				this.match(TypeScriptParser.SemiColon);
				}
				break;

			case 2:
				_localctx = new MethodDeclarationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1342;
				this.propertyMemberBase();
				this.state = 1343;
				this.propertyName();
				this.state = 1344;
				this.callSignature();
				this.state = 1350;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TypeScriptParser.OpenBrace:
					{
					{
					this.state = 1345;
					this.match(TypeScriptParser.OpenBrace);
					this.state = 1346;
					this.functionBody();
					this.state = 1347;
					this.match(TypeScriptParser.CloseBrace);
					}
					}
					break;
				case TypeScriptParser.SemiColon:
					{
					this.state = 1349;
					this.match(TypeScriptParser.SemiColon);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				_localctx = new GetterSetterDeclarationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1352;
				this.propertyMemberBase();
				this.state = 1355;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
				case 1:
					{
					this.state = 1353;
					this.getAccessor();
					}
					break;

				case 2:
					{
					this.state = 1354;
					this.setAccessor();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new AbstractMemberDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1357;
				this.abstractDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyMemberBase(): PropertyMemberBaseContext {
		let _localctx: PropertyMemberBaseContext = new PropertyMemberBaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, TypeScriptParser.RULE_propertyMemberBase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				{
				this.state = 1360;
				this.accessibilityModifier();
				}
				break;
			}
			this.state = 1364;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				{
				this.state = 1363;
				this.match(TypeScriptParser.Async);
				}
				break;
			}
			this.state = 1367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				{
				this.state = 1366;
				this.match(TypeScriptParser.Static);
				}
				break;
			}
			this.state = 1370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1369;
				this.match(TypeScriptParser.ReadOnly);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexMemberDeclaration(): IndexMemberDeclarationContext {
		let _localctx: IndexMemberDeclarationContext = new IndexMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, TypeScriptParser.RULE_indexMemberDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1372;
			this.indexSignature();
			this.state = 1373;
			this.match(TypeScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generatorMethod(): GeneratorMethodContext {
		let _localctx: GeneratorMethodContext = new GeneratorMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, TypeScriptParser.RULE_generatorMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				{
				this.state = 1375;
				this.match(TypeScriptParser.Async);
				this.state = 1376;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				}
				break;
			}
			this.state = 1380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Multiply) {
				{
				this.state = 1379;
				this.match(TypeScriptParser.Multiply);
				}
			}

			this.state = 1382;
			this.propertyName();
			this.state = 1383;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (TypeScriptParser.Break - 70)) | (1 << (TypeScriptParser.Do - 70)) | (1 << (TypeScriptParser.Instanceof - 70)) | (1 << (TypeScriptParser.Typeof - 70)) | (1 << (TypeScriptParser.Case - 70)) | (1 << (TypeScriptParser.Else - 70)) | (1 << (TypeScriptParser.New - 70)) | (1 << (TypeScriptParser.Var - 70)) | (1 << (TypeScriptParser.Catch - 70)) | (1 << (TypeScriptParser.Finally - 70)) | (1 << (TypeScriptParser.Return - 70)) | (1 << (TypeScriptParser.Void - 70)) | (1 << (TypeScriptParser.Continue - 70)) | (1 << (TypeScriptParser.For - 70)) | (1 << (TypeScriptParser.Switch - 70)) | (1 << (TypeScriptParser.While - 70)) | (1 << (TypeScriptParser.Debugger - 70)) | (1 << (TypeScriptParser.Function_ - 70)) | (1 << (TypeScriptParser.This - 70)) | (1 << (TypeScriptParser.With - 70)) | (1 << (TypeScriptParser.Default - 70)) | (1 << (TypeScriptParser.If - 70)) | (1 << (TypeScriptParser.Throw - 70)) | (1 << (TypeScriptParser.Delete - 70)) | (1 << (TypeScriptParser.In - 70)) | (1 << (TypeScriptParser.Try - 70)) | (1 << (TypeScriptParser.As - 70)) | (1 << (TypeScriptParser.From - 70)) | (1 << (TypeScriptParser.ReadOnly - 70)) | (1 << (TypeScriptParser.Async - 70)) | (1 << (TypeScriptParser.Await - 70)) | (1 << (TypeScriptParser.Yield - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (TypeScriptParser.Class - 103)) | (1 << (TypeScriptParser.Enum - 103)) | (1 << (TypeScriptParser.Extends - 103)) | (1 << (TypeScriptParser.Super - 103)) | (1 << (TypeScriptParser.Const - 103)) | (1 << (TypeScriptParser.Export - 103)) | (1 << (TypeScriptParser.Import - 103)) | (1 << (TypeScriptParser.Implements - 103)) | (1 << (TypeScriptParser.Let - 103)) | (1 << (TypeScriptParser.Private - 103)) | (1 << (TypeScriptParser.Public - 103)) | (1 << (TypeScriptParser.Interface - 103)) | (1 << (TypeScriptParser.Package - 103)) | (1 << (TypeScriptParser.Protected - 103)) | (1 << (TypeScriptParser.Static - 103)) | (1 << (TypeScriptParser.Any - 103)) | (1 << (TypeScriptParser.Number - 103)) | (1 << (TypeScriptParser.Never - 103)) | (1 << (TypeScriptParser.Boolean - 103)) | (1 << (TypeScriptParser.String - 103)) | (1 << (TypeScriptParser.Unique - 103)) | (1 << (TypeScriptParser.Symbol - 103)) | (1 << (TypeScriptParser.Undefined - 103)) | (1 << (TypeScriptParser.Object - 103)) | (1 << (TypeScriptParser.Of - 103)) | (1 << (TypeScriptParser.KeyOf - 103)) | (1 << (TypeScriptParser.TypeAlias - 103)) | (1 << (TypeScriptParser.Constructor - 103)) | (1 << (TypeScriptParser.Namespace - 103)) | (1 << (TypeScriptParser.Require - 103)) | (1 << (TypeScriptParser.Module - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (TypeScriptParser.Abstract - 135)) | (1 << (TypeScriptParser.At - 135)) | (1 << (TypeScriptParser.Identifier - 135)))) !== 0)) {
				{
				this.state = 1384;
				this.formalParameterList();
				}
			}

			this.state = 1387;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1388;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1389;
			this.functionBody();
			this.state = 1390;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generatorFunctionDeclaration(): GeneratorFunctionDeclarationContext {
		let _localctx: GeneratorFunctionDeclarationContext = new GeneratorFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, TypeScriptParser.RULE_generatorFunctionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Async) {
				{
				this.state = 1392;
				this.match(TypeScriptParser.Async);
				}
			}

			this.state = 1395;
			this.match(TypeScriptParser.Function_);
			this.state = 1396;
			this.match(TypeScriptParser.Multiply);
			this.state = 1398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (TypeScriptParser.As - 96)) | (1 << (TypeScriptParser.From - 96)) | (1 << (TypeScriptParser.Async - 96)) | (1 << (TypeScriptParser.Yield - 96)) | (1 << (TypeScriptParser.Any - 96)) | (1 << (TypeScriptParser.Number - 96)) | (1 << (TypeScriptParser.Never - 96)) | (1 << (TypeScriptParser.Boolean - 96)) | (1 << (TypeScriptParser.String - 96)) | (1 << (TypeScriptParser.Unique - 96)) | (1 << (TypeScriptParser.Symbol - 96)) | (1 << (TypeScriptParser.Undefined - 96)) | (1 << (TypeScriptParser.Object - 96)) | (1 << (TypeScriptParser.Of - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (TypeScriptParser.KeyOf - 128)) | (1 << (TypeScriptParser.TypeAlias - 128)) | (1 << (TypeScriptParser.Constructor - 128)) | (1 << (TypeScriptParser.Namespace - 128)) | (1 << (TypeScriptParser.Abstract - 128)) | (1 << (TypeScriptParser.Identifier - 128)))) !== 0)) {
				{
				this.state = 1397;
				this.identifier();
				}
			}

			this.state = 1400;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (TypeScriptParser.Break - 70)) | (1 << (TypeScriptParser.Do - 70)) | (1 << (TypeScriptParser.Instanceof - 70)) | (1 << (TypeScriptParser.Typeof - 70)) | (1 << (TypeScriptParser.Case - 70)) | (1 << (TypeScriptParser.Else - 70)) | (1 << (TypeScriptParser.New - 70)) | (1 << (TypeScriptParser.Var - 70)) | (1 << (TypeScriptParser.Catch - 70)) | (1 << (TypeScriptParser.Finally - 70)) | (1 << (TypeScriptParser.Return - 70)) | (1 << (TypeScriptParser.Void - 70)) | (1 << (TypeScriptParser.Continue - 70)) | (1 << (TypeScriptParser.For - 70)) | (1 << (TypeScriptParser.Switch - 70)) | (1 << (TypeScriptParser.While - 70)) | (1 << (TypeScriptParser.Debugger - 70)) | (1 << (TypeScriptParser.Function_ - 70)) | (1 << (TypeScriptParser.This - 70)) | (1 << (TypeScriptParser.With - 70)) | (1 << (TypeScriptParser.Default - 70)) | (1 << (TypeScriptParser.If - 70)) | (1 << (TypeScriptParser.Throw - 70)) | (1 << (TypeScriptParser.Delete - 70)) | (1 << (TypeScriptParser.In - 70)) | (1 << (TypeScriptParser.Try - 70)) | (1 << (TypeScriptParser.As - 70)) | (1 << (TypeScriptParser.From - 70)) | (1 << (TypeScriptParser.ReadOnly - 70)) | (1 << (TypeScriptParser.Async - 70)) | (1 << (TypeScriptParser.Await - 70)) | (1 << (TypeScriptParser.Yield - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (TypeScriptParser.Class - 103)) | (1 << (TypeScriptParser.Enum - 103)) | (1 << (TypeScriptParser.Extends - 103)) | (1 << (TypeScriptParser.Super - 103)) | (1 << (TypeScriptParser.Const - 103)) | (1 << (TypeScriptParser.Export - 103)) | (1 << (TypeScriptParser.Import - 103)) | (1 << (TypeScriptParser.Implements - 103)) | (1 << (TypeScriptParser.Let - 103)) | (1 << (TypeScriptParser.Private - 103)) | (1 << (TypeScriptParser.Public - 103)) | (1 << (TypeScriptParser.Interface - 103)) | (1 << (TypeScriptParser.Package - 103)) | (1 << (TypeScriptParser.Protected - 103)) | (1 << (TypeScriptParser.Static - 103)) | (1 << (TypeScriptParser.Any - 103)) | (1 << (TypeScriptParser.Number - 103)) | (1 << (TypeScriptParser.Never - 103)) | (1 << (TypeScriptParser.Boolean - 103)) | (1 << (TypeScriptParser.String - 103)) | (1 << (TypeScriptParser.Unique - 103)) | (1 << (TypeScriptParser.Symbol - 103)) | (1 << (TypeScriptParser.Undefined - 103)) | (1 << (TypeScriptParser.Object - 103)) | (1 << (TypeScriptParser.Of - 103)) | (1 << (TypeScriptParser.KeyOf - 103)) | (1 << (TypeScriptParser.TypeAlias - 103)) | (1 << (TypeScriptParser.Constructor - 103)) | (1 << (TypeScriptParser.Namespace - 103)) | (1 << (TypeScriptParser.Require - 103)) | (1 << (TypeScriptParser.Module - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (TypeScriptParser.Abstract - 135)) | (1 << (TypeScriptParser.At - 135)) | (1 << (TypeScriptParser.Identifier - 135)))) !== 0)) {
				{
				this.state = 1401;
				this.formalParameterList();
				}
			}

			this.state = 1404;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1405;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1406;
			this.functionBody();
			this.state = 1407;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generatorBlock(): GeneratorBlockContext {
		let _localctx: GeneratorBlockContext = new GeneratorBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, TypeScriptParser.RULE_generatorBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1409;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1410;
			this.generatorDefinition();
			this.state = 1415;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1411;
					this.match(TypeScriptParser.Comma);
					this.state = 1412;
					this.generatorDefinition();
					}
					}
				}
				this.state = 1417;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
			}
			this.state = 1419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Comma) {
				{
				this.state = 1418;
				this.match(TypeScriptParser.Comma);
				}
			}

			this.state = 1421;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generatorDefinition(): GeneratorDefinitionContext {
		let _localctx: GeneratorDefinitionContext = new GeneratorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, TypeScriptParser.RULE_generatorDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1423;
			this.match(TypeScriptParser.Multiply);
			this.state = 1424;
			this.iteratorDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iteratorBlock(): IteratorBlockContext {
		let _localctx: IteratorBlockContext = new IteratorBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, TypeScriptParser.RULE_iteratorBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1426;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1427;
			this.iteratorDefinition();
			this.state = 1432;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1428;
					this.match(TypeScriptParser.Comma);
					this.state = 1429;
					this.iteratorDefinition();
					}
					}
				}
				this.state = 1434;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			}
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Comma) {
				{
				this.state = 1435;
				this.match(TypeScriptParser.Comma);
				}
			}

			this.state = 1438;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iteratorDefinition(): IteratorDefinitionContext {
		let _localctx: IteratorDefinitionContext = new IteratorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, TypeScriptParser.RULE_iteratorDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1440;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 1441;
			this.singleExpression(0);
			this.state = 1442;
			this.match(TypeScriptParser.CloseBracket);
			this.state = 1443;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (TypeScriptParser.Break - 70)) | (1 << (TypeScriptParser.Do - 70)) | (1 << (TypeScriptParser.Instanceof - 70)) | (1 << (TypeScriptParser.Typeof - 70)) | (1 << (TypeScriptParser.Case - 70)) | (1 << (TypeScriptParser.Else - 70)) | (1 << (TypeScriptParser.New - 70)) | (1 << (TypeScriptParser.Var - 70)) | (1 << (TypeScriptParser.Catch - 70)) | (1 << (TypeScriptParser.Finally - 70)) | (1 << (TypeScriptParser.Return - 70)) | (1 << (TypeScriptParser.Void - 70)) | (1 << (TypeScriptParser.Continue - 70)) | (1 << (TypeScriptParser.For - 70)) | (1 << (TypeScriptParser.Switch - 70)) | (1 << (TypeScriptParser.While - 70)) | (1 << (TypeScriptParser.Debugger - 70)) | (1 << (TypeScriptParser.Function_ - 70)) | (1 << (TypeScriptParser.This - 70)) | (1 << (TypeScriptParser.With - 70)) | (1 << (TypeScriptParser.Default - 70)) | (1 << (TypeScriptParser.If - 70)) | (1 << (TypeScriptParser.Throw - 70)) | (1 << (TypeScriptParser.Delete - 70)) | (1 << (TypeScriptParser.In - 70)) | (1 << (TypeScriptParser.Try - 70)) | (1 << (TypeScriptParser.As - 70)) | (1 << (TypeScriptParser.From - 70)) | (1 << (TypeScriptParser.ReadOnly - 70)) | (1 << (TypeScriptParser.Async - 70)) | (1 << (TypeScriptParser.Await - 70)) | (1 << (TypeScriptParser.Yield - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (TypeScriptParser.Class - 103)) | (1 << (TypeScriptParser.Enum - 103)) | (1 << (TypeScriptParser.Extends - 103)) | (1 << (TypeScriptParser.Super - 103)) | (1 << (TypeScriptParser.Const - 103)) | (1 << (TypeScriptParser.Export - 103)) | (1 << (TypeScriptParser.Import - 103)) | (1 << (TypeScriptParser.Implements - 103)) | (1 << (TypeScriptParser.Let - 103)) | (1 << (TypeScriptParser.Private - 103)) | (1 << (TypeScriptParser.Public - 103)) | (1 << (TypeScriptParser.Interface - 103)) | (1 << (TypeScriptParser.Package - 103)) | (1 << (TypeScriptParser.Protected - 103)) | (1 << (TypeScriptParser.Static - 103)) | (1 << (TypeScriptParser.Any - 103)) | (1 << (TypeScriptParser.Number - 103)) | (1 << (TypeScriptParser.Never - 103)) | (1 << (TypeScriptParser.Boolean - 103)) | (1 << (TypeScriptParser.String - 103)) | (1 << (TypeScriptParser.Unique - 103)) | (1 << (TypeScriptParser.Symbol - 103)) | (1 << (TypeScriptParser.Undefined - 103)) | (1 << (TypeScriptParser.Object - 103)) | (1 << (TypeScriptParser.Of - 103)) | (1 << (TypeScriptParser.KeyOf - 103)) | (1 << (TypeScriptParser.TypeAlias - 103)) | (1 << (TypeScriptParser.Constructor - 103)) | (1 << (TypeScriptParser.Namespace - 103)) | (1 << (TypeScriptParser.Require - 103)) | (1 << (TypeScriptParser.Module - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (TypeScriptParser.Abstract - 135)) | (1 << (TypeScriptParser.At - 135)) | (1 << (TypeScriptParser.Identifier - 135)))) !== 0)) {
				{
				this.state = 1444;
				this.formalParameterList();
				}
			}

			this.state = 1447;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1448;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1449;
			this.functionBody();
			this.state = 1450;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classElementName(): ClassElementNameContext {
		let _localctx: ClassElementNameContext = new ClassElementNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, TypeScriptParser.RULE_classElementName);
		try {
			this.state = 1454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.OpenBracket:
			case TypeScriptParser.NullLiteral:
			case TypeScriptParser.BooleanLiteral:
			case TypeScriptParser.DecimalLiteral:
			case TypeScriptParser.HexIntegerLiteral:
			case TypeScriptParser.OctalIntegerLiteral:
			case TypeScriptParser.OctalIntegerLiteral2:
			case TypeScriptParser.BinaryIntegerLiteral:
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
			case TypeScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1452;
				this.propertyName();
				}
				break;
			case TypeScriptParser.Hashtag:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1453;
				this.privateIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public privateIdentifier(): PrivateIdentifierContext {
		let _localctx: PrivateIdentifierContext = new PrivateIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, TypeScriptParser.RULE_privateIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1456;
			this.match(TypeScriptParser.Hashtag);
			this.state = 1457;
			this.identifierName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, TypeScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1459;
				this.formalParameterArg();
				this.state = 1464;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1460;
						this.match(TypeScriptParser.Comma);
						this.state = 1461;
						this.formalParameterArg();
						}
						}
					}
					this.state = 1466;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
				}
				this.state = 1469;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
				case 1:
					{
					this.state = 1467;
					this.match(TypeScriptParser.Comma);
					this.state = 1468;
					this.lastFormalParameterArg();
					}
					break;
				}
				this.state = 1472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Comma) {
					{
					this.state = 1471;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1474;
				this.lastFormalParameterArg();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1475;
				this.arrayLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1476;
				this.objectLiteral();
				this.state = 1479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Colon) {
					{
					this.state = 1477;
					this.match(TypeScriptParser.Colon);
					this.state = 1478;
					this.formalParameterList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterArg(): FormalParameterArgContext {
		let _localctx: FormalParameterArgContext = new FormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, TypeScriptParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.At) {
				{
				this.state = 1483;
				this.decorator();
				}
			}

			this.state = 1487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				{
				this.state = 1486;
				this.accessibilityModifier();
				}
				break;
			}
			this.state = 1489;
			this.assignable();
			this.state = 1491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.QuestionMark) {
				{
				this.state = 1490;
				this.match(TypeScriptParser.QuestionMark);
				}
			}

			this.state = 1494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Colon) {
				{
				this.state = 1493;
				this.typeAnnotation();
				}
			}

			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Assign) {
				{
				this.state = 1496;
				this.match(TypeScriptParser.Assign);
				this.state = 1497;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		let _localctx: LastFormalParameterArgContext = new LastFormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, TypeScriptParser.RULE_lastFormalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1500;
			this.match(TypeScriptParser.Ellipsis);
			this.state = 1501;
			this.identifier();
			this.state = 1503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Colon) {
				{
				this.state = 1502;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, TypeScriptParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				{
				this.state = 1505;
				this.sourceElements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let _localctx: SourceElementsContext = new SourceElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, TypeScriptParser.RULE_sourceElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1509;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1508;
					this.sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1511;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, TypeScriptParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1513;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 1514;
			this.elementList();
			this.state = 1515;
			this.match(TypeScriptParser.CloseBracket);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, TypeScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1520;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1517;
					this.match(TypeScriptParser.Comma);
					}
					}
				}
				this.state = 1522;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
			}
			this.state = 1524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (TypeScriptParser.RegularExpressionLiteral - 3)) | (1 << (TypeScriptParser.OpenBracket - 3)) | (1 << (TypeScriptParser.OpenParen - 3)) | (1 << (TypeScriptParser.OpenBrace - 3)) | (1 << (TypeScriptParser.Ellipsis - 3)) | (1 << (TypeScriptParser.PlusPlus - 3)) | (1 << (TypeScriptParser.MinusMinus - 3)) | (1 << (TypeScriptParser.Plus - 3)) | (1 << (TypeScriptParser.Minus - 3)) | (1 << (TypeScriptParser.BitNot - 3)) | (1 << (TypeScriptParser.Not - 3)) | (1 << (TypeScriptParser.LessThan - 3)))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.HexIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigHexIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.YieldStar - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.BackTick - 123)))) !== 0)) {
				{
				this.state = 1523;
				this.arrayElement();
				}
			}

			this.state = 1534;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1527;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1526;
						this.match(TypeScriptParser.Comma);
						}
						}
						this.state = 1529;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === TypeScriptParser.Comma);
					this.state = 1531;
					this.arrayElement();
					}
					}
				}
				this.state = 1536;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
			}
			this.state = 1540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeScriptParser.Comma) {
				{
				{
				this.state = 1537;
				this.match(TypeScriptParser.Comma);
				}
				}
				this.state = 1542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayElement(): ArrayElementContext {
		let _localctx: ArrayElementContext = new ArrayElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, TypeScriptParser.RULE_arrayElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Ellipsis) {
				{
				this.state = 1543;
				this.match(TypeScriptParser.Ellipsis);
				}
			}

			this.state = 1548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				{
				this.state = 1546;
				this.singleExpression(0);
				}
				break;

			case 2:
				{
				this.state = 1547;
				this.identifier();
				}
				break;
			}
			this.state = 1551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				{
				this.state = 1550;
				this.match(TypeScriptParser.Comma);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, TypeScriptParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1553;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				{
				this.state = 1554;
				this.propertyAssignment();
				this.state = 1559;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1555;
						this.match(TypeScriptParser.Comma);
						this.state = 1556;
						this.propertyAssignment();
						}
						}
					}
					this.state = 1561;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
				}
				this.state = 1563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Comma) {
					{
					this.state = 1562;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
				break;
			}
			this.state = 1567;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, TypeScriptParser.RULE_propertyAssignment);
		let _la: number;
		try {
			this.state = 1588;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				_localctx = new PropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1569;
				this.propertyName();
				this.state = 1570;
				_la = this._input.LA(1);
				if (!(_la === TypeScriptParser.Assign || _la === TypeScriptParser.Colon)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1571;
				this.singleExpression(0);
				}
				break;

			case 2:
				_localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1573;
				this.match(TypeScriptParser.OpenBracket);
				this.state = 1574;
				this.singleExpression(0);
				this.state = 1575;
				this.match(TypeScriptParser.CloseBracket);
				this.state = 1576;
				this.match(TypeScriptParser.Colon);
				this.state = 1577;
				this.singleExpression(0);
				}
				break;

			case 3:
				_localctx = new PropertyGetterContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1579;
				this.getAccessor();
				}
				break;

			case 4:
				_localctx = new PropertySetterContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1580;
				this.setAccessor();
				}
				break;

			case 5:
				_localctx = new MethodPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1581;
				this.generatorMethod();
				}
				break;

			case 6:
				_localctx = new PropertyShorthandContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1582;
				this.identifierOrKeyWord();
				}
				break;

			case 7:
				_localctx = new SpreadOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Ellipsis) {
					{
					this.state = 1583;
					this.match(TypeScriptParser.Ellipsis);
					}
				}

				this.state = 1586;
				this.singleExpression(0);
				}
				break;

			case 8:
				_localctx = new RestParameterInObjectContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1587;
				this.restParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getAccessor(): GetAccessorContext {
		let _localctx: GetAccessorContext = new GetAccessorContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, TypeScriptParser.RULE_getAccessor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1590;
			this.getter();
			this.state = 1591;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1592;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Colon) {
				{
				this.state = 1593;
				this.typeAnnotation();
				}
			}

			this.state = 1596;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1597;
			this.functionBody();
			this.state = 1598;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setAccessor(): SetAccessorContext {
		let _localctx: SetAccessorContext = new SetAccessorContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, TypeScriptParser.RULE_setAccessor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1600;
			this.setter();
			this.state = 1601;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (TypeScriptParser.Break - 70)) | (1 << (TypeScriptParser.Do - 70)) | (1 << (TypeScriptParser.Instanceof - 70)) | (1 << (TypeScriptParser.Typeof - 70)) | (1 << (TypeScriptParser.Case - 70)) | (1 << (TypeScriptParser.Else - 70)) | (1 << (TypeScriptParser.New - 70)) | (1 << (TypeScriptParser.Var - 70)) | (1 << (TypeScriptParser.Catch - 70)) | (1 << (TypeScriptParser.Finally - 70)) | (1 << (TypeScriptParser.Return - 70)) | (1 << (TypeScriptParser.Void - 70)) | (1 << (TypeScriptParser.Continue - 70)) | (1 << (TypeScriptParser.For - 70)) | (1 << (TypeScriptParser.Switch - 70)) | (1 << (TypeScriptParser.While - 70)) | (1 << (TypeScriptParser.Debugger - 70)) | (1 << (TypeScriptParser.Function_ - 70)) | (1 << (TypeScriptParser.This - 70)) | (1 << (TypeScriptParser.With - 70)) | (1 << (TypeScriptParser.Default - 70)) | (1 << (TypeScriptParser.If - 70)) | (1 << (TypeScriptParser.Throw - 70)) | (1 << (TypeScriptParser.Delete - 70)) | (1 << (TypeScriptParser.In - 70)) | (1 << (TypeScriptParser.Try - 70)) | (1 << (TypeScriptParser.As - 70)) | (1 << (TypeScriptParser.From - 70)) | (1 << (TypeScriptParser.ReadOnly - 70)) | (1 << (TypeScriptParser.Async - 70)) | (1 << (TypeScriptParser.Await - 70)) | (1 << (TypeScriptParser.Yield - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (TypeScriptParser.Class - 103)) | (1 << (TypeScriptParser.Enum - 103)) | (1 << (TypeScriptParser.Extends - 103)) | (1 << (TypeScriptParser.Super - 103)) | (1 << (TypeScriptParser.Const - 103)) | (1 << (TypeScriptParser.Export - 103)) | (1 << (TypeScriptParser.Import - 103)) | (1 << (TypeScriptParser.Implements - 103)) | (1 << (TypeScriptParser.Let - 103)) | (1 << (TypeScriptParser.Private - 103)) | (1 << (TypeScriptParser.Public - 103)) | (1 << (TypeScriptParser.Interface - 103)) | (1 << (TypeScriptParser.Package - 103)) | (1 << (TypeScriptParser.Protected - 103)) | (1 << (TypeScriptParser.Static - 103)) | (1 << (TypeScriptParser.Any - 103)) | (1 << (TypeScriptParser.Number - 103)) | (1 << (TypeScriptParser.Never - 103)) | (1 << (TypeScriptParser.Boolean - 103)) | (1 << (TypeScriptParser.String - 103)) | (1 << (TypeScriptParser.Unique - 103)) | (1 << (TypeScriptParser.Symbol - 103)) | (1 << (TypeScriptParser.Undefined - 103)) | (1 << (TypeScriptParser.Object - 103)) | (1 << (TypeScriptParser.Of - 103)) | (1 << (TypeScriptParser.KeyOf - 103)) | (1 << (TypeScriptParser.TypeAlias - 103)) | (1 << (TypeScriptParser.Constructor - 103)) | (1 << (TypeScriptParser.Namespace - 103)) | (1 << (TypeScriptParser.Require - 103)) | (1 << (TypeScriptParser.Module - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (TypeScriptParser.Abstract - 135)) | (1 << (TypeScriptParser.At - 135)) | (1 << (TypeScriptParser.Identifier - 135)))) !== 0)) {
				{
				this.state = 1602;
				this.formalParameterList();
				}
			}

			this.state = 1605;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1606;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1607;
			this.functionBody();
			this.state = 1608;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, TypeScriptParser.RULE_propertyName);
		try {
			this.state = 1617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.NullLiteral:
			case TypeScriptParser.BooleanLiteral:
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1610;
				this.identifierName();
				}
				break;
			case TypeScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1611;
				this.match(TypeScriptParser.StringLiteral);
				}
				break;
			case TypeScriptParser.DecimalLiteral:
			case TypeScriptParser.HexIntegerLiteral:
			case TypeScriptParser.OctalIntegerLiteral:
			case TypeScriptParser.OctalIntegerLiteral2:
			case TypeScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1612;
				this.numericLiteral();
				}
				break;
			case TypeScriptParser.OpenBracket:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1613;
				this.match(TypeScriptParser.OpenBracket);
				this.state = 1614;
				this.singleExpression(0);
				this.state = 1615;
				this.match(TypeScriptParser.CloseBracket);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, TypeScriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1619;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (TypeScriptParser.RegularExpressionLiteral - 3)) | (1 << (TypeScriptParser.OpenBracket - 3)) | (1 << (TypeScriptParser.OpenParen - 3)) | (1 << (TypeScriptParser.OpenBrace - 3)) | (1 << (TypeScriptParser.Ellipsis - 3)) | (1 << (TypeScriptParser.PlusPlus - 3)) | (1 << (TypeScriptParser.MinusMinus - 3)) | (1 << (TypeScriptParser.Plus - 3)) | (1 << (TypeScriptParser.Minus - 3)) | (1 << (TypeScriptParser.BitNot - 3)) | (1 << (TypeScriptParser.Not - 3)) | (1 << (TypeScriptParser.LessThan - 3)))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (TypeScriptParser.NullLiteral - 59)) | (1 << (TypeScriptParser.BooleanLiteral - 59)) | (1 << (TypeScriptParser.DecimalLiteral - 59)) | (1 << (TypeScriptParser.HexIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigHexIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (TypeScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (TypeScriptParser.Break - 59)) | (1 << (TypeScriptParser.Do - 59)) | (1 << (TypeScriptParser.Instanceof - 59)) | (1 << (TypeScriptParser.Typeof - 59)) | (1 << (TypeScriptParser.Case - 59)) | (1 << (TypeScriptParser.Else - 59)) | (1 << (TypeScriptParser.New - 59)) | (1 << (TypeScriptParser.Var - 59)) | (1 << (TypeScriptParser.Catch - 59)) | (1 << (TypeScriptParser.Finally - 59)) | (1 << (TypeScriptParser.Return - 59)) | (1 << (TypeScriptParser.Void - 59)) | (1 << (TypeScriptParser.Continue - 59)) | (1 << (TypeScriptParser.For - 59)) | (1 << (TypeScriptParser.Switch - 59)) | (1 << (TypeScriptParser.While - 59)) | (1 << (TypeScriptParser.Debugger - 59)) | (1 << (TypeScriptParser.Function_ - 59)) | (1 << (TypeScriptParser.This - 59)) | (1 << (TypeScriptParser.With - 59)) | (1 << (TypeScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (TypeScriptParser.If - 91)) | (1 << (TypeScriptParser.Throw - 91)) | (1 << (TypeScriptParser.Delete - 91)) | (1 << (TypeScriptParser.In - 91)) | (1 << (TypeScriptParser.Try - 91)) | (1 << (TypeScriptParser.As - 91)) | (1 << (TypeScriptParser.From - 91)) | (1 << (TypeScriptParser.ReadOnly - 91)) | (1 << (TypeScriptParser.Async - 91)) | (1 << (TypeScriptParser.Await - 91)) | (1 << (TypeScriptParser.Yield - 91)) | (1 << (TypeScriptParser.YieldStar - 91)) | (1 << (TypeScriptParser.Class - 91)) | (1 << (TypeScriptParser.Enum - 91)) | (1 << (TypeScriptParser.Extends - 91)) | (1 << (TypeScriptParser.Super - 91)) | (1 << (TypeScriptParser.Const - 91)) | (1 << (TypeScriptParser.Export - 91)) | (1 << (TypeScriptParser.Import - 91)) | (1 << (TypeScriptParser.Implements - 91)) | (1 << (TypeScriptParser.Let - 91)) | (1 << (TypeScriptParser.Private - 91)) | (1 << (TypeScriptParser.Public - 91)) | (1 << (TypeScriptParser.Interface - 91)) | (1 << (TypeScriptParser.Package - 91)) | (1 << (TypeScriptParser.Protected - 91)) | (1 << (TypeScriptParser.Static - 91)) | (1 << (TypeScriptParser.Any - 91)) | (1 << (TypeScriptParser.Number - 91)) | (1 << (TypeScriptParser.Never - 91)) | (1 << (TypeScriptParser.Boolean - 91)) | (1 << (TypeScriptParser.String - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TypeScriptParser.Unique - 123)) | (1 << (TypeScriptParser.Symbol - 123)) | (1 << (TypeScriptParser.Undefined - 123)) | (1 << (TypeScriptParser.Object - 123)) | (1 << (TypeScriptParser.Of - 123)) | (1 << (TypeScriptParser.KeyOf - 123)) | (1 << (TypeScriptParser.TypeAlias - 123)) | (1 << (TypeScriptParser.Constructor - 123)) | (1 << (TypeScriptParser.Namespace - 123)) | (1 << (TypeScriptParser.Require - 123)) | (1 << (TypeScriptParser.Module - 123)) | (1 << (TypeScriptParser.Abstract - 123)) | (1 << (TypeScriptParser.Identifier - 123)) | (1 << (TypeScriptParser.StringLiteral - 123)) | (1 << (TypeScriptParser.BackTick - 123)))) !== 0)) {
				{
				this.state = 1620;
				this.argumentList();
				this.state = 1622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Comma) {
					{
					this.state = 1621;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
			}

			this.state = 1626;
			this.match(TypeScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, TypeScriptParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1628;
			this.argument();
			this.state = 1633;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1629;
					this.match(TypeScriptParser.Comma);
					this.state = 1630;
					this.argument();
					}
					}
				}
				this.state = 1635;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, TypeScriptParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Ellipsis) {
				{
				this.state = 1636;
				this.match(TypeScriptParser.Ellipsis);
				}
			}

			this.state = 1641;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 1639;
				this.singleExpression(0);
				}
				break;

			case 2:
				{
				this.state = 1640;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, TypeScriptParser.RULE_expressionSequence);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1643;
			this.singleExpression(0);
			this.state = 1648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1644;
					this.match(TypeScriptParser.Comma);
					this.state = 1645;
					this.singleExpression(0);
					}
					}
				}
				this.state = 1650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 274;
		this.enterRecursionRule(_localctx, 274, TypeScriptParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1652;
				this.anonymousFunction();
				}
				break;

			case 2:
				{
				_localctx = new ClassExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1653;
				this.match(TypeScriptParser.Class);
				this.state = 1655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (TypeScriptParser.As - 96)) | (1 << (TypeScriptParser.From - 96)) | (1 << (TypeScriptParser.Async - 96)) | (1 << (TypeScriptParser.Yield - 96)) | (1 << (TypeScriptParser.Any - 96)) | (1 << (TypeScriptParser.Number - 96)) | (1 << (TypeScriptParser.Never - 96)) | (1 << (TypeScriptParser.Boolean - 96)) | (1 << (TypeScriptParser.String - 96)) | (1 << (TypeScriptParser.Unique - 96)) | (1 << (TypeScriptParser.Symbol - 96)) | (1 << (TypeScriptParser.Undefined - 96)) | (1 << (TypeScriptParser.Object - 96)) | (1 << (TypeScriptParser.Of - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (TypeScriptParser.KeyOf - 128)) | (1 << (TypeScriptParser.TypeAlias - 128)) | (1 << (TypeScriptParser.Constructor - 128)) | (1 << (TypeScriptParser.Namespace - 128)) | (1 << (TypeScriptParser.Abstract - 128)) | (1 << (TypeScriptParser.Identifier - 128)))) !== 0)) {
					{
					this.state = 1654;
					this.identifier();
					}
				}

				this.state = 1658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.LessThan) {
					{
					this.state = 1657;
					this.typeParameters();
					}
				}

				this.state = 1660;
				this.classHeritage();
				this.state = 1661;
				this.classTail();
				}
				break;

			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1663;
				this.match(TypeScriptParser.New);
				this.state = 1664;
				this.singleExpression(0);
				this.state = 1666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.LessThan) {
					{
					this.state = 1665;
					this.typeArguments();
					}
				}

				this.state = 1668;
				this.arguments();
				}
				break;

			case 4:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1670;
				this.match(TypeScriptParser.New);
				this.state = 1671;
				this.singleExpression(0);
				this.state = 1673;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
				case 1:
					{
					this.state = 1672;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 5:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1675;
				this.match(TypeScriptParser.Delete);
				this.state = 1676;
				this.singleExpression(42);
				}
				break;

			case 6:
				{
				_localctx = new VoidExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1677;
				this.match(TypeScriptParser.Void);
				this.state = 1678;
				this.singleExpression(41);
				}
				break;

			case 7:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1679;
				this.match(TypeScriptParser.Typeof);
				this.state = 1680;
				this.singleExpression(40);
				}
				break;

			case 8:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1681;
				this.match(TypeScriptParser.PlusPlus);
				this.state = 1682;
				this.singleExpression(39);
				}
				break;

			case 9:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1683;
				this.match(TypeScriptParser.MinusMinus);
				this.state = 1684;
				this.singleExpression(38);
				}
				break;

			case 10:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1685;
				this.match(TypeScriptParser.Plus);
				this.state = 1686;
				this.singleExpression(37);
				}
				break;

			case 11:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1687;
				this.match(TypeScriptParser.Minus);
				this.state = 1688;
				this.singleExpression(36);
				}
				break;

			case 12:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1689;
				this.match(TypeScriptParser.BitNot);
				this.state = 1690;
				this.singleExpression(35);
				}
				break;

			case 13:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1691;
				this.match(TypeScriptParser.Not);
				this.state = 1692;
				this.singleExpression(34);
				}
				break;

			case 14:
				{
				_localctx = new AwaitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1693;
				this.match(TypeScriptParser.Await);
				this.state = 1694;
				this.singleExpression(33);
				}
				break;

			case 15:
				{
				_localctx = new IteratorsExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1695;
				this.iteratorBlock();
				}
				break;

			case 16:
				{
				_localctx = new GeneratorsExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1696;
				this.generatorBlock();
				}
				break;

			case 17:
				{
				_localctx = new GeneratorsFunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1697;
				this.generatorFunctionDeclaration();
				}
				break;

			case 18:
				{
				_localctx = new YieldExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1698;
				this.yieldStatement();
				}
				break;

			case 19:
				{
				_localctx = new ThisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1699;
				this.match(TypeScriptParser.This);
				}
				break;

			case 20:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1700;
				this.identifierName();
				this.state = 1702;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 1701;
					this.singleExpression(0);
					}
					break;
				}
				}
				break;

			case 21:
				{
				_localctx = new SuperExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1704;
				this.match(TypeScriptParser.Super);
				}
				break;

			case 22:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1705;
				this.literal();
				}
				break;

			case 23:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1706;
				this.arrayLiteral();
				}
				break;

			case 24:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1707;
				this.objectLiteral();
				}
				break;

			case 25:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1708;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1709;
				this.expressionSequence();
				this.state = 1710;
				this.match(TypeScriptParser.CloseParen);
				}
				break;

			case 26:
				{
				_localctx = new GenericTypesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1712;
				this.typeArguments();
				this.state = 1714;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
				case 1:
					{
					this.state = 1713;
					this.expressionSequence();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1832;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1830;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
					case 1:
						{
						_localctx = new OptionalChainExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1718;
						if (!(this.precpred(this._ctx, 50))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 50)");
						}
						this.state = 1719;
						this.match(TypeScriptParser.QuestionMarkDot);
						this.state = 1720;
						this.singleExpression(51);
						}
						break;

					case 2:
						{
						_localctx = new PowerExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1721;
						if (!(this.precpred(this._ctx, 32))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
						}
						this.state = 1722;
						this.match(TypeScriptParser.Power);
						this.state = 1723;
						this.singleExpression(32);
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1724;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 1725;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.Multiply) | (1 << TypeScriptParser.Divide) | (1 << TypeScriptParser.Modulus))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1726;
						this.singleExpression(32);
						}
						break;

					case 4:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1727;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						this.state = 1728;
						_la = this._input.LA(1);
						if (!(_la === TypeScriptParser.Plus || _la === TypeScriptParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1729;
						this.singleExpression(31);
						}
						break;

					case 5:
						{
						_localctx = new CoalesceExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1730;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 1731;
						this.match(TypeScriptParser.NullCoalesce);
						this.state = 1732;
						this.singleExpression(30);
						}
						break;

					case 6:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1733;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 1740;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
						case 1:
							{
							this.state = 1734;
							this.match(TypeScriptParser.LeftShiftArithmetic);
							}
							break;

						case 2:
							{
							this.state = 1735;
							this.match(TypeScriptParser.MoreThan);
							this.state = 1736;
							this.match(TypeScriptParser.MoreThan);
							}
							break;

						case 3:
							{
							this.state = 1737;
							this.match(TypeScriptParser.MoreThan);
							this.state = 1738;
							this.match(TypeScriptParser.MoreThan);
							this.state = 1739;
							this.match(TypeScriptParser.MoreThan);
							}
							break;
						}
						this.state = 1742;
						this.singleExpression(29);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1743;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 1744;
						_la = this._input.LA(1);
						if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeScriptParser.LessThan - 32)) | (1 << (TypeScriptParser.MoreThan - 32)) | (1 << (TypeScriptParser.LessThanEquals - 32)) | (1 << (TypeScriptParser.GreaterThanEquals - 32)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1745;
						this.singleExpression(28);
						}
						break;

					case 8:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1746;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 1747;
						this.match(TypeScriptParser.Instanceof);
						this.state = 1748;
						this.singleExpression(27);
						}
						break;

					case 9:
						{
						_localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1749;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1750;
						this.match(TypeScriptParser.In);
						this.state = 1751;
						this.singleExpression(26);
						}
						break;

					case 10:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1752;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1753;
						_la = this._input.LA(1);
						if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (TypeScriptParser.Equals_ - 36)) | (1 << (TypeScriptParser.NotEquals - 36)) | (1 << (TypeScriptParser.IdentityEquals - 36)) | (1 << (TypeScriptParser.IdentityNotEquals - 36)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1754;
						this.singleExpression(25);
						}
						break;

					case 11:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1755;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 1756;
						this.match(TypeScriptParser.BitAnd);
						this.state = 1757;
						this.singleExpression(24);
						}
						break;

					case 12:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1758;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 1759;
						this.match(TypeScriptParser.BitXOr);
						this.state = 1760;
						this.singleExpression(23);
						}
						break;

					case 13:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1761;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1762;
						this.match(TypeScriptParser.BitOr);
						this.state = 1763;
						this.singleExpression(22);
						}
						break;

					case 14:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1764;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1765;
						this.match(TypeScriptParser.And);
						this.state = 1766;
						this.singleExpression(21);
						}
						break;

					case 15:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1767;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 1768;
						this.match(TypeScriptParser.Or);
						this.state = 1769;
						this.singleExpression(20);
						}
						break;

					case 16:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1770;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1771;
						this.match(TypeScriptParser.QuestionMark);
						this.state = 1772;
						this.singleExpression(0);
						this.state = 1773;
						this.match(TypeScriptParser.Colon);
						this.state = 1774;
						this.singleExpression(19);
						}
						break;

					case 17:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1776;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1777;
						this.match(TypeScriptParser.Assign);
						this.state = 1778;
						this.singleExpression(18);
						}
						break;

					case 18:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1779;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1780;
						this.assignmentOperator();
						this.state = 1781;
						this.singleExpression(17);
						}
						break;

					case 19:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1783;
						if (!(this.precpred(this._ctx, 51))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 51)");
						}
						this.state = 1785;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === TypeScriptParser.QuestionMarkDot) {
							{
							this.state = 1784;
							this.match(TypeScriptParser.QuestionMarkDot);
							}
						}

						this.state = 1787;
						this.match(TypeScriptParser.OpenBracket);
						this.state = 1788;
						this.expressionSequence();
						this.state = 1789;
						this.match(TypeScriptParser.CloseBracket);
						}
						break;

					case 20:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1791;
						if (!(this.precpred(this._ctx, 49))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 49)");
						}
						this.state = 1793;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === TypeScriptParser.Not) {
							{
							this.state = 1792;
							this.match(TypeScriptParser.Not);
							}
						}

						this.state = 1795;
						this.match(TypeScriptParser.Dot);
						this.state = 1797;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === TypeScriptParser.Hashtag) {
							{
							this.state = 1796;
							this.match(TypeScriptParser.Hashtag);
							}
						}

						this.state = 1799;
						this.identifierName();
						this.state = 1801;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
						case 1:
							{
							this.state = 1800;
							this.typeGeneric();
							}
							break;
						}
						}
						break;

					case 21:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1803;
						if (!(this.precpred(this._ctx, 48))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 48)");
						}
						this.state = 1805;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === TypeScriptParser.QuestionMark) {
							{
							this.state = 1804;
							this.match(TypeScriptParser.QuestionMark);
							}
						}

						this.state = 1807;
						this.match(TypeScriptParser.Dot);
						this.state = 1809;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === TypeScriptParser.Hashtag) {
							{
							this.state = 1808;
							this.match(TypeScriptParser.Hashtag);
							}
						}

						this.state = 1811;
						this.identifierName();
						this.state = 1813;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 235, this._ctx) ) {
						case 1:
							{
							this.state = 1812;
							this.typeGeneric();
							}
							break;
						}
						}
						break;

					case 22:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1815;
						if (!(this.precpred(this._ctx, 45))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 45)");
						}
						this.state = 1816;
						this.arguments();
						}
						break;

					case 23:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1817;
						if (!(this.precpred(this._ctx, 44))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 44)");
						}
						this.state = 1818;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 1819;
						this.match(TypeScriptParser.PlusPlus);
						}
						break;

					case 24:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1820;
						if (!(this.precpred(this._ctx, 43))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 43)");
						}
						this.state = 1821;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 1822;
						this.match(TypeScriptParser.MinusMinus);
						}
						break;

					case 25:
						{
						_localctx = new TemplateStringExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1823;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1824;
						this.templateStringLiteral();
						}
						break;

					case 26:
						{
						_localctx = new CastAsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1825;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1826;
						this.match(TypeScriptParser.As);
						this.state = 1827;
						this.asExpression();
						}
						break;

					case 27:
						{
						_localctx = new NonNullAssertionExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1828;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1829;
						this.match(TypeScriptParser.Not);
						}
						break;
					}
					}
				}
				this.state = 1834;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asExpression(): AsExpressionContext {
		let _localctx: AsExpressionContext = new AsExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, TypeScriptParser.RULE_asExpression);
		try {
			this.state = 1841;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1835;
				this.predefinedType();
				this.state = 1838;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
				case 1:
					{
					this.state = 1836;
					this.match(TypeScriptParser.OpenBracket);
					this.state = 1837;
					this.match(TypeScriptParser.CloseBracket);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1840;
				this.singleExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignable(): AssignableContext {
		let _localctx: AssignableContext = new AssignableContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, TypeScriptParser.RULE_assignable);
		try {
			this.state = 1847;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1843;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1844;
				this.keyword();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1845;
				this.arrayLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1846;
				this.objectLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymousFunction(): AnonymousFunctionContext {
		let _localctx: AnonymousFunctionContext = new AnonymousFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, TypeScriptParser.RULE_anonymousFunction);
		let _la: number;
		try {
			this.state = 1870;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1849;
				this.functionDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Async) {
					{
					this.state = 1850;
					this.match(TypeScriptParser.Async);
					}
				}

				this.state = 1853;
				this.match(TypeScriptParser.Function_);
				this.state = 1855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Multiply) {
					{
					this.state = 1854;
					this.match(TypeScriptParser.Multiply);
					}
				}

				this.state = 1857;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1859;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (TypeScriptParser.Break - 70)) | (1 << (TypeScriptParser.Do - 70)) | (1 << (TypeScriptParser.Instanceof - 70)) | (1 << (TypeScriptParser.Typeof - 70)) | (1 << (TypeScriptParser.Case - 70)) | (1 << (TypeScriptParser.Else - 70)) | (1 << (TypeScriptParser.New - 70)) | (1 << (TypeScriptParser.Var - 70)) | (1 << (TypeScriptParser.Catch - 70)) | (1 << (TypeScriptParser.Finally - 70)) | (1 << (TypeScriptParser.Return - 70)) | (1 << (TypeScriptParser.Void - 70)) | (1 << (TypeScriptParser.Continue - 70)) | (1 << (TypeScriptParser.For - 70)) | (1 << (TypeScriptParser.Switch - 70)) | (1 << (TypeScriptParser.While - 70)) | (1 << (TypeScriptParser.Debugger - 70)) | (1 << (TypeScriptParser.Function_ - 70)) | (1 << (TypeScriptParser.This - 70)) | (1 << (TypeScriptParser.With - 70)) | (1 << (TypeScriptParser.Default - 70)) | (1 << (TypeScriptParser.If - 70)) | (1 << (TypeScriptParser.Throw - 70)) | (1 << (TypeScriptParser.Delete - 70)) | (1 << (TypeScriptParser.In - 70)) | (1 << (TypeScriptParser.Try - 70)) | (1 << (TypeScriptParser.As - 70)) | (1 << (TypeScriptParser.From - 70)) | (1 << (TypeScriptParser.ReadOnly - 70)) | (1 << (TypeScriptParser.Async - 70)) | (1 << (TypeScriptParser.Await - 70)) | (1 << (TypeScriptParser.Yield - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (TypeScriptParser.Class - 103)) | (1 << (TypeScriptParser.Enum - 103)) | (1 << (TypeScriptParser.Extends - 103)) | (1 << (TypeScriptParser.Super - 103)) | (1 << (TypeScriptParser.Const - 103)) | (1 << (TypeScriptParser.Export - 103)) | (1 << (TypeScriptParser.Import - 103)) | (1 << (TypeScriptParser.Implements - 103)) | (1 << (TypeScriptParser.Let - 103)) | (1 << (TypeScriptParser.Private - 103)) | (1 << (TypeScriptParser.Public - 103)) | (1 << (TypeScriptParser.Interface - 103)) | (1 << (TypeScriptParser.Package - 103)) | (1 << (TypeScriptParser.Protected - 103)) | (1 << (TypeScriptParser.Static - 103)) | (1 << (TypeScriptParser.Any - 103)) | (1 << (TypeScriptParser.Number - 103)) | (1 << (TypeScriptParser.Never - 103)) | (1 << (TypeScriptParser.Boolean - 103)) | (1 << (TypeScriptParser.String - 103)) | (1 << (TypeScriptParser.Unique - 103)) | (1 << (TypeScriptParser.Symbol - 103)) | (1 << (TypeScriptParser.Undefined - 103)) | (1 << (TypeScriptParser.Object - 103)) | (1 << (TypeScriptParser.Of - 103)) | (1 << (TypeScriptParser.KeyOf - 103)) | (1 << (TypeScriptParser.TypeAlias - 103)) | (1 << (TypeScriptParser.Constructor - 103)) | (1 << (TypeScriptParser.Namespace - 103)) | (1 << (TypeScriptParser.Require - 103)) | (1 << (TypeScriptParser.Module - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (TypeScriptParser.Abstract - 135)) | (1 << (TypeScriptParser.At - 135)) | (1 << (TypeScriptParser.Identifier - 135)))) !== 0)) {
					{
					this.state = 1858;
					this.formalParameterList();
					}
				}

				this.state = 1861;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeScriptParser.Colon) {
					{
					this.state = 1862;
					this.typeAnnotation();
					}
				}

				this.state = 1865;
				this.match(TypeScriptParser.OpenBrace);
				this.state = 1866;
				this.functionBody();
				this.state = 1867;
				this.match(TypeScriptParser.CloseBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1869;
				this.arrowFunctionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionDeclaration(): ArrowFunctionDeclarationContext {
		let _localctx: ArrowFunctionDeclarationContext = new ArrowFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, TypeScriptParser.RULE_arrowFunctionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1873;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				{
				this.state = 1872;
				this.match(TypeScriptParser.Async);
				}
				break;
			}
			this.state = 1875;
			this.arrowFunctionParameters();
			this.state = 1877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeScriptParser.Colon) {
				{
				this.state = 1876;
				this.typeAnnotation();
				}
			}

			this.state = 1879;
			this.match(TypeScriptParser.ARROW);
			this.state = 1880;
			this.arrowFunctionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		let _localctx: ArrowFunctionParametersContext = new ArrowFunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, TypeScriptParser.RULE_arrowFunctionParameters);
		let _la: number;
		try {
			this.state = 1888;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.OpenBracket:
			case TypeScriptParser.NullLiteral:
			case TypeScriptParser.BooleanLiteral:
			case TypeScriptParser.DecimalLiteral:
			case TypeScriptParser.HexIntegerLiteral:
			case TypeScriptParser.OctalIntegerLiteral:
			case TypeScriptParser.OctalIntegerLiteral2:
			case TypeScriptParser.BinaryIntegerLiteral:
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Any:
			case TypeScriptParser.Number:
			case TypeScriptParser.Never:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.Unique:
			case TypeScriptParser.Symbol:
			case TypeScriptParser.Undefined:
			case TypeScriptParser.Object:
			case TypeScriptParser.Of:
			case TypeScriptParser.KeyOf:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Constructor:
			case TypeScriptParser.Namespace:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
			case TypeScriptParser.Abstract:
			case TypeScriptParser.Identifier:
			case TypeScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1882;
				this.propertyName();
				}
				break;
			case TypeScriptParser.OpenParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1883;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeScriptParser.OpenBracket) | (1 << TypeScriptParser.OpenBrace) | (1 << TypeScriptParser.Ellipsis))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (TypeScriptParser.Break - 70)) | (1 << (TypeScriptParser.Do - 70)) | (1 << (TypeScriptParser.Instanceof - 70)) | (1 << (TypeScriptParser.Typeof - 70)) | (1 << (TypeScriptParser.Case - 70)) | (1 << (TypeScriptParser.Else - 70)) | (1 << (TypeScriptParser.New - 70)) | (1 << (TypeScriptParser.Var - 70)) | (1 << (TypeScriptParser.Catch - 70)) | (1 << (TypeScriptParser.Finally - 70)) | (1 << (TypeScriptParser.Return - 70)) | (1 << (TypeScriptParser.Void - 70)) | (1 << (TypeScriptParser.Continue - 70)) | (1 << (TypeScriptParser.For - 70)) | (1 << (TypeScriptParser.Switch - 70)) | (1 << (TypeScriptParser.While - 70)) | (1 << (TypeScriptParser.Debugger - 70)) | (1 << (TypeScriptParser.Function_ - 70)) | (1 << (TypeScriptParser.This - 70)) | (1 << (TypeScriptParser.With - 70)) | (1 << (TypeScriptParser.Default - 70)) | (1 << (TypeScriptParser.If - 70)) | (1 << (TypeScriptParser.Throw - 70)) | (1 << (TypeScriptParser.Delete - 70)) | (1 << (TypeScriptParser.In - 70)) | (1 << (TypeScriptParser.Try - 70)) | (1 << (TypeScriptParser.As - 70)) | (1 << (TypeScriptParser.From - 70)) | (1 << (TypeScriptParser.ReadOnly - 70)) | (1 << (TypeScriptParser.Async - 70)) | (1 << (TypeScriptParser.Await - 70)) | (1 << (TypeScriptParser.Yield - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (TypeScriptParser.Class - 103)) | (1 << (TypeScriptParser.Enum - 103)) | (1 << (TypeScriptParser.Extends - 103)) | (1 << (TypeScriptParser.Super - 103)) | (1 << (TypeScriptParser.Const - 103)) | (1 << (TypeScriptParser.Export - 103)) | (1 << (TypeScriptParser.Import - 103)) | (1 << (TypeScriptParser.Implements - 103)) | (1 << (TypeScriptParser.Let - 103)) | (1 << (TypeScriptParser.Private - 103)) | (1 << (TypeScriptParser.Public - 103)) | (1 << (TypeScriptParser.Interface - 103)) | (1 << (TypeScriptParser.Package - 103)) | (1 << (TypeScriptParser.Protected - 103)) | (1 << (TypeScriptParser.Static - 103)) | (1 << (TypeScriptParser.Any - 103)) | (1 << (TypeScriptParser.Number - 103)) | (1 << (TypeScriptParser.Never - 103)) | (1 << (TypeScriptParser.Boolean - 103)) | (1 << (TypeScriptParser.String - 103)) | (1 << (TypeScriptParser.Unique - 103)) | (1 << (TypeScriptParser.Symbol - 103)) | (1 << (TypeScriptParser.Undefined - 103)) | (1 << (TypeScriptParser.Object - 103)) | (1 << (TypeScriptParser.Of - 103)) | (1 << (TypeScriptParser.KeyOf - 103)) | (1 << (TypeScriptParser.TypeAlias - 103)) | (1 << (TypeScriptParser.Constructor - 103)) | (1 << (TypeScriptParser.Namespace - 103)) | (1 << (TypeScriptParser.Require - 103)) | (1 << (TypeScriptParser.Module - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (TypeScriptParser.Abstract - 135)) | (1 << (TypeScriptParser.At - 135)) | (1 << (TypeScriptParser.Identifier - 135)))) !== 0)) {
					{
					this.state = 1884;
					this.formalParameterList();
					}
				}

				this.state = 1887;
				this.match(TypeScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		let _localctx: ArrowFunctionBodyContext = new ArrowFunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, TypeScriptParser.RULE_arrowFunctionBody);
		try {
			this.state = 1895;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1890;
				this.singleExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1891;
				this.match(TypeScriptParser.OpenBrace);
				this.state = 1892;
				this.functionBody();
				this.state = 1893;
				this.match(TypeScriptParser.CloseBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, TypeScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1897;
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (TypeScriptParser.MultiplyAssign - 45)) | (1 << (TypeScriptParser.DivideAssign - 45)) | (1 << (TypeScriptParser.ModulusAssign - 45)) | (1 << (TypeScriptParser.PlusAssign - 45)) | (1 << (TypeScriptParser.MinusAssign - 45)) | (1 << (TypeScriptParser.LeftShiftArithmeticAssign - 45)) | (1 << (TypeScriptParser.RightShiftArithmeticAssign - 45)) | (1 << (TypeScriptParser.RightShiftLogicalAssign - 45)) | (1 << (TypeScriptParser.BitAndAssign - 45)) | (1 << (TypeScriptParser.BitXorAssign - 45)) | (1 << (TypeScriptParser.BitOrAssign - 45)) | (1 << (TypeScriptParser.PowerAssign - 45)) | (1 << (TypeScriptParser.NullishCoalescingAssign - 45)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, TypeScriptParser.RULE_literal);
		try {
			this.state = 1906;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1899;
				this.match(TypeScriptParser.NullLiteral);
				}
				break;
			case TypeScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1900;
				this.match(TypeScriptParser.BooleanLiteral);
				}
				break;
			case TypeScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1901;
				this.match(TypeScriptParser.StringLiteral);
				}
				break;
			case TypeScriptParser.BackTick:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1902;
				this.templateStringLiteral();
				}
				break;
			case TypeScriptParser.RegularExpressionLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1903;
				this.match(TypeScriptParser.RegularExpressionLiteral);
				}
				break;
			case TypeScriptParser.DecimalLiteral:
			case TypeScriptParser.HexIntegerLiteral:
			case TypeScriptParser.OctalIntegerLiteral:
			case TypeScriptParser.OctalIntegerLiteral2:
			case TypeScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1904;
				this.numericLiteral();
				}
				break;
			case TypeScriptParser.BigHexIntegerLiteral:
			case TypeScriptParser.BigOctalIntegerLiteral:
			case TypeScriptParser.BigBinaryIntegerLiteral:
			case TypeScriptParser.BigDecimalIntegerLiteral:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1905;
				this.bigintLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateStringLiteral(): TemplateStringLiteralContext {
		let _localctx: TemplateStringLiteralContext = new TemplateStringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, TypeScriptParser.RULE_templateStringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1908;
			this.match(TypeScriptParser.BackTick);
			this.state = 1912;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & ((1 << (TypeScriptParser.TemplateStringEscapeAtom - 146)) | (1 << (TypeScriptParser.TemplateStringStartExpression - 146)) | (1 << (TypeScriptParser.TemplateStringAtom - 146)))) !== 0)) {
				{
				{
				this.state = 1909;
				this.templateStringAtom();
				}
				}
				this.state = 1914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1915;
			this.match(TypeScriptParser.BackTick);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateStringAtom(): TemplateStringAtomContext {
		let _localctx: TemplateStringAtomContext = new TemplateStringAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, TypeScriptParser.RULE_templateStringAtom);
		try {
			this.state = 1923;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.TemplateStringAtom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1917;
				this.match(TypeScriptParser.TemplateStringAtom);
				}
				break;
			case TypeScriptParser.TemplateStringStartExpression:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1918;
				this.match(TypeScriptParser.TemplateStringStartExpression);
				this.state = 1919;
				this.singleExpression(0);
				this.state = 1920;
				this.match(TypeScriptParser.TemplateCloseBrace);
				}
				break;
			case TypeScriptParser.TemplateStringEscapeAtom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1922;
				this.match(TypeScriptParser.TemplateStringEscapeAtom);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, TypeScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1925;
			_la = this._input.LA(1);
			if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (TypeScriptParser.DecimalLiteral - 61)) | (1 << (TypeScriptParser.HexIntegerLiteral - 61)) | (1 << (TypeScriptParser.OctalIntegerLiteral - 61)) | (1 << (TypeScriptParser.OctalIntegerLiteral2 - 61)) | (1 << (TypeScriptParser.BinaryIntegerLiteral - 61)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bigintLiteral(): BigintLiteralContext {
		let _localctx: BigintLiteralContext = new BigintLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, TypeScriptParser.RULE_bigintLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1927;
			_la = this._input.LA(1);
			if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (TypeScriptParser.BigHexIntegerLiteral - 66)) | (1 << (TypeScriptParser.BigOctalIntegerLiteral - 66)) | (1 << (TypeScriptParser.BigBinaryIntegerLiteral - 66)) | (1 << (TypeScriptParser.BigDecimalIntegerLiteral - 66)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, TypeScriptParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1929;
			if (!(this.n("get"))) {
				throw this.createFailedPredicateException("this.n(\"get\")");
			}
			this.state = 1930;
			this.identifier();
			this.state = 1931;
			this.classElementName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, TypeScriptParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1933;
			if (!(this.n("set"))) {
				throw this.createFailedPredicateException("this.n(\"set\")");
			}
			this.state = 1934;
			this.identifier();
			this.state = 1935;
			this.classElementName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, TypeScriptParser.RULE_identifierName);
		try {
			this.state = 1939;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1937;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1938;
				this.reservedWord();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, TypeScriptParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1941;
			_la = this._input.LA(1);
			if (!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (TypeScriptParser.As - 96)) | (1 << (TypeScriptParser.From - 96)) | (1 << (TypeScriptParser.Async - 96)) | (1 << (TypeScriptParser.Yield - 96)) | (1 << (TypeScriptParser.Any - 96)) | (1 << (TypeScriptParser.Number - 96)) | (1 << (TypeScriptParser.Never - 96)) | (1 << (TypeScriptParser.Boolean - 96)) | (1 << (TypeScriptParser.String - 96)) | (1 << (TypeScriptParser.Unique - 96)) | (1 << (TypeScriptParser.Symbol - 96)) | (1 << (TypeScriptParser.Undefined - 96)) | (1 << (TypeScriptParser.Object - 96)) | (1 << (TypeScriptParser.Of - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (TypeScriptParser.KeyOf - 128)) | (1 << (TypeScriptParser.TypeAlias - 128)) | (1 << (TypeScriptParser.Constructor - 128)) | (1 << (TypeScriptParser.Namespace - 128)) | (1 << (TypeScriptParser.Abstract - 128)) | (1 << (TypeScriptParser.Identifier - 128)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierOrKeyWord(): IdentifierOrKeyWordContext {
		let _localctx: IdentifierOrKeyWordContext = new IdentifierOrKeyWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, TypeScriptParser.RULE_identifierOrKeyWord);
		try {
			this.state = 1946;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 255, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1943;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1944;
				this.match(TypeScriptParser.TypeAlias);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1945;
				this.match(TypeScriptParser.Require);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, TypeScriptParser.RULE_reservedWord);
		try {
			this.state = 1951;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeScriptParser.Break:
			case TypeScriptParser.Do:
			case TypeScriptParser.Instanceof:
			case TypeScriptParser.Typeof:
			case TypeScriptParser.Case:
			case TypeScriptParser.Else:
			case TypeScriptParser.New:
			case TypeScriptParser.Var:
			case TypeScriptParser.Catch:
			case TypeScriptParser.Finally:
			case TypeScriptParser.Return:
			case TypeScriptParser.Void:
			case TypeScriptParser.Continue:
			case TypeScriptParser.For:
			case TypeScriptParser.Switch:
			case TypeScriptParser.While:
			case TypeScriptParser.Debugger:
			case TypeScriptParser.Function_:
			case TypeScriptParser.This:
			case TypeScriptParser.With:
			case TypeScriptParser.Default:
			case TypeScriptParser.If:
			case TypeScriptParser.Throw:
			case TypeScriptParser.Delete:
			case TypeScriptParser.In:
			case TypeScriptParser.Try:
			case TypeScriptParser.As:
			case TypeScriptParser.From:
			case TypeScriptParser.ReadOnly:
			case TypeScriptParser.Async:
			case TypeScriptParser.Await:
			case TypeScriptParser.Yield:
			case TypeScriptParser.Class:
			case TypeScriptParser.Enum:
			case TypeScriptParser.Extends:
			case TypeScriptParser.Super:
			case TypeScriptParser.Const:
			case TypeScriptParser.Export:
			case TypeScriptParser.Import:
			case TypeScriptParser.Implements:
			case TypeScriptParser.Let:
			case TypeScriptParser.Private:
			case TypeScriptParser.Public:
			case TypeScriptParser.Interface:
			case TypeScriptParser.Package:
			case TypeScriptParser.Protected:
			case TypeScriptParser.Static:
			case TypeScriptParser.Number:
			case TypeScriptParser.Boolean:
			case TypeScriptParser.String:
			case TypeScriptParser.TypeAlias:
			case TypeScriptParser.Require:
			case TypeScriptParser.Module:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1948;
				this.keyword();
				}
				break;
			case TypeScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1949;
				this.match(TypeScriptParser.NullLiteral);
				}
				break;
			case TypeScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1950;
				this.match(TypeScriptParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, TypeScriptParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1953;
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (TypeScriptParser.Break - 70)) | (1 << (TypeScriptParser.Do - 70)) | (1 << (TypeScriptParser.Instanceof - 70)) | (1 << (TypeScriptParser.Typeof - 70)) | (1 << (TypeScriptParser.Case - 70)) | (1 << (TypeScriptParser.Else - 70)) | (1 << (TypeScriptParser.New - 70)) | (1 << (TypeScriptParser.Var - 70)) | (1 << (TypeScriptParser.Catch - 70)) | (1 << (TypeScriptParser.Finally - 70)) | (1 << (TypeScriptParser.Return - 70)) | (1 << (TypeScriptParser.Void - 70)) | (1 << (TypeScriptParser.Continue - 70)) | (1 << (TypeScriptParser.For - 70)) | (1 << (TypeScriptParser.Switch - 70)) | (1 << (TypeScriptParser.While - 70)) | (1 << (TypeScriptParser.Debugger - 70)) | (1 << (TypeScriptParser.Function_ - 70)) | (1 << (TypeScriptParser.This - 70)) | (1 << (TypeScriptParser.With - 70)) | (1 << (TypeScriptParser.Default - 70)) | (1 << (TypeScriptParser.If - 70)) | (1 << (TypeScriptParser.Throw - 70)) | (1 << (TypeScriptParser.Delete - 70)) | (1 << (TypeScriptParser.In - 70)) | (1 << (TypeScriptParser.Try - 70)) | (1 << (TypeScriptParser.As - 70)) | (1 << (TypeScriptParser.From - 70)) | (1 << (TypeScriptParser.ReadOnly - 70)) | (1 << (TypeScriptParser.Async - 70)) | (1 << (TypeScriptParser.Await - 70)) | (1 << (TypeScriptParser.Yield - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (TypeScriptParser.Class - 103)) | (1 << (TypeScriptParser.Enum - 103)) | (1 << (TypeScriptParser.Extends - 103)) | (1 << (TypeScriptParser.Super - 103)) | (1 << (TypeScriptParser.Const - 103)) | (1 << (TypeScriptParser.Export - 103)) | (1 << (TypeScriptParser.Import - 103)) | (1 << (TypeScriptParser.Implements - 103)) | (1 << (TypeScriptParser.Let - 103)) | (1 << (TypeScriptParser.Private - 103)) | (1 << (TypeScriptParser.Public - 103)) | (1 << (TypeScriptParser.Interface - 103)) | (1 << (TypeScriptParser.Package - 103)) | (1 << (TypeScriptParser.Protected - 103)) | (1 << (TypeScriptParser.Static - 103)) | (1 << (TypeScriptParser.Number - 103)) | (1 << (TypeScriptParser.Boolean - 103)) | (1 << (TypeScriptParser.String - 103)) | (1 << (TypeScriptParser.TypeAlias - 103)) | (1 << (TypeScriptParser.Require - 103)) | (1 << (TypeScriptParser.Module - 103)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, TypeScriptParser.RULE_eos);
		try {
			this.state = 1959;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1955;
				this.match(TypeScriptParser.SemiColon);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1956;
				this.match(TypeScriptParser.EOF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1957;
				if (!(this.lineTerminatorAhead())) {
					throw this.createFailedPredicateException("this.lineTerminatorAhead()");
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1958;
				if (!(this.closeBrace())) {
					throw this.createFailedPredicateException("this.closeBrace()");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.unionOrIntersectionOrPrimaryType_sempred(_localctx as UnionOrIntersectionOrPrimaryTypeContext, predIndex);

		case 11:
			return this.primaryType_sempred(_localctx as PrimaryTypeContext, predIndex);

		case 20:
			return this.arrayType_sempred(_localctx as ArrayTypeContext, predIndex);

		case 55:
			return this.decoratorMemberExpression_sempred(_localctx as DecoratorMemberExpressionContext, predIndex);

		case 82:
			return this.expressionStatement_sempred(_localctx as ExpressionStatementContext, predIndex);

		case 84:
			return this.iterationStatement_sempred(_localctx as IterationStatementContext, predIndex);

		case 86:
			return this.continueStatement_sempred(_localctx as ContinueStatementContext, predIndex);

		case 87:
			return this.breakStatement_sempred(_localctx as BreakStatementContext, predIndex);

		case 88:
			return this.returnStatement_sempred(_localctx as ReturnStatementContext, predIndex);

		case 89:
			return this.yieldStatement_sempred(_localctx as YieldStatementContext, predIndex);

		case 97:
			return this.throwStatement_sempred(_localctx as ThrowStatementContext, predIndex);

		case 112:
			return this.generatorMethod_sempred(_localctx as GeneratorMethodContext, predIndex);

		case 137:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);

		case 150:
			return this.getter_sempred(_localctx as GetterContext, predIndex);

		case 151:
			return this.setter_sempred(_localctx as SetterContext, predIndex);

		case 157:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private unionOrIntersectionOrPrimaryType_sempred(_localctx: UnionOrIntersectionOrPrimaryTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private primaryType_sempred(_localctx: PrimaryTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return notLineTerminator();
		}
		return true;
	}
	private arrayType_sempred(_localctx: ArrayTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return notLineTerminator();
		}
		return true;
	}
	private decoratorMemberExpression_sempred(_localctx: DecoratorMemberExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expressionStatement_sempred(_localctx: ExpressionStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.notOpenBraceAndNotFunction();
		}
		return true;
	}
	private iterationStatement_sempred(_localctx: IterationStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.p("of");

		case 8:
			return this.p("of");
		}
		return true;
	}
	private continueStatement_sempred(_localctx: ContinueStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.notLineTerminator();
		}
		return true;
	}
	private breakStatement_sempred(_localctx: BreakStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.notLineTerminator();
		}
		return true;
	}
	private returnStatement_sempred(_localctx: ReturnStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.notLineTerminator();
		}
		return true;
	}
	private yieldStatement_sempred(_localctx: YieldStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.notLineTerminator();
		}
		return true;
	}
	private throwStatement_sempred(_localctx: ThrowStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.notLineTerminator();
		}
		return true;
	}
	private generatorMethod_sempred(_localctx: GeneratorMethodContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.notLineTerminator();
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 50);

		case 16:
			return this.precpred(this._ctx, 32);

		case 17:
			return this.precpred(this._ctx, 31);

		case 18:
			return this.precpred(this._ctx, 30);

		case 19:
			return this.precpred(this._ctx, 29);

		case 20:
			return this.precpred(this._ctx, 28);

		case 21:
			return this.precpred(this._ctx, 27);

		case 22:
			return this.precpred(this._ctx, 26);

		case 23:
			return this.precpred(this._ctx, 25);

		case 24:
			return this.precpred(this._ctx, 24);

		case 25:
			return this.precpred(this._ctx, 23);

		case 26:
			return this.precpred(this._ctx, 22);

		case 27:
			return this.precpred(this._ctx, 21);

		case 28:
			return this.precpred(this._ctx, 20);

		case 29:
			return this.precpred(this._ctx, 19);

		case 30:
			return this.precpred(this._ctx, 18);

		case 31:
			return this.precpred(this._ctx, 17);

		case 32:
			return this.precpred(this._ctx, 16);

		case 33:
			return this.precpred(this._ctx, 51);

		case 34:
			return this.precpred(this._ctx, 49);

		case 35:
			return this.precpred(this._ctx, 48);

		case 36:
			return this.precpred(this._ctx, 45);

		case 37:
			return this.precpred(this._ctx, 44);

		case 38:
			return this.notLineTerminator();

		case 39:
			return this.precpred(this._ctx, 43);

		case 40:
			return this.notLineTerminator();

		case 41:
			return this.precpred(this._ctx, 15);

		case 42:
			return this.precpred(this._ctx, 2);

		case 43:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private getter_sempred(_localctx: GetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 44:
			return this.n("get");
		}
		return true;
	}
	private setter_sempred(_localctx: SetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 45:
			return this.n("set");
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.lineTerminatorAhead();

		case 47:
			return this.closeBrace();
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x96\u07AC\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u0144\n\x03\x03\x04\x03" +
		"\x04\x05\x04\u0148\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05" +
		"\u014F\n\x05\f\x05\x0E\x05\u0152\v\x05\x03\x06\x03\x06\x05\x06\u0156\n" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u015D\n\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x05\b\u0164\n\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x07\t\u016B\n\t\f\t\x0E\t\u016E\v\t\x03\n\x03\n\x03\v\x05\v\u0173\n" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0179\n\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0184\n\f\f\f\x0E\f\u0187\v\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u019D\n\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\u01A3\n\r\x03\r\x07\r\u01A6\n\r\f\r\x0E\r\u01A9\v\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u01B4\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01BB" +
		"\n\x0E\x03\x0F\x03\x0F\x05\x0F\u01BF\n\x0F\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u01C4\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11\u01CA\n\x11\x03" +
		"\x12\x03\x12\x05\x12\u01CE\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13" +
		"\u01D4\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\u01D9\n\x14\f\x14\x0E\x14" +
		"\u01DC\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\u01E5\n\x15\x05\x15\u01E7\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x07\x18\u01F5" +
		"\n\x18\f\x18\x0E\x18\u01F8\v\x18\x03\x18\x05\x18\u01FB\n\x18\x03\x19\x05" +
		"\x19\u01FE\n\x19\x03\x19\x03\x19\x05\x19\u0202\n\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u020A\n\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u020E\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x06\x1C\u021B\n\x1C\r\x1C\x0E\x1C\u021C\x03" +
		"\x1C\x03\x1C\x05\x1C\u0221\n\x1C\x03\x1D\x05\x1D\u0224\n\x1D\x03\x1D\x03" +
		"\x1D\x05\x1D\u0228\n\x1D\x03\x1D\x05\x1D\u022B\n\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u022F\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x05\x1F\u0235\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u0239\n\x1F\x03\x1F\x03\x1F\x05\x1F\u023D\n\x1F\x03" +
		" \x03 \x03 \x03 \x07 \u0243\n \f \x0E \u0246\v \x03 \x03 \x05 \u024A\n" +
		" \x03 \x05 \u024D\n \x05 \u024F\n \x03!\x03!\x03!\x07!\u0254\n!\f!\x0E" +
		"!\u0257\v!\x03\"\x03\"\x05\"\u025B\n\"\x03#\x05#\u025E\n#\x03#\x05#\u0261" +
		"\n#\x03#\x03#\x03#\x05#\u0266\n#\x03#\x05#\u0269\n#\x03#\x05#\u026C\n" +
		"#\x03$\x03$\x03$\x05$\u0271\n$\x03%\x05%\u0274\n%\x03%\x05%\u0277\n%\x03" +
		"%\x03%\x05%\u027B\n%\x03&\x03&\x03\'\x03\'\x05\'\u0281\n\'\x03(\x03(\x05" +
		"(\u0285\n(\x03(\x03(\x05(\u0289\n(\x03(\x03(\x05(\u028D\n(\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03*\x03*\x05*\u0298\n*\x03*\x03*\x03+\x05+\u029D" +
		"\n+\x03+\x03+\x03+\x05+\u02A2\n+\x03+\x03+\x03+\x03+\x03,\x05,\u02A9\n" +
		",\x03,\x03,\x03,\x05,\u02AE\n,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u02B6" +
		"\n,\x03-\x05-\u02B9\n-\x03-\x05-\u02BC\n-\x03-\x03-\x03-\x05-\u02C1\n" +
		"-\x03-\x05-\u02C4\n-\x03-\x03-\x05-\u02C8\n-\x03.\x03.\x03.\x03/\x03/" +
		"\x03/\x07/\u02D0\n/\f/\x0E/\u02D3\v/\x030\x050\u02D6\n0\x030\x030\x03" +
		"0\x030\x050\u02DC\n0\x030\x030\x031\x031\x051\u02E2\n1\x032\x032\x032" +
		"\x072\u02E7\n2\f2\x0E2\u02EA\v2\x033\x033\x033\x053\u02EF\n3\x034\x05" +
		"4\u02F2\n4\x034\x034\x034\x034\x054\u02F8\n4\x034\x034\x035\x035\x065" +
		"\u02FE\n5\r5\x0E5\u02FF\x035\x075\u0303\n5\f5\x0E5\u0306\v5\x036\x036" +
		"\x036\x036\x036\x037\x067\u030E\n7\r7\x0E7\u030F\x038\x038\x038\x058\u0315" +
		"\n8\x039\x039\x039\x039\x039\x039\x059\u031D\n9\x039\x039\x039\x079\u0322" +
		"\n9\f9\x0E9\u0325\v9\x03:\x03:\x03:\x03;\x05;\u032B\n;\x03;\x03;\x03<" +
		"\x05<\u0330\n<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=" +
		"\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u0351\n=\x03>\x03>\x05>\u0355\n>" +
		"\x03>\x03>\x03?\x06?\u035A\n?\r?\x0E?\u035B\x03@\x03@\x03@\x03@\x03@\x05" +
		"@\u0363\n@\x03@\x03@\x03A\x03A\x03A\x03B\x05B\u036B\nB\x03B\x03B\x05B" +
		"\u036F\nB\x03B\x03B\x03B\x03B\x03B\x05B\u0376\nB\x03C\x03C\x03C\x03C\x07" +
		"C\u037C\nC\fC\x0EC\u037F\vC\x03C\x03C\x05C\u0383\nC\x05C\u0385\nC\x03" +
		"C\x03C\x03D\x03D\x03D\x05D\u038C\nD\x03E\x03E\x05E\u0390\nE\x03F\x03F" +
		"\x03G\x03G\x03G\x03H\x03H\x05H\u0399\nH\x03H\x03H\x05H\u039D\nH\x03I\x03" +
		"I\x03I\x03J\x03J\x03J\x05J\u03A5\nJ\x03K\x03K\x05K\u03A9\nK\x03K\x03K" +
		"\x05K\u03AD\nK\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u03B6\nK\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x05L\u03BE\nL\x03L\x03L\x05L\u03C2\nL\x03M\x03M" +
		"\x03M\x03M\x07M\u03C8\nM\fM\x0EM\u03CB\vM\x03M\x03M\x05M\u03CF\nM\x05" +
		"M\u03D1\nM\x03M\x03M\x03N\x03N\x03N\x05N\u03D8\nN\x03O\x03O\x03O\x05O" +
		"\u03DD\nO\x03P\x03P\x05P\u03E1\nP\x03P\x03P\x05P\u03E5\nP\x03P\x05P\u03E8" +
		"\nP\x03P\x05P\u03EB\nP\x03P\x05P\u03EE\nP\x03P\x03P\x05P\u03F2\nP\x03" +
		"P\x03P\x05P\u03F6\nP\x03P\x03P\x05P\u03FA\nP\x05P\u03FC\nP\x03Q\x03Q\x03" +
		"Q\x07Q\u0401\nQ\fQ\x0EQ\u0404\vQ\x03R\x03R\x03R\x05R\u0409\nR\x03R\x05" +
		"R\u040C\nR\x03R\x05R\u040F\nR\x03R\x03R\x05R\u0413\nR\x03R\x05R\u0416" +
		"\nR\x03S\x03S\x03T\x03T\x03T\x05T\u041D\nT\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x05U\u0426\nU\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0439\nV\x03V\x03V\x05V\u043D" +
		"\nV\x03V\x03V\x05V\u0441\nV\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05" +
		"V\u044B\nV\x03V\x03V\x05V\u044F\nV\x03V\x03V\x03V\x03V\x03V\x03V\x03V" +
		"\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x05V\u0467\nV\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0470\nV" +
		"\x03V\x03V\x03V\x03V\x03V\x05V\u0477\nV\x03V\x03V\x03V\x03V\x03V\x03V" +
		"\x03V\x03V\x05V\u0481\nV\x03V\x03V\x03V\x05V\u0486\nV\x03W\x03W\x03X\x03" +
		"X\x03X\x05X\u048D\nX\x03X\x03X\x03Y\x03Y\x03Y\x05Y\u0494\nY\x03Y\x03Y" +
		"\x03Z\x03Z\x03Z\x05Z\u049B\nZ\x03Z\x03Z\x03[\x03[\x03[\x05[\u04A2\n[\x03" +
		"[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03" +
		"]\x03^\x03^\x05^\u04B4\n^\x03^\x03^\x05^\u04B8\n^\x05^\u04BA\n^\x03^\x03" +
		"^\x03_\x06_\u04BF\n_\r_\x0E_\u04C0\x03`\x03`\x03`\x03`\x05`\u04C7\n`\x03" +
		"a\x03a\x03a\x05a\u04CC\na\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x03c\x03" +
		"c\x03d\x03d\x03d\x03d\x05d\u04DB\nd\x03d\x05d\u04DE\nd\x03e\x03e\x03e" +
		"\x03e\x05e\u04E4\ne\x03e\x03e\x05e\u04E8\ne\x03e\x03e\x03f\x03f\x03f\x03" +
		"g\x03g\x03g\x03h\x05h\u04F3\nh\x03h\x03h\x05h\u04F7\nh\x03h\x03h\x03h" +
		"\x03h\x03h\x03h\x03h\x05h\u0500\nh\x03i\x05i\u0503\ni\x03i\x03i\x05i\u0507" +
		"\ni\x05i\u0509\ni\x03i\x05i\u050C\ni\x03i\x03i\x03i\x05i\u0511\ni\x03" +
		"i\x03i\x03i\x03j\x05j\u0517\nj\x03j\x05j\u051A\nj\x03k\x03k\x07k\u051E" +
		"\nk\fk\x0Ek\u0521\vk\x03k\x03k\x03l\x03l\x03l\x03m\x03m\x03m\x03n\x03" +
		"n\x05n\u052D\nn\x03n\x03n\x03n\x05n\u0532\nn\x03o\x03o\x03o\x05o\u0537" +
		"\no\x03o\x05o\u053A\no\x03o\x05o\u053D\no\x03o\x03o\x03o\x03o\x03o\x03" +
		"o\x03o\x03o\x03o\x03o\x05o\u0549\no\x03o\x03o\x03o\x05o\u054E\no\x03o" +
		"\x05o\u0551\no\x03p\x05p\u0554\np\x03p\x05p\u0557\np\x03p\x05p\u055A\n" +
		"p\x03p\x05p\u055D\np\x03q\x03q\x03q\x03r\x03r\x05r\u0564\nr\x03r\x05r" +
		"\u0567\nr\x03r\x03r\x03r\x05r\u056C\nr\x03r\x03r\x03r\x03r\x03r\x03s\x05" +
		"s\u0574\ns\x03s\x03s\x03s\x05s\u0579\ns\x03s\x03s\x05s\u057D\ns\x03s\x03" +
		"s\x03s\x03s\x03s\x03t\x03t\x03t\x03t\x07t\u0588\nt\ft\x0Et\u058B\vt\x03" +
		"t\x05t\u058E\nt\x03t\x03t\x03u\x03u\x03u\x03v\x03v\x03v\x03v\x07v\u0599" +
		"\nv\fv\x0Ev\u059C\vv\x03v\x05v\u059F\nv\x03v\x03v\x03w\x03w\x03w\x03w" +
		"\x03w\x05w\u05A8\nw\x03w\x03w\x03w\x03w\x03w\x03x\x03x\x05x\u05B1\nx\x03" +
		"y\x03y\x03y\x03z\x03z\x03z\x07z\u05B9\nz\fz\x0Ez\u05BC\vz\x03z\x03z\x05" +
		"z\u05C0\nz\x03z\x05z\u05C3\nz\x03z\x03z\x03z\x03z\x03z\x05z\u05CA\nz\x05" +
		"z\u05CC\nz\x03{\x05{\u05CF\n{\x03{\x05{\u05D2\n{\x03{\x03{\x05{\u05D6" +
		"\n{\x03{\x05{\u05D9\n{\x03{\x03{\x05{\u05DD\n{\x03|\x03|\x03|\x05|\u05E2" +
		"\n|\x03}\x05}\u05E5\n}\x03~\x06~\u05E8\n~\r~\x0E~\u05E9\x03\x7F\x03\x7F" +
		"\x03\x7F\x03\x7F\x03\x80\x07\x80\u05F1\n\x80\f\x80\x0E\x80\u05F4\v\x80" +
		"\x03\x80\x05\x80\u05F7\n\x80\x03\x80\x06\x80\u05FA\n\x80\r\x80\x0E\x80" +
		"\u05FB\x03\x80\x07\x80\u05FF\n\x80\f\x80\x0E\x80\u0602\v\x80\x03\x80\x07" +
		"\x80\u0605\n\x80\f\x80\x0E\x80\u0608\v\x80\x03\x81\x05\x81\u060B\n\x81" +
		"\x03\x81\x03\x81\x05\x81\u060F\n\x81\x03\x81\x05\x81\u0612\n\x81\x03\x82" +
		"\x03\x82\x03\x82\x03\x82\x07\x82\u0618\n\x82\f\x82\x0E\x82\u061B\v\x82" +
		"\x03\x82\x05\x82\u061E\n\x82\x05\x82\u0620\n\x82\x03\x82\x03\x82\x03\x83" +
		"\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u0633\n\x83\x03\x83\x03" +
		"\x83\x05\x83\u0637\n\x83\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u063D" +
		"\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x85\x05\x85" +
		"\u0646\n\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x86\x03\x86\x03" +
		"\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0654\n\x86\x03\x87\x03\x87" +
		"\x03\x87\x05\x87\u0659\n\x87\x05\x87\u065B\n\x87\x03\x87\x03\x87\x03\x88" +
		"\x03\x88\x03\x88\x07\x88\u0662\n\x88\f\x88\x0E\x88\u0665\v\x88\x03\x89" +
		"\x05\x89\u0668\n\x89\x03\x89\x03\x89\x05\x89\u066C\n\x89\x03\x8A\x03\x8A" +
		"\x03\x8A\x07\x8A\u0671\n\x8A\f\x8A\x0E\x8A\u0674\v\x8A\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x05\x8B\u067A\n\x8B\x03\x8B\x05\x8B\u067D\n\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0685\n\x8B\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u068C\n\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u06A9\n\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x05\x8B\u06B5\n\x8B\x05\x8B\u06B7\n\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x05\x8B\u06CF\n\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x05\x8B\u06FC\n\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x05\x8B\u0704\n\x8B\x03\x8B\x03\x8B\x05\x8B\u0708\n\x8B\x03\x8B\x03" +
		"\x8B\x05\x8B\u070C\n\x8B\x03\x8B\x03\x8B\x05\x8B\u0710\n\x8B\x03\x8B\x03" +
		"\x8B\x05\x8B\u0714\n\x8B\x03\x8B\x03\x8B\x05\x8B\u0718\n\x8B\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u0729\n\x8B\f\x8B\x0E\x8B" +
		"\u072C\v\x8B\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0731\n\x8C\x03\x8C\x05\x8C" +
		"\u0734\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x05\x8D\u073A\n\x8D\x03\x8E" +
		"\x03\x8E\x05\x8E\u073E\n\x8E\x03\x8E\x03\x8E\x05\x8E\u0742\n\x8E\x03\x8E" +
		"\x03\x8E\x05\x8E\u0746\n\x8E\x03\x8E\x03\x8E\x05\x8E\u074A\n\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0751\n\x8E\x03\x8F\x05\x8F\u0754" +
		"\n\x8F\x03\x8F\x03\x8F\x05\x8F\u0758\n\x8F\x03\x8F\x03\x8F\x03\x8F\x03" +
		"\x90\x03\x90\x03\x90\x05\x90\u0760\n\x90\x03\x90\x05\x90\u0763\n\x90\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x05\x91\u076A\n\x91\x03\x92\x03\x92" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x05\x93\u0775" +
		"\n\x93\x03\x94\x03\x94\x07\x94\u0779\n\x94\f\x94\x0E\x94\u077C\v\x94\x03" +
		"\x94\x03\x94\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x05\x95\u0786" +
		"\n\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x98\x03\x98\x03\x98\x03\x98" +
		"\x03\x99\x03\x99\x03\x99\x03\x99\x03\x9A\x03\x9A\x05\x9A\u0796\n\x9A\x03" +
		"\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9C\x05\x9C\u079D\n\x9C\x03\x9D\x03\x9D" +
		"\x03\x9D\x05\x9D\u07A2\n\x9D\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x03\x9F\x03" +
		"\x9F\x05\x9F\u07AA\n\x9F\x03\x9F\x02\x02\x06\x16\x18p\u0114\xA0\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
		"\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA" +
		"\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC" +
		"\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE" +
		"\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C" +
		"\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A" +
		"\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128" +
		"\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136" +
		"\x02\u0138\x02\u013A\x02\u013C\x02\x02\x13\x04\x02**,,\x03\x02\r\x0E\x04" +
		"\x02rsvv\x04\x02yy||\x04\x02fg\x8C\x8C\x05\x02OOmmqq\x03\x02gh\x04\x02" +
		"\x0F\x0F\x12\x12\x03\x02\x1B\x1D\x03\x02\x17\x18\x03\x02\"%\x03\x02&)" +
		"\x03\x02/;\x03\x02?C\x03\x02DG\b\x02bceeggx\x85\x89\x89\x8C\x8C\b\x02" +
		"Hgiwyy{|\x83\x83\x86\x87\x02\u0898\x02\u013E\x03\x02\x02\x02\x04\u0143" +
		"\x03\x02\x02\x02\x06\u0145\x03\x02\x02\x02\b\u014B\x03\x02\x02\x02\n\u015C" +
		"\x03\x02\x02\x02\f\u015E\x03\x02\x02\x02\x0E\u0161\x03\x02\x02\x02\x10" +
		"\u0167\x03\x02\x02\x02\x12\u016F\x03\x02\x02\x02\x14\u0178\x03\x02\x02" +
		"\x02\x16\u017A\x03\x02\x02\x02\x18\u019C\x03\x02\x02\x02\x1A\u01BA\x03" +
		"\x02\x02\x02\x1C\u01BC\x03\x02\x02\x02\x1E\u01C0\x03\x02\x02\x02 \u01C9" +
		"\x03\x02\x02\x02\"\u01CB\x03\x02\x02\x02$\u01D1\x03\x02\x02\x02&\u01D5" +
		"\x03\x02\x02\x02(\u01E6\x03\x02\x02\x02*\u01E8\x03\x02\x02\x02,\u01ED" +
		"\x03\x02\x02\x02.\u01F1\x03\x02\x02\x020\u01FD\x03\x02\x02\x022\u0207" +
		"\x03\x02\x02\x024\u0213\x03\x02\x02\x026\u0220\x03\x02\x02\x028\u0223" +
		"\x03\x02\x02\x02:\u0230\x03\x02\x02\x02<\u0234\x03\x02\x02\x02>\u024E" +
		"\x03\x02\x02\x02@\u0250\x03\x02\x02\x02B\u025A\x03\x02\x02\x02D\u025D" +
		"\x03\x02\x02\x02F\u026D\x03\x02\x02\x02H\u0273\x03\x02\x02\x02J\u027C" +
		"\x03\x02\x02\x02L\u0280\x03\x02\x02\x02N\u0282\x03\x02\x02\x02P\u028E" +
		"\x03\x02\x02\x02R\u0295\x03\x02\x02\x02T\u029C\x03\x02\x02\x02V\u02A8" +
		"\x03\x02\x02\x02X\u02B8\x03\x02\x02\x02Z\u02C9\x03\x02\x02\x02\\\u02CC" +
		"\x03\x02\x02\x02^\u02D5\x03\x02\x02\x02`\u02DF\x03\x02\x02\x02b\u02E3" +
		"\x03\x02\x02\x02d\u02EB\x03\x02\x02\x02f\u02F1\x03\x02\x02\x02h\u02FB" +
		"\x03\x02\x02\x02j\u0307\x03\x02\x02\x02l\u030D\x03\x02\x02\x02n\u0311" +
		"\x03\x02\x02\x02p\u031C\x03\x02\x02\x02r\u0326\x03\x02\x02\x02t\u032A";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02v\u032F\x03\x02\x02\x02x\u0350\x03\x02\x02\x02z\u0352" +
		"\x03\x02\x02\x02|\u0359\x03\x02\x02\x02~\u035D\x03\x02\x02\x02\x80\u0366" +
		"\x03\x02\x02\x02\x82\u0375\x03\x02\x02\x02\x84\u0377\x03\x02\x02\x02\x86" +
		"\u0388\x03\x02\x02\x02\x88\u038F\x03\x02\x02\x02\x8A\u0391\x03\x02\x02" +
		"\x02\x8C\u0393\x03\x02\x02\x02\x8E\u0398\x03\x02\x02\x02\x90\u039E\x03" +
		"\x02\x02\x02\x92\u03A1\x03\x02\x02\x02\x94\u03B5\x03\x02\x02\x02\x96\u03C1" +
		"\x03\x02\x02\x02\x98\u03C3\x03\x02\x02\x02\x9A\u03D4\x03\x02\x02\x02\x9C" +
		"\u03DC\x03\x02\x02\x02\x9E\u03FB\x03\x02\x02\x02\xA0\u03FD\x03\x02\x02" +
		"\x02\xA2\u0408\x03\x02\x02\x02\xA4\u0417\x03\x02\x02\x02\xA6\u0419\x03" +
		"\x02\x02\x02\xA8\u041E\x03\x02\x02\x02\xAA\u0485\x03\x02\x02\x02\xAC\u0487" +
		"\x03\x02\x02\x02\xAE\u0489\x03\x02\x02\x02\xB0\u0490\x03\x02\x02\x02\xB2" +
		"\u0497\x03\x02\x02\x02\xB4\u049E\x03\x02\x02\x02\xB6\u04A5\x03\x02\x02" +
		"\x02\xB8\u04AB\x03\x02\x02\x02\xBA\u04B1\x03\x02\x02\x02\xBC\u04BE\x03" +
		"\x02\x02\x02\xBE\u04C2\x03\x02\x02\x02\xC0\u04C8\x03\x02\x02\x02\xC2\u04CD" +
		"\x03\x02\x02\x02\xC4\u04D1\x03\x02\x02\x02\xC6\u04D6\x03\x02\x02\x02\xC8" +
		"\u04DF\x03\x02\x02\x02\xCA\u04EB\x03\x02\x02\x02\xCC\u04EE\x03\x02\x02" +
		"\x02\xCE\u04F2\x03\x02\x02\x02\xD0\u0502\x03\x02\x02\x02\xD2\u0516\x03" +
		"\x02\x02\x02\xD4\u051B\x03\x02\x02\x02\xD6\u0524\x03\x02\x02\x02\xD8\u0527" +
		"\x03\x02\x02\x02\xDA\u0531\x03\x02\x02\x02\xDC\u0550\x03\x02\x02\x02\xDE" +
		"\u0553\x03\x02\x02\x02\xE0\u055E\x03\x02\x02\x02\xE2\u0563\x03\x02\x02" +
		"\x02\xE4\u0573\x03\x02\x02\x02\xE6\u0583\x03\x02\x02\x02\xE8\u0591\x03" +
		"\x02\x02\x02\xEA\u0594\x03\x02\x02\x02\xEC\u05A2\x03\x02\x02\x02\xEE\u05B0" +
		"\x03\x02\x02\x02\xF0\u05B2\x03\x02\x02\x02\xF2\u05CB\x03\x02\x02\x02\xF4" +
		"\u05CE\x03\x02\x02\x02\xF6\u05DE\x03\x02\x02\x02\xF8\u05E4\x03\x02\x02" +
		"\x02\xFA\u05E7\x03\x02\x02\x02\xFC\u05EB\x03\x02\x02\x02\xFE\u05F2\x03" +
		"\x02\x02\x02\u0100\u060A\x03\x02\x02\x02\u0102\u0613\x03\x02\x02\x02\u0104" +
		"\u0636\x03\x02\x02\x02\u0106\u0638\x03\x02\x02\x02\u0108\u0642\x03\x02" +
		"\x02\x02\u010A\u0653\x03\x02\x02\x02\u010C\u0655\x03\x02\x02\x02\u010E" +
		"\u065E\x03\x02\x02\x02\u0110\u0667\x03\x02\x02\x02\u0112\u066D\x03\x02" +
		"\x02\x02\u0114\u06B6\x03\x02\x02\x02\u0116\u0733\x03\x02\x02\x02\u0118" +
		"\u0739\x03\x02\x02\x02\u011A\u0750\x03\x02\x02\x02\u011C\u0753\x03\x02" +
		"\x02\x02\u011E\u0762\x03\x02\x02\x02\u0120\u0769\x03\x02\x02\x02\u0122" +
		"\u076B\x03\x02\x02\x02\u0124\u0774\x03\x02\x02\x02\u0126\u0776\x03\x02" +
		"\x02\x02\u0128\u0785\x03\x02\x02\x02\u012A\u0787\x03\x02\x02\x02\u012C" +
		"\u0789\x03\x02\x02\x02\u012E\u078B\x03\x02\x02\x02\u0130\u078F\x03\x02" +
		"\x02\x02\u0132\u0795\x03\x02\x02\x02\u0134\u0797\x03\x02\x02\x02\u0136" +
		"\u079C\x03\x02\x02\x02\u0138\u07A1\x03\x02\x02\x02\u013A\u07A3\x03\x02" +
		"\x02\x02\u013C\u07A9\x03\x02\x02\x02\u013E\u013F\x07\x0F\x02\x02\u013F" +
		"\u0140\x05\u0114\x8B\x02\u0140\x03\x03\x02\x02\x02\u0141\u0144\x05\xFC" +
		"\x7F\x02\u0142\u0144\x05\u0102\x82\x02\u0143\u0141\x03\x02\x02\x02\u0143" +
		"\u0142\x03\x02\x02\x02\u0144\x05\x03\x02\x02\x02\u0145\u0147\x07\"\x02" +
		"\x02\u0146\u0148\x05\b\x05\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148" +
		"\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x07#\x02\x02" +
		"\u014A\x07\x03\x02\x02\x02\u014B\u0150\x05\n\x06\x02\u014C\u014D\x07\x0E" +
		"\x02\x02\u014D\u014F\x05\n\x06\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0152" +
		"\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02" +
		"\u0151\t\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0155\x05\u0134" +
		"\x9B\x02\u0154\u0156\x05\f\x07\x02\u0155\u0154\x03\x02\x02\x02\u0155\u0156" +
		"\x03\x02\x02\x02\u0156\u015D\x03\x02\x02\x02\u0157\u0158\x05\u0134\x9B" +
		"\x02\u0158\u0159\x07\x0F\x02\x02\u0159\u015A\x05\x12\n\x02\u015A\u015D" +
		"\x03\x02\x02\x02\u015B\u015D\x05\x06\x04\x02\u015C\u0153\x03\x02\x02\x02" +
		"\u015C\u0157\x03\x02\x02\x02\u015C\u015B\x03\x02\x02\x02\u015D\v\x03\x02" +
		"\x02\x02\u015E\u015F\x07k\x02\x02\u015F\u0160\x05\x14\v\x02\u0160\r\x03" +
		"\x02\x02\x02\u0161\u0163\x07\"\x02\x02\u0162\u0164\x05\x10\t\x02\u0163" +
		"\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02" +
		"\x02\x02\u0165\u0166\x07#\x02\x02\u0166\x0F\x03\x02\x02\x02\u0167\u016C" +
		"\x05\x12\n\x02\u0168\u0169\x07\x0E\x02\x02\u0169\u016B\x05\x12\n\x02\u016A" +
		"\u0168\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02" +
		"\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\x11\x03\x02\x02\x02\u016E\u016C" +
		"\x03\x02\x02\x02\u016F\u0170\x05\x14\v\x02\u0170\x13\x03\x02\x02\x02\u0171" +
		"\u0173\t\x02\x02\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02" +
		"\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0179\x05\x16\f\x02\u0175\u0179" +
		"\x050\x19\x02\u0176\u0179\x052\x1A\x02\u0177\u0179\x05\x1E\x10\x02\u0178" +
		"\u0172\x03\x02\x02\x02\u0178\u0175\x03\x02\x02\x02\u0178\u0176\x03\x02" +
		"\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179\x15\x03\x02\x02\x02\u017A\u017B" +
		"\b\f\x01\x02\u017B\u017C\x05\x18\r\x02\u017C\u0185\x03\x02\x02\x02\u017D" +
		"\u017E\f\x05\x02\x02\u017E\u017F\x07,\x02\x02\u017F\u0184\x05\x16\f\x06" +
		"\u0180\u0181\f\x04\x02\x02\u0181\u0182\x07*\x02\x02\u0182\u0184\x05\x16" +
		"\f\x05\u0183\u017D\x03\x02\x02\x02\u0183\u0180\x03\x02\x02\x02\u0184\u0187" +
		"\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02" +
		"\u0186\x17\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\b\r" +
		"\x01\x02\u0189\u018A\x07\b\x02\x02\u018A\u018B\x05\x14\v\x02\u018B\u018C" +
		"\x07\t\x02\x02\u018C\u019D\x03\x02\x02\x02\u018D\u019D\x05\x1A\x0E\x02" +
		"\u018E\u019D\x05\x1C\x0F\x02\u018F\u019D\x05\"\x12\x02\u0190\u0191\x07" +
		"\x06\x02\x02\u0191\u0192\x05.\x18\x02\u0192\u0193\x07\x07\x02\x02\u0193" +
		"\u019D\x03\x02\x02\x02\u0194\u019D\x054\x1B\x02\u0195\u019D\x07Z\x02\x02" +
		"\u0196\u0197\x05\x1C\x0F\x02\u0197\u0198\x07\x8A\x02\x02\u0198\u0199\x05" +
		"\x18\r\x04\u0199\u019D\x03\x02\x02\x02\u019A\u019B\x07\x82\x02\x02\u019B" +
		"\u019D\x05\x18\r\x03\u019C\u0188\x03\x02\x02\x02\u019C\u018D\x03\x02\x02" +
		"\x02\u019C\u018E\x03\x02\x02\x02\u019C\u018F\x03\x02\x02\x02\u019C\u0190" +
		"\x03\x02\x02\x02\u019C\u0194\x03\x02\x02\x02\u019C\u0195\x03\x02\x02\x02" +
		"\u019C\u0196\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u01A7\x03" +
		"\x02\x02\x02\u019E\u019F\f\b\x02\x02\u019F\u01A0\x06\r\x05\x02\u01A0\u01A2" +
		"\x07\x06\x02\x02\u01A1\u01A3\x05\x18\r\x02\u01A2\u01A1\x03\x02\x02\x02" +
		"\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A6\x07" +
		"\x07\x02\x02\u01A5\u019E\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7" +
		"\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\x19\x03\x02\x02" +
		"\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01BB\x07x\x02\x02\u01AB\u01BB" +
		"\x07=\x02\x02\u01AC\u01BB\x07y\x02\x02\u01AD\u01BB\x07?\x02\x02\u01AE" +
		"\u01BB\x07{\x02\x02\u01AF\u01BB\x07>\x02\x02\u01B0\u01BB\x07|\x02\x02" +
		"\u01B1\u01BB\x07\x8D\x02\x02\u01B2\u01B4\x07}\x02\x02\u01B3\u01B2\x03" +
		"\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5" +
		"\u01BB\x07~\x02\x02\u01B6\u01BB\x07z\x02\x02\u01B7\u01BB\x07\x7F\x02\x02" +
		"\u01B8\u01BB\x07\x80\x02\x02\u01B9\u01BB\x07S\x02\x02\u01BA\u01AA\x03" +
		"\x02\x02\x02\u01BA\u01AB\x03\x02\x02\x02\u01BA\u01AC\x03\x02\x02\x02\u01BA" +
		"\u01AD\x03\x02\x02\x02\u01BA\u01AE\x03\x02\x02\x02\u01BA\u01AF\x03\x02" +
		"\x02\x02\u01BA\u01B0\x03\x02\x02\x02\u01BA\u01B1\x03\x02\x02\x02\u01BA" +
		"\u01B3\x03\x02\x02\x02\u01BA\u01B6\x03\x02\x02\x02\u01BA\u01B7\x03\x02" +
		"\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01B9\x03\x02\x02\x02\u01BB" +
		"\x1B\x03\x02\x02\x02\u01BC\u01BE\x05 \x11\x02\u01BD\u01BF\x05\x1E\x10" +
		"\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\x1D" +
		"\x03\x02\x02\x02\u01C0\u01C1\x07\"\x02\x02\u01C1\u01C3\x05\x10\t\x02\u01C2" +
		"\u01C4\x05\x1E\x10\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03\x02" +
		"\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x07#\x02\x02\u01C6\x1F" +
		"\x03\x02\x02\x02\u01C7\u01CA\x05\u0134\x9B\x02\u01C8\u01CA\x05h5\x02\u01C9" +
		"\u01C7\x03\x02\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA!\x03\x02\x02" +
		"\x02\u01CB\u01CD\x07\n\x02\x02\u01CC\u01CE\x05$\x13\x02\u01CD\u01CC\x03" +
		"\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
		"\u01D0\x07\f\x02\x02\u01D0#\x03\x02\x02\x02\u01D1\u01D3\x05&\x14\x02\u01D2" +
		"\u01D4\t\x03\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02" +
		"\x02\u01D4%\x03\x02\x02\x02\u01D5\u01DA\x05(\x15\x02\u01D6\u01D7\t\x03" +
		"\x02\x02\u01D7\u01D9\x05(\x15\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DC" +
		"\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02" +
		"\u01DB\'\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E7\x058" +
		"\x1D\x02\u01DE\u01E7\x05<\x1F\x02\u01DF\u01E7\x05N(\x02\u01E0\u01E7\x05" +
		"P)\x02\u01E1\u01E4\x05R*\x02\u01E2\u01E3\x07<\x02\x02\u01E3\u01E5\x05" +
		"\x14\v\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5" +
		"\u01E7\x03\x02\x02\x02\u01E6\u01DD\x03\x02\x02\x02\u01E6\u01DE\x03\x02" +
		"\x02\x02\u01E6\u01DF\x03\x02\x02\x02\u01E6\u01E0\x03\x02\x02\x02\u01E6" +
		"\u01E1\x03\x02\x02\x02\u01E7)\x03\x02\x02\x02\u01E8\u01E9\x05\x18\r\x02" +
		"\u01E9\u01EA\x06\x16\x06\x02\u01EA\u01EB\x07\x06\x02\x02\u01EB\u01EC\x07" +
		"\x07\x02\x02\u01EC+\x03\x02\x02\x02\u01ED\u01EE\x07\x06\x02\x02\u01EE" +
		"\u01EF\x05.\x18\x02\u01EF\u01F0\x07\x07\x02\x02\u01F0-\x03\x02\x02\x02" +
		"\u01F1\u01F6\x05\x14\v\x02\u01F2\u01F3\x07\x0E\x02\x02\u01F3\u01F5\x05" +
		"\x14\v\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6" +
		"\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01FA\x03\x02" +
		"\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FB\x07\x0E\x02\x02\u01FA" +
		"\u01F9\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB/\x03\x02\x02" +
		"\x02\u01FC\u01FE\x05\x06\x04\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD\u01FE" +
		"\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0201\x07\b\x02\x02" +
		"\u0200\u0202\x05> \x02\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02" +
		"\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x07\t\x02\x02\u0204\u0205" +
		"\x07<\x02\x02\u0205\u0206\x05\x14\v\x02\u02061\x03\x02\x02\x02\u0207\u0209" +
		"\x07N\x02\x02\u0208\u020A\x05\x06\x04\x02\u0209\u0208\x03\x02\x02\x02" +
		"\u0209\u020A\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020D\x07" +
		"\b\x02\x02\u020C\u020E\x05> \x02\u020D\u020C\x03\x02\x02\x02\u020D\u020E" +
		"\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u0210\x07\t\x02\x02" +
		"\u0210\u0211\x07<\x02\x02\u0211\u0212\x05\x14\v\x02\u02123\x03\x02\x02" +
		"\x02\u0213\u0214\x07K\x02\x02\u0214\u0215\x056\x1C\x02\u02155\x03\x02" +
		"\x02\x02\u0216\u0221\x05\u0134\x9B\x02\u0217\u0218\x05\u0132\x9A\x02\u0218" +
		"\u0219\x07\x14\x02\x02\u0219\u021B\x03\x02\x02\x02\u021A\u0217\x03\x02" +
		"\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C" +
		"\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021F\x05\u0132" +
		"\x9A\x02\u021F\u0221\x03\x02\x02\x02\u0220\u0216\x03\x02\x02\x02\u0220" +
		"\u021A\x03\x02\x02\x02\u02217\x03\x02\x02\x02\u0222\u0224\x07d\x02\x02" +
		"\u0223\u0222\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0225\x03" +
		"\x02\x02\x02\u0225\u0227\x05\u010A\x86\x02\u0226\u0228\x07\x10\x02\x02" +
		"\u0227\u0226\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u022A\x03" +
		"\x02\x02\x02\u0229\u022B\x05:\x1E\x02\u022A\u0229\x03\x02\x02\x02\u022A" +
		"\u022B\x03\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022D\x07<\x02" +
		"\x02\u022D\u022F\x05\x14\v\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022F" +
		"\x03\x02\x02\x02\u022F9\x03\x02\x02\x02\u0230\u0231\x07\x12\x02\x02\u0231" +
		"\u0232\x05\x14\v\x02\u0232;\x03\x02\x02\x02\u0233\u0235\x05\x06\x04\x02" +
		"\u0234\u0233\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x03" +
		"\x02\x02\x02\u0236\u0238\x07\b\x02\x02\u0237\u0239\x05> \x02\u0238\u0237" +
		"\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02" +
		"\u023A\u023C\x07\t\x02\x02\u023B\u023D\x05:\x1E\x02\u023C\u023B\x03\x02" +
		"\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D=\x03\x02\x02\x02\u023E\u024F" +
		"\x05F$\x02\u023F\u0244\x05B\"\x02\u0240\u0241\x07\x0E\x02\x02\u0241\u0243" +
		"\x05B\"\x02\u0242\u0240\x03\x02\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244" +
		"\u0242\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0249\x03\x02" +
		"\x02\x02\u0246\u0244\x03\x02\x02\x02\u0247\u0248\x07\x0E\x02\x02\u0248" +
		"\u024A\x05F$\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02" +
		"\u024A\u024C\x03\x02\x02\x02\u024B\u024D\x07\x0E\x02\x02\u024C\u024B\x03" +
		"\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u024F\x03\x02\x02\x02\u024E" +
		"\u023E\x03\x02\x02\x02\u024E\u023F\x03\x02\x02\x02\u024F?\x03\x02\x02" +
		"\x02\u0250\u0255\x05H%\x02\u0251\u0252\x07\x0E\x02\x02\u0252\u0254\x05" +
		"H%\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0253" +
		"\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256A\x03\x02\x02\x02\u0257" +
		"\u0255\x03\x02\x02\x02\u0258\u025B\x05H%\x02\u0259\u025B\x05D#\x02\u025A" +
		"\u0258\x03\x02\x02\x02\u025A\u0259\x03\x02\x02\x02\u025BC\x03\x02\x02" +
		"\x02\u025C\u025E\x05l7\x02\u025D\u025C\x03\x02\x02\x02\u025D\u025E\x03" +
		"\x02\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F\u0261\x05J&\x02\u0260\u025F" +
		"\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02" +
		"\u0262\u026B\x05L\'\x02\u0263\u0265\x07\x10\x02\x02\u0264\u0266\x05:\x1E" +
		"\x02\u0265\u0264\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u026C" +
		"\x03\x02\x02\x02\u0267\u0269\x05:\x1E\x02\u0268\u0267\x03\x02\x02\x02" +
		"\u0268\u0269\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x05" +
		"\x02\x02\x02\u026B\u0263\x03\x02\x02\x02\u026B\u0268\x03\x02\x02\x02\u026C" +
		"E\x03\x02\x02\x02\u026D\u026E\x07\x13\x02\x02\u026E\u0270\x05\u0114\x8B" +
		"\x02\u026F\u0271\x05:\x1E\x02\u0270\u026F\x03\x02\x02\x02\u0270\u0271" +
		"\x03\x02\x02\x02\u0271G\x03\x02\x02\x02\u0272\u0274\x05l7\x02\u0273\u0272" +
		"\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0276\x03\x02\x02\x02" +
		"\u0275\u0277\x05J&\x02\u0276\u0275\x03\x02\x02\x02\u0276\u0277\x03\x02" +
		"\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027A\x05L\'\x02\u0279\u027B" +
		"\x05:\x1E\x02\u027A\u0279\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02" +
		"\u027BI\x03\x02\x02\x02\u027C\u027D\t\x04\x02\x02\u027DK\x03\x02\x02\x02" +
		"\u027E\u0281\x05\u0132\x9A\x02\u027F\u0281\x05\x04\x03\x02\u0280\u027E" +
		"\x03\x02\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281M\x03\x02\x02\x02\u0282" +
		"\u0284\x07N\x02\x02\u0283\u0285\x05\x06\x04\x02\u0284\u0283\x03\x02\x02" +
		"\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0288" +
		"\x07\b\x02\x02\u0287\u0289\x05> \x02\u0288\u0287\x03\x02\x02\x02\u0288" +
		"\u0289\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028C\x07\t\x02" +
		"\x02\u028B\u028D\x05:\x1E\x02\u028C\u028B\x03\x02\x02\x02\u028C\u028D" +
		"\x03\x02\x02\x02\u028DO\x03\x02\x02\x02\u028E\u028F\x07\x06\x02\x02\u028F" +
		"\u0290\x05\u0134\x9B\x02\u0290\u0291\x07\x12\x02\x02\u0291\u0292\t\x05" +
		"\x02\x02\u0292\u0293\x07\x07\x02\x02\u0293\u0294\x05:\x1E\x02\u0294Q\x03" +
		"\x02\x02\x02\u0295\u0297\x05\u010A\x86\x02\u0296\u0298\x07\x10\x02\x02" +
		"\u0297\u0296\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u0299\x03" +
		"\x02\x02\x02\u0299\u029A\x05<\x1F\x02\u029AS\x03\x02\x02\x02\u029B\u029D" +
		"\x07n\x02\x02\u029C\u029B\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02" +
		"\u029D\u029E\x03\x02\x02\x02\u029E\u029F\x07\x83\x02\x02\u029F\u02A1\x05" +
		"\u0134\x9B\x02\u02A0\u02A2\x05\x06\x04\x02\u02A1\u02A0\x03\x02\x02\x02" +
		"\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x07" +
		"\x0F\x02\x02\u02A4\u02A5\x05\x14\v\x02\u02A5\u02A6\x05\u013C\x9F\x02\u02A6" +
		"U\x03\x02\x02\x02\u02A7\u02A9\x05J&\x02\u02A8\u02A7\x03\x02\x02\x02\u02A8" +
		"\u02A9\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AB\x07\x84" +
		"\x02\x02\u02AB\u02AD\x07\b\x02\x02\u02AC\u02AE\x05\xF2z\x02\u02AD\u02AC" +
		"\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02" +
		"\u02AF\u02B5\x07\t\x02\x02\u02B0\u02B1\x07\n\x02\x02\u02B1\u02B2\x05\xF8" +
		"}\x02\u02B2\u02B3\x07\f\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B6" +
		"\x07\r\x02\x02\u02B5\u02B0\x03\x02\x02\x02\u02B5\u02B4\x03\x02\x02\x02" +
		"\u02B5\u02B6\x03\x02\x02\x02\u02B6W\x03\x02\x02\x02\u02B7\u02B9\x07n\x02" +
		"\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB" +
		"\x03\x02\x02\x02\u02BA\u02BC\x07\x88\x02\x02\u02BB\u02BA\x03\x02\x02\x02" +
		"\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BE\x07" +
		"t\x02\x02\u02BE\u02C0\x05\u0134\x9B\x02\u02BF\u02C1\x05\x06\x04\x02\u02C0" +
		"\u02BF\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C3\x03\x02" +
		"\x02\x02\u02C2\u02C4\x05Z.\x02\u02C3\u02C2\x03\x02\x02\x02\u02C3\u02C4" +
		"\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C7\x05\"\x12\x02" +
		"\u02C6\u02C8\x07\r\x02\x02\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8\x03" +
		"\x02\x02\x02\u02C8Y\x03\x02\x02\x02\u02C9\u02CA\x07k\x02\x02\u02CA\u02CB" +
		"\x05\\/\x02\u02CB[\x03\x02\x02\x02\u02CC\u02D1\x05\x1C\x0F\x02\u02CD\u02CE" +
		"\x07\x0E\x02\x02\u02CE\u02D0\x05\x1C\x0F\x02\u02CF\u02CD\x03\x02\x02\x02" +
		"\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03" +
		"\x02\x02\x02\u02D2]\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4" +
		"\u02D6\x07m\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02" +
		"\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x07j\x02\x02\u02D8\u02D9" +
		"\x05\u0134\x9B\x02\u02D9\u02DB\x07\n\x02\x02\u02DA\u02DC\x05`1\x02\u02DB" +
		"\u02DA\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DD\x03\x02" +
		"\x02\x02\u02DD\u02DE\x07\f\x02\x02\u02DE_\x03\x02\x02\x02\u02DF\u02E1" +
		"\x05b2\x02\u02E0\u02E2\x07\x0E\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E1" +
		"\u02E2\x03\x02\x02\x02\u02E2a\x03\x02\x02\x02\u02E3\u02E8\x05d3\x02\u02E4" +
		"\u02E5\x07\x0E\x02\x02\u02E5\u02E7\x05d3\x02\u02E6\u02E4\x03\x02\x02\x02" +
		"\u02E7\u02EA\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03" +
		"\x02\x02\x02\u02E9c\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB" +
		"\u02EE\x05\u010A\x86\x02\u02EC\u02ED\x07\x0F\x02\x02\u02ED\u02EF\x05\u0114" +
		"\x8B\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF" +
		"e\x03\x02\x02\x02\u02F0\u02F2\x07\x88\x02\x02\u02F1\u02F0\x03\x02\x02" +
		"\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F4" +
		"\x07\x85\x02\x02\u02F4\u02F5\x05h5\x02\u02F5\u02F7\x07\n\x02\x02\u02F6" +
		"\u02F8\x05|?\x02\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02" +
		"\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FA\x07\f\x02\x02\u02FAg\x03\x02" +
		"\x02\x02\u02FB\u0304\x05\u0134\x9B\x02\u02FC\u02FE\x07\x14\x02\x02\u02FD" +
		"\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u02FD\x03\x02" +
		"\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301" +
		"\u0303\x05\u0134\x9B\x02\u0302\u02FD\x03\x02\x02\x02\u0303\u0306\x03\x02" +
		"\x02\x02\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305" +
		"i\x03\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0307\u0308\x05\u0134\x9B" +
		"\x02\u0308\u0309\x07\x0F\x02\x02\u0309\u030A\x05h5\x02\u030A\u030B\x07" +
		"\r\x02\x02\u030Bk\x03\x02\x02\x02\u030C\u030E\x05n8\x02\u030D\u030C\x03" +
		"\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u030F" +
		"\u0310\x03\x02\x02\x02\u0310m\x03\x02\x02\x02\u0311\u0314\x07\x8B\x02" +
		"\x02\u0312\u0315\x05p9\x02\u0313\u0315\x05r:\x02\u0314\u0312\x03\x02\x02" +
		"\x02\u0314\u0313\x03\x02\x02\x02\u0315o\x03\x02\x02\x02\u0316\u0317\b" +
		"9\x01\x02\u0317\u031D\x05\u0134\x9B\x02\u0318\u0319\x07\b\x02\x02\u0319" +
		"\u031A\x05\u0114\x8B\x02\u031A\u031B\x07\t\x02\x02\u031B\u031D\x03\x02" +
		"\x02\x02\u031C\u0316\x03\x02\x02\x02\u031C\u0318\x03\x02\x02\x02\u031D" +
		"\u0323\x03\x02\x02\x02\u031E\u031F\f\x04\x02\x02\u031F\u0320\x07\x14\x02" +
		"\x02\u0320\u0322\x05\u0132\x9A\x02\u0321\u031E\x03\x02\x02\x02\u0322\u0325" +
		"\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02" +
		"\u0324q\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0326\u0327\x05p9" +
		"\x02\u0327\u0328\x05\u010C\x87\x02\u0328s\x03\x02\x02\x02\u0329\u032B" +
		"\x05\xFA~\x02\u032A\u0329\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02" +
		"\u032B\u032C\x03\x02\x02\x02\u032C\u032D\x07\x02\x02\x03\u032Du\x03\x02" +
		"\x02\x02\u032E\u0330\x07n\x02\x02\u032F\u032E\x03\x02\x02\x02\u032F\u0330" +
		"\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0332\x05x=\x02\u0332" +
		"w\x03\x02\x02\x02\u0333\u0351\x05z>\x02\u0334\u0351\x05\x9EP\x02\u0335" +
		"\u0351\x05\x80A\x02\u0336\u0351\x05\x94K\x02\u0337\u0351\x05\xA4S\x02" +
		"\u0338\u0351\x05~@\x02\u0339\u0351\x05\xD0i\x02\u033A\u0351\x05\xCEh\x02" +
		"\u033B\u0351\x05\xA6T\x02\u033C\u0351\x05X-\x02\u033D\u0351\x05f4\x02" +
		"\u033E\u0351\x05\xA8U\x02\u033F\u0351\x05\xAAV\x02\u0340\u0351\x05\xAE" +
		"X\x02\u0341\u0351\x05\xB0Y\x02\u0342\u0351\x05\xB2Z\x02\u0343\u0351\x05" +
		"\xB4[\x02\u0344\u0351\x05\xB6\\\x02\u0345\u0351\x05\xC2b\x02\u0346\u0351" +
		"\x05\xB8]\x02\u0347\u0351\x05\xC4c\x02\u0348\u0351\x05\xC6d\x02\u0349" +
		"\u0351\x05\xCCg\x02\u034A\u0351\x05\u011C\x8F\x02\u034B\u0351\x05\xE4" +
		"s\x02\u034C\u0351\x05T+\x02\u034D\u0351\x05^0\x02\u034E\u034F\x07n\x02" +
		"\x02\u034F\u0351\x05x=\x02\u0350\u0333\x03\x02\x02\x02\u0350\u0334\x03" +
		"\x02\x02\x02\u0350\u0335\x03\x02\x02\x02\u0350\u0336\x03\x02\x02\x02\u0350" +
		"\u0337\x03\x02\x02\x02\u0350\u0338\x03\x02\x02\x02\u0350\u0339\x03\x02" +
		"\x02\x02\u0350\u033A\x03\x02\x02\x02\u0350\u033B\x03\x02\x02\x02\u0350" +
		"\u033C\x03\x02\x02\x02\u0350\u033D\x03\x02\x02\x02\u0350\u033E\x03\x02" +
		"\x02\x02\u0350\u033F\x03\x02\x02\x02\u0350\u0340\x03\x02\x02\x02\u0350" +
		"\u0341\x03\x02\x02\x02\u0350\u0342\x03\x02\x02\x02\u0350\u0343\x03\x02" +
		"\x02\x02\u0350\u0344\x03\x02\x02\x02\u0350\u0345\x03\x02\x02\x02\u0350" +
		"\u0346\x03\x02\x02\x02\u0350\u0347\x03\x02\x02\x02\u0350\u0348\x03\x02" +
		"\x02\x02\u0350\u0349\x03\x02\x02\x02\u0350\u034A\x03\x02\x02\x02\u0350" +
		"\u034B\x03\x02\x02\x02\u0350\u034C\x03\x02\x02\x02\u0350\u034D\x03\x02" +
		"\x02\x02\u0350\u034E\x03\x02\x02\x02\u0351y\x03\x02\x02\x02\u0352\u0354" +
		"\x07\n\x02\x02\u0353\u0355\x05|?\x02\u0354\u0353\x03\x02\x02\x02\u0354" +
		"\u0355\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0357\x07\f\x02" +
		"\x02\u0357{\x03\x02\x02\x02\u0358\u035A\x05x=\x02\u0359\u0358\x03\x02" +
		"\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u0359\x03\x02\x02\x02\u035B" +
		"\u035C\x03\x02\x02\x02\u035C}\x03\x02\x02\x02\u035D\u0362\x07\x89\x02" +
		"\x02\u035E\u035F\x05\u0134\x9B\x02\u035F\u0360\x05<\x1F\x02\u0360\u0363" +
		"\x03\x02\x02\x02\u0361\u0363\x05\x9EP\x02\u0362\u035E\x03\x02\x02\x02" +
		"\u0362\u0361\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x05" +
		"\u013C\x9F\x02\u0365\x7F\x03\x02\x02\x02\u0366\u0367\x07o\x02\x02\u0367" +
		"\u0368\x05\x82B\x02\u0368\x81\x03\x02\x02\x02\u0369\u036B\x05\x8CG\x02" +
		"\u036A\u0369\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u036E\x03" +
		"\x02\x02\x02\u036C\u036F\x05\x8EH\x02\u036D\u036F\x05\x84C\x02\u036E\u036C" +
		"\x03\x02\x02\x02\u036E\u036D\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02" +
		"\u0370\u0371\x05\x90I\x02\u0371\u0372\x05\u013C\x9F\x02\u0372\u0376\x03" +
		"\x02\x02\x02\u0373\u0374\x07\x8D\x02\x02\u0374\u0376\x05\u013C\x9F\x02" +
		"\u0375\u036A\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02\u0376\x83\x03" +
		"\x02\x02\x02\u0377\u037D\x07\n\x02\x02\u0378\u0379\x05\x86D\x02\u0379" +
		"\u037A\x07\x0E\x02\x02\u037A\u037C\x03\x02\x02\x02\u037B\u0378\x03\x02" +
		"\x02\x02\u037C\u037F\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02\u037D" +
		"\u037E\x03\x02\x02\x02\u037E\u0384\x03\x02\x02\x02\u037F\u037D\x03\x02" +
		"\x02\x02\u0380\u0382\x05\x86D\x02\u0381\u0383\x07\x0E\x02\x02\u0382\u0381" +
		"\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0385\x03\x02\x02\x02" +
		"\u0384\u0380\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0386\x03" +
		"\x02\x02\x02\u0386\u0387\x07\f\x02\x02\u0387\x85\x03\x02\x02\x02\u0388" +
		"\u038B\x05\x88";
	private static readonly _serializedATNSegment2: string =
		"E\x02\u0389\u038A\x07b\x02\x02\u038A\u038C\x05\x8AF\x02\u038B\u0389\x03" +
		"\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\x87\x03\x02\x02\x02\u038D" +
		"\u0390\x05\u0132\x9A\x02\u038E\u0390\x07\x8D\x02\x02\u038F\u038D\x03\x02" +
		"\x02\x02\u038F\u038E\x03\x02\x02\x02\u0390\x89\x03\x02\x02\x02\u0391\u0392" +
		"\t\x06\x02\x02\u0392\x8B\x03\x02\x02\x02\u0393\u0394\x05\x92J\x02\u0394" +
		"\u0395\x07\x0E\x02\x02\u0395\x8D\x03\x02\x02\x02\u0396\u0399\x07\x1B\x02" +
		"\x02\u0397\u0399\x05\u0132\x9A\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397" +
		"\x03\x02\x02\x02\u0399\u039C\x03\x02\x02\x02\u039A\u039B\x07b\x02\x02" +
		"\u039B\u039D\x05\u0132\x9A\x02\u039C\u039A\x03\x02\x02\x02\u039C\u039D" +
		"\x03\x02\x02\x02\u039D\x8F\x03\x02\x02\x02\u039E\u039F\x07c\x02\x02\u039F" +
		"\u03A0\x07\x8D\x02\x02\u03A0\x91\x03\x02\x02\x02\u03A1\u03A4\x05\u0132" +
		"\x9A\x02\u03A2\u03A3\x07b\x02\x02\u03A3\u03A5\x05\u0132\x9A\x02\u03A4" +
		"\u03A2\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\x93\x03\x02\x02" +
		"\x02\u03A6\u03A8\x07n\x02\x02\u03A7\u03A9\x07\\\x02\x02\u03A8\u03A7\x03" +
		"\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02\u03AA" +
		"\u03AD\x05\x96L\x02\u03AB\u03AD\x05\x9CO\x02\u03AC\u03AA\x03\x02\x02\x02" +
		"\u03AC\u03AB\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x05" +
		"\u013C\x9F\x02\u03AF\u03B6\x03\x02\x02\x02\u03B0\u03B1\x07n\x02\x02\u03B1" +
		"\u03B2\x07\\\x02\x02\u03B2\u03B3\x05\u0114\x8B\x02\u03B3\u03B4\x05\u013C" +
		"\x9F\x02\u03B4\u03B6\x03\x02\x02\x02\u03B5\u03A6\x03\x02\x02\x02\u03B5" +
		"\u03B0\x03\x02\x02\x02\u03B6\x95\x03\x02\x02\x02\u03B7\u03B8\x05\x8EH" +
		"\x02\u03B8\u03B9\x05\x90I\x02\u03B9\u03BA\x05\u013C\x9F\x02\u03BA\u03C2" +
		"\x03\x02\x02\x02\u03BB\u03BD\x05\x98M\x02\u03BC\u03BE\x05\x90I\x02\u03BD" +
		"\u03BC\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x03\x02" +
		"\x02\x02\u03BF\u03C0\x05\u013C\x9F\x02\u03C0\u03C2\x03\x02\x02\x02\u03C1" +
		"\u03B7\x03\x02\x02\x02\u03C1\u03BB\x03\x02\x02\x02\u03C2\x97\x03\x02\x02" +
		"\x02\u03C3\u03C9\x07\n\x02\x02\u03C4\u03C5\x05\x9AN\x02\u03C5\u03C6\x07" +
		"\x0E\x02\x02\u03C6\u03C8\x03\x02\x02\x02\u03C7\u03C4\x03\x02\x02\x02\u03C8" +
		"\u03CB\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03C9\u03CA\x03\x02" +
		"\x02\x02\u03CA\u03D0\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CC" +
		"\u03CE\x05\x9AN\x02\u03CD\u03CF\x07\x0E\x02\x02\u03CE\u03CD\x03\x02\x02" +
		"\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D1\x03\x02\x02\x02\u03D0\u03CC" +
		"\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02" +
		"\u03D2\u03D3\x07\f\x02\x02\u03D3\x99\x03\x02\x02\x02\u03D4\u03D7\x05\x88" +
		"E\x02\u03D5\u03D6\x07b\x02\x02\u03D6\u03D8\x05\x88E\x02\u03D7\u03D5\x03" +
		"\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\x9B\x03\x02\x02\x02\u03D9" +
		"\u03DD\x05\x9EP\x02\u03DA\u03DD\x05\xD0i\x02\u03DB\u03DD\x05\xCEh\x02" +
		"\u03DC\u03D9\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DB\x03" +
		"\x02\x02\x02\u03DD\x9D\x03\x02\x02\x02\u03DE\u03E0\x05\x04\x03\x02\u03DF" +
		"\u03E1\x05:\x1E\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02" +
		"\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E4\x05\x02\x02\x02\u03E3\u03E5" +
		"\x07\r\x02\x02\u03E4\u03E3\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02" +
		"\u03E5\u03FC\x03\x02\x02\x02\u03E6\u03E8\x05J&\x02\u03E7\u03E6\x03\x02" +
		"\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03EA\x03\x02\x02\x02\u03E9" +
		"\u03EB\x05\xACW\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02" +
		"\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC\u03EE\x07d\x02\x02\u03ED\u03EC" +
		"\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02" +
		"\u03EF\u03F1\x05\xA0Q\x02\u03F0\u03F2\x07\r\x02\x02\u03F1\u03F0\x03\x02" +
		"\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03FC\x03\x02\x02\x02\u03F3" +
		"\u03F5\x07\x88\x02\x02\u03F4\u03F6\x05\xACW\x02\u03F5\u03F4\x03\x02\x02" +
		"\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F9" +
		"\x05\xA0Q\x02\u03F8\u03FA\x07\r\x02\x02\u03F9\u03F8\x03\x02\x02\x02\u03F9" +
		"\u03FA\x03\x02\x02\x02\u03FA\u03FC\x03\x02\x02\x02\u03FB\u03DE\x03\x02" +
		"\x02\x02\u03FB\u03E7\x03\x02\x02\x02\u03FB\u03F3\x03\x02\x02\x02\u03FC" +
		"\x9F\x03\x02\x02\x02\u03FD\u0402\x05\xA2R\x02\u03FE\u03FF\x07\x0E\x02" +
		"\x02\u03FF\u0401\x05\xA2R\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0404" +
		"\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02" +
		"\u0403\xA1\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0405\u0409\x05" +
		"\u0136\x9C\x02\u0406\u0409\x05\xFC\x7F\x02\u0407\u0409\x05\u0102\x82\x02" +
		"\u0408\u0405\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0407\x03" +
		"\x02\x02\x02\u0409\u040B\x03\x02\x02\x02\u040A\u040C\x05:\x1E\x02\u040B" +
		"\u040A\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C\u040E\x03\x02" +
		"\x02\x02\u040D\u040F\x05\u0114\x8B\x02\u040E\u040D\x03\x02\x02\x02\u040E" +
		"\u040F\x03\x02\x02\x02\u040F\u0415\x03\x02\x02\x02\u0410\u0412\x07\x0F" +
		"\x02\x02\u0411\u0413\x05\x06\x04\x02\u0412\u0411\x03\x02\x02\x02\u0412" +
		"\u0413\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0416\x05\u0114" +
		"\x8B\x02\u0415\u0410\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416" +
		"\xA3\x03\x02\x02\x02\u0417\u0418\x07\r\x02\x02\u0418\xA5\x03\x02\x02\x02" +
		"\u0419\u041A\x06T\b\x02\u041A\u041C\x05\u0112\x8A\x02\u041B\u041D\x07" +
		"\r\x02\x02\u041C\u041B\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D" +
		"\xA7\x03\x02\x02\x02\u041E\u041F\x07]\x02\x02\u041F\u0420\x07\b\x02\x02" +
		"\u0420\u0421\x05\u0112\x8A\x02\u0421\u0422\x07\t\x02\x02\u0422\u0425\x05" +
		"x=\x02\u0423\u0424\x07M\x02\x02\u0424\u0426\x05x=\x02\u0425\u0423\x03" +
		"\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\xA9\x03\x02\x02\x02\u0427" +
		"\u0428\x07I\x02\x02\u0428\u0429\x05x=\x02\u0429\u042A\x07W\x02\x02\u042A" +
		"\u042B\x07\b\x02\x02\u042B\u042C\x05\u0112\x8A\x02\u042C\u042D\x07\t\x02" +
		"\x02\u042D\u042E\x05\u013C\x9F\x02\u042E\u0486\x03\x02\x02\x02\u042F\u0430" +
		"\x07W\x02\x02\u0430\u0431\x07\b\x02\x02\u0431\u0432\x05\u0112\x8A\x02" +
		"\u0432\u0433\x07\t\x02\x02\u0433\u0434\x05x=\x02\u0434\u0486\x03\x02\x02" +
		"\x02\u0435\u0436\x07U\x02\x02\u0436\u0438\x07\b\x02\x02\u0437\u0439\x05" +
		"\u0112\x8A\x02\u0438\u0437\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02" +
		"\u0439\u043A\x03\x02\x02\x02\u043A\u043C\x07\r\x02\x02\u043B\u043D\x05" +
		"\u0112\x8A\x02\u043C\u043B\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02" +
		"\u043D\u043E\x03\x02\x02\x02\u043E\u0440\x07\r\x02\x02\u043F\u0441\x05" +
		"\u0112\x8A\x02\u0440\u043F\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02" +
		"\u0441\u0442\x03\x02\x02\x02\u0442\u0443\x07\t\x02\x02\u0443\u0486\x05" +
		"x=\x02\u0444\u0445\x07U\x02\x02\u0445\u0446\x07\b\x02\x02\u0446\u0447" +
		"\x05\xACW\x02\u0447\u0448\x05\xA0Q\x02\u0448\u044A\x07\r\x02\x02\u0449" +
		"\u044B\x05\u0112\x8A\x02\u044A\u0449\x03\x02\x02\x02\u044A\u044B\x03\x02" +
		"\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044E\x07\r\x02\x02\u044D\u044F" +
		"\x05\u0112\x8A\x02\u044E\u044D\x03\x02\x02\x02\u044E\u044F\x03\x02\x02" +
		"\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0451\x07\t\x02\x02\u0451\u0452" +
		"\x05x=\x02\u0452\u0486\x03\x02\x02\x02\u0453\u0454\x07U\x02\x02\u0454" +
		"\u0455\x07\b\x02\x02\u0455\u0456\x05\u0114\x8B\x02\u0456\u0457\x07`\x02" +
		"\x02\u0457\u0458\x05\u0112\x8A\x02\u0458\u0459\x07\t\x02\x02\u0459\u045A" +
		"\x05x=\x02\u045A\u0486\x03\x02\x02\x02\u045B\u045C\x07U\x02\x02\u045C" +
		"\u045D\x07\b\x02\x02\u045D\u045E\x05\xACW\x02\u045E\u045F\x05\xA2R\x02" +
		"\u045F\u0460\x07`\x02\x02\u0460\u0461\x05\u0112\x8A\x02\u0461\u0462\x07" +
		"\t\x02\x02\u0462\u0463\x05x=\x02\u0463\u0486\x03\x02\x02\x02\u0464\u0466" +
		"\x07U\x02\x02\u0465\u0467\x07f\x02\x02\u0466\u0465\x03\x02\x02\x02\u0466" +
		"\u0467\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468\u0469\x07\b\x02" +
		"\x02\u0469\u046A\x05\u0114\x8B\x02\u046A\u046B\x05\u0134\x9B\x02\u046B" +
		"\u046C\x06V\t\x02\u046C\u046F\x05\u0112\x8A\x02\u046D\u046E\x07b\x02\x02" +
		"\u046E\u0470\x05\x14\v\x02\u046F\u046D\x03\x02\x02\x02\u046F\u0470\x03" +
		"\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u0472\x07\t\x02\x02\u0472" +
		"\u0473\x05x=\x02\u0473\u0486\x03\x02\x02\x02\u0474\u0476\x07U\x02\x02" +
		"\u0475\u0477\x07f\x02\x02\u0476\u0475\x03\x02\x02\x02\u0476\u0477\x03" +
		"\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u0479\x07\b\x02\x02\u0479" +
		"\u047A\x05\xACW\x02\u047A\u047B\x05\xA2R\x02\u047B\u047C\x05\u0134\x9B" +
		"\x02\u047C\u047D\x06V\n\x02\u047D\u0480\x05\u0112\x8A\x02\u047E\u047F" +
		"\x07b\x02\x02\u047F\u0481\x05\x14\v\x02\u0480\u047E\x03\x02\x02\x02\u0480" +
		"\u0481\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\u0483\x07\t\x02" +
		"\x02\u0483\u0484\x05x=\x02\u0484\u0486\x03\x02\x02\x02\u0485\u0427\x03" +
		"\x02\x02\x02\u0485\u042F\x03\x02\x02\x02\u0485\u0435\x03\x02\x02\x02\u0485" +
		"\u0444\x03\x02\x02\x02\u0485\u0453\x03\x02\x02\x02\u0485\u045B\x03\x02" +
		"\x02\x02\u0485\u0464\x03\x02\x02\x02\u0485\u0474\x03\x02\x02\x02\u0486" +
		"\xAB\x03\x02\x02\x02\u0487\u0488\t\x07\x02\x02\u0488\xAD\x03\x02\x02\x02" +
		"\u0489\u048C\x07T\x02\x02\u048A\u048B\x06X\v\x02\u048B\u048D\x05\u0134" +
		"\x9B\x02\u048C\u048A\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D" +
		"\u048E\x03\x02\x02\x02\u048E\u048F\x05\u013C\x9F\x02\u048F\xAF\x03\x02" +
		"\x02\x02\u0490\u0493\x07H\x02\x02\u0491\u0492\x06Y\f\x02\u0492\u0494\x05" +
		"\u0134\x9B\x02\u0493\u0491\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02" +
		"\u0494\u0495\x03\x02\x02\x02\u0495\u0496\x05\u013C\x9F\x02\u0496\xB1\x03" +
		"\x02\x02\x02\u0497\u049A\x07R\x02\x02\u0498\u0499\x06Z\r\x02\u0499\u049B" +
		"\x05\u0112\x8A\x02\u049A\u0498\x03\x02\x02\x02\u049A\u049B\x03\x02\x02" +
		"\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049D\x05\u013C\x9F\x02\u049D\xB3" +
		"\x03\x02\x02\x02\u049E\u04A1\t\b\x02\x02\u049F\u04A0\x06[\x0E\x02\u04A0" +
		"\u04A2\x05\u0112\x8A\x02\u04A1\u049F\x03\x02\x02\x02\u04A1\u04A2\x03\x02" +
		"\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A4\x05\u013C\x9F\x02\u04A4" +
		"\xB5\x03\x02\x02\x02\u04A5\u04A6\x07[\x02\x02\u04A6\u04A7\x07\b\x02\x02" +
		"\u04A7\u04A8\x05\u0112\x8A\x02\u04A8\u04A9\x07\t\x02\x02\u04A9\u04AA\x05" +
		"x=\x02\u04AA\xB7\x03\x02\x02\x02\u04AB\u04AC\x07V\x02\x02\u04AC\u04AD" +
		"\x07\b\x02\x02\u04AD\u04AE\x05\u0112\x8A\x02\u04AE\u04AF\x07\t\x02\x02" +
		"\u04AF\u04B0\x05\xBA^\x02\u04B0\xB9\x03\x02\x02\x02\u04B1\u04B3\x07\n" +
		"\x02\x02\u04B2\u04B4\x05\xBC_\x02\u04B3\u04B2\x03\x02\x02\x02\u04B3\u04B4" +
		"\x03\x02\x02\x02\u04B4\u04B9\x03\x02\x02\x02\u04B5\u04B7\x05\xC0a\x02" +
		"\u04B6\u04B8\x05\xBC_\x02\u04B7\u04B6\x03\x02\x02\x02\u04B7\u04B8\x03" +
		"\x02\x02\x02\u04B8\u04BA\x03\x02\x02\x02\u04B9\u04B5\x03\x02\x02\x02\u04B9" +
		"\u04BA\x03\x02\x02\x02\u04BA\u04BB\x03\x02\x02\x02\u04BB\u04BC\x07\f\x02" +
		"\x02\u04BC\xBB\x03\x02\x02\x02\u04BD\u04BF\x05\xBE`\x02\u04BE\u04BD\x03" +
		"\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02\u04C0" +
		"\u04C1\x03\x02\x02\x02\u04C1\xBD\x03\x02\x02\x02\u04C2\u04C3\x07L\x02" +
		"\x02\u04C3\u04C4\x05\u0112\x8A\x02\u04C4\u04C6\x07\x12\x02\x02\u04C5\u04C7" +
		"\x05|?\x02\u04C6\u04C5\x03\x02\x02\x02\u04C6\u04C7\x03\x02\x02\x02\u04C7" +
		"\xBF\x03\x02\x02\x02\u04C8\u04C9\x07\\\x02\x02\u04C9\u04CB\x07\x12\x02" +
		"\x02\u04CA\u04CC\x05|?\x02\u04CB\u04CA\x03\x02\x02\x02\u04CB\u04CC\x03" +
		"\x02\x02\x02\u04CC\xC1\x03\x02\x02\x02\u04CD\u04CE\x05\u0134\x9B\x02\u04CE" +
		"\u04CF\x07\x12\x02\x02\u04CF\u04D0\x05x=\x02\u04D0\xC3\x03\x02\x02\x02" +
		"\u04D1\u04D2\x07^\x02\x02\u04D2\u04D3\x06c\x0F\x02\u04D3\u04D4\x05\u0112" +
		"\x8A\x02\u04D4\u04D5\x05\u013C\x9F\x02\u04D5\xC5\x03\x02\x02\x02\u04D6" +
		"\u04D7\x07a\x02\x02\u04D7\u04DD\x05z>\x02\u04D8\u04DA\x05\xC8e\x02\u04D9" +
		"\u04DB\x05\xCAf\x02\u04DA\u04D9\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02" +
		"\x02\u04DB\u04DE\x03\x02\x02\x02\u04DC\u04DE\x05\xCAf\x02\u04DD\u04D8" +
		"\x03\x02\x02\x02\u04DD\u04DC\x03\x02\x02\x02\u04DE\xC7\x03\x02\x02\x02" +
		"\u04DF\u04E7\x07P\x02\x02\u04E0\u04E1\x07\b\x02\x02\u04E1\u04E3\x05\u0134" +
		"\x9B\x02\u04E2\u04E4\x05:\x1E\x02\u04E3\u04E2\x03\x02\x02\x02\u04E3\u04E4" +
		"\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04E6\x07\t\x02\x02" +
		"\u04E6\u04E8\x03\x02\x02\x02\u04E7\u04E0\x03\x02\x02\x02\u04E7\u04E8\x03" +
		"\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EA\x05z>\x02\u04EA\xC9" +
		"\x03\x02\x02\x02\u04EB\u04EC\x07Q\x02\x02\u04EC\u04ED\x05z>\x02\u04ED" +
		"\xCB\x03\x02\x02\x02\u04EE\u04EF\x07X\x02\x02\u04EF\u04F0\x05\u013C\x9F" +
		"\x02\u04F0\xCD\x03\x02\x02\x02\u04F1\u04F3\x07e\x02\x02\u04F2\u04F1\x03" +
		"\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4" +
		"\u04F6\x07Y\x02\x02\u04F5\u04F7\x07\x1B\x02\x02\u04F6\u04F5\x03\x02\x02" +
		"\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u04F9" +
		"\x05\u0134\x9B\x02\u04F9\u04FF\x05<\x1F\x02\u04FA\u04FB\x07\n\x02\x02" +
		"\u04FB\u04FC\x05\xF8}\x02\u04FC\u04FD\x07\f\x02\x02\u04FD\u0500\x03\x02" +
		"\x02\x02\u04FE\u0500\x07\r\x02\x02\u04FF\u04FA\x03\x02\x02\x02\u04FF\u04FE" +
		"\x03\x02\x02\x02\u0500\xCF\x03\x02\x02\x02\u0501\u0503\x05l7\x02\u0502" +
		"\u0501\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503\u0508\x03\x02" +
		"\x02\x02\u0504\u0506\x07n\x02\x02\u0505\u0507\x07\\\x02\x02\u0506\u0505" +
		"\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0509\x03\x02\x02\x02" +
		"\u0508\u0504\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050B\x03" +
		"\x02\x02\x02\u050A\u050C\x07\x89\x02\x02\u050B\u050A\x03\x02\x02\x02\u050B" +
		"\u050C\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050E\x07i\x02" +
		"\x02\u050E\u0510\x05\u0134\x9B\x02\u050F\u0511\x05\x06\x04\x02\u0510\u050F" +
		"\x03\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511\u0512\x03\x02\x02\x02" +
		"\u0512\u0513\x05\xD2j\x02\u0513\u0514\x05\xD4k\x02\u0514\xD1\x03\x02\x02" +
		"\x02\u0515\u0517\x05\xD6l\x02\u0516\u0515\x03\x02\x02\x02\u0516\u0517" +
		"\x03\x02\x02\x02\u0517\u0519\x03\x02\x02\x02\u0518\u051A\x05\xD8m\x02" +
		"\u0519\u0518\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A\xD3\x03" +
		"\x02\x02\x02\u051B\u051F\x07\n\x02\x02\u051C\u051E\x05\xDAn\x02\u051D" +
		"\u051C\x03\x02\x02\x02\u051E\u0521\x03\x02\x02\x02\u051F\u051D\x03\x02" +
		"\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0522\x03\x02\x02\x02\u0521" +
		"\u051F\x03\x02\x02\x02\u0522\u0523\x07\f\x02\x02\u0523\xD5\x03\x02\x02" +
		"\x02\u0524\u0525\x07k\x02\x02\u0525\u0526\x05\x1C\x0F\x02\u0526\xD7\x03" +
		"\x02\x02\x02\u0527\u0528\x07p\x02\x02\u0528\u0529\x05\\/\x02\u0529\xD9" +
		"\x03\x02\x02\x02\u052A\u0532\x05V,\x02\u052B\u052D\x05l7\x02\u052C\u052B" +
		"\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02" +
		"\u052E\u0532\x05\xDCo\x02\u052F\u0532\x05\xE0q\x02\u0530\u0532\x05x=\x02" +
		"\u0531\u052A\x03\x02\x02\x02\u0531\u052C\x03\x02\x02\x02\u0531\u052F\x03" +
		"\x02\x02\x02\u0531\u0530\x03\x02\x02\x02\u0532\xDB\x03\x02\x02\x02\u0533" +
		"\u0534\x05\xDEp\x02\u0534\u0536\x05\u010A\x86\x02\u0535\u0537\x07\x10" +
		"\x02\x02\u0536\u0535\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537" +
		"\u0539\x03\x02\x02\x02\u0538\u053A\x05:\x1E\x02\u0539\u0538\x03\x02\x02" +
		"\x02\u0539\u053A\x03\x02\x02\x02\u053A\u053C\x03\x02\x02\x02\u053B\u053D" +
		"\x05\x02\x02\x02\u053C\u053B\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02" +
		"\u053D\u053E\x03\x02\x02\x02\u053E\u053F\x07\r\x02\x02\u053F\u0551\x03" +
		"\x02\x02\x02\u0540\u0541\x05\xDEp\x02\u0541\u0542\x05\u010A\x86\x02\u0542" +
		"\u0548\x05<\x1F\x02\u0543\u0544\x07\n\x02\x02\u0544\u0545\x05\xF8}\x02" +
		"\u0545\u0546\x07\f\x02\x02\u0546\u0549\x03\x02\x02\x02\u0547\u0549\x07" +
		"\r\x02\x02\u0548\u0543\x03\x02\x02\x02\u0548\u0547\x03\x02\x02\x02\u0549" +
		"\u0551\x03\x02\x02\x02\u054A\u054D\x05\xDEp\x02\u054B\u054E\x05\u0106" +
		"\x84\x02\u054C\u054E\x05\u0108\x85\x02\u054D\u054B\x03\x02\x02\x02\u054D" +
		"\u054C\x03\x02\x02\x02\u054E\u0551\x03\x02\x02\x02\u054F\u0551\x05~@\x02" +
		"\u0550\u0533\x03\x02\x02\x02\u0550\u0540\x03\x02\x02\x02\u0550\u054A\x03" +
		"\x02\x02\x02\u0550\u054F\x03\x02\x02\x02\u0551\xDD\x03\x02\x02\x02\u0552" +
		"\u0554\x05J&\x02\u0553\u0552\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02" +
		"\u0554\u0556\x03\x02\x02\x02\u0555\u0557\x07e\x02\x02\u0556\u0555\x03" +
		"\x02\x02\x02\u0556\u0557\x03\x02\x02\x02\u0557\u0559\x03\x02\x02\x02\u0558" +
		"\u055A\x07w\x02\x02\u0559\u0558\x03\x02\x02\x02\u0559\u055A\x03\x02\x02" +
		"\x02\u055A\u055C\x03\x02\x02\x02\u055B\u055D\x07d\x02\x02\u055C\u055B" +
		"\x03\x02\x02\x02\u055C\u055D\x03\x02\x02\x02\u055D\xDF\x03\x02\x02\x02" +
		"\u055E\u055F\x05P)\x02\u055F\u0560\x07\r\x02\x02\u0560\xE1\x03\x02\x02" +
		"\x02\u0561\u0562\x07e\x02\x02\u0562\u0564\x06r\x10\x02\u0563\u0561\x03" +
		"\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\u0566\x03\x02\x02\x02\u0565" +
		"\u0567\x07\x1B\x02\x02\u0566\u0565\x03\x02\x02\x02\u0566\u0567\x03\x02" +
		"\x02\x02\u0567\u0568\x03\x02\x02\x02\u0568\u0569\x05\u010A\x86\x02\u0569" +
		"\u056B\x07\b\x02\x02\u056A\u056C\x05\xF2z\x02\u056B\u056A\x03\x02\x02" +
		"\x02\u056B\u056C\x03\x02\x02\x02\u056C\u056D\x03\x02\x02\x02\u056D\u056E" +
		"\x07\t\x02\x02\u056E\u056F\x07\n\x02\x02\u056F\u0570\x05\xF8}\x02\u0570" +
		"\u0571\x07\f\x02\x02\u0571\xE3\x03\x02\x02\x02\u0572\u0574\x07e\x02\x02" +
		"\u0573\u0572\x03\x02\x02\x02\u0573\u0574\x03\x02\x02\x02\u0574\u0575\x03" +
		"\x02\x02\x02\u0575\u0576\x07Y\x02\x02\u0576\u0578\x07\x1B\x02\x02\u0577" +
		"\u0579\x05\u0134\x9B\x02\u0578\u0577\x03\x02\x02\x02\u0578\u0579\x03\x02" +
		"\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057C\x07\b\x02\x02\u057B\u057D" +
		"\x05\xF2z\x02\u057C\u057B\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02" +
		"\u057D\u057E\x03\x02\x02\x02\u057E\u057F\x07\t\x02\x02\u057F\u0580\x07" +
		"\n\x02\x02\u0580\u0581\x05\xF8}\x02\u0581\u0582\x07\f\x02\x02\u0582\xE5" +
		"\x03\x02\x02\x02\u0583\u0584\x07\n\x02\x02\u0584\u0589\x05\xE8u\x02\u0585" +
		"\u0586\x07\x0E\x02\x02\u0586\u0588\x05\xE8u\x02\u0587\u0585\x03\x02\x02" +
		"\x02\u0588\u058B\x03\x02\x02\x02\u0589\u0587\x03\x02\x02\x02\u0589\u058A" +
		"\x03\x02\x02\x02\u058A\u058D\x03\x02\x02\x02\u058B\u0589\x03\x02\x02\x02" +
		"\u058C\u058E\x07\x0E\x02\x02\u058D\u058C\x03\x02\x02\x02\u058D\u058E\x03" +
		"\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\u0590\x07\f\x02\x02\u0590" +
		"\xE7\x03\x02\x02\x02\u0591\u0592\x07\x1B\x02\x02\u0592\u0593\x05\xECw" +
		"\x02\u0593\xE9\x03\x02\x02\x02\u0594\u0595\x07\n\x02\x02\u0595\u059A\x05" +
		"\xECw\x02\u0596\u0597\x07\x0E\x02\x02\u0597\u0599\x05\xECw\x02\u0598\u0596" +
		"\x03\x02\x02\x02\u0599\u059C\x03\x02\x02\x02\u059A\u0598\x03\x02\x02\x02" +
		"\u059A\u059B\x03\x02\x02\x02\u059B\u059E\x03\x02\x02\x02\u059C\u059A\x03" +
		"\x02\x02\x02\u059D\u059F\x07\x0E\x02\x02\u059E\u059D\x03\x02\x02\x02\u059E" +
		"\u059F\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A1\x07\f\x02" +
		"\x02\u05A1\xEB\x03\x02\x02\x02\u05A2\u05A3\x07\x06\x02\x02\u05A3\u05A4" +
		"\x05\u0114\x8B\x02\u05A4\u05A5\x07\x07\x02\x02\u05A5\u05A7\x07\b\x02\x02" +
		"\u05A6\u05A8\x05\xF2z\x02\u05A7\u05A6\x03\x02\x02\x02\u05A7\u05A8\x03" +
		"\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AA\x07\t\x02\x02\u05AA" +
		"\u05AB\x07\n\x02\x02\u05AB\u05AC\x05\xF8}\x02\u05AC\u05AD\x07\f\x02\x02" +
		"\u05AD\xED\x03\x02\x02\x02\u05AE\u05B1\x05\u010A\x86\x02\u05AF\u05B1\x05" +
		"\xF0y\x02\u05B0\u05AE\x03\x02\x02\x02\u05B0\u05AF\x03\x02\x02\x02\u05B1" +
		"\xEF\x03\x02\x02\x02\u05B2\u05B3\x07 \x02\x02\u05B3\u05B4\x05\u0132\x9A" +
		"\x02\u05B4\xF1\x03\x02\x02\x02\u05B5\u05BA\x05\xF4{\x02\u05B6\u05B7\x07" +
		"\x0E\x02\x02\u05B7\u05B9\x05\xF4{\x02\u05B8\u05B6\x03\x02\x02\x02\u05B9" +
		"\u05BC\x03\x02\x02\x02\u05BA\u05B8\x03\x02\x02\x02\u05BA\u05BB\x03\x02" +
		"\x02\x02\u05BB\u05BF\x03\x02\x02\x02\u05BC\u05BA\x03\x02\x02\x02\u05BD" +
		"\u05BE\x07\x0E\x02\x02\u05BE\u05C0\x05\xF6|\x02\u05BF\u05BD\x03\x02\x02" +
		"\x02\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05C2\x03\x02\x02\x02\u05C1\u05C3" +
		"\x07\x0E\x02\x02\u05C2\u05C1\x03\x02\x02\x02\u05C2\u05C3\x03\x02\x02\x02" +
		"\u05C3\u05CC\x03\x02\x02\x02\u05C4\u05CC\x05\xF6|\x02\u05C5\u05CC\x05" +
		"\xFC\x7F\x02\u05C6\u05C9\x05\u0102\x82\x02\u05C7\u05C8\x07\x12\x02\x02" +
		"\u05C8\u05CA\x05\xF2z\x02\u05C9\u05C7\x03\x02\x02\x02\u05C9\u05CA\x03" +
		"\x02\x02\x02\u05CA\u05CC\x03\x02\x02\x02\u05CB\u05B5\x03\x02\x02\x02\u05CB" +
		"\u05C4\x03\x02\x02\x02\u05CB\u05C5\x03\x02\x02\x02\u05CB\u05C6\x03\x02" +
		"\x02\x02\u05CC\xF3\x03\x02\x02\x02\u05CD\u05CF\x05n8\x02\u05CE\u05CD\x03" +
		"\x02\x02\x02\u05CE\u05CF\x03\x02\x02\x02\u05CF\u05D1\x03\x02\x02\x02\u05D0" +
		"\u05D2\x05J&\x02\u05D1\u05D0\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02" +
		"\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D5\x05\u0118\x8D\x02\u05D4\u05D6" +
		"\x07\x10\x02\x02\u05D5\u05D4\x03\x02\x02\x02\u05D5\u05D6\x03\x02\x02\x02" +
		"\u05D6\u05D8\x03\x02\x02\x02\u05D7\u05D9\x05:\x1E\x02\u05D8\u05D7\x03" +
		"\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05DC\x03\x02\x02\x02\u05DA" +
		"\u05DB\x07\x0F\x02\x02\u05DB\u05DD\x05\u0114\x8B\x02\u05DC\u05DA\x03\x02" +
		"\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD\xF5\x03\x02\x02\x02\u05DE\u05DF" +
		"\x07\x13\x02\x02\u05DF\u05E1\x05\u0134\x9B\x02\u05E0\u05E2\x05:\x1E\x02" +
		"\u05E1\u05E0\x03\x02\x02\x02\u05E1\u05E2\x03\x02\x02\x02\u05E2\xF7\x03" +
		"\x02\x02\x02\u05E3\u05E5\x05\xFA~\x02\u05E4\u05E3\x03\x02\x02\x02\u05E4" +
		"\u05E5\x03\x02\x02\x02\u05E5\xF9\x03\x02\x02\x02\u05E6\u05E8\x05v<\x02" +
		"\u05E7\u05E6\x03\x02\x02\x02\u05E8\u05E9\x03\x02\x02\x02\u05E9\u05E7\x03" +
		"\x02\x02\x02\u05E9\u05EA\x03\x02\x02\x02\u05EA\xFB\x03\x02\x02\x02\u05EB" +
		"\u05EC\x07\x06\x02\x02\u05EC\u05ED\x05\xFE\x80\x02\u05ED\u05EE\x07\x07" +
		"\x02\x02\u05EE\xFD\x03\x02\x02\x02\u05EF\u05F1\x07\x0E\x02\x02\u05F0\u05EF" +
		"\x03\x02\x02\x02\u05F1\u05F4\x03\x02\x02\x02\u05F2\u05F0\x03\x02\x02\x02" +
		"\u05F2\u05F3\x03\x02\x02\x02\u05F3\u05F6\x03\x02\x02\x02\u05F4\u05F2\x03" +
		"\x02\x02\x02\u05F5\u05F7\x05\u0100\x81\x02\u05F6\u05F5\x03\x02\x02\x02" +
		"\u05F6\u05F7\x03\x02\x02\x02\u05F7\u0600\x03\x02\x02\x02\u05F8\u05FA\x07" +
		"\x0E\x02\x02\u05F9\u05F8\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB" +
		"\u05F9\x03\x02\x02\x02\u05FB\u05FC\x03\x02\x02\x02\u05FC\u05FD\x03\x02" +
		"\x02\x02\u05FD\u05FF\x05\u0100\x81\x02\u05FE\u05F9\x03\x02\x02\x02\u05FF" +
		"\u0602\x03\x02\x02\x02\u0600\u05FE\x03\x02\x02\x02\u0600\u0601\x03\x02" +
		"\x02\x02\u0601\u0606\x03\x02\x02\x02\u0602\u0600\x03\x02\x02\x02\u0603" +
		"\u0605\x07\x0E\x02\x02\u0604\u0603\x03\x02\x02\x02\u0605\u0608\x03\x02" +
		"\x02\x02\u0606\u0604\x03\x02\x02\x02\u0606\u0607\x03\x02\x02\x02\u0607" +
		"\xFF\x03\x02\x02\x02\u0608\u0606\x03\x02\x02\x02\u0609\u060B\x07\x13\x02" +
		"\x02\u060A\u0609\x03\x02\x02\x02\u060A\u060B\x03\x02\x02\x02\u060B\u060E" +
		"\x03\x02\x02\x02\u060C\u060F\x05\u0114\x8B\x02\u060D\u060F\x05\u0134\x9B" +
		"\x02\u060E\u060C\x03\x02\x02\x02\u060E\u060D\x03\x02\x02\x02\u060F\u0611" +
		"\x03\x02\x02\x02\u0610\u0612\x07\x0E\x02\x02\u0611\u0610\x03\x02\x02\x02" +
		"\u0611\u0612\x03\x02\x02\x02\u0612\u0101\x03\x02\x02\x02\u0613\u061F\x07" +
		"\n\x02\x02\u0614\u0619\x05\u0104\x83\x02\u0615\u0616\x07\x0E\x02\x02\u0616" +
		"\u0618\x05\u0104\x83\x02\u0617\u0615\x03\x02\x02\x02\u0618\u061B\x03\x02" +
		"\x02\x02\u0619\u0617\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A" +
		"\u061D\x03\x02\x02\x02\u061B\u0619\x03\x02\x02\x02\u061C\u061E\x07\x0E" +
		"\x02\x02\u061D\u061C\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E" +
		"\u0620\x03\x02\x02\x02\u061F\u0614\x03\x02\x02\x02\u061F\u0620\x03\x02" +
		"\x02\x02\u0620\u0621\x03\x02\x02\x02\u0621\u0622\x07\f\x02\x02\u0622\u0103" +
		"\x03\x02\x02\x02\u0623\u0624\x05\u010A\x86\x02\u0624\u0625\t\t\x02\x02" +
		"\u0625\u0626\x05\u0114\x8B\x02\u0626\u0637\x03\x02\x02\x02\u0627\u0628" +
		"\x07\x06\x02\x02\u0628\u0629\x05\u0114\x8B\x02\u0629\u062A\x07\x07\x02" +
		"\x02\u062A\u062B\x07\x12\x02\x02\u062B\u062C\x05\u0114\x8B\x02\u062C\u0637" +
		"\x03\x02\x02\x02\u062D\u0637\x05\u0106\x84\x02\u062E\u0637\x05\u0108\x85" +
		"\x02\u062F\u0637\x05\xE2r\x02\u0630\u0637\x05\u0136\x9C\x02\u0631\u0633" +
		"\x07\x13\x02\x02\u0632\u0631\x03\x02\x02\x02\u0632\u0633\x03\x02\x02\x02" +
		"\u0633\u0634\x03\x02\x02\x02\u0634\u0637\x05\u0114\x8B\x02\u0635\u0637" +
		"\x05F$\x02\u0636\u0623\x03\x02\x02\x02\u0636\u0627\x03\x02\x02\x02\u0636" +
		"\u062D\x03\x02\x02\x02\u0636\u062E\x03\x02\x02\x02\u0636\u062F\x03\x02" +
		"\x02\x02\u0636\u0630\x03\x02\x02\x02\u0636\u0632\x03\x02\x02\x02\u0636" +
		"\u0635\x03\x02\x02\x02\u0637\u0105\x03\x02\x02\x02\u0638\u0639\x05\u012E" +
		"\x98\x02\u0639\u063A\x07\b\x02\x02\u063A\u063C\x07\t\x02\x02\u063B\u063D" +
		"\x05:\x1E\x02\u063C\u063B\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02" +
		"\u063D\u063E\x03\x02\x02\x02\u063E\u063F\x07\n\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\u063F\u0640\x05\xF8}\x02\u0640\u0641\x07\f\x02\x02\u0641\u0107\x03\x02" +
		"\x02\x02\u0642\u0643\x05\u0130\x99\x02\u0643\u0645\x07\b\x02\x02\u0644" +
		"\u0646\x05\xF2z\x02\u0645\u0644\x03\x02\x02\x02\u0645\u0646\x03\x02\x02" +
		"\x02\u0646\u0647\x03\x02\x02\x02\u0647\u0648\x07\t\x02\x02\u0648\u0649" +
		"\x07\n\x02\x02\u0649\u064A\x05\xF8}\x02\u064A\u064B\x07\f\x02\x02\u064B" +
		"\u0109\x03\x02\x02\x02\u064C\u0654\x05\u0132\x9A\x02\u064D\u0654\x07\x8D" +
		"\x02\x02\u064E\u0654\x05\u012A\x96\x02\u064F\u0650\x07\x06\x02\x02\u0650" +
		"\u0651\x05\u0114\x8B\x02\u0651\u0652\x07\x07\x02\x02\u0652\u0654\x03\x02" +
		"\x02\x02\u0653\u064C\x03\x02\x02\x02\u0653\u064D\x03\x02\x02\x02\u0653" +
		"\u064E\x03\x02\x02\x02\u0653\u064F\x03\x02\x02\x02\u0654\u010B\x03\x02" +
		"\x02\x02\u0655\u065A\x07\b\x02\x02\u0656\u0658\x05\u010E\x88\x02\u0657" +
		"\u0659\x07\x0E\x02\x02\u0658\u0657\x03\x02\x02\x02\u0658\u0659\x03\x02" +
		"\x02\x02\u0659\u065B\x03\x02\x02\x02\u065A\u0656\x03\x02\x02\x02\u065A" +
		"\u065B\x03\x02\x02\x02\u065B\u065C\x03\x02\x02\x02\u065C\u065D\x07\t\x02" +
		"\x02\u065D\u010D\x03\x02\x02\x02\u065E\u0663\x05\u0110\x89\x02\u065F\u0660" +
		"\x07\x0E\x02\x02\u0660\u0662\x05\u0110\x89\x02\u0661\u065F\x03\x02\x02" +
		"\x02\u0662\u0665\x03\x02\x02\x02\u0663\u0661\x03\x02\x02\x02\u0663\u0664" +
		"\x03\x02\x02\x02\u0664\u010F\x03\x02\x02\x02\u0665\u0663\x03\x02\x02\x02" +
		"\u0666\u0668\x07\x13\x02\x02\u0667\u0666\x03\x02\x02\x02\u0667\u0668\x03" +
		"\x02\x02\x02\u0668\u066B\x03\x02\x02\x02\u0669\u066C\x05\u0114\x8B\x02" +
		"\u066A\u066C\x05\u0134\x9B\x02\u066B\u0669\x03\x02\x02\x02\u066B\u066A" +
		"\x03\x02\x02\x02\u066C\u0111\x03\x02\x02\x02\u066D\u0672\x05\u0114\x8B" +
		"\x02\u066E\u066F\x07\x0E\x02\x02\u066F\u0671\x05\u0114\x8B\x02\u0670\u066E" +
		"\x03\x02\x02\x02\u0671\u0674\x03\x02\x02\x02\u0672\u0670\x03\x02\x02\x02" +
		"\u0672\u0673\x03\x02\x02\x02\u0673\u0113\x03\x02\x02\x02\u0674\u0672\x03" +
		"\x02\x02\x02\u0675\u0676\b\x8B\x01\x02\u0676\u06B7\x05\u011A\x8E\x02\u0677" +
		"\u0679\x07i\x02\x02\u0678\u067A\x05\u0134\x9B\x02\u0679\u0678\x03\x02" +
		"\x02\x02\u0679\u067A\x03\x02\x02\x02\u067A\u067C\x03\x02\x02\x02\u067B" +
		"\u067D\x05\x06\x04\x02\u067C\u067B\x03\x02\x02\x02\u067C\u067D\x03\x02" +
		"\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E\u067F\x05\xD2j\x02\u067F\u0680" +
		"\x05\xD4k\x02\u0680\u06B7\x03\x02\x02\x02\u0681\u0682\x07N\x02\x02\u0682" +
		"\u0684\x05\u0114\x8B\x02\u0683\u0685\x05\x0E\b\x02\u0684\u0683\x03\x02" +
		"\x02\x02\u0684\u0685\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686" +
		"\u0687\x05\u010C\x87\x02\u0687\u06B7\x03\x02\x02\x02\u0688\u0689\x07N" +
		"\x02\x02\u0689\u068B\x05\u0114\x8B\x02\u068A\u068C\x05\x0E\b\x02\u068B" +
		"\u068A\x03\x02\x02\x02\u068B\u068C\x03\x02\x02\x02\u068C\u06B7\x03\x02" +
		"\x02\x02\u068D\u068E\x07_\x02\x02\u068E\u06B7\x05\u0114\x8B,\u068F\u0690" +
		"\x07S\x02\x02\u0690\u06B7\x05\u0114\x8B+\u0691\u0692\x07K\x02\x02\u0692" +
		"\u06B7\x05\u0114\x8B*\u0693\u0694\x07\x15\x02\x02\u0694\u06B7\x05\u0114" +
		"\x8B)\u0695\u0696\x07\x16\x02\x02\u0696\u06B7\x05\u0114\x8B(\u0697\u0698" +
		"\x07\x17\x02\x02\u0698\u06B7\x05\u0114\x8B\'\u0699\u069A\x07\x18\x02\x02" +
		"\u069A\u06B7\x05\u0114\x8B&\u069B\u069C\x07\x19\x02\x02\u069C\u06B7\x05" +
		"\u0114\x8B%\u069D\u069E\x07\x1A\x02\x02\u069E\u06B7\x05\u0114\x8B$\u069F" +
		"\u06A0\x07f\x02\x02\u06A0\u06B7\x05\u0114\x8B#\u06A1\u06B7\x05\xEAv\x02" +
		"\u06A2\u06B7\x05\xE6t\x02\u06A3\u06B7\x05\xE4s\x02\u06A4\u06B7\x05\xB4" +
		"[\x02\u06A5\u06B7\x07Z\x02\x02\u06A6\u06A8\x05\u0132\x9A\x02\u06A7\u06A9" +
		"\x05\u0114\x8B\x02\u06A8\u06A7\x03\x02\x02\x02\u06A8\u06A9\x03\x02\x02" +
		"\x02\u06A9\u06B7\x03\x02\x02\x02\u06AA\u06B7\x07l\x02\x02\u06AB\u06B7" +
		"\x05\u0124\x93\x02\u06AC\u06B7\x05\xFC\x7F\x02\u06AD\u06B7\x05\u0102\x82" +
		"\x02\u06AE\u06AF\x07\b\x02\x02\u06AF\u06B0\x05\u0112\x8A\x02\u06B0\u06B1" +
		"\x07\t\x02\x02\u06B1\u06B7\x03\x02\x02\x02\u06B2\u06B4\x05\x0E\b\x02\u06B3" +
		"\u06B5\x05\u0112\x8A\x02\u06B4\u06B3\x03\x02\x02\x02\u06B4\u06B5\x03\x02" +
		"\x02\x02\u06B5\u06B7\x03\x02\x02\x02\u06B6\u0675\x03\x02\x02\x02\u06B6" +
		"\u0677\x03\x02\x02\x02\u06B6\u0681\x03\x02\x02\x02\u06B6\u0688\x03\x02" +
		"\x02\x02\u06B6\u068D\x03\x02\x02\x02\u06B6\u068F\x03\x02\x02\x02\u06B6" +
		"\u0691\x03\x02\x02\x02\u06B6\u0693\x03\x02\x02\x02\u06B6\u0695\x03\x02" +
		"\x02\x02\u06B6\u0697\x03\x02\x02\x02\u06B6\u0699\x03\x02\x02\x02\u06B6" +
		"\u069B\x03\x02\x02\x02\u06B6\u069D\x03\x02\x02\x02\u06B6\u069F\x03\x02" +
		"\x02\x02\u06B6\u06A1\x03\x02\x02\x02\u06B6\u06A2\x03\x02\x02\x02\u06B6" +
		"\u06A3\x03\x02\x02\x02\u06B6\u06A4\x03\x02\x02\x02\u06B6\u06A5\x03\x02" +
		"\x02\x02\u06B6\u06A6\x03\x02\x02\x02\u06B6\u06AA\x03\x02\x02\x02\u06B6" +
		"\u06AB\x03\x02\x02\x02\u06B6\u06AC\x03\x02\x02\x02\u06B6\u06AD\x03\x02" +
		"\x02\x02\u06B6\u06AE\x03\x02\x02\x02\u06B6\u06B2\x03\x02\x02\x02\u06B7" +
		"\u072A\x03\x02\x02\x02\u06B8\u06B9\f4\x02\x02\u06B9\u06BA\x07\x11\x02" +
		"\x02\u06BA\u0729\x05\u0114\x8B5\u06BB\u06BC\f\"\x02\x02\u06BC\u06BD\x07" +
		"\x1E\x02\x02\u06BD\u0729\x05\u0114\x8B\"\u06BE\u06BF\f!\x02\x02\u06BF" +
		"\u06C0\t\n\x02\x02\u06C0\u0729\x05\u0114\x8B\"\u06C1\u06C2\f \x02\x02" +
		"\u06C2\u06C3\t\v\x02\x02\u06C3\u0729\x05\u0114\x8B!\u06C4\u06C5\f\x1F" +
		"\x02\x02\u06C5\u06C6\x07\x1F\x02\x02\u06C6\u0729\x05\u0114\x8B \u06C7" +
		"\u06CE\f\x1E\x02\x02\u06C8\u06CF\x07!\x02\x02\u06C9\u06CA\x07#\x02\x02" +
		"\u06CA\u06CF\x07#\x02\x02\u06CB\u06CC\x07#\x02\x02\u06CC\u06CD\x07#\x02" +
		"\x02\u06CD\u06CF\x07#\x02\x02\u06CE\u06C8\x03\x02\x02\x02\u06CE\u06C9" +
		"\x03\x02\x02\x02\u06CE\u06CB\x03\x02\x02\x02\u06CF\u06D0\x03\x02\x02\x02" +
		"\u06D0\u0729\x05\u0114\x8B\x1F\u06D1\u06D2\f\x1D\x02\x02\u06D2\u06D3\t" +
		"\f\x02\x02\u06D3\u0729\x05\u0114\x8B\x1E\u06D4\u06D5\f\x1C\x02\x02\u06D5" +
		"\u06D6\x07J\x02\x02\u06D6\u0729\x05\u0114\x8B\x1D\u06D7\u06D8\f\x1B\x02" +
		"\x02\u06D8\u06D9\x07`\x02\x02\u06D9\u0729\x05\u0114\x8B\x1C\u06DA\u06DB" +
		"\f\x1A\x02\x02\u06DB\u06DC\t\r\x02\x02\u06DC\u0729\x05\u0114\x8B\x1B\u06DD" +
		"\u06DE\f\x19\x02\x02\u06DE\u06DF\x07*\x02\x02\u06DF\u0729\x05\u0114\x8B" +
		"\x1A\u06E0\u06E1\f\x18\x02\x02\u06E1\u06E2\x07+\x02\x02\u06E2\u0729\x05" +
		"\u0114\x8B\x19\u06E3\u06E4\f\x17\x02\x02\u06E4\u06E5\x07,\x02\x02\u06E5" +
		"\u0729\x05\u0114\x8B\x18\u06E6\u06E7\f\x16\x02\x02\u06E7\u06E8\x07-\x02" +
		"\x02\u06E8\u0729\x05\u0114\x8B\x17\u06E9\u06EA\f\x15\x02\x02\u06EA\u06EB" +
		"\x07.\x02\x02\u06EB\u0729\x05\u0114\x8B\x16\u06EC\u06ED\f\x14\x02\x02" +
		"\u06ED\u06EE\x07\x10\x02\x02\u06EE\u06EF\x05\u0114\x8B\x02\u06EF\u06F0" +
		"\x07\x12\x02\x02\u06F0\u06F1\x05\u0114\x8B\x15\u06F1\u0729\x03\x02\x02" +
		"\x02\u06F2\u06F3\f\x13\x02\x02\u06F3\u06F4\x07\x0F\x02\x02\u06F4\u0729" +
		"\x05\u0114\x8B\x14\u06F5\u06F6\f\x12\x02\x02\u06F6\u06F7\x05\u0122\x92" +
		"\x02\u06F7\u06F8\x05\u0114\x8B\x13\u06F8\u0729\x03\x02\x02\x02\u06F9\u06FB" +
		"\f5\x02\x02\u06FA\u06FC\x07\x11\x02\x02\u06FB\u06FA\x03\x02\x02\x02\u06FB" +
		"\u06FC\x03\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD\u06FE\x07\x06" +
		"\x02\x02\u06FE\u06FF\x05\u0112\x8A\x02\u06FF\u0700\x07\x07\x02\x02\u0700" +
		"\u0729\x03\x02\x02\x02\u0701\u0703\f3\x02\x02\u0702\u0704\x07\x1A\x02" +
		"\x02\u0703\u0702\x03\x02\x02\x02\u0703\u0704\x03\x02\x02\x02\u0704\u0705" +
		"\x03\x02\x02\x02\u0705\u0707\x07\x14\x02\x02\u0706\u0708\x07 \x02\x02" +
		"\u0707\u0706\x03\x02\x02\x02\u0707\u0708\x03\x02\x02\x02\u0708\u0709\x03" +
		"\x02\x02\x02\u0709\u070B\x05\u0132\x9A\x02\u070A\u070C\x05\x1E\x10\x02" +
		"\u070B\u070A\x03\x02\x02\x02\u070B\u070C\x03\x02\x02\x02\u070C\u0729\x03" +
		"\x02\x02\x02\u070D\u070F\f2\x02\x02\u070E\u0710\x07\x10\x02\x02\u070F" +
		"\u070E\x03\x02\x02\x02\u070F\u0710\x03\x02\x02\x02\u0710\u0711\x03\x02" +
		"\x02\x02\u0711\u0713\x07\x14\x02\x02\u0712\u0714\x07 \x02\x02\u0713\u0712" +
		"\x03\x02\x02\x02\u0713\u0714\x03\x02\x02\x02\u0714\u0715\x03\x02\x02\x02" +
		"\u0715\u0717\x05\u0132\x9A\x02\u0716\u0718\x05\x1E\x10\x02\u0717\u0716" +
		"\x03\x02\x02\x02\u0717\u0718\x03\x02\x02\x02\u0718\u0729\x03\x02\x02\x02" +
		"\u0719\u071A\f/\x02\x02\u071A\u0729\x05\u010C\x87\x02\u071B\u071C\f.\x02" +
		"\x02\u071C\u071D\x06\x8B(\x02\u071D\u0729\x07\x15\x02\x02\u071E\u071F" +
		"\f-\x02\x02\u071F\u0720\x06\x8B*\x02\u0720\u0729\x07\x16\x02\x02\u0721" +
		"\u0722\f\x11\x02\x02\u0722\u0729\x05\u0126\x94\x02\u0723\u0724\f\x04\x02" +
		"\x02\u0724\u0725\x07b\x02\x02\u0725\u0729\x05\u0116\x8C\x02\u0726\u0727" +
		"\f\x03\x02\x02\u0727\u0729\x07\x1A\x02\x02\u0728\u06B8\x03\x02\x02\x02" +
		"\u0728\u06BB\x03\x02\x02\x02\u0728\u06BE\x03\x02\x02\x02\u0728\u06C1\x03" +
		"\x02\x02\x02\u0728\u06C4\x03\x02\x02\x02\u0728\u06C7\x03\x02\x02\x02\u0728" +
		"\u06D1\x03\x02\x02\x02\u0728\u06D4\x03\x02\x02\x02\u0728\u06D7\x03\x02" +
		"\x02\x02\u0728\u06DA\x03\x02\x02\x02\u0728\u06DD\x03\x02\x02\x02\u0728" +
		"\u06E0\x03\x02\x02\x02\u0728\u06E3\x03\x02\x02\x02\u0728\u06E6\x03\x02" +
		"\x02\x02\u0728\u06E9\x03\x02\x02\x02\u0728\u06EC\x03\x02\x02\x02\u0728" +
		"\u06F2\x03\x02\x02\x02\u0728\u06F5\x03\x02\x02\x02\u0728\u06F9\x03\x02" +
		"\x02\x02\u0728\u0701\x03\x02\x02\x02\u0728\u070D\x03\x02\x02\x02\u0728" +
		"\u0719\x03\x02\x02\x02\u0728\u071B\x03\x02\x02\x02\u0728\u071E\x03\x02" +
		"\x02\x02\u0728\u0721\x03\x02\x02\x02\u0728\u0723\x03\x02\x02\x02\u0728" +
		"\u0726\x03\x02\x02\x02\u0729\u072C\x03\x02\x02\x02\u072A\u0728\x03\x02" +
		"\x02\x02\u072A\u072B\x03\x02\x02\x02\u072B\u0115\x03\x02\x02\x02\u072C" +
		"\u072A\x03\x02\x02\x02\u072D\u0730\x05\x1A\x0E\x02\u072E\u072F\x07\x06" +
		"\x02\x02\u072F\u0731\x07\x07\x02\x02\u0730\u072E\x03\x02\x02\x02\u0730" +
		"\u0731\x03\x02\x02\x02\u0731\u0734\x03\x02\x02\x02\u0732\u0734\x05\u0114" +
		"\x8B\x02\u0733\u072D\x03\x02\x02\x02\u0733\u0732\x03\x02\x02\x02\u0734" +
		"\u0117\x03\x02\x02\x02\u0735\u073A\x05\u0134\x9B\x02\u0736\u073A\x05\u013A" +
		"\x9E\x02\u0737\u073A\x05\xFC\x7F\x02\u0738\u073A\x05\u0102\x82\x02\u0739" +
		"\u0735\x03\x02\x02\x02\u0739\u0736\x03\x02\x02\x02\u0739\u0737\x03\x02" +
		"\x02\x02\u0739\u0738\x03\x02\x02\x02\u073A\u0119\x03\x02\x02\x02\u073B" +
		"\u0751\x05\xCEh\x02\u073C\u073E\x07e\x02\x02\u073D\u073C\x03\x02\x02\x02" +
		"\u073D\u073E\x03\x02\x02\x02\u073E\u073F\x03\x02\x02\x02\u073F\u0741\x07" +
		"Y\x02\x02\u0740\u0742\x07\x1B\x02\x02\u0741\u0740\x03\x02\x02\x02\u0741" +
		"\u0742\x03\x02\x02\x02\u0742\u0743\x03\x02\x02\x02\u0743\u0745\x07\b\x02" +
		"\x02\u0744\u0746\x05\xF2z\x02\u0745\u0744\x03\x02\x02\x02\u0745\u0746" +
		"\x03\x02\x02\x02\u0746\u0747\x03\x02\x02\x02\u0747\u0749\x07\t\x02\x02" +
		"\u0748\u074A\x05:\x1E\x02\u0749\u0748\x03\x02\x02\x02\u0749\u074A\x03" +
		"\x02\x02\x02\u074A\u074B\x03\x02\x02\x02\u074B\u074C\x07\n\x02\x02\u074C" +
		"\u074D\x05\xF8}\x02\u074D\u074E\x07\f\x02\x02\u074E\u0751\x03\x02\x02" +
		"\x02\u074F\u0751\x05\u011C\x8F\x02\u0750\u073B\x03\x02\x02\x02\u0750\u073D" +
		"\x03\x02\x02\x02\u0750\u074F\x03\x02\x02\x02\u0751\u011B\x03\x02\x02\x02" +
		"\u0752\u0754\x07e\x02\x02\u0753\u0752\x03\x02\x02\x02\u0753\u0754\x03" +
		"\x02\x02\x02\u0754\u0755\x03\x02\x02\x02\u0755\u0757\x05\u011E\x90\x02" +
		"\u0756\u0758\x05:\x1E\x02\u0757\u0756\x03\x02\x02\x02\u0757\u0758\x03" +
		"\x02\x02\x02\u0758\u0759\x03\x02\x02\x02\u0759\u075A\x07<\x02\x02\u075A" +
		"\u075B\x05\u0120\x91\x02\u075B\u011D\x03\x02\x02\x02\u075C\u0763\x05\u010A" +
		"\x86\x02\u075D\u075F\x07\b\x02\x02\u075E\u0760\x05\xF2z\x02\u075F\u075E" +
		"\x03\x02\x02\x02\u075F\u0760\x03\x02\x02\x02\u0760\u0761\x03\x02\x02\x02" +
		"\u0761\u0763\x07\t\x02\x02\u0762\u075C\x03\x02\x02\x02\u0762\u075D\x03" +
		"\x02\x02\x02\u0763\u011F\x03\x02\x02\x02\u0764\u076A\x05\u0114\x8B\x02" +
		"\u0765\u0766\x07\n\x02\x02\u0766\u0767\x05\xF8}\x02\u0767\u0768\x07\f" +
		"\x02\x02\u0768\u076A\x03\x02\x02\x02\u0769\u0764\x03\x02\x02\x02\u0769" +
		"\u0765\x03\x02\x02\x02\u076A\u0121\x03\x02\x02\x02\u076B\u076C\t\x0E\x02" +
		"\x02\u076C\u0123\x03\x02\x02\x02\u076D\u0775\x07=\x02\x02\u076E\u0775" +
		"\x07>\x02\x02\u076F\u0775\x07\x8D\x02\x02\u0770\u0775\x05\u0126\x94\x02" +
		"\u0771\u0775\x07\x05\x02\x02\u0772\u0775\x05\u012A\x96\x02\u0773\u0775" +
		"\x05\u012C\x97\x02\u0774\u076D\x03\x02\x02\x02\u0774\u076E\x03\x02\x02" +
		"\x02\u0774\u076F\x03\x02\x02\x02\u0774\u0770\x03\x02\x02\x02\u0774\u0771" +
		"\x03\x02\x02\x02\u0774\u0772\x03\x02\x02\x02\u0774\u0773\x03\x02\x02\x02" +
		"\u0775\u0125\x03\x02\x02\x02\u0776\u077A\x07\x8E\x02\x02\u0777\u0779\x05" +
		"\u0128\x95\x02\u0778\u0777\x03\x02\x02\x02\u0779\u077C\x03\x02\x02\x02" +
		"\u077A\u0778\x03\x02\x02\x02\u077A\u077B\x03\x02\x02\x02\u077B\u077D\x03" +
		"\x02\x02\x02\u077C\u077A\x03\x02\x02\x02\u077D\u077E\x07\x8E\x02\x02\u077E" +
		"\u0127\x03\x02\x02\x02\u077F\u0786\x07\x96\x02\x02\u0780\u0781\x07\x95" +
		"\x02\x02\u0781\u0782\x05\u0114\x8B\x02\u0782\u0783\x07\v\x02\x02\u0783" +
		"\u0786\x03\x02\x02\x02\u0784\u0786\x07\x94\x02\x02\u0785\u077F\x03\x02" +
		"\x02\x02\u0785\u0780\x03\x02\x02\x02\u0785\u0784\x03\x02\x02\x02\u0786" +
		"\u0129\x03\x02\x02\x02\u0787\u0788\t\x0F\x02\x02\u0788\u012B\x03\x02\x02" +
		"\x02\u0789\u078A\t\x10\x02\x02\u078A\u012D\x03\x02\x02\x02\u078B\u078C" +
		"\x06\x98.\x02\u078C\u078D\x05\u0134\x9B\x02\u078D\u078E\x05\xEEx\x02\u078E" +
		"\u012F\x03\x02\x02\x02\u078F\u0790\x06\x99/\x02\u0790\u0791\x05\u0134" +
		"\x9B\x02\u0791\u0792\x05\xEEx\x02\u0792\u0131\x03\x02\x02\x02\u0793\u0796" +
		"\x05\u0134\x9B\x02\u0794\u0796\x05\u0138\x9D\x02\u0795\u0793\x03\x02\x02" +
		"\x02\u0795\u0794\x03\x02\x02\x02\u0796\u0133\x03\x02\x02\x02\u0797\u0798" +
		"\t\x11\x02\x02\u0798\u0135\x03\x02\x02\x02\u0799\u079D\x05\u0134\x9B\x02" +
		"\u079A\u079D\x07\x83\x02\x02\u079B\u079D\x07\x86\x02\x02\u079C\u0799\x03" +
		"\x02\x02\x02\u079C\u079A\x03\x02\x02\x02\u079C\u079B\x03\x02\x02\x02\u079D" +
		"\u0137\x03\x02\x02\x02\u079E\u07A2\x05\u013A\x9E\x02\u079F\u07A2\x07=" +
		"\x02\x02\u07A0\u07A2\x07>\x02\x02\u07A1\u079E\x03\x02\x02\x02\u07A1\u079F" +
		"\x03\x02\x02\x02\u07A1\u07A0\x03\x02\x02\x02\u07A2\u0139\x03\x02\x02\x02" +
		"\u07A3\u07A4\t\x12\x02\x02\u07A4\u013B\x03\x02\x02\x02\u07A5\u07AA\x07" +
		"\r\x02\x02\u07A6\u07AA\x07\x02\x02\x03\u07A7\u07AA\x06\x9F0\x02\u07A8" +
		"\u07AA\x06\x9F1\x02\u07A9\u07A5\x03\x02\x02\x02\u07A9\u07A6\x03\x02\x02" +
		"\x02\u07A9\u07A7\x03\x02\x02\x02\u07A9\u07A8\x03\x02\x02\x02\u07AA\u013D" +
		"\x03\x02\x02\x02\u0104\u0143\u0147\u0150\u0155\u015C\u0163\u016C\u0172" +
		"\u0178\u0183\u0185\u019C\u01A2\u01A7\u01B3\u01BA\u01BE\u01C3\u01C9\u01CD" +
		"\u01D3\u01DA\u01E4\u01E6\u01F6\u01FA\u01FD\u0201\u0209\u020D\u021C\u0220" +
		"\u0223\u0227\u022A\u022E\u0234\u0238\u023C\u0244\u0249\u024C\u024E\u0255" +
		"\u025A\u025D\u0260\u0265\u0268\u026B\u0270\u0273\u0276\u027A\u0280\u0284" +
		"\u0288\u028C\u0297\u029C\u02A1\u02A8\u02AD\u02B5\u02B8\u02BB\u02C0\u02C3" +
		"\u02C7\u02D1\u02D5\u02DB\u02E1\u02E8\u02EE\u02F1\u02F7\u02FF\u0304\u030F" +
		"\u0314\u031C\u0323\u032A\u032F\u0350\u0354\u035B\u0362\u036A\u036E\u0375" +
		"\u037D\u0382\u0384\u038B\u038F\u0398\u039C\u03A4\u03A8\u03AC\u03B5\u03BD" +
		"\u03C1\u03C9\u03CE\u03D0\u03D7\u03DC\u03E0\u03E4\u03E7\u03EA\u03ED\u03F1" +
		"\u03F5\u03F9\u03FB\u0402\u0408\u040B\u040E\u0412\u0415\u041C\u0425\u0438" +
		"\u043C\u0440\u044A\u044E\u0466\u046F\u0476\u0480\u0485\u048C\u0493\u049A" +
		"\u04A1\u04B3\u04B7\u04B9\u04C0\u04C6\u04CB\u04DA\u04DD\u04E3\u04E7\u04F2" +
		"\u04F6\u04FF\u0502\u0506\u0508\u050B\u0510\u0516\u0519\u051F\u052C\u0531" +
		"\u0536\u0539\u053C\u0548\u054D\u0550\u0553\u0556\u0559\u055C\u0563\u0566" +
		"\u056B\u0573\u0578\u057C\u0589\u058D\u059A\u059E\u05A7\u05B0\u05BA\u05BF" +
		"\u05C2\u05C9\u05CB\u05CE\u05D1\u05D5\u05D8\u05DC\u05E1\u05E4\u05E9\u05F2" +
		"\u05F6\u05FB\u0600\u0606\u060A\u060E\u0611\u0619\u061D\u061F\u0632\u0636" +
		"\u063C\u0645\u0653\u0658\u065A\u0663\u0667\u066B\u0672\u0679\u067C\u0684" +
		"\u068B\u06A8\u06B4\u06B6\u06CE\u06FB\u0703\u0707\u070B\u070F\u0713\u0717" +
		"\u0728\u072A\u0730\u0733\u0739\u073D\u0741\u0745\u0749\u0750\u0753\u0757" +
		"\u075F\u0762\u0769\u0774\u077A\u0785\u0795\u079C\u07A1\u07A9";
	public static readonly _serializedATN: string = Utils.join(
		[
			TypeScriptParser._serializedATNSegment0,
			TypeScriptParser._serializedATNSegment1,
			TypeScriptParser._serializedATNSegment2,
			TypeScriptParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TypeScriptParser.__ATN) {
			TypeScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TypeScriptParser._serializedATN));
		}

		return TypeScriptParser.__ATN;
	}

}

export class InitializerContext extends ParserRuleContext {
	public Assign(): TerminalNode { return this.getToken(TypeScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_initializer; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
}


export class BindingPatternContext extends ParserRuleContext {
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_bindingPattern; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterBindingPattern) {
			listener.enterBindingPattern(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitBindingPattern) {
			listener.exitBindingPattern(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LessThan(): TerminalNode { return this.getToken(TypeScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode { return this.getToken(TypeScriptParser.MoreThan, 0); }
	public typeParameterList(): TypeParameterListContext | undefined {
		return this.tryGetRuleContext(0, TypeParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
}


export class TypeParameterListContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeParameterList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeParameterList) {
			listener.enterTypeParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeParameterList) {
			listener.exitTypeParameterList(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Assign, 0); }
	public typeArgument(): TypeArgumentContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
}


export class ConstraintContext extends ParserRuleContext {
	public Extends(): TerminalNode { return this.getToken(TypeScriptParser.Extends, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_constraint; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterConstraint) {
			listener.enterConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitConstraint) {
			listener.exitConstraint(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LessThan(): TerminalNode { return this.getToken(TypeScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode { return this.getToken(TypeScriptParser.MoreThan, 0); }
	public typeArgumentList(): TypeArgumentListContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
}


export class TypeArgumentListContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeArgumentList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeArgumentList) {
			listener.enterTypeArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeArgumentList) {
			listener.exitTypeArgumentList(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext | undefined {
		return this.tryGetRuleContext(0, UnionOrIntersectionOrPrimaryTypeContext);
	}
	public BitOr(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BitOr, 0); }
	public BitAnd(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BitAnd, 0); }
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public constructorType(): ConstructorTypeContext | undefined {
		return this.tryGetRuleContext(0, ConstructorTypeContext);
	}
	public typeGeneric(): TypeGenericContext | undefined {
		return this.tryGetRuleContext(0, TypeGenericContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_type_; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
}


export class UnionOrIntersectionOrPrimaryTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType; }
	public copyFrom(ctx: UnionOrIntersectionOrPrimaryTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class UnionContext extends UnionOrIntersectionOrPrimaryTypeContext {
	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext[];
	public unionOrIntersectionOrPrimaryType(i: number): UnionOrIntersectionOrPrimaryTypeContext;
	public unionOrIntersectionOrPrimaryType(i?: number): UnionOrIntersectionOrPrimaryTypeContext | UnionOrIntersectionOrPrimaryTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext);
		} else {
			return this.getRuleContext(i, UnionOrIntersectionOrPrimaryTypeContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(TypeScriptParser.BitOr, 0); }
	constructor(ctx: UnionOrIntersectionOrPrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterUnion) {
			listener.enterUnion(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitUnion) {
			listener.exitUnion(this);
		}
	}
}
export class IntersectionContext extends UnionOrIntersectionOrPrimaryTypeContext {
	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext[];
	public unionOrIntersectionOrPrimaryType(i: number): UnionOrIntersectionOrPrimaryTypeContext;
	public unionOrIntersectionOrPrimaryType(i?: number): UnionOrIntersectionOrPrimaryTypeContext | UnionOrIntersectionOrPrimaryTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext);
		} else {
			return this.getRuleContext(i, UnionOrIntersectionOrPrimaryTypeContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(TypeScriptParser.BitAnd, 0); }
	constructor(ctx: UnionOrIntersectionOrPrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIntersection) {
			listener.enterIntersection(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIntersection) {
			listener.exitIntersection(this);
		}
	}
}
export class PrimaryContext extends UnionOrIntersectionOrPrimaryTypeContext {
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	constructor(ctx: UnionOrIntersectionOrPrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
}


export class PrimaryTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_primaryType; }
	public copyFrom(ctx: PrimaryTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenthesizedPrimTypeContext extends PrimaryTypeContext {
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterParenthesizedPrimType) {
			listener.enterParenthesizedPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitParenthesizedPrimType) {
			listener.exitParenthesizedPrimType(this);
		}
	}
}
export class PredefinedPrimTypeContext extends PrimaryTypeContext {
	public predefinedType(): PredefinedTypeContext {
		return this.getRuleContext(0, PredefinedTypeContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPredefinedPrimType) {
			listener.enterPredefinedPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPredefinedPrimType) {
			listener.exitPredefinedPrimType(this);
		}
	}
}
export class ReferencePrimTypeContext extends PrimaryTypeContext {
	public typeReference(): TypeReferenceContext {
		return this.getRuleContext(0, TypeReferenceContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterReferencePrimType) {
			listener.enterReferencePrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitReferencePrimType) {
			listener.exitReferencePrimType(this);
		}
	}
}
export class ObjectPrimTypeContext extends PrimaryTypeContext {
	public objectType(): ObjectTypeContext {
		return this.getRuleContext(0, ObjectTypeContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterObjectPrimType) {
			listener.enterObjectPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitObjectPrimType) {
			listener.exitObjectPrimType(this);
		}
	}
}
export class ArrayPrimTypeContext extends PrimaryTypeContext {
	public primaryType(): PrimaryTypeContext[];
	public primaryType(i: number): PrimaryTypeContext;
	public primaryType(i?: number): PrimaryTypeContext | PrimaryTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryTypeContext);
		} else {
			return this.getRuleContext(i, PrimaryTypeContext);
		}
	}
	public OpenBracket(): TerminalNode { return this.getToken(TypeScriptParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(TypeScriptParser.CloseBracket, 0); }
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArrayPrimType) {
			listener.enterArrayPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArrayPrimType) {
			listener.exitArrayPrimType(this);
		}
	}
}
export class TuplePrimTypeContext extends PrimaryTypeContext {
	public OpenBracket(): TerminalNode { return this.getToken(TypeScriptParser.OpenBracket, 0); }
	public tupleElementTypes(): TupleElementTypesContext {
		return this.getRuleContext(0, TupleElementTypesContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(TypeScriptParser.CloseBracket, 0); }
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTuplePrimType) {
			listener.enterTuplePrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTuplePrimType) {
			listener.exitTuplePrimType(this);
		}
	}
}
export class QueryPrimTypeContext extends PrimaryTypeContext {
	public typeQuery(): TypeQueryContext {
		return this.getRuleContext(0, TypeQueryContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterQueryPrimType) {
			listener.enterQueryPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitQueryPrimType) {
			listener.exitQueryPrimType(this);
		}
	}
}
export class ThisPrimTypeContext extends PrimaryTypeContext {
	public This(): TerminalNode { return this.getToken(TypeScriptParser.This, 0); }
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterThisPrimType) {
			listener.enterThisPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitThisPrimType) {
			listener.exitThisPrimType(this);
		}
	}
}
export class RedefinitionOfTypeContext extends PrimaryTypeContext {
	public typeReference(): TypeReferenceContext {
		return this.getRuleContext(0, TypeReferenceContext);
	}
	public Is(): TerminalNode { return this.getToken(TypeScriptParser.Is, 0); }
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterRedefinitionOfType) {
			listener.enterRedefinitionOfType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitRedefinitionOfType) {
			listener.exitRedefinitionOfType(this);
		}
	}
}
export class KeyOfTypeContext extends PrimaryTypeContext {
	public KeyOf(): TerminalNode { return this.getToken(TypeScriptParser.KeyOf, 0); }
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterKeyOfType) {
			listener.enterKeyOfType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitKeyOfType) {
			listener.exitKeyOfType(this);
		}
	}
}


export class PredefinedTypeContext extends ParserRuleContext {
	public Any(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Any, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.NullLiteral, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Number, 0); }
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.DecimalLiteral, 0); }
	public Boolean(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Boolean, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BooleanLiteral, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.String, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.StringLiteral, 0); }
	public Symbol(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Symbol, 0); }
	public Unique(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Unique, 0); }
	public Never(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Never, 0); }
	public Undefined(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Undefined, 0); }
	public Object(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Object, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Void, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_predefinedType; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPredefinedType) {
			listener.enterPredefinedType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPredefinedType) {
			listener.exitPredefinedType(this);
		}
	}
}


export class TypeReferenceContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public typeGeneric(): TypeGenericContext | undefined {
		return this.tryGetRuleContext(0, TypeGenericContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeReference; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeReference) {
			listener.enterTypeReference(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeReference) {
			listener.exitTypeReference(this);
		}
	}
}


export class TypeGenericContext extends ParserRuleContext {
	public LessThan(): TerminalNode { return this.getToken(TypeScriptParser.LessThan, 0); }
	public typeArgumentList(): TypeArgumentListContext {
		return this.getRuleContext(0, TypeArgumentListContext);
	}
	public MoreThan(): TerminalNode { return this.getToken(TypeScriptParser.MoreThan, 0); }
	public typeGeneric(): TypeGenericContext | undefined {
		return this.tryGetRuleContext(0, TypeGenericContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeGeneric; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeGeneric) {
			listener.enterTypeGeneric(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeGeneric) {
			listener.exitTypeGeneric(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public namespaceName(): NamespaceNameContext | undefined {
		return this.tryGetRuleContext(0, NamespaceNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeName; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
}


export class ObjectTypeContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public typeBody(): TypeBodyContext | undefined {
		return this.tryGetRuleContext(0, TypeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_objectType; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterObjectType) {
			listener.enterObjectType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitObjectType) {
			listener.exitObjectType(this);
		}
	}
}


export class TypeBodyContext extends ParserRuleContext {
	public typeMemberList(): TypeMemberListContext {
		return this.getRuleContext(0, TypeMemberListContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.SemiColon, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeBody; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeBody) {
			listener.enterTypeBody(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeBody) {
			listener.exitTypeBody(this);
		}
	}
}


export class TypeMemberListContext extends ParserRuleContext {
	public typeMember(): TypeMemberContext[];
	public typeMember(i: number): TypeMemberContext;
	public typeMember(i?: number): TypeMemberContext | TypeMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeMemberContext);
		} else {
			return this.getRuleContext(i, TypeMemberContext);
		}
	}
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.SemiColon);
		} else {
			return this.getToken(TypeScriptParser.SemiColon, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeMemberList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeMemberList) {
			listener.enterTypeMemberList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeMemberList) {
			listener.exitTypeMemberList(this);
		}
	}
}


export class TypeMemberContext extends ParserRuleContext {
	public propertySignatur(): PropertySignaturContext | undefined {
		return this.tryGetRuleContext(0, PropertySignaturContext);
	}
	public callSignature(): CallSignatureContext | undefined {
		return this.tryGetRuleContext(0, CallSignatureContext);
	}
	public constructSignature(): ConstructSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstructSignatureContext);
	}
	public indexSignature(): IndexSignatureContext | undefined {
		return this.tryGetRuleContext(0, IndexSignatureContext);
	}
	public methodSignature(): MethodSignatureContext | undefined {
		return this.tryGetRuleContext(0, MethodSignatureContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.ARROW, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeMember; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeMember) {
			listener.enterTypeMember(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeMember) {
			listener.exitTypeMember(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(TypeScriptParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(TypeScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
}


export class TupleTypeContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(TypeScriptParser.OpenBracket, 0); }
	public tupleElementTypes(): TupleElementTypesContext {
		return this.getRuleContext(0, TupleElementTypesContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(TypeScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_tupleType; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTupleType) {
			listener.enterTupleType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTupleType) {
			listener.exitTupleType(this);
		}
	}
}


export class TupleElementTypesContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_tupleElementTypes; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTupleElementTypes) {
			listener.enterTupleElementTypes(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTupleElementTypes) {
			listener.exitTupleElementTypes(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public ARROW(): TerminalNode { return this.getToken(TypeScriptParser.ARROW, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_functionType; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
}


export class ConstructorTypeContext extends ParserRuleContext {
	public New(): TerminalNode { return this.getToken(TypeScriptParser.New, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public ARROW(): TerminalNode { return this.getToken(TypeScriptParser.ARROW, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_constructorType; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterConstructorType) {
			listener.enterConstructorType(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitConstructorType) {
			listener.exitConstructorType(this);
		}
	}
}


export class TypeQueryContext extends ParserRuleContext {
	public Typeof(): TerminalNode { return this.getToken(TypeScriptParser.Typeof, 0); }
	public typeQueryExpression(): TypeQueryExpressionContext {
		return this.getRuleContext(0, TypeQueryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeQuery; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeQuery) {
			listener.enterTypeQuery(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeQuery) {
			listener.exitTypeQuery(this);
		}
	}
}


export class TypeQueryExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Dot);
		} else {
			return this.getToken(TypeScriptParser.Dot, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeQueryExpression; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeQueryExpression) {
			listener.enterTypeQueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeQueryExpression) {
			listener.exitTypeQueryExpression(this);
		}
	}
}


export class PropertySignaturContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public ReadOnly(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.ReadOnly, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.QuestionMark, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.ARROW, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_propertySignatur; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPropertySignatur) {
			listener.enterPropertySignatur(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPropertySignatur) {
			listener.exitPropertySignatur(this);
		}
	}
}


export class TypeAnnotationContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(TypeScriptParser.Colon, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeAnnotation; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeAnnotation) {
			listener.enterTypeAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeAnnotation) {
			listener.exitTypeAnnotation(this);
		}
	}
}


export class CallSignatureContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_callSignature; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterCallSignature) {
			listener.enterCallSignature(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitCallSignature) {
			listener.exitCallSignature(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public restParameter(): RestParameterContext | undefined {
		return this.tryGetRuleContext(0, RestParameterContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class RequiredParameterListContext extends ParserRuleContext {
	public requiredParameter(): RequiredParameterContext[];
	public requiredParameter(i: number): RequiredParameterContext;
	public requiredParameter(i?: number): RequiredParameterContext | RequiredParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequiredParameterContext);
		} else {
			return this.getRuleContext(i, RequiredParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_requiredParameterList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterRequiredParameterList) {
			listener.enterRequiredParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitRequiredParameterList) {
			listener.exitRequiredParameterList(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public requiredParameter(): RequiredParameterContext | undefined {
		return this.tryGetRuleContext(0, RequiredParameterContext);
	}
	public optionalParameter(): OptionalParameterContext | undefined {
		return this.tryGetRuleContext(0, OptionalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_parameter; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
}


export class OptionalParameterContext extends ParserRuleContext {
	public identifierOrPattern(): IdentifierOrPatternContext | undefined {
		return this.tryGetRuleContext(0, IdentifierOrPatternContext);
	}
	public decoratorList(): DecoratorListContext | undefined {
		return this.tryGetRuleContext(0, DecoratorListContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.QuestionMark, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	public accessibilityModifier(): AccessibilityModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessibilityModifierContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_optionalParameter; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterOptionalParameter) {
			listener.enterOptionalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitOptionalParameter) {
			listener.exitOptionalParameter(this);
		}
	}
}


export class RestParameterContext extends ParserRuleContext {
	public Ellipsis(): TerminalNode { return this.getToken(TypeScriptParser.Ellipsis, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_restParameter; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterRestParameter) {
			listener.enterRestParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitRestParameter) {
			listener.exitRestParameter(this);
		}
	}
}


export class RequiredParameterContext extends ParserRuleContext {
	public identifierOrPattern(): IdentifierOrPatternContext {
		return this.getRuleContext(0, IdentifierOrPatternContext);
	}
	public decoratorList(): DecoratorListContext | undefined {
		return this.tryGetRuleContext(0, DecoratorListContext);
	}
	public accessibilityModifier(): AccessibilityModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessibilityModifierContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_requiredParameter; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterRequiredParameter) {
			listener.enterRequiredParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitRequiredParameter) {
			listener.exitRequiredParameter(this);
		}
	}
}


export class AccessibilityModifierContext extends ParserRuleContext {
	public Public(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Public, 0); }
	public Private(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Private, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Protected, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_accessibilityModifier; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAccessibilityModifier) {
			listener.enterAccessibilityModifier(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAccessibilityModifier) {
			listener.exitAccessibilityModifier(this);
		}
	}
}


export class IdentifierOrPatternContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public bindingPattern(): BindingPatternContext | undefined {
		return this.tryGetRuleContext(0, BindingPatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_identifierOrPattern; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIdentifierOrPattern) {
			listener.enterIdentifierOrPattern(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIdentifierOrPattern) {
			listener.exitIdentifierOrPattern(this);
		}
	}
}


export class ConstructSignatureContext extends ParserRuleContext {
	public New(): TerminalNode { return this.getToken(TypeScriptParser.New, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_constructSignature; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterConstructSignature) {
			listener.enterConstructSignature(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitConstructSignature) {
			listener.exitConstructSignature(this);
		}
	}
}


export class IndexSignatureContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(TypeScriptParser.OpenBracket, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Colon(): TerminalNode { return this.getToken(TypeScriptParser.Colon, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(TypeScriptParser.CloseBracket, 0); }
	public typeAnnotation(): TypeAnnotationContext {
		return this.getRuleContext(0, TypeAnnotationContext);
	}
	public Number(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Number, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.String, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_indexSignature; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIndexSignature) {
			listener.enterIndexSignature(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIndexSignature) {
			listener.exitIndexSignature(this);
		}
	}
}


export class MethodSignatureContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public callSignature(): CallSignatureContext {
		return this.getRuleContext(0, CallSignatureContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.QuestionMark, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_methodSignature; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterMethodSignature) {
			listener.enterMethodSignature(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitMethodSignature) {
			listener.exitMethodSignature(this);
		}
	}
}


export class TypeAliasDeclarationContext extends ParserRuleContext {
	public TypeAlias(): TerminalNode { return this.getToken(TypeScriptParser.TypeAlias, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Assign(): TerminalNode { return this.getToken(TypeScriptParser.Assign, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Export(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Export, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_typeAliasDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeAliasDeclaration) {
			listener.enterTypeAliasDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeAliasDeclaration) {
			listener.exitTypeAliasDeclaration(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public Constructor(): TerminalNode { return this.getToken(TypeScriptParser.Constructor, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public accessibilityModifier(): AccessibilityModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessibilityModifierContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.SemiColon, 0); }
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public Interface(): TerminalNode { return this.getToken(TypeScriptParser.Interface, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public objectType(): ObjectTypeContext {
		return this.getRuleContext(0, ObjectTypeContext);
	}
	public Export(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Export, 0); }
	public Declare(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Declare, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public interfaceExtendsClause(): InterfaceExtendsClauseContext | undefined {
		return this.tryGetRuleContext(0, InterfaceExtendsClauseContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
}


export class InterfaceExtendsClauseContext extends ParserRuleContext {
	public Extends(): TerminalNode { return this.getToken(TypeScriptParser.Extends, 0); }
	public classOrInterfaceTypeList(): ClassOrInterfaceTypeListContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_interfaceExtendsClause; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterInterfaceExtendsClause) {
			listener.enterInterfaceExtendsClause(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitInterfaceExtendsClause) {
			listener.exitInterfaceExtendsClause(this);
		}
	}
}


export class ClassOrInterfaceTypeListContext extends ParserRuleContext {
	public typeReference(): TypeReferenceContext[];
	public typeReference(i: number): TypeReferenceContext;
	public typeReference(i?: number): TypeReferenceContext | TypeReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeReferenceContext);
		} else {
			return this.getRuleContext(i, TypeReferenceContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_classOrInterfaceTypeList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterClassOrInterfaceTypeList) {
			listener.enterClassOrInterfaceTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitClassOrInterfaceTypeList) {
			listener.exitClassOrInterfaceTypeList(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(TypeScriptParser.Enum, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Const, 0); }
	public enumBody(): EnumBodyContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public enumMemberList(): EnumMemberListContext {
		return this.getRuleContext(0, EnumMemberListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_enumBody; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
}


export class EnumMemberListContext extends ParserRuleContext {
	public enumMember(): EnumMemberContext[];
	public enumMember(i: number): EnumMemberContext;
	public enumMember(i?: number): EnumMemberContext | EnumMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumMemberContext);
		} else {
			return this.getRuleContext(i, EnumMemberContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_enumMemberList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterEnumMemberList) {
			listener.enterEnumMemberList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitEnumMemberList) {
			listener.exitEnumMemberList(this);
		}
	}
}


export class EnumMemberContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_enumMember; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterEnumMember) {
			listener.enterEnumMember(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitEnumMember) {
			listener.exitEnumMember(this);
		}
	}
}


export class NamespaceDeclarationContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(TypeScriptParser.Namespace, 0); }
	public namespaceName(): NamespaceNameContext {
		return this.getRuleContext(0, NamespaceNameContext);
	}
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public Declare(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Declare, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_namespaceDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterNamespaceDeclaration) {
			listener.enterNamespaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitNamespaceDeclaration) {
			listener.exitNamespaceDeclaration(this);
		}
	}
}


export class NamespaceNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Dot);
		} else {
			return this.getToken(TypeScriptParser.Dot, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_namespaceName; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterNamespaceName) {
			listener.enterNamespaceName(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitNamespaceName) {
			listener.exitNamespaceName(this);
		}
	}
}


export class ImportAliasDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Assign(): TerminalNode { return this.getToken(TypeScriptParser.Assign, 0); }
	public namespaceName(): NamespaceNameContext {
		return this.getRuleContext(0, NamespaceNameContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(TypeScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_importAliasDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImportAliasDeclaration) {
			listener.enterImportAliasDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImportAliasDeclaration) {
			listener.exitImportAliasDeclaration(this);
		}
	}
}


export class DecoratorListContext extends ParserRuleContext {
	public decorator(): DecoratorContext[];
	public decorator(i: number): DecoratorContext;
	public decorator(i?: number): DecoratorContext | DecoratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecoratorContext);
		} else {
			return this.getRuleContext(i, DecoratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_decoratorList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterDecoratorList) {
			listener.enterDecoratorList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitDecoratorList) {
			listener.exitDecoratorList(this);
		}
	}
}


export class DecoratorContext extends ParserRuleContext {
	public At(): TerminalNode { return this.getToken(TypeScriptParser.At, 0); }
	public decoratorMemberExpression(): DecoratorMemberExpressionContext | undefined {
		return this.tryGetRuleContext(0, DecoratorMemberExpressionContext);
	}
	public decoratorCallExpression(): DecoratorCallExpressionContext | undefined {
		return this.tryGetRuleContext(0, DecoratorCallExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_decorator; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterDecorator) {
			listener.enterDecorator(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitDecorator) {
			listener.exitDecorator(this);
		}
	}
}


export class DecoratorMemberExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public decoratorMemberExpression(): DecoratorMemberExpressionContext | undefined {
		return this.tryGetRuleContext(0, DecoratorMemberExpressionContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Dot, 0); }
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenParen, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_decoratorMemberExpression; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterDecoratorMemberExpression) {
			listener.enterDecoratorMemberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitDecoratorMemberExpression) {
			listener.exitDecoratorMemberExpression(this);
		}
	}
}


export class DecoratorCallExpressionContext extends ParserRuleContext {
	public decoratorMemberExpression(): DecoratorMemberExpressionContext {
		return this.getRuleContext(0, DecoratorMemberExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_decoratorCallExpression; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterDecoratorCallExpression) {
			listener.enterDecoratorCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitDecoratorCallExpression) {
			listener.exitDecoratorCallExpression(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TypeScriptParser.EOF, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_program; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Export(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Export, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_sourceElement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterSourceElement) {
			listener.enterSourceElement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitSourceElement) {
			listener.exitSourceElement(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public importStatement(): ImportStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportStatementContext);
	}
	public exportStatement(): ExportStatementContext | undefined {
		return this.tryGetRuleContext(0, ExportStatementContext);
	}
	public emptyStatement_(): EmptyStatement_Context | undefined {
		return this.tryGetRuleContext(0, EmptyStatement_Context);
	}
	public abstractDeclaration(): AbstractDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public namespaceDeclaration(): NamespaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NamespaceDeclarationContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public yieldStatement(): YieldStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldStatementContext);
	}
	public withStatement(): WithStatementContext | undefined {
		return this.tryGetRuleContext(0, WithStatementContext);
	}
	public labelledStatement(): LabelledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabelledStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public debuggerStatement(): DebuggerStatementContext | undefined {
		return this.tryGetRuleContext(0, DebuggerStatementContext);
	}
	public arrowFunctionDeclaration(): ArrowFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ArrowFunctionDeclarationContext);
	}
	public generatorFunctionDeclaration(): GeneratorFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GeneratorFunctionDeclarationContext);
	}
	public typeAliasDeclaration(): TypeAliasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public Export(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Export, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_statementList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
}


export class AbstractDeclarationContext extends ParserRuleContext {
	public Abstract(): TerminalNode { return this.getToken(TypeScriptParser.Abstract, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public callSignature(): CallSignatureContext | undefined {
		return this.tryGetRuleContext(0, CallSignatureContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_abstractDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAbstractDeclaration) {
			listener.enterAbstractDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAbstractDeclaration) {
			listener.exitAbstractDeclaration(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public Import(): TerminalNode { return this.getToken(TypeScriptParser.Import, 0); }
	public importFromBlock(): ImportFromBlockContext {
		return this.getRuleContext(0, ImportFromBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
}


export class ImportFromBlockContext extends ParserRuleContext {
	public importFrom(): ImportFromContext | undefined {
		return this.tryGetRuleContext(0, ImportFromContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public importNamespace(): ImportNamespaceContext | undefined {
		return this.tryGetRuleContext(0, ImportNamespaceContext);
	}
	public importModuleItems(): ImportModuleItemsContext | undefined {
		return this.tryGetRuleContext(0, ImportModuleItemsContext);
	}
	public importDefault(): ImportDefaultContext | undefined {
		return this.tryGetRuleContext(0, ImportDefaultContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_importFromBlock; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImportFromBlock) {
			listener.enterImportFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImportFromBlock) {
			listener.exitImportFromBlock(this);
		}
	}
}


export class ImportModuleItemsContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public importAliasName(): ImportAliasNameContext[];
	public importAliasName(i: number): ImportAliasNameContext;
	public importAliasName(i?: number): ImportAliasNameContext | ImportAliasNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportAliasNameContext);
		} else {
			return this.getRuleContext(i, ImportAliasNameContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_importModuleItems; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImportModuleItems) {
			listener.enterImportModuleItems(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImportModuleItems) {
			listener.exitImportModuleItems(this);
		}
	}
}


export class ImportAliasNameContext extends ParserRuleContext {
	public moduleExportName(): ModuleExportNameContext {
		return this.getRuleContext(0, ModuleExportNameContext);
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.As, 0); }
	public importedBinding(): ImportedBindingContext | undefined {
		return this.tryGetRuleContext(0, ImportedBindingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_importAliasName; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImportAliasName) {
			listener.enterImportAliasName(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImportAliasName) {
			listener.exitImportAliasName(this);
		}
	}
}


export class ModuleExportNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_moduleExportName; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterModuleExportName) {
			listener.enterModuleExportName(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitModuleExportName) {
			listener.exitModuleExportName(this);
		}
	}
}


export class ImportedBindingContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Identifier, 0); }
	public Yield(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Yield, 0); }
	public Await(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Await, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_importedBinding; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImportedBinding) {
			listener.enterImportedBinding(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImportedBinding) {
			listener.exitImportedBinding(this);
		}
	}
}


export class ImportDefaultContext extends ParserRuleContext {
	public aliasName(): AliasNameContext {
		return this.getRuleContext(0, AliasNameContext);
	}
	public Comma(): TerminalNode { return this.getToken(TypeScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_importDefault; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImportDefault) {
			listener.enterImportDefault(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImportDefault) {
			listener.exitImportDefault(this);
		}
	}
}


export class ImportNamespaceContext extends ParserRuleContext {
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Multiply, 0); }
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_importNamespace; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImportNamespace) {
			listener.enterImportNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImportNamespace) {
			listener.exitImportNamespace(this);
		}
	}
}


export class ImportFromContext extends ParserRuleContext {
	public From(): TerminalNode { return this.getToken(TypeScriptParser.From, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(TypeScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_importFrom; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImportFrom) {
			listener.enterImportFrom(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImportFrom) {
			listener.exitImportFrom(this);
		}
	}
}


export class AliasNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_aliasName; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAliasName) {
			listener.enterAliasName(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAliasName) {
			listener.exitAliasName(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_exportStatement; }
	public copyFrom(ctx: ExportStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExportDeclarationContext extends ExportStatementContext {
	public Export(): TerminalNode { return this.getToken(TypeScriptParser.Export, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public exportFromBlock(): ExportFromBlockContext | undefined {
		return this.tryGetRuleContext(0, ExportFromBlockContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Default, 0); }
	constructor(ctx: ExportStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterExportDeclaration) {
			listener.enterExportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitExportDeclaration) {
			listener.exitExportDeclaration(this);
		}
	}
}
export class ExportDefaultDeclarationContext extends ExportStatementContext {
	public Export(): TerminalNode { return this.getToken(TypeScriptParser.Export, 0); }
	public Default(): TerminalNode { return this.getToken(TypeScriptParser.Default, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: ExportStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterExportDefaultDeclaration) {
			listener.enterExportDefaultDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitExportDefaultDeclaration) {
			listener.exitExportDefaultDeclaration(this);
		}
	}
}


export class ExportFromBlockContext extends ParserRuleContext {
	public importNamespace(): ImportNamespaceContext | undefined {
		return this.tryGetRuleContext(0, ImportNamespaceContext);
	}
	public importFrom(): ImportFromContext | undefined {
		return this.tryGetRuleContext(0, ImportFromContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public exportModuleItems(): ExportModuleItemsContext | undefined {
		return this.tryGetRuleContext(0, ExportModuleItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_exportFromBlock; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterExportFromBlock) {
			listener.enterExportFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitExportFromBlock) {
			listener.exitExportFromBlock(this);
		}
	}
}


export class ExportModuleItemsContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public exportAliasName(): ExportAliasNameContext[];
	public exportAliasName(i: number): ExportAliasNameContext;
	public exportAliasName(i?: number): ExportAliasNameContext | ExportAliasNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExportAliasNameContext);
		} else {
			return this.getRuleContext(i, ExportAliasNameContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_exportModuleItems; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterExportModuleItems) {
			listener.enterExportModuleItems(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitExportModuleItems) {
			listener.exitExportModuleItems(this);
		}
	}
}


export class ExportAliasNameContext extends ParserRuleContext {
	public moduleExportName(): ModuleExportNameContext[];
	public moduleExportName(i: number): ModuleExportNameContext;
	public moduleExportName(i?: number): ModuleExportNameContext | ModuleExportNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleExportNameContext);
		} else {
			return this.getRuleContext(i, ModuleExportNameContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_exportAliasName; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterExportAliasName) {
			listener.enterExportAliasName(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitExportAliasName) {
			listener.exitExportAliasName(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_declaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public bindingPattern(): BindingPatternContext | undefined {
		return this.tryGetRuleContext(0, BindingPatternContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.SemiColon, 0); }
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public accessibilityModifier(): AccessibilityModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessibilityModifierContext);
	}
	public varModifier(): VarModifierContext | undefined {
		return this.tryGetRuleContext(0, VarModifierContext);
	}
	public ReadOnly(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.ReadOnly, 0); }
	public Declare(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Declare, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public identifierOrKeyWord(): IdentifierOrKeyWordContext | undefined {
		return this.tryGetRuleContext(0, IdentifierOrKeyWordContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Assign, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(TypeScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_emptyStatement_; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterEmptyStatement_) {
			listener.enterEmptyStatement_(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitEmptyStatement_) {
			listener.exitEmptyStatement_(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(TypeScriptParser.If, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_iterationStatement; }
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DoStatementContext extends IterationStatementContext {
	public Do(): TerminalNode { return this.getToken(TypeScriptParser.Do, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode { return this.getToken(TypeScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
}
export class WhileStatementContext extends IterationStatementContext {
	public While(): TerminalNode { return this.getToken(TypeScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(TypeScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.SemiColon);
		} else {
			return this.getToken(TypeScriptParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
}
export class ForVarStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(TypeScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.SemiColon);
		} else {
			return this.getToken(TypeScriptParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterForVarStatement) {
			listener.enterForVarStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitForVarStatement) {
			listener.exitForVarStatement(this);
		}
	}
}
export class ForInStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(TypeScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public In(): TerminalNode { return this.getToken(TypeScriptParser.In, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterForInStatement) {
			listener.enterForInStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitForInStatement) {
			listener.exitForInStatement(this);
		}
	}
}
export class ForVarInStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(TypeScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public In(): TerminalNode { return this.getToken(TypeScriptParser.In, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterForVarInStatement) {
			listener.enterForVarInStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitForVarInStatement) {
			listener.exitForVarInStatement(this);
		}
	}
}
export class ForOfStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(TypeScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Await(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Await, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.As, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterForOfStatement) {
			listener.enterForOfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitForOfStatement) {
			listener.exitForOfStatement(this);
		}
	}
}
export class ForVarOfStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(TypeScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Await(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Await, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.As, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterForVarOfStatement) {
			listener.enterForVarOfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitForVarOfStatement) {
			listener.exitForVarOfStatement(this);
		}
	}
}


export class VarModifierContext extends ParserRuleContext {
	public Var(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Var, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Let, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Const, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_varModifier; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterVarModifier) {
			listener.enterVarModifier(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitVarModifier) {
			listener.exitVarModifier(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(TypeScriptParser.Continue, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(TypeScriptParser.Break, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(TypeScriptParser.Return, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Yield(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Yield, 0); }
	public YieldStar(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.YieldStar, 0); }
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
}


export class WithStatementContext extends ParserRuleContext {
	public With(): TerminalNode { return this.getToken(TypeScriptParser.With, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_withStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterWithStatement) {
			listener.enterWithStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitWithStatement) {
			listener.exitWithStatement(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public Switch(): TerminalNode { return this.getToken(TypeScriptParser.Switch, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public caseBlock(): CaseBlockContext {
		return this.getRuleContext(0, CaseBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
}


export class CaseBlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public caseClauses(): CaseClausesContext[];
	public caseClauses(i: number): CaseClausesContext;
	public caseClauses(i?: number): CaseClausesContext | CaseClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClausesContext);
		} else {
			return this.getRuleContext(i, CaseClausesContext);
		}
	}
	public defaultClause(): DefaultClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_caseBlock; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterCaseBlock) {
			listener.enterCaseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitCaseBlock) {
			listener.exitCaseBlock(this);
		}
	}
}


export class CaseClausesContext extends ParserRuleContext {
	public caseClause(): CaseClauseContext[];
	public caseClause(i: number): CaseClauseContext;
	public caseClause(i?: number): CaseClauseContext | CaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClauseContext);
		} else {
			return this.getRuleContext(i, CaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_caseClauses; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterCaseClauses) {
			listener.enterCaseClauses(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitCaseClauses) {
			listener.exitCaseClauses(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	public Case(): TerminalNode { return this.getToken(TypeScriptParser.Case, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public Colon(): TerminalNode { return this.getToken(TypeScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_caseClause; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterCaseClause) {
			listener.enterCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitCaseClause) {
			listener.exitCaseClause(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	public Default(): TerminalNode { return this.getToken(TypeScriptParser.Default, 0); }
	public Colon(): TerminalNode { return this.getToken(TypeScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_defaultClause; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterDefaultClause) {
			listener.enterDefaultClause(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitDefaultClause) {
			listener.exitDefaultClause(this);
		}
	}
}


export class LabelledStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Colon(): TerminalNode { return this.getToken(TypeScriptParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_labelledStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterLabelledStatement) {
			listener.enterLabelledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitLabelledStatement) {
			listener.exitLabelledStatement(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(TypeScriptParser.Throw, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(TypeScriptParser.Try, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catchProduction(): CatchProductionContext | undefined {
		return this.tryGetRuleContext(0, CatchProductionContext);
	}
	public finallyProduction(): FinallyProductionContext | undefined {
		return this.tryGetRuleContext(0, FinallyProductionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
}


export class CatchProductionContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(TypeScriptParser.Catch, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenParen, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseParen, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_catchProduction; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterCatchProduction) {
			listener.enterCatchProduction(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitCatchProduction) {
			listener.exitCatchProduction(this);
		}
	}
}


export class FinallyProductionContext extends ParserRuleContext {
	public Finally(): TerminalNode { return this.getToken(TypeScriptParser.Finally, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_finallyProduction; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterFinallyProduction) {
			listener.enterFinallyProduction(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitFinallyProduction) {
			listener.exitFinallyProduction(this);
		}
	}
}


export class DebuggerStatementContext extends ParserRuleContext {
	public Debugger(): TerminalNode { return this.getToken(TypeScriptParser.Debugger, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_debuggerStatement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterDebuggerStatement) {
			listener.enterDebuggerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitDebuggerStatement) {
			listener.exitDebuggerStatement(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Function_(): TerminalNode { return this.getToken(TypeScriptParser.Function_, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public callSignature(): CallSignatureContext {
		return this.getRuleContext(0, CallSignatureContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.SemiColon, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Multiply, 0); }
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public Class(): TerminalNode { return this.getToken(TypeScriptParser.Class, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classHeritage(): ClassHeritageContext {
		return this.getRuleContext(0, ClassHeritageContext);
	}
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	public decoratorList(): DecoratorListContext | undefined {
		return this.tryGetRuleContext(0, DecoratorListContext);
	}
	public Export(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Export, 0); }
	public Abstract(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Abstract, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
}


export class ClassHeritageContext extends ParserRuleContext {
	public classExtendsClause(): ClassExtendsClauseContext | undefined {
		return this.tryGetRuleContext(0, ClassExtendsClauseContext);
	}
	public implementsClause(): ImplementsClauseContext | undefined {
		return this.tryGetRuleContext(0, ImplementsClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_classHeritage; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterClassHeritage) {
			listener.enterClassHeritage(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitClassHeritage) {
			listener.exitClassHeritage(this);
		}
	}
}


export class ClassTailContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public classElement(): ClassElementContext[];
	public classElement(i: number): ClassElementContext;
	public classElement(i?: number): ClassElementContext | ClassElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassElementContext);
		} else {
			return this.getRuleContext(i, ClassElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_classTail; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterClassTail) {
			listener.enterClassTail(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitClassTail) {
			listener.exitClassTail(this);
		}
	}
}


export class ClassExtendsClauseContext extends ParserRuleContext {
	public Extends(): TerminalNode { return this.getToken(TypeScriptParser.Extends, 0); }
	public typeReference(): TypeReferenceContext {
		return this.getRuleContext(0, TypeReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_classExtendsClause; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterClassExtendsClause) {
			listener.enterClassExtendsClause(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitClassExtendsClause) {
			listener.exitClassExtendsClause(this);
		}
	}
}


export class ImplementsClauseContext extends ParserRuleContext {
	public Implements(): TerminalNode { return this.getToken(TypeScriptParser.Implements, 0); }
	public classOrInterfaceTypeList(): ClassOrInterfaceTypeListContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_implementsClause; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterImplementsClause) {
			listener.enterImplementsClause(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitImplementsClause) {
			listener.exitImplementsClause(this);
		}
	}
}


export class ClassElementContext extends ParserRuleContext {
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public propertyMemberDeclaration(): PropertyMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PropertyMemberDeclarationContext);
	}
	public decoratorList(): DecoratorListContext | undefined {
		return this.tryGetRuleContext(0, DecoratorListContext);
	}
	public indexMemberDeclaration(): IndexMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, IndexMemberDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_classElement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterClassElement) {
			listener.enterClassElement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitClassElement) {
			listener.exitClassElement(this);
		}
	}
}


export class PropertyMemberDeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_propertyMemberDeclaration; }
	public copyFrom(ctx: PropertyMemberDeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyDeclarationExpressionContext extends PropertyMemberDeclarationContext {
	public propertyMemberBase(): PropertyMemberBaseContext {
		return this.getRuleContext(0, PropertyMemberBaseContext);
	}
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(TypeScriptParser.SemiColon, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.QuestionMark, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(ctx: PropertyMemberDeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPropertyDeclarationExpression) {
			listener.enterPropertyDeclarationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPropertyDeclarationExpression) {
			listener.exitPropertyDeclarationExpression(this);
		}
	}
}
export class MethodDeclarationExpressionContext extends PropertyMemberDeclarationContext {
	public propertyMemberBase(): PropertyMemberBaseContext {
		return this.getRuleContext(0, PropertyMemberBaseContext);
	}
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public callSignature(): CallSignatureContext {
		return this.getRuleContext(0, CallSignatureContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.SemiColon, 0); }
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseBrace, 0); }
	constructor(ctx: PropertyMemberDeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterMethodDeclarationExpression) {
			listener.enterMethodDeclarationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitMethodDeclarationExpression) {
			listener.exitMethodDeclarationExpression(this);
		}
	}
}
export class GetterSetterDeclarationExpressionContext extends PropertyMemberDeclarationContext {
	public propertyMemberBase(): PropertyMemberBaseContext {
		return this.getRuleContext(0, PropertyMemberBaseContext);
	}
	public getAccessor(): GetAccessorContext | undefined {
		return this.tryGetRuleContext(0, GetAccessorContext);
	}
	public setAccessor(): SetAccessorContext | undefined {
		return this.tryGetRuleContext(0, SetAccessorContext);
	}
	constructor(ctx: PropertyMemberDeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGetterSetterDeclarationExpression) {
			listener.enterGetterSetterDeclarationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGetterSetterDeclarationExpression) {
			listener.exitGetterSetterDeclarationExpression(this);
		}
	}
}
export class AbstractMemberDeclarationContext extends PropertyMemberDeclarationContext {
	public abstractDeclaration(): AbstractDeclarationContext {
		return this.getRuleContext(0, AbstractDeclarationContext);
	}
	constructor(ctx: PropertyMemberDeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAbstractMemberDeclaration) {
			listener.enterAbstractMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAbstractMemberDeclaration) {
			listener.exitAbstractMemberDeclaration(this);
		}
	}
}


export class PropertyMemberBaseContext extends ParserRuleContext {
	public accessibilityModifier(): AccessibilityModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessibilityModifierContext);
	}
	public Async(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Async, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Static, 0); }
	public ReadOnly(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.ReadOnly, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_propertyMemberBase; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPropertyMemberBase) {
			listener.enterPropertyMemberBase(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPropertyMemberBase) {
			listener.exitPropertyMemberBase(this);
		}
	}
}


export class IndexMemberDeclarationContext extends ParserRuleContext {
	public indexSignature(): IndexSignatureContext {
		return this.getRuleContext(0, IndexSignatureContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(TypeScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_indexMemberDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIndexMemberDeclaration) {
			listener.enterIndexMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIndexMemberDeclaration) {
			listener.exitIndexMemberDeclaration(this);
		}
	}
}


export class GeneratorMethodContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_generatorMethod; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGeneratorMethod) {
			listener.enterGeneratorMethod(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGeneratorMethod) {
			listener.exitGeneratorMethod(this);
		}
	}
}


export class GeneratorFunctionDeclarationContext extends ParserRuleContext {
	public Function_(): TerminalNode { return this.getToken(TypeScriptParser.Function_, 0); }
	public Multiply(): TerminalNode { return this.getToken(TypeScriptParser.Multiply, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Async, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_generatorFunctionDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGeneratorFunctionDeclaration) {
			listener.enterGeneratorFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGeneratorFunctionDeclaration) {
			listener.exitGeneratorFunctionDeclaration(this);
		}
	}
}


export class GeneratorBlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public generatorDefinition(): GeneratorDefinitionContext[];
	public generatorDefinition(i: number): GeneratorDefinitionContext;
	public generatorDefinition(i?: number): GeneratorDefinitionContext | GeneratorDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GeneratorDefinitionContext);
		} else {
			return this.getRuleContext(i, GeneratorDefinitionContext);
		}
	}
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_generatorBlock; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGeneratorBlock) {
			listener.enterGeneratorBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGeneratorBlock) {
			listener.exitGeneratorBlock(this);
		}
	}
}


export class GeneratorDefinitionContext extends ParserRuleContext {
	public Multiply(): TerminalNode { return this.getToken(TypeScriptParser.Multiply, 0); }
	public iteratorDefinition(): IteratorDefinitionContext {
		return this.getRuleContext(0, IteratorDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_generatorDefinition; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGeneratorDefinition) {
			listener.enterGeneratorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGeneratorDefinition) {
			listener.exitGeneratorDefinition(this);
		}
	}
}


export class IteratorBlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public iteratorDefinition(): IteratorDefinitionContext[];
	public iteratorDefinition(i: number): IteratorDefinitionContext;
	public iteratorDefinition(i?: number): IteratorDefinitionContext | IteratorDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IteratorDefinitionContext);
		} else {
			return this.getRuleContext(i, IteratorDefinitionContext);
		}
	}
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_iteratorBlock; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIteratorBlock) {
			listener.enterIteratorBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIteratorBlock) {
			listener.exitIteratorBlock(this);
		}
	}
}


export class IteratorDefinitionContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(TypeScriptParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(TypeScriptParser.CloseBracket, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_iteratorDefinition; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIteratorDefinition) {
			listener.enterIteratorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIteratorDefinition) {
			listener.exitIteratorDefinition(this);
		}
	}
}


export class ClassElementNameContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameContext);
	}
	public privateIdentifier(): PrivateIdentifierContext | undefined {
		return this.tryGetRuleContext(0, PrivateIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_classElementName; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterClassElementName) {
			listener.enterClassElementName(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitClassElementName) {
			listener.exitClassElementName(this);
		}
	}
}


export class PrivateIdentifierContext extends ParserRuleContext {
	public Hashtag(): TerminalNode { return this.getToken(TypeScriptParser.Hashtag, 0); }
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_privateIdentifier; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPrivateIdentifier) {
			listener.enterPrivateIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPrivateIdentifier) {
			listener.exitPrivateIdentifier(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameterArg(): FormalParameterArgContext[];
	public formalParameterArg(i: number): FormalParameterArgContext;
	public formalParameterArg(i?: number): FormalParameterArgContext | FormalParameterArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterArgContext);
		} else {
			return this.getRuleContext(i, FormalParameterArgContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	public lastFormalParameterArg(): LastFormalParameterArgContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterArgContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Colon, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	public assignable(): AssignableContext {
		return this.getRuleContext(0, AssignableContext);
	}
	public decorator(): DecoratorContext | undefined {
		return this.tryGetRuleContext(0, DecoratorContext);
	}
	public accessibilityModifier(): AccessibilityModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessibilityModifierContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.QuestionMark, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_formalParameterArg; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterFormalParameterArg) {
			listener.enterFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitFormalParameterArg) {
			listener.exitFormalParameterArg(this);
		}
	}
}


export class LastFormalParameterArgContext extends ParserRuleContext {
	public Ellipsis(): TerminalNode { return this.getToken(TypeScriptParser.Ellipsis, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_lastFormalParameterArg; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterLastFormalParameterArg) {
			listener.enterLastFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitLastFormalParameterArg) {
			listener.exitLastFormalParameterArg(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_sourceElements; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterSourceElements) {
			listener.enterSourceElements(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitSourceElements) {
			listener.exitSourceElements(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenBracket, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	public arrayElement(): ArrayElementContext[];
	public arrayElement(i: number): ArrayElementContext;
	public arrayElement(i?: number): ArrayElementContext | ArrayElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayElementContext);
		} else {
			return this.getRuleContext(i, ArrayElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_elementList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
}


export class ArrayElementContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Ellipsis, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_arrayElement; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArrayElement) {
			listener.enterArrayElement(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArrayElement) {
			listener.exitArrayElement(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public propertyAssignment(): PropertyAssignmentContext[];
	public propertyAssignment(i: number): PropertyAssignmentContext;
	public propertyAssignment(i?: number): PropertyAssignmentContext | PropertyAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getRuleContext(i, PropertyAssignmentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_objectLiteral; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterObjectLiteral) {
			listener.enterObjectLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitObjectLiteral) {
			listener.exitObjectLiteral(this);
		}
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_propertyAssignment; }
	public copyFrom(ctx: PropertyAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Colon, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Assign, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPropertyExpressionAssignment) {
			listener.enterPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPropertyExpressionAssignment) {
			listener.exitPropertyExpressionAssignment(this);
		}
	}
}
export class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public OpenBracket(): TerminalNode { return this.getToken(TypeScriptParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(TypeScriptParser.CloseBracket, 0); }
	public Colon(): TerminalNode { return this.getToken(TypeScriptParser.Colon, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterComputedPropertyExpressionAssignment) {
			listener.enterComputedPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitComputedPropertyExpressionAssignment) {
			listener.exitComputedPropertyExpressionAssignment(this);
		}
	}
}
export class PropertyGetterContext extends PropertyAssignmentContext {
	public getAccessor(): GetAccessorContext {
		return this.getRuleContext(0, GetAccessorContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPropertyGetter) {
			listener.enterPropertyGetter(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPropertyGetter) {
			listener.exitPropertyGetter(this);
		}
	}
}
export class PropertySetterContext extends PropertyAssignmentContext {
	public setAccessor(): SetAccessorContext {
		return this.getRuleContext(0, SetAccessorContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPropertySetter) {
			listener.enterPropertySetter(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPropertySetter) {
			listener.exitPropertySetter(this);
		}
	}
}
export class MethodPropertyContext extends PropertyAssignmentContext {
	public generatorMethod(): GeneratorMethodContext {
		return this.getRuleContext(0, GeneratorMethodContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterMethodProperty) {
			listener.enterMethodProperty(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitMethodProperty) {
			listener.exitMethodProperty(this);
		}
	}
}
export class PropertyShorthandContext extends PropertyAssignmentContext {
	public identifierOrKeyWord(): IdentifierOrKeyWordContext {
		return this.getRuleContext(0, IdentifierOrKeyWordContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPropertyShorthand) {
			listener.enterPropertyShorthand(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPropertyShorthand) {
			listener.exitPropertyShorthand(this);
		}
	}
}
export class SpreadOperatorContext extends PropertyAssignmentContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Ellipsis, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterSpreadOperator) {
			listener.enterSpreadOperator(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitSpreadOperator) {
			listener.exitSpreadOperator(this);
		}
	}
}
export class RestParameterInObjectContext extends PropertyAssignmentContext {
	public restParameter(): RestParameterContext {
		return this.getRuleContext(0, RestParameterContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterRestParameterInObject) {
			listener.enterRestParameterInObject(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitRestParameterInObject) {
			listener.exitRestParameterInObject(this);
		}
	}
}


export class GetAccessorContext extends ParserRuleContext {
	public getter(): GetterContext {
		return this.getRuleContext(0, GetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_getAccessor; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGetAccessor) {
			listener.enterGetAccessor(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGetAccessor) {
			listener.exitGetAccessor(this);
		}
	}
}


export class SetAccessorContext extends ParserRuleContext {
	public setter(): SetterContext {
		return this.getRuleContext(0, SetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(TypeScriptParser.CloseBrace, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_setAccessor; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterSetAccessor) {
			listener.enterSetAccessor(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitSetAccessor) {
			listener.exitSetAccessor(this);
		}
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_propertyName; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPropertyName) {
			listener.enterPropertyName(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPropertyName) {
			listener.exitPropertyName(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_arguments; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_argument; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.Comma);
		} else {
			return this.getToken(TypeScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionExpressionContext extends SingleExpressionContext {
	public anonymousFunction(): AnonymousFunctionContext {
		return this.getRuleContext(0, AnonymousFunctionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
}
export class ClassExpressionContext extends SingleExpressionContext {
	public Class(): TerminalNode { return this.getToken(TypeScriptParser.Class, 0); }
	public classHeritage(): ClassHeritageContext {
		return this.getRuleContext(0, ClassHeritageContext);
	}
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterClassExpression) {
			listener.enterClassExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitClassExpression) {
			listener.exitClassExpression(this);
		}
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(TypeScriptParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(TypeScriptParser.CloseBracket, 0); }
	public QuestionMarkDot(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.QuestionMarkDot, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterMemberIndexExpression) {
			listener.enterMemberIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitMemberIndexExpression) {
			listener.exitMemberIndexExpression(this);
		}
	}
}
export class OptionalChainExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMarkDot(): TerminalNode { return this.getToken(TypeScriptParser.QuestionMarkDot, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterOptionalChainExpression) {
			listener.enterOptionalChainExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitOptionalChainExpression) {
			listener.exitOptionalChainExpression(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(TypeScriptParser.Dot, 0); }
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	public Not(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Not, 0); }
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Hashtag, 0); }
	public typeGeneric(): TypeGenericContext | undefined {
		return this.tryGetRuleContext(0, TypeGenericContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.QuestionMark, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterMemberDotExpression) {
			listener.enterMemberDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitMemberDotExpression) {
			listener.exitMemberDotExpression(this);
		}
	}
}
export class NewExpressionContext extends SingleExpressionContext {
	public New(): TerminalNode { return this.getToken(TypeScriptParser.New, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArgumentsExpression) {
			listener.enterArgumentsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArgumentsExpression) {
			listener.exitArgumentsExpression(this);
		}
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(TypeScriptParser.PlusPlus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(TypeScriptParser.MinusMinus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPostDecreaseExpression) {
			listener.enterPostDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPostDecreaseExpression) {
			listener.exitPostDecreaseExpression(this);
		}
	}
}
export class DeleteExpressionContext extends SingleExpressionContext {
	public Delete(): TerminalNode { return this.getToken(TypeScriptParser.Delete, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterDeleteExpression) {
			listener.enterDeleteExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitDeleteExpression) {
			listener.exitDeleteExpression(this);
		}
	}
}
export class VoidExpressionContext extends SingleExpressionContext {
	public Void(): TerminalNode { return this.getToken(TypeScriptParser.Void, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterVoidExpression) {
			listener.enterVoidExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitVoidExpression) {
			listener.exitVoidExpression(this);
		}
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	public Typeof(): TerminalNode { return this.getToken(TypeScriptParser.Typeof, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(TypeScriptParser.PlusPlus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(TypeScriptParser.MinusMinus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPreDecreaseExpression) {
			listener.enterPreDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPreDecreaseExpression) {
			listener.exitPreDecreaseExpression(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public Plus(): TerminalNode { return this.getToken(TypeScriptParser.Plus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(TypeScriptParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(TypeScriptParser.BitNot, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(TypeScriptParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
}
export class AwaitExpressionContext extends SingleExpressionContext {
	public Await(): TerminalNode { return this.getToken(TypeScriptParser.Await, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAwaitExpression) {
			listener.enterAwaitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAwaitExpression) {
			listener.exitAwaitExpression(this);
		}
	}
}
export class PowerExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Power(): TerminalNode { return this.getToken(TypeScriptParser.Power, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
}
export class CoalesceExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public NullCoalesce(): TerminalNode { return this.getToken(TypeScriptParser.NullCoalesce, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterCoalesceExpression) {
			listener.enterCoalesceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitCoalesceExpression) {
			listener.exitCoalesceExpression(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.LeftShiftArithmetic, 0); }
	public MoreThan(): TerminalNode[];
	public MoreThan(i: number): TerminalNode;
	public MoreThan(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.MoreThan);
		} else {
			return this.getToken(TypeScriptParser.MoreThan, i);
		}
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
}
export class InstanceofExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Instanceof(): TerminalNode { return this.getToken(TypeScriptParser.Instanceof, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterInstanceofExpression) {
			listener.enterInstanceofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitInstanceofExpression) {
			listener.exitInstanceofExpression(this);
		}
	}
}
export class InExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public In(): TerminalNode { return this.getToken(TypeScriptParser.In, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterInExpression) {
			listener.enterInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitInExpression) {
			listener.exitInExpression(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equals_(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Equals_, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.NotEquals, 0); }
	public IdentityEquals(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.IdentityEquals, 0); }
	public IdentityNotEquals(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.IdentityNotEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(TypeScriptParser.BitAnd, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitXOr(): TerminalNode { return this.getToken(TypeScriptParser.BitXOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterBitXOrExpression) {
			listener.enterBitXOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitBitXOrExpression) {
			listener.exitBitXOrExpression(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(TypeScriptParser.BitOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(TypeScriptParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(TypeScriptParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(TypeScriptParser.QuestionMark, 0); }
	public Colon(): TerminalNode { return this.getToken(TypeScriptParser.Colon, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Assign(): TerminalNode { return this.getToken(TypeScriptParser.Assign, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
}
export class TemplateStringExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public templateStringLiteral(): TemplateStringLiteralContext {
		return this.getRuleContext(0, TemplateStringLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTemplateStringExpression) {
			listener.enterTemplateStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTemplateStringExpression) {
			listener.exitTemplateStringExpression(this);
		}
	}
}
export class IteratorsExpressionContext extends SingleExpressionContext {
	public iteratorBlock(): IteratorBlockContext {
		return this.getRuleContext(0, IteratorBlockContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIteratorsExpression) {
			listener.enterIteratorsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIteratorsExpression) {
			listener.exitIteratorsExpression(this);
		}
	}
}
export class GeneratorsExpressionContext extends SingleExpressionContext {
	public generatorBlock(): GeneratorBlockContext {
		return this.getRuleContext(0, GeneratorBlockContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGeneratorsExpression) {
			listener.enterGeneratorsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGeneratorsExpression) {
			listener.exitGeneratorsExpression(this);
		}
	}
}
export class GeneratorsFunctionExpressionContext extends SingleExpressionContext {
	public generatorFunctionDeclaration(): GeneratorFunctionDeclarationContext {
		return this.getRuleContext(0, GeneratorFunctionDeclarationContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGeneratorsFunctionExpression) {
			listener.enterGeneratorsFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGeneratorsFunctionExpression) {
			listener.exitGeneratorsFunctionExpression(this);
		}
	}
}
export class YieldExpressionContext extends SingleExpressionContext {
	public yieldStatement(): YieldStatementContext {
		return this.getRuleContext(0, YieldStatementContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterYieldExpression) {
			listener.enterYieldExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitYieldExpression) {
			listener.exitYieldExpression(this);
		}
	}
}
export class ThisExpressionContext extends SingleExpressionContext {
	public This(): TerminalNode { return this.getToken(TypeScriptParser.This, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
}
export class SuperExpressionContext extends SingleExpressionContext {
	public Super(): TerminalNode { return this.getToken(TypeScriptParser.Super, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterSuperExpression) {
			listener.enterSuperExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitSuperExpression) {
			listener.exitSuperExpression(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	public arrayLiteral(): ArrayLiteralContext {
		return this.getRuleContext(0, ArrayLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArrayLiteralExpression) {
			listener.enterArrayLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArrayLiteralExpression) {
			listener.exitArrayLiteralExpression(this);
		}
	}
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
	public objectLiteral(): ObjectLiteralContext {
		return this.getRuleContext(0, ObjectLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterObjectLiteralExpression) {
			listener.enterObjectLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitObjectLiteralExpression) {
			listener.exitObjectLiteralExpression(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(TypeScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TypeScriptParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
}
export class GenericTypesContext extends SingleExpressionContext {
	public typeArguments(): TypeArgumentsContext {
		return this.getRuleContext(0, TypeArgumentsContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGenericTypes) {
			listener.enterGenericTypes(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGenericTypes) {
			listener.exitGenericTypes(this);
		}
	}
}
export class CastAsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public As(): TerminalNode { return this.getToken(TypeScriptParser.As, 0); }
	public asExpression(): AsExpressionContext {
		return this.getRuleContext(0, AsExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterCastAsExpression) {
			listener.enterCastAsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitCastAsExpression) {
			listener.exitCastAsExpression(this);
		}
	}
}
export class NonNullAssertionExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Not(): TerminalNode { return this.getToken(TypeScriptParser.Not, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterNonNullAssertionExpression) {
			listener.enterNonNullAssertionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitNonNullAssertionExpression) {
			listener.exitNonNullAssertionExpression(this);
		}
	}
}


export class AsExpressionContext extends ParserRuleContext {
	public predefinedType(): PredefinedTypeContext | undefined {
		return this.tryGetRuleContext(0, PredefinedTypeContext);
	}
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseBracket, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_asExpression; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAsExpression) {
			listener.enterAsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAsExpression) {
			listener.exitAsExpression(this);
		}
	}
}


export class AssignableContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_assignable; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAssignable) {
			listener.enterAssignable(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAssignable) {
			listener.exitAssignable(this);
		}
	}
}


export class AnonymousFunctionContext extends ParserRuleContext {
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public Function_(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Function_, 0); }
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseBrace, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public arrowFunctionDeclaration(): ArrowFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ArrowFunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_anonymousFunction; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAnonymousFunction) {
			listener.enterAnonymousFunction(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAnonymousFunction) {
			listener.exitAnonymousFunction(this);
		}
	}
}


export class ArrowFunctionDeclarationContext extends ParserRuleContext {
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		return this.getRuleContext(0, ArrowFunctionParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(TypeScriptParser.ARROW, 0); }
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		return this.getRuleContext(0, ArrowFunctionBodyContext);
	}
	public Async(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Async, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_arrowFunctionDeclaration; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArrowFunctionDeclaration) {
			listener.enterArrowFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArrowFunctionDeclaration) {
			listener.exitArrowFunctionDeclaration(this);
		}
	}
}


export class ArrowFunctionParametersContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseParen, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_arrowFunctionParameters; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArrowFunctionParameters) {
			listener.enterArrowFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArrowFunctionParameters) {
			listener.exitArrowFunctionParameters(this);
		}
	}
}


export class ArrowFunctionBodyContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_arrowFunctionBody; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterArrowFunctionBody) {
			listener.enterArrowFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitArrowFunctionBody) {
			listener.exitArrowFunctionBody(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.MultiplyAssign, 0); }
	public DivideAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.DivideAssign, 0); }
	public ModulusAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.ModulusAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.MinusAssign, 0); }
	public LeftShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.LeftShiftArithmeticAssign, 0); }
	public RightShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.RightShiftArithmeticAssign, 0); }
	public RightShiftLogicalAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.RightShiftLogicalAssign, 0); }
	public BitAndAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BitAndAssign, 0); }
	public BitXorAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BitXorAssign, 0); }
	public BitOrAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BitOrAssign, 0); }
	public PowerAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.PowerAssign, 0); }
	public NullishCoalescingAssign(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.NullishCoalescingAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.StringLiteral, 0); }
	public templateStringLiteral(): TemplateStringLiteralContext | undefined {
		return this.tryGetRuleContext(0, TemplateStringLiteralContext);
	}
	public RegularExpressionLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.RegularExpressionLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public bigintLiteral(): BigintLiteralContext | undefined {
		return this.tryGetRuleContext(0, BigintLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_literal; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class TemplateStringLiteralContext extends ParserRuleContext {
	public BackTick(): TerminalNode[];
	public BackTick(i: number): TerminalNode;
	public BackTick(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeScriptParser.BackTick);
		} else {
			return this.getToken(TypeScriptParser.BackTick, i);
		}
	}
	public templateStringAtom(): TemplateStringAtomContext[];
	public templateStringAtom(i: number): TemplateStringAtomContext;
	public templateStringAtom(i?: number): TemplateStringAtomContext | TemplateStringAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateStringAtomContext);
		} else {
			return this.getRuleContext(i, TemplateStringAtomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_templateStringLiteral; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTemplateStringLiteral) {
			listener.enterTemplateStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTemplateStringLiteral) {
			listener.exitTemplateStringLiteral(this);
		}
	}
}


export class TemplateStringAtomContext extends ParserRuleContext {
	public TemplateStringAtom(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.TemplateStringAtom, 0); }
	public TemplateStringStartExpression(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.TemplateStringStartExpression, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public TemplateCloseBrace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.TemplateCloseBrace, 0); }
	public TemplateStringEscapeAtom(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.TemplateStringEscapeAtom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_templateStringAtom; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterTemplateStringAtom) {
			listener.enterTemplateStringAtom(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitTemplateStringAtom) {
			listener.exitTemplateStringAtom(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.DecimalLiteral, 0); }
	public HexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.HexIntegerLiteral, 0); }
	public OctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OctalIntegerLiteral, 0); }
	public OctalIntegerLiteral2(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.OctalIntegerLiteral2, 0); }
	public BinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
}


export class BigintLiteralContext extends ParserRuleContext {
	public BigDecimalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BigDecimalIntegerLiteral, 0); }
	public BigHexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BigHexIntegerLiteral, 0); }
	public BigOctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BigOctalIntegerLiteral, 0); }
	public BigBinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BigBinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_bigintLiteral; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterBigintLiteral) {
			listener.enterBigintLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitBigintLiteral) {
			listener.exitBigintLiteral(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classElementName(): ClassElementNameContext {
		return this.getRuleContext(0, ClassElementNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_getter; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterGetter) {
			listener.enterGetter(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitGetter) {
			listener.exitGetter(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classElementName(): ClassElementNameContext {
		return this.getRuleContext(0, ClassElementNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_setter; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterSetter) {
			listener.enterSetter(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitSetter) {
			listener.exitSetter(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_identifierName; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIdentifierName) {
			listener.enterIdentifierName(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIdentifierName) {
			listener.exitIdentifierName(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Identifier, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Async, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.As, 0); }
	public From(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.From, 0); }
	public Yield(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Yield, 0); }
	public Of(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Of, 0); }
	public Any(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Any, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Number, 0); }
	public Boolean(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Boolean, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.String, 0); }
	public Unique(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Unique, 0); }
	public Symbol(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Symbol, 0); }
	public Never(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Never, 0); }
	public Undefined(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Undefined, 0); }
	public Object(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Object, 0); }
	public KeyOf(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.KeyOf, 0); }
	public TypeAlias(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.TypeAlias, 0); }
	public Constructor(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Constructor, 0); }
	public Namespace(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Namespace, 0); }
	public Abstract(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Abstract, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_identifier; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class IdentifierOrKeyWordContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public TypeAlias(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.TypeAlias, 0); }
	public Require(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Require, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_identifierOrKeyWord; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterIdentifierOrKeyWord) {
			listener.enterIdentifierOrKeyWord(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitIdentifierOrKeyWord) {
			listener.exitIdentifierOrKeyWord(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Break, 0); }
	public Do(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Do, 0); }
	public Instanceof(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Instanceof, 0); }
	public Typeof(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Typeof, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Case, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Else, 0); }
	public New(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.New, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Var, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Catch, 0); }
	public Finally(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Finally, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Return, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Void, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Continue, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.For, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Switch, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.While, 0); }
	public Debugger(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Debugger, 0); }
	public Function_(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Function_, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.This, 0); }
	public With(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.With, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Default, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.If, 0); }
	public Throw(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Throw, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Delete, 0); }
	public In(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.In, 0); }
	public Try(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Try, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Class, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Enum, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Extends, 0); }
	public Super(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Super, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Const, 0); }
	public Export(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Export, 0); }
	public Import(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Import, 0); }
	public Implements(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Implements, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Let, 0); }
	public Private(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Private, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Public, 0); }
	public Interface(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Interface, 0); }
	public Package(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Package, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Protected, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Static, 0); }
	public Yield(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Yield, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Async, 0); }
	public Await(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Await, 0); }
	public ReadOnly(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.ReadOnly, 0); }
	public From(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.From, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.As, 0); }
	public Require(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Require, 0); }
	public TypeAlias(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.TypeAlias, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.String, 0); }
	public Boolean(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Boolean, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Number, 0); }
	public Module(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.Module, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_keyword; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.SemiColon, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(TypeScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeScriptParser.RULE_eos; }
	// @Override
	public enterRule(listener: TypeScriptParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: TypeScriptParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
}


