<script setup lang="ts">
import FileUpload from 'primevue/fileupload';

const { data: images, refresh } = await useFetch('/api/images')



async function deleteImage(pathname: string) {
  await $fetch(`/api/images/${pathname}`, { method: 'DELETE' })
  await refresh()
}
</script>

<template>
  <div>
    <h3>Images</h3>

    <FileUpload name="demo[]" url="/api/images/upload" :multiple="true" accept="image/*" :maxFileSize="8000000">
      <template #empty>
        <span>Drag and drop files to here to upload.</span>
      </template>
    </FileUpload>

    <p>
      <img v-for="image of images" :key="image.pathname" width="200" :src="`/images/${image.pathname}`"
        :alt="image.pathname" @dblclick="deleteImage(image.pathname)">
    </p>
    <p v-if="images?.length">
      <i>Tip: delete an image by double-clicking on it.</i>
    </p>
  </div>
</template>
