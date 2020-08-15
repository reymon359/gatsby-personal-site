exports.ids = [0];
exports.modules = {

/***/ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/deckdeckgo-highlight-code-carbon-theme-024790ad.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/deckdeckgo-highlight-code-carbon-theme-024790ad.js ***!
  \*****************************************************************************************************************/
/*! exports provided: D, a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return DeckdeckgoHighlightCodeTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckdeckgoHighlightCodeCarbonTheme; });
var DeckdeckgoHighlightCodeTerminal;
(function (DeckdeckgoHighlightCodeTerminal) {
    DeckdeckgoHighlightCodeTerminal["CARBON"] = "carbon";
    DeckdeckgoHighlightCodeTerminal["UBUNTU"] = "ubuntu";
    DeckdeckgoHighlightCodeTerminal["NONE"] = "none";
})(DeckdeckgoHighlightCodeTerminal || (DeckdeckgoHighlightCodeTerminal = {}));
var DeckdeckgoHighlightCodeCarbonTheme;
(function (DeckdeckgoHighlightCodeCarbonTheme) {
    DeckdeckgoHighlightCodeCarbonTheme["3024-NIGHT"] = "3024-night";
    DeckdeckgoHighlightCodeCarbonTheme["A11Y-DARK"] = "a11y-dark";
    DeckdeckgoHighlightCodeCarbonTheme["BLACKBOARD"] = "blackboard";
    DeckdeckgoHighlightCodeCarbonTheme["BASE16-DARK"] = "base16-dark";
    DeckdeckgoHighlightCodeCarbonTheme["BASE16-LIGHT"] = "base16-light";
    DeckdeckgoHighlightCodeCarbonTheme["COBALT"] = "cobalt";
    DeckdeckgoHighlightCodeCarbonTheme["DRACULA"] = "dracula";
    DeckdeckgoHighlightCodeCarbonTheme["DUOTONE"] = "duotone";
    DeckdeckgoHighlightCodeCarbonTheme["HOPSCOTCH"] = "hopscotch";
    DeckdeckgoHighlightCodeCarbonTheme["LUCARIO"] = "lucario";
    DeckdeckgoHighlightCodeCarbonTheme["MATERIAL"] = "material";
    DeckdeckgoHighlightCodeCarbonTheme["MONOKAI"] = "monokai";
    DeckdeckgoHighlightCodeCarbonTheme["NIGHT-OWL"] = "night-owl";
    DeckdeckgoHighlightCodeCarbonTheme["NORD"] = "nord";
    DeckdeckgoHighlightCodeCarbonTheme["OCEANIC-NEXT"] = "oceanic-next";
    DeckdeckgoHighlightCodeCarbonTheme["ONE-LIGHT"] = "one-light";
    DeckdeckgoHighlightCodeCarbonTheme["ONE-DARK"] = "one-dark";
    DeckdeckgoHighlightCodeCarbonTheme["PANDA"] = "panda";
    DeckdeckgoHighlightCodeCarbonTheme["PARAISO"] = "paraiso";
    DeckdeckgoHighlightCodeCarbonTheme["SETI"] = "seti";
    DeckdeckgoHighlightCodeCarbonTheme["SHADES-OF-PURPLE"] = "shades-of-purple";
    DeckdeckgoHighlightCodeCarbonTheme["SOLARIZED-DARK"] = "solarized-dark";
    DeckdeckgoHighlightCodeCarbonTheme["SOLARIZED-LIGHT"] = "solarized-light";
    DeckdeckgoHighlightCodeCarbonTheme["SYNTHWAVE"] = "synthwave";
    DeckdeckgoHighlightCodeCarbonTheme["TWILIGHT"] = "twilight";
    DeckdeckgoHighlightCodeCarbonTheme["VERMINAL"] = "verminal";
    DeckdeckgoHighlightCodeCarbonTheme["VSCODE"] = "vscode";
    DeckdeckgoHighlightCodeCarbonTheme["YETI"] = "yeti";
    DeckdeckgoHighlightCodeCarbonTheme["ZENBURN"] = "zenburn";
})(DeckdeckgoHighlightCodeCarbonTheme || (DeckdeckgoHighlightCodeCarbonTheme = {}));



/***/ }),

/***/ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/deckgo-highlight-code.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/deckgo-highlight-code.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: deckgo_highlight_code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_highlight_code", function() { return DeckdeckgoHighlightCode; });
/* harmony import */ var _index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-861c58cb.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/index-861c58cb.js");
/* harmony import */ var _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deckdeckgo-highlight-code-carbon-theme-024790ad.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/deckdeckgo-highlight-code-carbon-theme-024790ad.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var prism = createCommonjsModule(function (module) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */
    var _self = (typeof window !== 'undefined')
        ? window // if in browser
        : ((typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
            ? self // if in worker
            : {} // if in node js
        );
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     * MIT license http://www.opensource.org/licenses/mit-license.php/
     * @author Lea Verou http://lea.verou.me
     */
    var Prism = (function (_self) {
        // Private helper vars
        var lang = /\blang(?:uage)?-([\w-]+)\b/i;
        var uniqueId = 0;
        var _ = {
            manual: _self.Prism && _self.Prism.manual,
            disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
            util: {
                encode: function encode(tokens) {
                    if (tokens instanceof Token) {
                        return new Token(tokens.type, encode(tokens.content), tokens.alias);
                    }
                    else if (Array.isArray(tokens)) {
                        return tokens.map(encode);
                    }
                    else {
                        return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                    }
                },
                type: function (o) {
                    return Object.prototype.toString.call(o).slice(8, -1);
                },
                objId: function (obj) {
                    if (!obj['__id']) {
                        Object.defineProperty(obj, '__id', { value: ++uniqueId });
                    }
                    return obj['__id'];
                },
                // Deep clone a language definition (e.g. to extend it)
                clone: function deepClone(o, visited) {
                    var clone, id, type = _.util.type(o);
                    visited = visited || {};
                    switch (type) {
                        case 'Object':
                            id = _.util.objId(o);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = {};
                            visited[id] = clone;
                            for (var key in o) {
                                if (o.hasOwnProperty(key)) {
                                    clone[key] = deepClone(o[key], visited);
                                }
                            }
                            return clone;
                        case 'Array':
                            id = _.util.objId(o);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = [];
                            visited[id] = clone;
                            o.forEach(function (v, i) {
                                clone[i] = deepClone(v, visited);
                            });
                            return clone;
                        default:
                            return o;
                    }
                },
                /**
                 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
                 *
                 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
                 *
                 * @param {Element} element
                 * @returns {string}
                 */
                getLanguage: function (element) {
                    while (element && !lang.test(element.className)) {
                        element = element.parentElement;
                    }
                    if (element) {
                        return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
                    }
                    return 'none';
                },
                /**
                 * Returns the script element that is currently executing.
                 *
                 * This does __not__ work for line script element.
                 *
                 * @returns {HTMLScriptElement | null}
                 */
                currentScript: function () {
                    if (typeof document === 'undefined') {
                        return null;
                    }
                    if ('currentScript' in document) {
                        return document.currentScript;
                    }
                    // IE11 workaround
                    // we'll get the src of the current script by parsing IE11's error stack trace
                    // this will not work for inline scripts
                    try {
                        throw new Error();
                    }
                    catch (err) {
                        // Get file src url from stack. Specifically works with the format of stack traces in IE.
                        // A stack will look like this:
                        //
                        // Error
                        //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
                        //    at Global code (http://localhost/components/prism-core.js:606:1)
                        var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
                        if (src) {
                            var scripts = document.getElementsByTagName('script');
                            for (var i in scripts) {
                                if (scripts[i].src == src) {
                                    return scripts[i];
                                }
                            }
                        }
                        return null;
                    }
                }
            },
            languages: {
                extend: function (id, redef) {
                    var lang = _.util.clone(_.languages[id]);
                    for (var key in redef) {
                        lang[key] = redef[key];
                    }
                    return lang;
                },
                /**
                 * Insert a token before another token in a language literal
                 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
                 * we cannot just provide an object, we need an object and a key.
                 * @param inside The key (or language id) of the parent
                 * @param before The key to insert before.
                 * @param insert Object with the key/value pairs to insert
                 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
                 */
                insertBefore: function (inside, before, insert, root) {
                    root = root || _.languages;
                    var grammar = root[inside];
                    var ret = {};
                    for (var token in grammar) {
                        if (grammar.hasOwnProperty(token)) {
                            if (token == before) {
                                for (var newToken in insert) {
                                    if (insert.hasOwnProperty(newToken)) {
                                        ret[newToken] = insert[newToken];
                                    }
                                }
                            }
                            // Do not insert token which also occur in insert. See #1525
                            if (!insert.hasOwnProperty(token)) {
                                ret[token] = grammar[token];
                            }
                        }
                    }
                    var old = root[inside];
                    root[inside] = ret;
                    // Update references in other language definitions
                    _.languages.DFS(_.languages, function (key, value) {
                        if (value === old && key != inside) {
                            this[key] = ret;
                        }
                    });
                    return ret;
                },
                // Traverse a language definition with Depth First Search
                DFS: function DFS(o, callback, type, visited) {
                    visited = visited || {};
                    var objId = _.util.objId;
                    for (var i in o) {
                        if (o.hasOwnProperty(i)) {
                            callback.call(o, i, o[i], type || i);
                            var property = o[i], propertyType = _.util.type(property);
                            if (propertyType === 'Object' && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, null, visited);
                            }
                            else if (propertyType === 'Array' && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, i, visited);
                            }
                        }
                    }
                }
            },
            plugins: {},
            highlightAll: function (async, callback) {
                _.highlightAllUnder(document, async, callback);
            },
            highlightAllUnder: function (container, async, callback) {
                var env = {
                    callback: callback,
                    container: container,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                _.hooks.run('before-highlightall', env);
                env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
                _.hooks.run('before-all-elements-highlight', env);
                for (var i = 0, element; element = env.elements[i++];) {
                    _.highlightElement(element, async === true, env.callback);
                }
            },
            highlightElement: function (element, async, callback) {
                // Find language
                var language = _.util.getLanguage(element);
                var grammar = _.languages[language];
                // Set language on the element, if not present
                element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                // Set language on the parent, for styling
                var parent = element.parentNode;
                if (parent && parent.nodeName.toLowerCase() === 'pre') {
                    parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                }
                var code = element.textContent;
                var env = {
                    element: element,
                    language: language,
                    grammar: grammar,
                    code: code
                };
                function insertHighlightedCode(highlightedCode) {
                    env.highlightedCode = highlightedCode;
                    _.hooks.run('before-insert', env);
                    env.element.innerHTML = env.highlightedCode;
                    _.hooks.run('after-highlight', env);
                    _.hooks.run('complete', env);
                    callback && callback.call(env.element);
                }
                _.hooks.run('before-sanity-check', env);
                if (!env.code) {
                    _.hooks.run('complete', env);
                    callback && callback.call(env.element);
                    return;
                }
                _.hooks.run('before-highlight', env);
                if (!env.grammar) {
                    insertHighlightedCode(_.util.encode(env.code));
                    return;
                }
                if (async && _self.Worker) {
                    var worker = new Worker(_.filename);
                    worker.onmessage = function (evt) {
                        insertHighlightedCode(evt.data);
                    };
                    worker.postMessage(JSON.stringify({
                        language: env.language,
                        code: env.code,
                        immediateClose: true
                    }));
                }
                else {
                    insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
                }
            },
            highlight: function (text, grammar, language) {
                var env = {
                    code: text,
                    grammar: grammar,
                    language: language
                };
                _.hooks.run('before-tokenize', env);
                env.tokens = _.tokenize(env.code, env.grammar);
                _.hooks.run('after-tokenize', env);
                return Token.stringify(_.util.encode(env.tokens), env.language);
            },
            tokenize: function (text, grammar) {
                var rest = grammar.rest;
                if (rest) {
                    for (var token in rest) {
                        grammar[token] = rest[token];
                    }
                    delete grammar.rest;
                }
                var tokenList = new LinkedList();
                addAfter(tokenList, tokenList.head, text);
                matchGrammar(text, tokenList, grammar, tokenList.head, 0);
                return toArray(tokenList);
            },
            hooks: {
                all: {},
                add: function (name, callback) {
                    var hooks = _.hooks.all;
                    hooks[name] = hooks[name] || [];
                    hooks[name].push(callback);
                },
                run: function (name, env) {
                    var callbacks = _.hooks.all[name];
                    if (!callbacks || !callbacks.length) {
                        return;
                    }
                    for (var i = 0, callback; callback = callbacks[i++];) {
                        callback(env);
                    }
                }
            },
            Token: Token
        };
        _self.Prism = _;
        function Token(type, content, alias, matchedStr, greedy) {
            this.type = type;
            this.content = content;
            this.alias = alias;
            // Copy of the full string this token was created from
            this.length = (matchedStr || '').length | 0;
            this.greedy = !!greedy;
        }
        Token.stringify = function stringify(o, language) {
            if (typeof o == 'string') {
                return o;
            }
            if (Array.isArray(o)) {
                var s = '';
                o.forEach(function (e) {
                    s += stringify(e, language);
                });
                return s;
            }
            var env = {
                type: o.type,
                content: stringify(o.content, language),
                tag: 'span',
                classes: ['token', o.type],
                attributes: {},
                language: language
            };
            var aliases = o.alias;
            if (aliases) {
                if (Array.isArray(aliases)) {
                    Array.prototype.push.apply(env.classes, aliases);
                }
                else {
                    env.classes.push(aliases);
                }
            }
            _.hooks.run('wrap', env);
            var attributes = '';
            for (var name in env.attributes) {
                attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
            }
            return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
        };
        /**
         * @param {string} text
         * @param {LinkedList<string | Token>} tokenList
         * @param {any} grammar
         * @param {LinkedListNode<string | Token>} startNode
         * @param {number} startPos
         * @param {boolean} [oneshot=false]
         * @param {string} [target]
         */
        function matchGrammar(text, tokenList, grammar, startNode, startPos, oneshot, target) {
            for (var token in grammar) {
                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                    continue;
                }
                var patterns = grammar[token];
                patterns = Array.isArray(patterns) ? patterns : [patterns];
                for (var j = 0; j < patterns.length; ++j) {
                    if (target && target == token + ',' + j) {
                        return;
                    }
                    var pattern = patterns[j], inside = pattern.inside, lookbehind = !!pattern.lookbehind, greedy = !!pattern.greedy, lookbehindLength = 0, alias = pattern.alias;
                    if (greedy && !pattern.pattern.global) {
                        // Without the global flag, lastIndex won't work
                        var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
                        pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
                    }
                    pattern = pattern.pattern || pattern;
                    for ( // iterate the token list and keep track of the current token/string position
                    var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                        var str = currentNode.value;
                        if (tokenList.length > text.length) {
                            // Something went terribly wrong, ABORT, ABORT!
                            return;
                        }
                        if (str instanceof Token) {
                            continue;
                        }
                        var removeCount = 1; // this is the to parameter of removeBetween
                        if (greedy && currentNode != tokenList.tail.prev) {
                            pattern.lastIndex = pos;
                            var match = pattern.exec(text);
                            if (!match) {
                                break;
                            }
                            var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
                            var to = match.index + match[0].length;
                            var p = pos;
                            // find the node that contains the match
                            p += currentNode.value.length;
                            while (from >= p) {
                                currentNode = currentNode.next;
                                p += currentNode.value.length;
                            }
                            // adjust pos (and p)
                            p -= currentNode.value.length;
                            pos = p;
                            // the current node is a Token, then the match starts inside another Token, which is invalid
                            if (currentNode.value instanceof Token) {
                                continue;
                            }
                            // find the last node which is affected by this match
                            for (var k = currentNode; k !== tokenList.tail && (p < to || (typeof k.value === 'string' && !k.prev.value.greedy)); k = k.next) {
                                removeCount++;
                                p += k.value.length;
                            }
                            removeCount--;
                            // replace with the new match
                            str = text.slice(pos, p);
                            match.index -= pos;
                        }
                        else {
                            pattern.lastIndex = 0;
                            var match = pattern.exec(str);
                        }
                        if (!match) {
                            if (oneshot) {
                                break;
                            }
                            continue;
                        }
                        if (lookbehind) {
                            lookbehindLength = match[1] ? match[1].length : 0;
                        }
                        var from = match.index + lookbehindLength, match = match[0].slice(lookbehindLength), to = from + match.length, before = str.slice(0, from), after = str.slice(to);
                        var removeFrom = currentNode.prev;
                        if (before) {
                            removeFrom = addAfter(tokenList, removeFrom, before);
                            pos += before.length;
                        }
                        removeRange(tokenList, removeFrom, removeCount);
                        var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
                        currentNode = addAfter(tokenList, removeFrom, wrapped);
                        if (after) {
                            addAfter(tokenList, currentNode, after);
                        }
                        if (removeCount > 1)
                            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, true, token + ',' + j);
                        if (oneshot)
                            break;
                    }
                }
            }
        }
        /**
         * @typedef LinkedListNode
         * @property {T} value
         * @property {LinkedListNode<T> | null} prev The previous node.
         * @property {LinkedListNode<T> | null} next The next node.
         * @template T
         */
        /**
         * @template T
         */
        function LinkedList() {
            /** @type {LinkedListNode<T>} */
            var head = { value: null, prev: null, next: null };
            /** @type {LinkedListNode<T>} */
            var tail = { value: null, prev: head, next: null };
            head.next = tail;
            /** @type {LinkedListNode<T>} */
            this.head = head;
            /** @type {LinkedListNode<T>} */
            this.tail = tail;
            this.length = 0;
        }
        /**
         * Adds a new node with the given value to the list.
         * @param {LinkedList<T>} list
         * @param {LinkedListNode<T>} node
         * @param {T} value
         * @returns {LinkedListNode<T>} The added node.
         * @template T
         */
        function addAfter(list, node, value) {
            // assumes that node != list.tail && values.length >= 0
            var next = node.next;
            var newNode = { value: value, prev: node, next: next };
            node.next = newNode;
            next.prev = newNode;
            list.length++;
            return newNode;
        }
        /**
         * Removes `count` nodes after the given node. The given node will not be removed.
         * @param {LinkedList<T>} list
         * @param {LinkedListNode<T>} node
         * @param {number} count
         * @template T
         */
        function removeRange(list, node, count) {
            var next = node.next;
            for (var i = 0; i < count && next !== list.tail; i++) {
                next = next.next;
            }
            node.next = next;
            next.prev = node;
            list.length -= i;
        }
        /**
         * @param {LinkedList<T>} list
         * @returns {T[]}
         * @template T
         */
        function toArray(list) {
            var array = [];
            var node = list.head.next;
            while (node !== list.tail) {
                array.push(node.value);
                node = node.next;
            }
            return array;
        }
        if (!_self.document) {
            if (!_self.addEventListener) {
                // in Node.js
                return _;
            }
            if (!_.disableWorkerMessageHandler) {
                // In worker
                _self.addEventListener('message', function (evt) {
                    var message = JSON.parse(evt.data), lang = message.language, code = message.code, immediateClose = message.immediateClose;
                    _self.postMessage(_.highlight(code, _.languages[lang], lang));
                    if (immediateClose) {
                        _self.close();
                    }
                }, false);
            }
            return _;
        }
        //Get current script and highlight
        var script = _.util.currentScript();
        if (script) {
            _.filename = script.src;
            if (script.hasAttribute('data-manual')) {
                _.manual = true;
            }
        }
        function highlightAutomaticallyCallback() {
            if (!_.manual) {
                _.highlightAll();
            }
        }
        if (!_.manual) {
            // If the document state is "loading", then we'll use DOMContentLoaded.
            // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
            // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
            // might take longer one animation frame to execute which can create a race condition where only some plugins have
            // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
            // See https://github.com/PrismJS/prism/issues/2102
            var readyState = document.readyState;
            if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
                document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
            }
            else {
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(highlightAutomaticallyCallback);
                }
                else {
                    window.setTimeout(highlightAutomaticallyCallback, 16);
                }
            }
        }
        return _;
    })(_self);
    if (module.exports) {
        module.exports = Prism;
    }
    // hack for components to work correctly in node.js
    if (typeof commonjsGlobal !== 'undefined') {
        commonjsGlobal.Prism = Prism;
    }
    /* **********************************************
         Begin prism-markup.js
    ********************************************** */
    Prism.languages.markup = {
        'comment': /<!--[\s\S]*?-->/,
        'prolog': /<\?[\s\S]+?\?>/,
        'doctype': {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
            greedy: true
        },
        'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
        'tag': {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
            greedy: true,
            inside: {
                'tag': {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        'punctuation': /^<\/?/,
                        'namespace': /^[^\s>\/:]+:/
                    }
                },
                'attr-value': {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                    inside: {
                        'punctuation': [
                            /^=/,
                            {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: true
                            }
                        ]
                    }
                },
                'punctuation': /\/?>/,
                'attr-name': {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        'namespace': /^[^\s>\/:]+:/
                    }
                }
            }
        },
        'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
        Prism.languages.markup['entity'];
    // Plugin to make entity title show the real entity, idea by Roman Komarov
    Prism.hooks.add('wrap', function (env) {
        if (env.type === 'entity') {
            env.attributes['title'] = env.content.replace(/&amp;/, '&');
        }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
            var includedCdataInside = {};
            includedCdataInside['language-' + lang] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: true,
                inside: Prism.languages[lang]
            };
            includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
            var inside = {
                'included-cdata': {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: includedCdataInside
                }
            };
            inside['language-' + lang] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[lang]
            };
            var def = {};
            def[tagName] = {
                pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
                lookbehind: true,
                greedy: true,
                inside: inside
            };
            Prism.languages.insertBefore('markup', 'cdata', def);
        }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /* **********************************************
         Begin prism-css.js
    ********************************************** */
    (function (Prism) {
        var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        Prism.languages.css = {
            'comment': /\/\*[\s\S]*?\*\//,
            'atrule': {
                pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                inside: {
                    'rule': /^@[\w-]+/,
                    'selector-function-argument': {
                        pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                        lookbehind: true,
                        alias: 'selector'
                    }
                    // See rest below
                }
            },
            'url': {
                pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
                greedy: true,
                inside: {
                    'function': /^url/i,
                    'punctuation': /^\(|\)$/
                }
            },
            'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
            'string': {
                pattern: string,
                greedy: true
            },
            'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            'important': /!important\b/i,
            'function': /[-a-z0-9]+(?=\()/i,
            'punctuation': /[(){};:,]/
        };
        Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
        var markup = Prism.languages.markup;
        if (markup) {
            markup.tag.addInlined('style', 'css');
            Prism.languages.insertBefore('inside', 'attr-value', {
                'style-attr': {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        'attr-name': {
                            pattern: /^\s*style/i,
                            inside: markup.tag.inside
                        },
                        'punctuation': /^\s*=\s*['"]|['"]\s*$/,
                        'attr-value': {
                            pattern: /.+/i,
                            inside: Prism.languages.css
                        }
                    },
                    alias: 'language-css'
                }
            }, markup.tag);
        }
    }(Prism));
    /* **********************************************
         Begin prism-clike.js
    ********************************************** */
    Prism.languages.clike = {
        'comment': [
            {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: true
            },
            {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true
            }
        ],
        'string': {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        'class-name': {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: true,
            inside: {
                'punctuation': /[.\\]/
            }
        },
        'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        'boolean': /\b(?:true|false)\b/,
        'function': /\w+(?=\()/,
        'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        'punctuation': /[{}[\];(),.:]/
    };
    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */
    Prism.languages.javascript = Prism.languages.extend('clike', {
        'class-name': [
            Prism.languages.clike['class-name'],
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                lookbehind: true
            }
        ],
        'keyword': [
            {
                pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                lookbehind: true
            },
            {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: true
            },
        ],
        'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
        'regex': {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: true,
            greedy: true
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        'function-variable': {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: 'function'
        },
        'parameter': [
            {
                pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                inside: Prism.languages.javascript
            },
            {
                pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            }
        ],
        'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
        'template-string': {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: true,
            inside: {
                'template-punctuation': {
                    pattern: /^`|`$/,
                    alias: 'string'
                },
                'interpolation': {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                    lookbehind: true,
                    inside: {
                        'interpolation-punctuation': {
                            pattern: /^\${|}$/,
                            alias: 'punctuation'
                        },
                        rest: Prism.languages.javascript
                    }
                },
                'string': /[\s\S]+/
            }
        }
    });
    if (Prism.languages.markup) {
        Prism.languages.markup.tag.addInlined('script', 'javascript');
    }
    Prism.languages.js = Prism.languages.javascript;
    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */
    (function () {
        if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
            return;
        }
        /**
         * @param {Element} [container=document]
         */
        self.Prism.fileHighlight = function (container) {
            container = container || document;
            var Extensions = {
                'js': 'javascript',
                'py': 'python',
                'rb': 'ruby',
                'ps1': 'powershell',
                'psm1': 'powershell',
                'sh': 'bash',
                'bat': 'batch',
                'h': 'c',
                'tex': 'latex'
            };
            Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
                // ignore if already loaded
                if (pre.hasAttribute('data-src-loaded')) {
                    return;
                }
                // load current
                var src = pre.getAttribute('data-src');
                var language, parent = pre;
                var lang = /\blang(?:uage)?-([\w-]+)\b/i;
                while (parent && !lang.test(parent.className)) {
                    parent = parent.parentNode;
                }
                if (parent) {
                    language = (pre.className.match(lang) || [, ''])[1];
                }
                if (!language) {
                    var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
                    language = Extensions[extension] || extension;
                }
                var code = document.createElement('code');
                code.className = 'language-' + language;
                pre.textContent = '';
                code.textContent = 'Loading…';
                pre.appendChild(code);
                var xhr = new XMLHttpRequest();
                xhr.open('GET', src, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status < 400 && xhr.responseText) {
                            code.textContent = xhr.responseText;
                            Prism.highlightElement(code);
                            // mark as loaded
                            pre.setAttribute('data-src-loaded', '');
                        }
                        else if (xhr.status >= 400) {
                            code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
                        }
                        else {
                            code.textContent = '✖ Error: File does not exist or is empty';
                        }
                    }
                };
                xhr.send(null);
            });
        };
        document.addEventListener('DOMContentLoaded', function () {
            // execute inside handler, for dropping Event as argument
            self.Prism.fileHighlight();
        });
    })();
});
function injectCSS(id, src) {
    return new Promise(function (resolve, reject) {
        if (!document) {
            resolve();
            return;
        }
        if (document.getElementById(id)) {
            resolve('CSS already loaded.');
            return;
        }
        var link = document.createElement('link');
        link.id = id;
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', src);
        link.addEventListener('load', function () { return resolve('CSS loaded.'); });
        link.addEventListener('error', function () { return reject('Error loading css.'); });
        link.addEventListener('abort', function () { return reject('CSS loading aborted.'); });
        document.head.appendChild(link);
    });
}
function loadTheme(theme) {
    if (!theme || theme === undefined) {
        return undefined;
    }
    switch (theme) {
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['3024-NIGHT']:
            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./3024-night-8138cc8f.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/3024-night-8138cc8f.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['A11Y-DARK']:
            return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./a11y-dark-533291b3.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/a11y-dark-533291b3.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['BASE16-DARK']:
            return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./base16-dark-12f375e0.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/base16-dark-12f375e0.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['BASE16-LIGHT']:
            return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./base16-light-52469b64.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/base16-light-52469b64.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].BLACKBOARD:
            return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./blackboard-db1ca116.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/blackboard-db1ca116.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].COBALT:
            return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./cobalt-5d681c9a.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/cobalt-5d681c9a.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].DUOTONE:
            return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./duotone-acd564a2.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/duotone-acd564a2.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].HOPSCOTCH:
            return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./hopscotch-4820dd1a.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/hopscotch-4820dd1a.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].LUCARIO:
            return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./lucario-59b2ad39.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/lucario-59b2ad39.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].MATERIAL:
            return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./material-8e59c55f.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/material-8e59c55f.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].MONOKAI:
            return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./monokai-c3bd40c3.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/monokai-c3bd40c3.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['NIGHT-OWL']:
            return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./night-owl-36dc5565.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/night-owl-36dc5565.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].NORD:
            return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./nord-ce9f3484.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/nord-ce9f3484.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['OCEANIC-NEXT']:
            return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./oceanic-next-e3f20f17.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/oceanic-next-e3f20f17.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['ONE-DARK']:
            return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./one-dark-3da1a5b7.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/one-dark-3da1a5b7.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['ONE-LIGHT']:
            return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./one-light-81b6cd67.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/one-light-81b6cd67.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].PANDA:
            return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./panda-2e75c11f.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/panda-2e75c11f.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].PARAISO:
            return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./paraiso-cc30311f.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/paraiso-cc30311f.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].SETI:
            return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./seti-977c4512.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/seti-977c4512.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['SHADES-OF-PURPLE']:
            return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./shades-of-purple-649a9b24.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/shades-of-purple-649a9b24.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['SOLARIZED-DARK']:
            return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./solarized-dark-d1ab5e8b.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/solarized-dark-d1ab5e8b.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"]['SOLARIZED-LIGHT']:
            return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./solarized-light-429511f1.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/solarized-light-429511f1.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].SYNTHWAVE:
            return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./synthwave-af3bb869.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/synthwave-af3bb869.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].TWILIGHT:
            return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./twilight-68d946d8.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/twilight-68d946d8.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].VERMINAL:
            return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./verminal-f2bc4235.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/verminal-f2bc4235.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].VSCODE:
            return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./vscode-1e0057d8.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/vscode-1e0057d8.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].YETI:
            return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./yeti-67a4664e.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/yeti-67a4664e.js"));
        case _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].ZENBURN:
            return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./zenburn-a2e7f052.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/zenburn-a2e7f052.js"));
        default:
            return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./dracula-0eb4b4d6.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm-es5/dracula-0eb4b4d6.js"));
    }
}
var CarbonThemeStyle = function (_a) {
    var style = _a.style;
    return (Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", null, "\n      :host " + style + ";\n    "));
};
var deckdeckgoHighlightCodeCss = "code[class*=\"language-\"],pre[class*=\"language-\"]{color:black;background:none;text-shadow:0 1px white;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=\"language-\"]::-moz-selection,pre[class*=\"language-\"] ::-moz-selection,code[class*=\"language-\"]::-moz-selection,code[class*=\"language-\"] ::-moz-selection{text-shadow:none;background:#b3d4fc}pre[class*=\"language-\"]::-moz-selection,pre[class*=\"language-\"] ::-moz-selection,code[class*=\"language-\"]::-moz-selection,code[class*=\"language-\"] ::-moz-selection{text-shadow:none;background:#b3d4fc}pre[class*=\"language-\"]::selection,pre[class*=\"language-\"] ::selection,code[class*=\"language-\"]::selection,code[class*=\"language-\"] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=\"language-\"],pre[class*=\"language-\"]{text-shadow:none}}pre[class*=\"language-\"]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=\"language-\"],pre[class*=\"language-\"]{background:#f5f2f0}:not(pre)>code[class*=\"language-\"]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#905}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#690}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#9a6e3a;background:hsla(0, 0%, 100%, .5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.function,.token.class-name{color:#DD4A68}.token.regex,.token.important,.token.variable{color:#e90}.token.important,.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}:host ::slotted([slot=code]){display:none}:host(.deckgo-highlight-code-edit) ::slotted([slot=code]){display:block;white-space:pre-wrap}:host(.deckgo-highlight-code-edit) code{display:none}:host([editable]) code:empty:not(:focus):after{content:var(--deckgo-highlight-code-empty-text, \"Click to add your code\")}:host(.deckgo-highlight-code-carbon){display:var(--deckgo-highlight-code-carbon-display, block);overflow:var(--deckgo-highlight-code-carbon-overflow, auto);border:var(--deckgo-highlight-code-carbon-border);border-radius:var(--deckgo-highlight-code-carbon-border-radius, 4px);background:var(--deckgo-highlight-code-carbon-background, #282a36);color:var(--deckgo-highlight-code-carbon-color, white);-webkit-box-shadow:var(--deckgo-highlight-code-carbon-box-shadow, rgba(0, 0, 0, 0.55) 0 8px 16px);box-shadow:var(--deckgo-highlight-code-carbon-box-shadow, rgba(0, 0, 0, 0.55) 0 8px 16px);margin:var(--deckgo-highlight-code-carbon-margin, 16px 0)}:host(.deckgo-highlight-code-carbon) div.deckgo-highlight-code-container{margin:var(--deckgo-highlight-code-margin, 0 0 16px)}:host(.deckgo-highlight-code-carbon) div.deckgo-highlight-code-container code>div.deckgo-highlight-code-line-number:before{background:var(--deckgo-highlight-code-carbon-background, transparent);border-color:var(--deckgo-highlight-code-line-numbers, var(--deckgo-highlight-code-token-comment, #6272a4));color:var(--deckgo-highlight-code-line-numbers, var(--deckgo-highlight-code-token-comment, #6272a4))}:host(.deckgo-highlight-code-carbon) ::slotted([slot=code]){color:var(--deckgo-highlight-code-carbon-color, white)}:host(.deckgo-highlight-code-ubuntu){display:var(--deckgo-highlight-code-ubuntu-display, block);overflow:var(--deckgo-highlight-code-ubuntu-overflow, auto);border:var(--deckgo-highlight-code-ubuntu-border);border-radius:var(--deckgo-highlight-code-ubuntu-border-radius, 6px 6px 0 0);background:var(--deckgo-highlight-code-ubuntu-background, #4c1e3d);color:var(--deckgo-highlight-code-ubuntu-color, #ddd);-webkit-box-shadow:var(--deckgo-highlight-code-ubuntu-box-shadow, 2px 4px 10px rgba(0, 0, 0, 0.5));box-shadow:var(--deckgo-highlight-code-ubuntu-box-shadow, 2px 4px 10px rgba(0, 0, 0, 0.5));margin:var(--deckgo-highlight-code-ubuntu-margin, 16px 0)}:host(.deckgo-highlight-code-ubuntu) div.deckgo-highlight-code-container{margin:var(--deckgo-highlight-code-margin, 0 0 16px);padding:var(--deckgo-highlight-code-padding, 2px 0 0);background:transparent}:host(.deckgo-highlight-code-ubuntu) div.deckgo-highlight-code-container code{font-family:var(--deckgo-highlight-code-font-family, \"Ubuntu mono\")}:host(.deckgo-highlight-code-ubuntu) div.deckgo-highlight-code-container code>div.deckgo-highlight-code-line-number:before{background:var(--deckgo-highlight-code-ubuntu-background, #4c1e3d)}:host(.deckgo-highlight-code-ubuntu) ::slotted([slot=code]){color:var(--deckgo-highlight-code-ubuntu-color, #ddd)}div.deckgo-highlight-code-container{color:var(--deckgo-highlight-code-color, inherit);background:var(--deckgo-highlight-code-background);padding:var(--deckgo-highlight-code-padding, 0 16px);border-radius:var(--deckgo-highlight-code-border-radius);margin:var(--deckgo-highlight-code-margin, 16px 0);-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;-webkit-transform:scale(var(--deckgo-highlight-code-zoom, 1));transform:scale(var(--deckgo-highlight-code-zoom, 1));direction:var(--deckgo-highlight-code-direction, ltr);text-align:var(--deckgo-highlight-code-text-align, start);width:var(--deckgo-highlight-code-container-width);height:var(--deckgo-highlight-code-container-height);display:var(--deckgo-highlight-code-container-display, block);-ms-flex-pack:var(--deckgo-highlight-code-container-justify-content);justify-content:var(--deckgo-highlight-code-container-justify-content);-ms-flex-direction:var(--deckgo-highlight-code-container-flex-direction);flex-direction:var(--deckgo-highlight-code-container-flex-direction);-ms-flex-align:var(--deckgo-highlight-code-container-align-items);align-items:var(--deckgo-highlight-code-container-align-items)}div.deckgo-highlight-code-container code{overflow-y:var(--deckgo-highlight-code-scroll, auto);white-space:var(--deckgo-highlight-code-white-space, pre-wrap);font-size:var(--deckgo-highlight-code-font-size);font-family:var(--deckgo-highlight-code-font-family, monospace);display:var(--deckgo-highlight-code-display, block);counter-reset:linenumber;height:100%;}div.deckgo-highlight-code-container code>div.deckgo-highlight-code-line-number{counter-increment:linenumber;position:relative;padding-left:3.5em}div.deckgo-highlight-code-container code>div.deckgo-highlight-code-line-number:before{content:counter(linenumber);display:inline-block;position:absolute;top:0;bottom:0;left:0;width:2.5em;background:var(--deckgo-highlight-code-background);border-right:1px solid var(--deckgo-highlight-code-line-numbers, var(--deckgo-highlight-code-token-comment, #6272a4));color:var(--deckgo-highlight-code-line-numbers, var(--deckgo-highlight-code-token-comment, #6272a4))}div.deckgo-highlight-code-container code span.deckgo-highlight-code-anchor-hidden{visibility:hidden}div.deckgo-highlight-code-container code .deckgo-highlight-code-line{background:var(--deckgo-highlight-code-line-background, #3e4564);border-top:var(--deckgo-highlight-code-line-border-top);border-bottom:var(--deckgo-highlight-code-line-border-bottom)}div.deckgo-highlight-code-container code .language-css .token.string:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .style .token.string:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .token.entity:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .token.operator:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .token.url:not(.deckgo-highlight-code-line){background:inherit}div.deckgo-highlight-code-container code .token.comment,div.deckgo-highlight-code-container code .token.prolog,div.deckgo-highlight-code-container code .token.doctype,div.deckgo-highlight-code-container code .token.cdata{color:var(--deckgo-highlight-code-token-comment, #6272a4)}div.deckgo-highlight-code-container code .token.punctuation{color:var(--deckgo-highlight-code-token-punctuation, #6272a4)}div.deckgo-highlight-code-container code .token.property,div.deckgo-highlight-code-container code .token.tag,div.deckgo-highlight-code-container code .token.boolean,div.deckgo-highlight-code-container code .token.number,div.deckgo-highlight-code-container code .token.constant,div.deckgo-highlight-code-container code .token.symbol,div.deckgo-highlight-code-container code .token.deleted{color:var(--deckgo-highlight-code-token-property, #bd93f9)}div.deckgo-highlight-code-container code .token.selector,div.deckgo-highlight-code-container code .token.attr-name,div.deckgo-highlight-code-container code .token.string,div.deckgo-highlight-code-container code .token.char,div.deckgo-highlight-code-container code .token.builtin,div.deckgo-highlight-code-container code .token.inserted{color:var(--deckgo-highlight-code-token-selector, #50fa7b)}div.deckgo-highlight-code-container code .token.operator,div.deckgo-highlight-code-container code .token.entity,div.deckgo-highlight-code-container code .token.url,div.deckgo-highlight-code-container code .language-css .token.string,div.deckgo-highlight-code-container code .style .token.string{color:var(--deckgo-highlight-code-token-operator, #ff79c6)}div.deckgo-highlight-code-container code .token.atrule,div.deckgo-highlight-code-container code .token.attr-value,div.deckgo-highlight-code-container code .token.keyword{color:var(--deckgo-highlight-code-token-atrule, #ff79c6)}div.deckgo-highlight-code-container code .token.function,div.deckgo-highlight-code-container code .token.class-name{color:var(--deckgo-highlight-code-token-function, #ffb86c)}div.deckgo-highlight-code-container code .token.regex,div.deckgo-highlight-code-container code .token.important,div.deckgo-highlight-code-container code .token.variable{color:var(--deckgo-highlight-code-token-regex, #f1fa8c)}div.carbon{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;padding:var(--deckgo-highlight-code-carbon-header-padding, 16px)}div.carbon>div{width:var(--deckgo-highlight-code-carbon-header-button-width, 12px);height:var(--deckgo-highlight-code-carbon-header-button-height, 12px);border-radius:var(--deckgo-highlight-code-carbon-header-button-border-radius, 50%);margin:var(--deckgo-highlight-code-carbon-header-button-margin, 0 6px 0 0)}div.carbon>div.red{background:var(--deckgo-highlight-code-carbon-header-button-red-background, #ff5f56);border:var(--deckgo-highlight-code-carbon-header-button-red-border, 0.5px solid #e0443e)}div.carbon>div.yellow{background:var(--deckgo-highlight-code-carbon-header-button-yellow-background, #ffbd2e);border:var(--deckgo-highlight-code-carbon-header-button-yellow-border, 0.5px solid #dea123)}div.carbon>div.green{background:var(--deckgo-highlight-code-carbon-header-button-green-background, #27c93f);border:var(--deckgo-highlight-code-carbon-header-button-green-border, 0.5px solid #1aab29)}div.ubuntu{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;padding:var(--deckgo-highlight-code-ubuntu-header-padding, 0 8px);height:var(--deckgo-highlight-code-ubuntu-header-height, 25px);background:var(--deckgo-highlight-code-ubuntu-header-background, linear-gradient(#504b45 0%, #3c3b37 100%));font-family:var(--deckgo-highlight-code-ubuntu-header-font-family, \"Ubuntu\")}div.ubuntu>div{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--deckgo-highlight-code-carbon-header-button-width, 12px);height:var(--deckgo-highlight-code-carbon-header-button-height, 12px);border-radius:var(--deckgo-highlight-code-carbon-header-button-border-radius, 50%);margin:var(--deckgo-highlight-code-carbon-header-button-margin, 0 4px 0 0);font-size:var(--deckgo-highlight-code-carbon-header-button-font-size, 7px);color:var(--deckgo-highlight-code-carbon-header-button-color, black);text-shadow:var(--deckgo-highlight-code-carbon-header-button-text-shadow, 0px 1px 0px rgba(255, 255, 255, 0.2));-webkit-box-shadow:var(--deckgo-highlight-code-carbon-header-button-box-shadow, 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642);box-shadow:var(--deckgo-highlight-code-carbon-header-button-box-shadow, 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642)}div.ubuntu>div.close{background:var(--deckgo-highlight-code-carbon-header-button-close-background, linear-gradient(#f37458 0%, #de4c12 100%));border:var(--deckgo-highlight-code-carbon-header-button-close-border)}div.ubuntu>div.minimize{background:var(--deckgo-highlight-code-carbon-header-button-minimize-background, linear-gradient(#7d7871 0%, #595953 100%));border:var(--deckgo-highlight-code-carbon-header-button-minimize-border)}div.ubuntu>div.maximize{background:var(--deckgo-highlight-code-carbon-header-button-maximize-background, linear-gradient(#7d7871 0%, #595953 100%));border:var(--deckgo-highlight-code-carbon-header-button-maximize-border)}div.ubuntu>p{color:var(--deckgo-highlight-code-carbon-header-user-color, #d5d0ce);font-size:var(--deckgo-highlight-code-carbon-header-user-font-size, 12px);line-height:var(--deckgo-highlight-code-carbon-header-user-line-height, 14px);margin:var(--deckgo-highlight-code-carbon-header-user-margin, 0 0 1px 4px)}";
var DeckdeckgoHighlightCode = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.anchor = '// DeckDeckGo';
        this.anchorZoom = '// DeckDeckGoZoom';
        this.hideAnchor = true;
        this.language = 'javascript';
        this.lineNumbers = false;
        this.terminal = _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["D"].CARBON;
        this.editable = false;
        this.theme = _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["a"].DRACULA;
        this.editing = false;
        this.anchorOffsetTop = 0;
        this.fetchOrParseAfterUpdate = false;
        this.catchNewLine = function ($event) { return __awaiter(_this, void 0, void 0, function () {
            var selection, charCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!($event && $event.key === 'Enter')) return [3 /*break*/, 2];
                        $event.preventDefault();
                        return [4 /*yield*/, this.getSelection()];
                    case 1:
                        selection = _a.sent();
                        if (selection && selection.focusNode && selection.focusNode.textContent && selection.focusOffset > 0) {
                            charCode = selection.focusNode.textContent.charCodeAt(window.getSelection().focusOffset);
                            document.execCommand('insertHTML', false, charCode === 10 || charCode === 13 ? '\n' : '\n\n');
                        }
                        else {
                            document.execCommand('insertHTML', false, '\n\n');
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        this.applyCode = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stopEditing()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.parseSlottedCode()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.prismLanguageLoaded = Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "prismLanguageLoaded", 7);
        this.codeDidChange = Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "codeDidChange", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadGoogleFonts()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var languageWasLoaded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.languageDidLoad()];
                    case 1:
                        languageWasLoaded = _a.sent();
                        return [4 /*yield*/, this.loadLanguage()];
                    case 2:
                        _a.sent();
                        if (!languageWasLoaded) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fetchOrParse()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.fetchOrParseAfterUpdate) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchOrParse()];
                    case 1:
                        _a.sent();
                        this.fetchOrParseAfterUpdate = false;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.loadTheme = function () {
        return __awaiter(this, void 0, void 0, function () {
            var theme;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.terminal !== _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["D"].CARBON || !this.theme) {
                            this.themeStyle = undefined;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, loadTheme(this.theme)];
                    case 1:
                        theme = (_a.sent()).theme;
                        this.themeStyle = theme;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.languageLoaded = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!$event || !$event.detail) {
                            return [2 /*return*/];
                        }
                        if (!(this.language && this.language !== 'javascript' && $event.detail === this.language)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchOrParse()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.fetchOrParse = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.src) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchCode()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.parseSlottedCode()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.languageDidLoad = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!document || !_this.language || _this.language === '') {
                resolve(false);
                return;
            }
            if (_this.language === 'javascript') {
                resolve(true);
                return;
            }
            var scripts = document.querySelector("[deckdeckgo-prism-loaded='" + _this.language + "']");
            if (scripts) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    };
    class_1.prototype.loadLanguage = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var scripts, script;
            var _this = this;
            return __generator(this, function (_a) {
                if (!document || !this.language || this.language === '' || this.language === 'javascript') {
                    resolve();
                    return [2 /*return*/];
                }
                scripts = document.querySelector("[deckdeckgo-prism='" + this.language + "']");
                if (scripts) {
                    resolve();
                    return [2 /*return*/];
                }
                script = document.createElement('script');
                script.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        script.setAttribute('deckdeckgo-prism-loaded', this.language);
                        this.prismLanguageLoaded.emit(this.language);
                        return [2 /*return*/];
                    });
                }); };
                script.onerror = function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (script.parentElement) {
                            script.parentElement.removeChild(script);
                        }
                        // if the language definition doesn't exist or if unpkg is down, display code anyway
                        this.prismLanguageLoaded.emit(this.language);
                        return [2 /*return*/];
                    });
                }); };
                script.src = 'https://unpkg.com/prismjs@latest/components/prism-' + this.language + '.js';
                script.setAttribute('deckdeckgo-prism', this.language);
                script.defer = true;
                document.head.appendChild(script);
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    class_1.prototype.onLineNumbersChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchOrParse()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.onCarbonChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fetchOrParseAfterUpdate = true;
                        return [4 /*yield*/, this.loadGoogleFonts()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.loadGoogleFonts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.terminal === _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["D"].UBUNTU)) return [3 /*break*/, 2];
                        return [4 /*yield*/, injectCSS('google-fonts-ubuntu', 'https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Mono&display=swap')];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.language || this.language === '') {
                            resolve();
                            return [2 /*return*/];
                        }
                        if (!(this.language === 'javascript')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchOrParse()];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                    case 2:
                        if (!document.querySelector("[deckdeckgo-prism-loaded='" + this.language + "']")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fetchOrParse()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.loadLanguage()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    class_1.prototype.parseSlottedCode = function () {
        var code = this.el.querySelector("[slot='code']");
        if (code) {
            return this.parseCode(code.innerText ? code.innerText.trim() : code.innerText);
        }
        else {
            return new Promise(function (resolve) {
                resolve();
            });
        }
    };
    class_1.prototype.fetchCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fetchedCode, response, e_1, container;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.src) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, fetch(this.src)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 3:
                        fetchedCode = _a.sent();
                        return [4 /*yield*/, this.parseCode(fetchedCode)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        container = this.el.shadowRoot.querySelector('div.deckgo-highlight-code-container');
                        if (container && fetchedCode) {
                            container.children[0].innerHTML = fetchedCode;
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.parseCode = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var container, regEx, match, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = this.el.shadowRoot.querySelector('div.deckgo-highlight-code-container');
                        if (!code || code === undefined || code === '') {
                            resolve();
                            return [2 /*return*/];
                        }
                        if (!container) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // clear the container first
                        container.children[0].innerHTML = '';
                        regEx = RegExp(/\n(?!$)/g);
                        match = code.split(regEx);
                        match.forEach(function (m, idx, array) {
                            // On last element
                            if (idx === array.length - 1) {
                                _this.attachHighlightObserver(container);
                            }
                            var div = document.createElement('div');
                            if (_this.lineNumbers) {
                                div.classList.add('deckgo-highlight-code-line-number');
                            }
                            var highlight = prism.highlight(m, prism.languages[_this.language], _this.language);
                            // If empty, use \u200B as zero width text spacer
                            div.innerHTML = highlight && highlight !== '' ? highlight : '\u200B';
                            container.children[0].appendChild(div);
                        });
                        return [4 /*yield*/, this.addAnchors()];
                    case 2:
                        _a.sent();
                        resolve();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    class_1.prototype.attachHighlightObserver = function (container) {
        var _this = this;
        if (window && 'ResizeObserver' in window) {
            // @ts-ignore
            var observer_1 = new ResizeObserver(function (_entries) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.addHighlight()];
                        case 1:
                            _a.sent();
                            observer_1.disconnect();
                            return [2 /*return*/];
                    }
                });
            }); });
            observer_1.observe(container);
        }
        else {
            // Back in my days...
            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.addHighlight()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, 100);
        }
    };
    class_1.prototype.addAnchors = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var elements = _this.el.shadowRoot.querySelectorAll('span.comment');
            if (elements) {
                var elementsArray = Array.from(elements);
                var anchors = elementsArray.filter(function (element) {
                    return _this.hasLineAnchor(element.innerHTML);
                });
                if (anchors) {
                    anchors.forEach(function (anchor) {
                        anchor.classList.add('deckgo-highlight-code-anchor');
                        if (_this.hideAnchor) {
                            anchor.classList.add('deckgo-highlight-code-anchor-hidden');
                        }
                    });
                }
            }
            resolve();
        });
    };
    class_1.prototype.hasLineAnchor = function (line) {
        return line && this.anchor && line.indexOf('@Prop') === -1 && line.split(' ').join('').indexOf(this.anchor.split(' ').join('')) > -1;
    };
    class_1.prototype.addHighlight = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var rows_1, containerCode, elements, rowIndex_1, lastOffsetTop_1, offsetHeight_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.highlightLines && this.highlightLines.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findRowsToHighlight()];
                    case 1:
                        rows_1 = _a.sent();
                        if (rows_1 && rows_1.length > 0) {
                            containerCode = this.el.shadowRoot.querySelector('code');
                            if (containerCode && containerCode.hasChildNodes()) {
                                elements = Array.prototype.slice.call(containerCode.childNodes);
                                rowIndex_1 = 0;
                                lastOffsetTop_1 = -1;
                                offsetHeight_1 = -1;
                                elements.forEach(function (element) {
                                    var editElement;
                                    // We need to convert text entries to an element in order to be able to style it
                                    if (element.nodeName === '#text') {
                                        var span = document.createElement('span');
                                        if (element.previousElementSibling) {
                                            element.previousElementSibling.insertAdjacentElement('afterend', span);
                                        }
                                        else {
                                            element.parentNode.prepend(span);
                                        }
                                        span.appendChild(element);
                                        editElement = span;
                                    }
                                    else {
                                        editElement = element;
                                    }
                                    // We try to find the row index with the offset of the element
                                    rowIndex_1 = editElement.offsetTop > lastOffsetTop_1 ? rowIndex_1 + 1 : rowIndex_1;
                                    lastOffsetTop_1 = editElement.offsetTop;
                                    // For some reason, some converted text element are displayed on two lines, that's why we should consider the 2nd one as index
                                    offsetHeight_1 = offsetHeight_1 === -1 || offsetHeight_1 > editElement.offsetHeight ? editElement.offsetHeight : offsetHeight_1;
                                    var rowsIndexToCompare = editElement.offsetHeight > offsetHeight_1 ? rowIndex_1 + 1 : rowIndex_1;
                                    if (rows_1.indexOf(rowsIndexToCompare) > -1) {
                                        editElement.classList.add('deckgo-highlight-code-line');
                                    }
                                });
                            }
                        }
                        _a.label = 2;
                    case 2:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    class_1.prototype.findRowsToHighlight = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var results = [];
            var rows = _this.highlightLines.split(' ');
            if (rows && rows.length > 0) {
                rows.forEach(function (row) {
                    var index = row.split(',');
                    if (index && index.length >= 1) {
                        var start = parseInt(index[0], 0);
                        var end = parseInt(index[1], 0);
                        for (var i = start; i <= end; i++) {
                            results.push(i);
                        }
                    }
                });
            }
            resolve(results);
        });
    };
    class_1.prototype.findNextAnchor = function (enter) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var elements, elementsArray, anchor, elementCode;
            var _this = this;
            return __generator(this, function (_a) {
                elements = this.el.shadowRoot.querySelectorAll('span.deckgo-highlight-code-anchor');
                if (elements) {
                    elementsArray = enter ? Array.from(elements) : Array.from(elements).reverse();
                    anchor = elementsArray.find(function (element) {
                        return enter ? element.offsetTop > _this.anchorOffsetTop : element.offsetTop < _this.anchorOffsetTop;
                    });
                    if (anchor) {
                        this.anchorOffsetTop = anchor.offsetTop;
                        resolve({
                            offsetTop: anchor.offsetTop,
                            hasLineZoom: this.hasLineZoom(anchor.textContent),
                        });
                    }
                    else if (!enter) {
                        elementCode = this.el.shadowRoot.querySelector('code');
                        if (elementCode && elementCode.firstElementChild) {
                            this.anchorOffsetTop = 0;
                            resolve({
                                offsetTop: 0,
                                hasLineZoom: false,
                            });
                        }
                        else {
                            resolve(null);
                        }
                    }
                    else {
                        resolve(null);
                    }
                }
                else {
                    resolve(null);
                }
                return [2 /*return*/];
            });
        }); });
    };
    class_1.prototype.zoomCode = function (zoom) {
        var _this = this;
        return new Promise(function (resolve) {
            var container = _this.el.shadowRoot.querySelector('div.deckgo-highlight-code-container');
            if (container) {
                container.style.setProperty('--deckgo-highlight-code-zoom', zoom ? '1.3' : '1');
            }
            resolve();
        });
    };
    class_1.prototype.hasLineZoom = function (line) {
        return line && this.anchorZoom && line.indexOf('@Prop') === -1 && line.split(' ').join('').indexOf(this.anchorZoom.split(' ').join('')) > -1;
    };
    class_1.prototype.edit = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.editable) {
                resolve();
                return;
            }
            _this.editing = true;
            var slottedCode = _this.el.querySelector("[slot='code']");
            if (slottedCode) {
                setTimeout(function () {
                    slottedCode.setAttribute('contentEditable', 'true');
                    slottedCode.addEventListener('blur', _this.applyCode, { once: true });
                    slottedCode.addEventListener('keydown', _this.catchNewLine);
                    slottedCode.focus();
                }, 100);
            }
            resolve();
        });
    };
    class_1.prototype.getSelection = function () {
        return new Promise(function (resolve) {
            var selectedSelection = null;
            if (window && window.getSelection) {
                selectedSelection = window.getSelection();
            }
            else if (document && document.getSelection) {
                selectedSelection = document.getSelection();
            }
            else if (document && document.selection) {
                selectedSelection = document.selection.createRange().text;
            }
            resolve(selectedSelection);
        });
    };
    class_1.prototype.stopEditing = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.editing = false;
            var slottedCode = _this.el.querySelector("[slot='code']");
            if (slottedCode) {
                slottedCode.removeAttribute('contentEditable');
                if (slottedCode.innerHTML) {
                    slottedCode.innerHTML = slottedCode.innerHTML.trim();
                }
                _this.codeDidChange.emit(_this.el);
            }
            resolve();
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        var hostClass = {
            'deckgo-highlight-code-edit': this.editing,
            'deckgo-highlight-code-carbon': this.terminal === _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["D"].CARBON,
            'deckgo-highlight-code-ubuntu': this.terminal === _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["D"].UBUNTU,
        };
        if (this.terminal === _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["D"].CARBON) {
            hostClass["deckgo-highlight-code-theme-" + this.theme] = true;
        }
        return (Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: hostClass }, this.renderCarbon(), this.renderUbuntu(), Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-highlight-code-container", onMouseDown: function () { return _this.edit(); }, onTouchStart: function () { return _this.edit(); } }, Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("code", null), Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "code" }))));
    };
    class_1.prototype.renderCarbon = function () {
        if (this.terminal !== _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["D"].CARBON) {
            return undefined;
        }
        return [
            Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CarbonThemeStyle, { style: this.themeStyle }),
            Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carbon" }, this.renderCarbonCircle('red'), this.renderCarbonCircle('yellow'), this.renderCarbonCircle('green')),
        ];
    };
    class_1.prototype.renderCarbonCircle = function (color) {
        return Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: color });
    };
    class_1.prototype.renderUbuntu = function () {
        if (this.terminal !== _deckdeckgo_highlight_code_carbon_theme_024790ad_js__WEBPACK_IMPORTED_MODULE_1__["D"].UBUNTU) {
            return undefined;
        }
        return (Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "ubuntu" }, this.renderUbuntuCircle('close'), this.renderUbuntuCircle('minimize'), this.renderUbuntuCircle('maximize'), Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "user" }))));
    };
    class_1.prototype.renderUbuntuCircle = function (mode) {
        var symbol = mode === 'close' ? '&#10005;' : mode === 'minimize' ? '&#9472;' : '&#9723;';
        return Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: mode, innerHTML: symbol });
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_index_861c58cb_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "theme": ["loadTheme"],
                "language": ["loadLanguage"],
                "lineNumbers": ["onLineNumbersChange"],
                "terminal": ["onCarbonChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
DeckdeckgoHighlightCode.style = deckdeckgoHighlightCodeCss;



/***/ })

};;
//# sourceMappingURL=0.render-page.js.map