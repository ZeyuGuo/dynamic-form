<template>
  <div
    class="monaco"
    :style="{
      border: this.border,
      width: this.width + 'px',
    }"
  >
    <header>{{ title }}</header>
    <div
      :id="container"
      :style="{
        width: this.width + 'px',
        height: this.height + 'px',
      }"
      @keyup="getValue"
    ></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export default {
  name: "MonacoEditor",
  props: {
    title: {
      type: String,
    },
    lang: {
      type: String,
      default: "json",
    },
    // 'vs' (default), 'vs-dark', 'hc-black'.
    theme: {
      type: String,
      default: "vs",
    },
    // 宽高自行设定
    width: {
      type: Number,
      default: 560,
    },
    height: {
      type: Number,
      default: 315,
    },
    value: {
      type: String,
      default: "",
    },
    opts: {
      type: Object,
      default() {
        return {
          value: this.value,
          language: this.lang,
          theme: this.theme,
          formatOnPaste: true,
          tabSize: 2,
          minimap: {
            enabled: false,
          },
        };
      },
    },
    border: {
      type: String,
      default: "1px solid #dbdbdb",
    },
  },
  data() {
    return {
      editor: null, //文本编辑器
      container: this.guid(),
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      // console.log(this.container);
      const container = document.getElementById(`${this.container}`);
      // 初始化编辑器，确保dom已经渲染
      this.editor = monaco.editor.create(container, this.opts);
    },
    getValue() {
      //获取编辑器中的文本
      this.$emit("content", this.editor.getValue().replace(/\r\n/g, "\n"));
    },
    /**
     * guid()
     * 功能：全局唯一标识符（GUID，Globally Unique Identifier）也称作 UUID(Universally Unique IDentifier)
     * 返回：guid .
     */
    guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          const r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
  },
};
</script>

<style lang="less" scoped>
.monaco {
  header {
    background: #dbdbdb;
    padding: 5px 10px;
  }
}
</style>
