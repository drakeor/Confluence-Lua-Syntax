/*
 * Lua 5.2 Syntax Highlighter
 * Version 1.0
 *
 * Created by Drakeor (C) 2015
 * http://www.drakeor.com/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

SyntaxHighlighter.brushes.Custom = function()
{
  var reservedKeywords    	= 	'this and end in repeat break return do ' +
								'for then else function not elseif if or until while';
  var secondaryKeywords 	= 	'nil false true local';
  
  var luafunctions   		= 	'_G _VERSION assert collectgarbage dofile error getmetatable ipairs load loadfile next ' +
								'pairs pcall print rawequal rawget rawlen rawset require select setmetatable tonumber tostring type xpcall ' +
								'bit32\\.\\w+ coroutine\\.\\w+ debug\\.\\w+ file\\.\\w+ io\\.\\w+ math\\.\\w+ ' +
								'os\\.\\w+ package\\.\\w+ string\\.\\w+ table\\.\\w+';
  var docKeywords			= 	'@author @file @since @name @property @implementation @return @tparam @treturn @returns @param @private @usage @version @throws @exception @example @exampleText @var @see';
  
  this.regexList = [
      { regex: new RegExp('--\\[\\[[\\s\\S]*\\]\\]--', 'gmi'),            css: 'comments' },
	  { regex: new RegExp('--[^\\[]{2}.*$', 'gmi'),						  css: 'comments' }, 
	  { regex: SyntaxHighlighter.regexLib.singleQuotedString,		      css: 'string' },
      { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,    css: 'string' },
	  { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,					  css: 'value' },
      { regex: new RegExp(this.getKeywords(reservedKeywords), 'gmi'),     css: 'keyword' },
	  { regex: new RegExp(this.getKeywords(secondaryKeywords), 'gmi'),    css: 'color1' },
	  { regex: new RegExp(this.getKeywords(luafunctions), 'gmi'),         css: 'color2' },
	  { regex: new RegExp(this.getKeywords(docKeywords), 'gmi'),          css: 'color3' },
      ];
};
SyntaxHighlighter.brushes.Custom.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Custom.aliases  = ['lua', 'lua52'];