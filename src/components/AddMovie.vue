<script setup lang="ts">
import type { MovieDetailed, MovieForm, Rating } from "@/types";
import { getMovieById } from "@/controllers/MovieController";
import { useRoute } from "vue-router";
import { reactive, ref } from "vue";
import {
  genFileId,
  type FormInstance,
  type FormRules,
  type UploadFile,
  type UploadProps,
  type UploadRawFile,
} from "element-plus";
import { type UploadInstance } from "element-plus/es/components/upload/index.mjs";

const ratings: Rating[] = [];

const movie: MovieForm = reactive({
  poster: "",
  title: "",
  director: "",
  year: new Date().getFullYear(),
});

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);
const upload = ref<UploadInstance>();

const handleRemove = (file: UploadFile) => {
  console.log(file);
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};
const handleImageUpload: UploadProps["onChange"] = (file) => {
  movie.poster = file;
};

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!", movie);
    } else {
      console.log("error submit!", fields);
    }
  });
};
const validateYear = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the year"));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("Please input digits"));
    } else {
      let currentYear = new Date().getFullYear();
      if (value < 1888 || value > currentYear) {
        callback(
          new Error(
            `Year must be greater than 1888 and lower than ${currentYear}`
          )
        );
      } else {
        callback();
      }
    }
  }, 1000);
};
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules<MovieDetailed>>({
  title: [{ required: true, message: "Please input title", trigger: "blur" }],
  poster: [{ required: true, message: "Please input poster", trigger: "blur" }],
  year: [{ validator: validateYear, trigger: "blur" }],
  director: [
    { required: true, message: "Please input director", trigger: "blur" },
  ],
});
</script>

<template>
  <div class="form-container">
    <el-form
      ref="ruleFormRef"
      :model="movie"
      :rules="rules"
      label-width="auto"
      label-position="top"
      style="max-width: 600px; width: 50vw; min-width: 350px"
    >
      <h1>Add Movie</h1>
      <el-form-item label="Movie title" prop="title">
        <el-input v-model="movie.title" />
      </el-form-item>

      <el-form-item label="Poster" prop="poster">
        <el-upload
          v-model="movie.poster"
          action="#"
          :on-change="handleImageUpload"
          list-type="picture-card"
          :auto-upload="false"
          ref="upload"
          :limit="1"
          :on-exceed="handleExceed"
        >
          <el-icon v-if="!movie.poster"><Plus /></el-icon>
          <p v-else>Change</p>

          <template #file="{ file }">
            <div>
              <img
                style="width: 100%; object-fit: cover"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <el-icon><zoom-in /></el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
      </el-form-item>

      <el-form-item label="Director" prop="director">
        <el-input v-model="movie.director" />
      </el-form-item>

      <el-form-item label="Year" prop="year">
        <el-input v-model.number="movie.year" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)"
          >Create</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
.el-upload--picture-card {
  background-color: var(--vt-c-black-mute);
}
</style>
<style scoped>
.form-container {
  display: flex;
  justify-content: center;
}
.el-form {
  padding: 2vw;
  border: 1px solid var(--vt-c-white-mute);
  border-radius: 4px;
}
.el-form h1 {
  text-align: center;
}
.el-input {
  --el-input-bg-color: var(--vt-c-black-mute);
  height: 6vh;
}
</style>
