<template>
  <div id="ckeditor-wrapper">
    <textarea :id="editorKey"></textarea>
  </div>
</template>

<script>
let ckeditor;
export default {
  name: "CK-Editor",
  props: {
    editorKey: {
      type: String,
      default: "ck-editor",
    }, // 替换元素id
    value: {
      type: String,
      default: "",
    }, // 富文本编辑器内容
  },
  data() {
    return {
      valueWatchOnce: null,
      initContent: null,
      hadUpdateContent: false,
      //
      editorInstance: null,
    };
  },
  created() {
    this.valueWatchOnce = this.$watch(
      "value",
      (newVal) => {
        if (this.hadUpdateContent) {
          this.valueWatchOnce();
          this.setValue(newVal);
        } else {
          this.initContent = newVal;
        }
      },
      {
        immediate: true,
      }
    );
  },
  mounted() {
    // global by ckeditor.js
    // this replace config
    this.editorInstance = window.CKEDITOR.replace(this.editorKey, {
      height: "300px",
      width: "100%",

      // uploads 插件的自定义配置
      // public/ckeditor/plugins/uploads - uploads的配置
      uploads: function () {
        return {
          origin: `https://lrp-dev.huayinlab.com`,
          url: `${window.origin}${
            process.env.VUE_APP_API + "web/pc/i8n/one/labOrgId"
          }`,
          header: {
            // Request Header Token
            token: "ashnfiuwgal18927ansjkyu2",
          },
          body: {
            // extra params
          },
          fileField: "fileupload", // 上传图片的字段
          resUrl: "data.innerUrl",
          multiple: true, // 是否允许多图
          isImg: true,
          autoUpload: false,
          // 上传前图片处理
          onBeforeUpload: function () {},
          // 图片上传处理
          onUpload: function () {},
          // 插入到编辑器前处理
          onBeforeInset: function () {},
        };
      },
    });
    // console.log("replace config after instance", this.editorInstance);

    ckeditor = window.CKEDITOR.instances;
    // console.log("window CKEDITOR instances", ckeditor);

    Object.keys(ckeditor).forEach((itemInCK) => {
      ckeditor[itemInCK].on("blur", (value) => {
        // console.log("CKEditor onblur", value);
        this.$emit("input", ckeditor[this.editorKey].getData(), value);
      });
    });

    if (this.initContent) {
      this.valueWatchOnce && this.valueWatchOnce();
      this.setValue(this.initContent);
    } else {
      this.hadUpdateContent = true;
    }
  },
  methods: {
    // 获取值
    getValue() {
      return {
        editorKey: this.editorKey,
        getValue: ckeditor[this.editorKey].getData(),
      };
    },
    // 设置值
    setValue(value) {
      ckeditor[this.editorKey].setData(value);
    },
  },
};
</script>
