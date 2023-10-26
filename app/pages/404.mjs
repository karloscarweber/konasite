export default function FourOhFour({ html, state }) {
  const { error } = state.attrs

  return html`
    <main>
      <section>
        <h1>Not Found - 404</h1>
        <h2>Sorry we can't find that.</h2>
        <p>${error && error}</p>
        <p>Perhaps go back <a href="/">home</a>?.</p>
      </section>
    </main>
  `
}
