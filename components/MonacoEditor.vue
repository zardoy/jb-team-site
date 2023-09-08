<script setup lang="ts">
import * as Monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

const { libContents } = defineProps<{
    libContents: string
}>()

const div = ref(null)

onMounted(() => {
    if (!self.MonacoEnvironment) {
        self.MonacoEnvironment = {
            getWorker(_, label) {
                if (label === 'javascript') {
                    return new tsWorker()
                }
                return new editorWorker()
            }
        }

        Monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false,
        })

        Monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: Monaco.languages.typescript.ScriptTarget.ESNext,
            allowNonTsExtensions: true,
            skipLibCheck: true,
            lib: [
                "esnext",
                "scripthost",
            ],
        })

        const libUri = "ts:filename/typings.d.ts";

        Monaco.languages.typescript.javascriptDefaults.addExtraLib(libContents, libUri)

        Monaco.editor.createModel(libContents, "typescript", Monaco.Uri.parse(libUri));
    }

    Monaco.editor.create(div.value!, {
        value: [
            'export default defineTweak({',
            '\tactivate(runtime) {\n\t\t// your activation logic goes here...\n\t}',
            '})'
        ].join('\n'),
        language: 'javascript',
        theme: 'vs-dark',
        minimap: {
            enabled: false,
        },
    })
})

import.meta.hot?.accept(() => {
    location.reload()
})
</script>
<template>
    <div ref="div" style="width: 100%;max-width: 800px; min-height: 600px; border: 1px solid #ccc" />
</template>
