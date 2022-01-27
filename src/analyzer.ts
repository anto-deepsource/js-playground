import ASTVisitor from './visitor';
import Check, { CheckDescriptor } from './check';
import { parseJS } from './parse';
const checkDescriptors = require('./checks');

/**
 * Analyzes a Javascript file and logs the analysis report.
 * @param filePath Path of the source file.
 * @param code JS Source code to analyze 
 * @param visitor The ASTVisitor to use.
 */
function analyzeJS(filePath: string, code: string, visitor?: ASTVisitor) {
  // TODO (@injuly): handle parsing errors (if any).
  const ast = parseJS(code);
  const checks = checkDescriptors.map((desc: CheckDescriptor) => new Check(desc));
  visitor = visitor || new ASTVisitor(filePath, code, checks);
  visitor.visit(ast);

  // TODO (@injuly): Instead of logging them, return the reports array.
  visitor.logReports();
}

module.exports = analyzeJS;
