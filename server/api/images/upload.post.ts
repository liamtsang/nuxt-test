export default eventHandler(async (event) => {
  try {
    return hubBlob().handleUpload(event, {
      formKey: 'demo[]',
      multiple: true,
      ensure: {
        maxSize: '8MB'
      }
    })
  } catch (e) {
    console.log('error')
    return { error: '500' }
  }
})
