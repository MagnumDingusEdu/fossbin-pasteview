import { codeFolding } from "@codemirror/language";
import { EditorState } from "@codemirror/state";
import { drawSelection, EditorView } from "@codemirror/view";
import { basicSetup } from './basicSetup';

// import languages
import { python } from "@codemirror/lang-python";

let codeArea = document.getElementById("highlightedCode")!;
const pasteContent = document.getElementById("hiddenPasteContents")!.innerText.trim();

import { oneDark } from './theme';

let view: EditorView = new EditorView({
    state: EditorState.create({
        extensions: [
            basicSetup,
            EditorState.readOnly.of(true),
            drawSelection({ cursorBlinkRate: 0 }),
            // EditorView.lineWrapping,
            // StreamLanguage.define(dart),
            python(),
            oneDark,
            codeFolding(),
        ],
        doc: pasteContent
    }),
    parent: codeArea
});



console.log(view.viewport)

