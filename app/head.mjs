export default function Head (state) {
  const { store, status, req, error } = state
  const { path } = req
  var title = ""
  if (path != "/") {
    title = `Kona - ${path}`
  } else {
    title = `Kona Scripting Language`
  }
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link rel="icon" href="/_public/favicon.svg">
      <link rel="stylesheet" href="/_public/styles.css">
      <meta name="description" content="Kona, A new language for the web.">
    </head>
`
}
