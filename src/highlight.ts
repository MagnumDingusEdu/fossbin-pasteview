import { codeFolding } from "@codemirror/language";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from './basicSetup';

let codeArea = document.getElementById("highlightedCode")!;
const pasteContent = document.getElementById("hiddenPasteContents")!.innerText.trim() + "\n\n";

import { languages } from "@codemirror/language-data";

import { oneDark } from './theme';
import { Compartment } from "@codemirror/state";
import { LanguageSupport } from "@codemirror/language";
import { keymap } from "@codemirror/view";

let lineWrapping = true;
const lineWrapCompartment = new Compartment();
const languageCompartment = new Compartment();

let editor: EditorView = new EditorView({
    state: EditorState.create({
        extensions: [
            basicSetup,
            EditorState.readOnly.of(true),
            lineWrapCompartment.of(lineWrapping ? EditorView.lineWrapping : []),
            languageCompartment.of([]),
            // StreamLanguage.define(dart),
            oneDark,
            codeFolding(),
           
        ],
        doc: pasteContent
    }),
    parent: codeArea
});

function toggleLineWrapping() {
    lineWrapping = !lineWrapping;
    editor.dispatch({
        effects: lineWrapCompartment.reconfigure(lineWrapping ? EditorView.lineWrapping : [])
    })
}

function setLanguage() {
    const lang = codeArea.getAttribute("extension") ?? "txt";
    const matchingLanguages = languages.filter((l) => l.extensions.indexOf(lang) !== -1);
    if (matchingLanguages.length == 0) return;

    const languageDesc = matchingLanguages[0];
    languageDesc.load().then((language: LanguageSupport) => {
        editor.dispatch({
            effects: languageCompartment.reconfigure(language.extension)
        })
    });


}
// for accessibility
document.querySelector(".cm-content")!.ariaLabel = "Code content";

const menuButton = document.getElementById("menu")!

menuButton.onclick = toggleLineWrapping
setLanguage()




