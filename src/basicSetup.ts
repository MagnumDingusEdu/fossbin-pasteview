import { history } from "@codemirror/commands"
import { bracketMatching, defaultHighlightStyle, foldGutter, indentOnInput, syntaxHighlighting } from "@codemirror/language"
import { EditorState, Extension } from "@codemirror/state"
import { keymap } from "@codemirror/view"
import { crosshairCursor, drawSelection, dropCursor, highlightActiveLine, highlightActiveLineGutter, highlightSpecialChars, lineNumbers, rectangularSelection } from "@codemirror/view"
import { searchKeymap, search } from "@codemirror/search";
import { foldKeymap } from "@codemirror/language"

export const basicSetup: Extension = (() => [
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
    search({top: true}),
    // indentationMarkers
    keymap.of([
        ...searchKeymap,
        ...foldKeymap,
    ])
])()
