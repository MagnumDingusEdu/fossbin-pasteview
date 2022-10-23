import { history } from '@codemirror/commands';
import {
    bracketMatching, defaultHighlightStyle, foldGutter,
    foldKeymap, indentOnInput, syntaxHighlighting
} from '@codemirror/language';
import { search, searchKeymap } from '@codemirror/search';
import { EditorState, Extension } from '@codemirror/state';
import {
    crosshairCursor, drawSelection, dropCursor, highlightActiveLine,
    highlightActiveLineGutter, highlightSpecialChars, keymap, lineNumbers, rectangularSelection
} from '@codemirror/view';
import { indentationMarkers } from '@replit/codemirror-indentation-markers';

export const basicSetup: Extension[] = (() => [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    foldGutter(),
    drawSelection(),
    dropCursor(),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
    bracketMatching(),
    rectangularSelection(),
    crosshairCursor(),
    highlightActiveLine(),
    drawSelection({ cursorBlinkRate: 0 }),
    search({ top: true }),
    indentationMarkers(),
    keymap.of([
        ...searchKeymap,
        ...foldKeymap,
    ])
])();
