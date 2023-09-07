<script setup lang="ts">
import * as Monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

const div = ref(null)

onMounted(() => {
    //@ts-ignore
    self.MonacoEnvionment = {
        getWorker(_, label) {
            if (label === 'typescript' || label === 'javascript') {
                return new tsWorker()
            }
            return new editorWorker()
        }
    }

    Monaco.editor.create(div.value!, {
        value: [
            'function x() {',
            '\tconsole.log("Hello world!");',
            '}'
        ].join('\n'),
        language: 'typescript',
        // theme: 'vs-dark',
        // add custom d.ts typings
    })
})
</script>
<template>
    <div class="mt-28">Content unavailable.<br />To be restored.</div>
    <div ref="div" style="min-heigh: 200px;" />
</template>
